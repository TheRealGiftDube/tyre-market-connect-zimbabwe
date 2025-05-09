
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
import Papa from 'papaparse';
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

const SupplierImportPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, userRole } = useAuth();
  
  const [activeTab, setActiveTab] = useState<string>('upload');
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [previewData, setPreviewData] = useState<SupplierData[]>([]);
  const [columnMappings, setColumnMappings] = useState<ColumnMapping[]>([]);
  const [showMapping, setShowMapping] = useState<boolean>(false);
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

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setCsvFile(files[0]);
    }
  };

  // Transform phone number to standard format
  const formatPhoneNumber = (phone: string): string => {
    if (!phone) return '';
    
    // Remove any spaces, hyphens, or parentheses
    let cleanNumber = phone.replace(/[\s\-()]/g, '');
    
    // If it starts with 0, remove the 0 and add +263
    if (cleanNumber.startsWith('0')) {
      return '+263' + cleanNumber.substring(1);
    }
    
    // If it doesn't start with +263, add it
    if (!cleanNumber.startsWith('+263')) {
      return '+263' + cleanNumber;
    }
    
    return cleanNumber;
  };

  // Format Google Map Pin
  const formatGoogleMapPin = (pin: string): string => {
    if (!pin) return '';
    
    // Check if it's already a URL
    if (pin.startsWith('http')) return pin;
    
    // Format as a Google Maps URL
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pin)}`;
  };

  // Validate email address
  const isValidEmail = (email: string): boolean => {
    if (!email || email.toLowerCase() === 'none' || email.toLowerCase() === 'n/a') return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate URL
  const isValidUrl = (url: string): boolean => {
    if (!url || url.toLowerCase() === 'none' || url.toLowerCase() === 'n/a') return true;
    return url.startsWith('http://') || url.startsWith('https://');
  };

  // Format URL to ensure it has http/https
  const formatUrl = (url: string): string => {
    if (!url || url.toLowerCase() === 'none' || url.toLowerCase() === 'n/a') return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `https://${url}`;
  };

  // Process the CSV file
  const processCSV = async () => {
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
      
      Papa.parse(text, {
        header: true,
        complete: (results) => {
          const data = results.data as SupplierData[];
          
          if (data.length === 0) {
            toast({
              title: "Error",
              description: "No data found in the CSV file",
              variant: "destructive"
            });
            setIsLoading(false);
            return;
          }
          
          // Get column headers from the first row
          const firstRow = data[0];
          const headers = Object.keys(firstRow);
          
          // Create column mappings
          const mappings: ColumnMapping[] = headers.map((header, index) => {
            // Auto-map common column names
            let mappedName = header.toLowerCase().replace(/\s+/g, '_');
            
            if (header.toLowerCase().includes('business') || header.toLowerCase().includes('company')) {
              mappedName = 'business_name';
            } else if (header.toLowerCase().includes('contact') || header.toLowerCase().includes('phone')) {
              mappedName = 'contact_number';
            } else if (header.toLowerCase().includes('whatsapp')) {
              mappedName = 'whatsapp_number';
            } else if (header.toLowerCase().includes('email')) {
              mappedName = 'email';
            } else if (header.toLowerCase().includes('address')) {
              mappedName = 'physical_address';
            } else if (header.toLowerCase().includes('map') || header.toLowerCase().includes('location')) {
              mappedName = 'google_map_pin';
            } else if (header.toLowerCase().includes('website') || header.toLowerCase().includes('url')) {
              mappedName = 'website_url';
            } else if (header.toLowerCase().includes('facebook')) {
              mappedName = 'facebook';
            } else if (header.toLowerCase().includes('instagram') || header.toLowerCase().includes('insta')) {
              mappedName = 'instagram';
            } else if (header.toLowerCase().includes('tiktok') || header.toLowerCase().includes('tik')) {
              mappedName = 'tiktok';
            } else if (header.toLowerCase().includes('branch')) {
              mappedName = 'branch';
            }
            
            return {
              originalName: header,
              mappedName,
              required: mappedName === 'business_name' || mappedName === 'contact_number',
              include: true,
              order: index,
              valid: true
            };
          });

          setColumnMappings(mappings);
          setPreviewData(data);
          setShowMapping(true);
          setIsLoading(false);
        },
        error: (error) => {
          console.error("Error parsing CSV:", error);
          toast({
            title: "Error",
            description: "Failed to parse CSV file",
            variant: "destructive"
          });
          setIsLoading(false);
        }
      });
    } catch (error) {
      console.error("Error reading file:", error);
      toast({
        title: "Error",
        description: "Failed to read CSV file",
        variant: "destructive"
      });
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

  // Process data before preview
  const processDataForPreview = () => {
    // Apply transformations to the data
    const processedData = previewData.map((row) => {
      const newRow: SupplierData = {};
      
      // Only include mapped columns
      columnMappings
        .filter(mapping => mapping.include)
        .forEach(mapping => {
          const value = row[mapping.originalName] || '';
          
          // Apply specific transformations based on column type
          if (mapping.mappedName === 'contact_number' || mapping.mappedName === 'whatsapp_number') {
            newRow[mapping.mappedName] = formatPhoneNumber(value);
          } else if (mapping.mappedName === 'google_map_pin') {
            newRow[mapping.mappedName] = formatGoogleMapPin(value);
          } else if (mapping.mappedName === 'website_url' || 
                    mapping.mappedName === 'facebook' || 
                    mapping.mappedName === 'instagram' || 
                    mapping.mappedName === 'tiktok') {
            newRow[mapping.mappedName] = formatUrl(value);
          } else {
            newRow[mapping.mappedName] = value;
          }
        });
      
      return newRow;
    });
    
    // Filter out invalid rows
    const validatedData = processedData.filter((row) => {
      // Business name must be present
      if (!row.business_name) return false;
      
      // Contact number must be present and valid
      if (!row.contact_number || row.contact_number.length < 10) return false;
      
      // WhatsApp number must be valid if present
      if (row.whatsapp_number && row.whatsapp_number.length < 10) return false;
      
      // Email must be valid if present
      if (row.email && !isValidEmail(row.email)) return false;
      
      // URLs must be valid if present
      if (row.website_url && !isValidUrl(row.website_url)) return false;
      if (row.facebook && !isValidUrl(row.facebook)) return false;
      if (row.instagram && !isValidUrl(row.instagram)) return false;
      if (row.tiktok && !isValidUrl(row.tiktok)) return false;
      
      return true;
    });
    
    return validatedData;
  };

  // Show preview
  const showDataPreview = () => {
    const processedData = processDataForPreview();
    setPreviewData(processedData);
    setShowMapping(false);
    setShowPreview(true);
  };

  // Import data to the database
  const importData = async () => {
    setIsLoading(true);
    
    try {
      const processedData = processDataForPreview();
      
      // Add metadata to each row
      const dataToInsert = processedData.map(row => ({
        ...row,
        claim_status: 'unclaimed',
        added_by: user?.id,
        created_at: new Date().toISOString()
      }));
      
      // Insert batches of 50 records at a time to prevent payload size issues
      const batchSize = 50;
      const batches = [];
      
      for (let i = 0; i < dataToInsert.length; i += batchSize) {
        batches.push(dataToInsert.slice(i, i + batchSize));
      }
      
      let totalInserted = 0;
      
      for (let batch of batches) {
        const { data, error } = await supabase
          .from('tyre_suppliers_zim')
          .insert(batch);
        
        if (error) throw error;
        totalInserted += batch.length;
      }
      
      toast({
        title: "Success",
        description: `Successfully imported ${totalInserted} suppliers`,
      });
      
      // Reset state
      setCsvFile(null);
      setPreviewData([]);
      setColumnMappings([]);
      setShowMapping(false);
      setShowPreview(false);
      
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

  // Go back to previous step
  const goBack = () => {
    if (showPreview) {
      setShowPreview(false);
      setShowMapping(true);
    } else if (showMapping) {
      setShowMapping(false);
      setCsvFile(null);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tyre Supplier Import Tool</h1>
          <Button
            variant="outline"
            onClick={() => navigate('/admin')}
          >
            Back to Dashboard
          </Button>
        </div>
        
        {!showMapping && !showPreview && (
          <Card>
            <CardHeader>
              <CardTitle>Import Supplier Data</CardTitle>
              <CardDescription>
                Upload a CSV file containing tyre supplier information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs 
                defaultValue={activeTab} 
                onValueChange={setActiveTab}
                className="space-y-4"
              >
                <TabsList className="grid w-full grid-cols-1">
                  <TabsTrigger value="upload">CSV Upload</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upload" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="csv-file">Upload CSV File</Label>
                    <Input
                      id="csv-file"
                      type="file"
                      accept=".csv"
                      onChange={handleFileChange}
                    />
                    <p className="text-sm text-muted-foreground">
                      The CSV file should have headers and follow the expected format
                    </p>
                  </div>
                  
                  <Button
                    onClick={processCSV}
                    disabled={isLoading || !csvFile}
                    className="w-full"
                  >
                    {isLoading ? "Processing..." : "Upload and Process CSV"}
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
        
        {showMapping && (
          <Card>
            <CardHeader>
              <CardTitle>Column Mapping</CardTitle>
              <CardDescription>
                Map CSV columns to database fields and configure import settings
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
                        <div className="col-span-4">CSV Column</div>
                        <div className="col-span-4">Database Field</div>
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
                  Required fields must be included to proceed with the import.
                </div>
              )}

              <div className="flex gap-4 justify-end mt-6">
                <Button
                  variant="outline"
                  onClick={goBack}
                >
                  Back
                </Button>
                <Button
                  onClick={showDataPreview}
                  disabled={isLoading || importButtonDisabled}
                >
                  Preview Data
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        {showPreview && (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Data Preview</CardTitle>
                <CardDescription>
                  Review the processed data before importing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-hidden overflow-x-auto">
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
                      {previewData.slice(0, 10).map((row, rowIdx) => (
                        <TableRow key={rowIdx}>
                          {columnMappings
                            .filter(mapping => mapping.include)
                            .sort((a, b) => a.order - b.order)
                            .map((mapping, cellIdx) => (
                              <TableCell key={cellIdx} className="truncate max-w-[200px]">
                                {row[mapping.mappedName] || '-'}
                              </TableCell>
                            ))}
                        </TableRow>
                      ))}
                    </TableBody>
                    {previewData.length > 10 && (
                      <TableCaption>
                        Showing 10 of {previewData.length} records
                      </TableCaption>
                    )}
                  </Table>
                </div>
                
                <div className="flex gap-4 justify-end mt-6">
                  <Button
                    variant="outline"
                    onClick={goBack}
                  >
                    Back to Mapping
                  </Button>
                  <Button
                    onClick={importData}
                    disabled={isLoading || previewData.length === 0}
                  >
                    {isLoading ? "Importing..." : `Import ${previewData.length} Records`}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SupplierImportPage;
