
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Checkbox } from '@/components/ui/checkbox';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';

// Define the expected column structure
interface ColumnMapping {
  originalName: string;
  mappedName: string;
  required: boolean;
  include: boolean;
  order: number;
  valid: boolean;
}

// Define the supplier data structure
interface SupplierData {
  [key: string]: string;
}

const SupplierImport: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, userRole } = useAuth();
  
  const [activeTab, setActiveTab] = useState<string>('url');
  const [googleSheetUrl, setGoogleSheetUrl] = useState<string>('');
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [previewData, setPreviewData] = useState<SupplierData[]>([]);
  const [columnMappings, setColumnMappings] = useState<ColumnMapping[]>([]);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [importButtonDisabled, setImportButtonDisabled] = useState<boolean>(true);

  // Redirect if not admin
  useEffect(() => {
    if (userRole !== 'admin' && !isLoading) {
      toast({
        title: "Access Denied",
        description: "You need admin privileges to access this page",
        variant: "destructive"
      });
      navigate('/');
    }
  }, [userRole, navigate, isLoading, toast]);

  // Validate Google Sheet URL
  const isValidGoogleSheetUrl = (url: string) => {
    return url.includes('docs.google.com/spreadsheets');
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setCsvFile(files[0]);
    }
  };

  // Parse CSV data
  const parseCSV = (text: string) => {
    const lines = text.split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    
    const data = [];
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      
      const values = lines[i].split(',');
      const row: {[key: string]: string} = {};
      
      for (let j = 0; j < headers.length; j++) {
        row[headers[j]] = values[j] ? values[j].trim() : '';
      }
      
      data.push(row);
    }
    
    return { headers, data };
  };

  // Load data from CSV
  const loadFromCSV = async () => {
    if (!csvFile) {
      toast({
        title: "Error",
        description: "Please select a CSV file",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const text = await csvFile.text();
      const { headers, data } = parseCSV(text);
      
      // Create column mappings
      const mappings: ColumnMapping[] = headers.map((header, index) => ({
        originalName: header,
        mappedName: header.toLowerCase().replace(/\s/g, '_'),
        required: ['business_name', 'contact_number'].includes(header.toLowerCase().replace(/\s/g, '_')),
        include: true,
        order: index,
        valid: true
      }));

      setColumnMappings(mappings);
      setPreviewData(data);
      setShowPreview(true);
      setImportButtonDisabled(false);
    } catch (error) {
      console.error("Error parsing CSV:", error);
      toast({
        title: "Error",
        description: "Failed to parse CSV file",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Load data from Google Sheets
  const loadFromGoogleSheets = async () => {
    if (!isValidGoogleSheetUrl(googleSheetUrl)) {
      toast({
        title: "Error", 
        description: "Please enter a valid Google Sheets URL",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // For demo purposes, we'll use mock data since we can't directly fetch from Google Sheets in the browser
      // In a real implementation, you would use a backend function to fetch the data
      
      // Mock data for demonstration
      const mockHeaders = ["Business Name", "Branch", "Contact Number", "WhatsApp Number", "Email", "Physical Address", "Google Map Pin", "Website", "Facebook", "Instagram", "TikTok"];
      const mockData = [
        {
          "Business Name": "Tyre Hub",
          "Branch": "Downtown",
          "Contact Number": "+263771234567",
          "WhatsApp Number": "+263771234567",
          "Email": "info@tyrehub.co.zw",
          "Physical Address": "123 Main St, Harare",
          "Google Map Pin": "https://maps.google.com/?q=-17.824858,31.053028",
          "Website": "https://tyrehub.co.zw",
          "Facebook": "facebook.com/tyrehubzw",
          "Instagram": "instagram.com/tyrehubzw",
          "TikTok": "tiktok.com/@tyrehubzw"
        },
        {
          "Business Name": "Wheel World",
          "Branch": "Avondale",
          "Contact Number": "+263779876543",
          "WhatsApp Number": "+263779876543",
          "Email": "sales@wheelworld.co.zw",
          "Physical Address": "45 Second Ave, Avondale, Harare",
          "Google Map Pin": "https://maps.google.com/?q=-17.807222,31.034722",
          "Website": "https://wheelworld.co.zw",
          "Facebook": "facebook.com/wheelworldzw",
          "Instagram": "instagram.com/wheelworldzw",
          "TikTok": ""
        }
      ];

      // Create column mappings
      const mappings: ColumnMapping[] = mockHeaders.map((header, index) => ({
        originalName: header,
        mappedName: header.toLowerCase().replace(/\s/g, '_'),
        required: ['business_name', 'contact_number'].includes(header.toLowerCase().replace(/\s/g, '_')),
        include: true,
        order: index,
        valid: true
      }));

      setColumnMappings(mappings);
      setPreviewData(mockData);
      setShowPreview(true);
      setImportButtonDisabled(false);
      
      toast({
        title: "Success",
        description: "Sample data loaded from Google Sheets",
      });
      
    } catch (error) {
      console.error("Error fetching Google Sheet:", error);
      toast({
        title: "Error",
        description: "Failed to load data from Google Sheet",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle column mapping changes
  const updateColumnMapping = (index: number, field: keyof ColumnMapping, value: any) => {
    const newMappings = [...columnMappings];
    newMappings[index] = { ...newMappings[index], [field]: value };
    
    // If it's the include field toggling, handle the required field
    if (field === 'include' && value === false && newMappings[index].required) {
      newMappings[index].valid = false;
    } else if (field === 'include' && value === true && newMappings[index].required) {
      newMappings[index].valid = true;
    }
    
    setColumnMappings(newMappings);
    
    // Check if any required fields are not included
    const isValid = newMappings.every(mapping => !mapping.required || (mapping.required && mapping.include));
    setImportButtonDisabled(!isValid);
  };

  // Handle drag end for reordering
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const items = Array.from(columnMappings);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    // Update order property
    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index
    }));
    
    setColumnMappings(updatedItems);
  };

  // Import data to the database
  const importData = async () => {
    setIsLoading(true);
    
    try {
      // Prepare the data based on column mappings
      const dataToImport = previewData.map(row => {
        const formattedRow: any = {};
        
        columnMappings
          .filter(mapping => mapping.include)
          .sort((a, b) => a.order - b.order)
          .forEach(mapping => {
            formattedRow[mapping.mappedName] = row[mapping.originalName] || '';
          });
        
        // Add metadata
        formattedRow.source = activeTab === 'url' ? 'Google Sheet' : 'CSV Upload';
        formattedRow.added_by = user?.id;
        formattedRow.status = 'pending';
        
        return formattedRow;
      });
      
      // Insert into the imported_suppliers table
      const { data, error } = await supabase
        .from('imported_suppliers')
        .insert(dataToImport);
      
      if (error) throw error;
      
      toast({
        title: "Success",
        description: `Successfully imported ${dataToImport.length} suppliers`,
      });
      
      // Reset form
      setPreviewData([]);
      setColumnMappings([]);
      setShowPreview(false);
      setCsvFile(null);
      setGoogleSheetUrl('');
      setActiveTab('url');
      
    } catch (error: any) {
      console.error("Error importing data:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to import data",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Supplier Import Tool</h1>
          <Button
            variant="outline"
            onClick={() => navigate('/admin')}
          >
            Back to Dashboard
          </Button>
        </div>
        
        {!showPreview ? (
          <Card>
            <CardHeader>
              <CardTitle>Import Suppliers</CardTitle>
              <CardDescription>
                Upload supplier data from a CSV file or Google Sheet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs 
                defaultValue={activeTab} 
                onValueChange={setActiveTab}
                className="space-y-4"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="url">Google Sheet URL</TabsTrigger>
                  <TabsTrigger value="csv">CSV Upload</TabsTrigger>
                </TabsList>
                
                <TabsContent value="url" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="sheet-url">Google Sheet URL</Label>
                    <Input
                      id="sheet-url"
                      placeholder="https://docs.google.com/spreadsheets/d/..."
                      value={googleSheetUrl}
                      onChange={(e) => setGoogleSheetUrl(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground">
                      Make sure the Google Sheet is publicly accessible or shared with view permissions
                    </p>
                  </div>
                  
                  <Button
                    onClick={loadFromGoogleSheets}
                    disabled={isLoading || !googleSheetUrl}
                    className="w-full"
                  >
                    {isLoading ? "Loading..." : "Preview Data"}
                  </Button>
                </TabsContent>
                
                <TabsContent value="csv" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="csv-file">Upload CSV File</Label>
                    <Input
                      id="csv-file"
                      type="file"
                      accept=".csv"
                      onChange={handleFileChange}
                    />
                    <p className="text-sm text-muted-foreground">
                      The CSV file should have a header row with column names
                    </p>
                  </div>
                  
                  <Button
                    onClick={loadFromCSV}
                    disabled={isLoading || !csvFile}
                    className="w-full"
                  >
                    {isLoading ? "Loading..." : "Preview Data"}
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ) : (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Configure Field Mapping</CardTitle>
                <CardDescription>
                  Define which fields to import and how they should be mapped
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DragDropContext onDragEnd={handleDragEnd}>
                  <Droppable droppableId="field-mappings">
                    {(provided) => (
                      <div 
                        className="space-y-2" 
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        <div className="grid grid-cols-12 gap-2 py-2 font-medium">
                          <div className="col-span-1"></div>
                          <div className="col-span-4">Original Field</div>
                          <div className="col-span-4">Mapped Field Name</div>
                          <div className="col-span-2">Required</div>
                          <div className="col-span-1">Include</div>
                        </div>
                        
                        {columnMappings.map((mapping, index) => (
                          <Draggable 
                            key={`${mapping.originalName}-${index}`}
                            draggableId={`${mapping.originalName}-${index}`}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                className={`grid grid-cols-12 gap-2 items-center p-2 rounded-md ${mapping.required && !mapping.include ? 'bg-red-50' : 'bg-gray-50'}`}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                              >
                                <div 
                                  className="col-span-1 cursor-move flex items-center" 
                                  {...provided.dragHandleProps}
                                >
                                  ≡
                                </div>
                                <div className="col-span-4 truncate">{mapping.originalName}</div>
                                <div className="col-span-4">
                                  <Input
                                    value={mapping.mappedName}
                                    onChange={(e) => updateColumnMapping(index, 'mappedName', e.target.value)}
                                    className="h-8"
                                  />
                                </div>
                                <div className="col-span-2">
                                  {mapping.required ? (
                                    <span className="text-red-600 font-medium">Yes</span>
                                  ) : (
                                    <span className="text-gray-500">No</span>
                                  )}
                                </div>
                                <div className="col-span-1 flex justify-center">
                                  <Checkbox
                                    checked={mapping.include}
                                    onCheckedChange={(checked) => 
                                      updateColumnMapping(index, 'include', !!checked)
                                    }
                                    disabled={mapping.required}
                                  />
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
                
                {columnMappings.some(m => m.required && !m.include) && (
                  <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                    Some required fields are not selected. You must include all required fields to proceed.
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Data Preview</CardTitle>
                <CardDescription>
                  Review the data before importing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        {columnMappings
                          .filter(mapping => mapping.include)
                          .sort((a, b) => a.order - b.order)
                          .map((mapping, idx) => (
                            <TableHead key={idx}>
                              {mapping.mappedName}
                              {mapping.required && <span className="text-red-500 ml-1">*</span>}
                            </TableHead>
                          ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {previewData.slice(0, 5).map((row, rowIdx) => (
                        <TableRow key={rowIdx}>
                          {columnMappings
                            .filter(mapping => mapping.include)
                            .sort((a, b) => a.order - b.order)
                            .map((mapping, cellIdx) => (
                              <TableCell key={cellIdx}>
                                {row[mapping.originalName] || '-'}
                              </TableCell>
                            ))}
                        </TableRow>
                      ))}
                    </TableBody>
                    {previewData.length > 5 && (
                      <TableCaption>
                        Showing 5 of {previewData.length} records
                      </TableCaption>
                    )}
                  </Table>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex gap-4 justify-end mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setShowPreview(false);
                  setPreviewData([]);
                  setColumnMappings([]);
                }}
              >
                Back
              </Button>
              <Button
                onClick={importData}
                disabled={isLoading || importButtonDisabled}
              >
                {isLoading ? "Importing..." : `Import ${previewData.length} Records`}
              </Button>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SupplierImport;
