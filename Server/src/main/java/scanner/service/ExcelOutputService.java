package scanner.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.apache.poi.ss.usermodel.Row;
import org.springframework.stereotype.Service;

//
//import org.apache.poi.ss.usermodel.Sheet;
//import org.apache.poi.ss.usermodel.Workbook;
import jxl.Sheet;
import jxl.Workbook;
import jxl.write.Label;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;
import jxl.write.biff.RowsExceededException;
import scanner.model.InventoryItem;


@Service("excelOutputService")
public class ExcelOutputService {
    private static final Logger LOGGER = Logger.getLogger(ExcelOutputService.class);
   
//    @Autowired
//	private InventoryItemService inventoryItemService;
//    
    public WritableWorkbook createExcelOutputExcel(Map<String, InventoryItem> model, Workbook workbook, HttpServletRequest request,
    		 HttpServletResponse response){
       String fileName = "Items.xls";
       WritableWorkbook writableWorkbook = null;
       try {
           response.setContentType("application/vnd.ms-excel");

           response.setHeader("Content-Disposition", "attachment; filename=" + fileName);

           writableWorkbook = Workbook.createWorkbook(response.getOutputStream());
          
           WritableSheet excelOutputsheet = writableWorkbook.createSheet("Excel Output", 0);
           addExcelOutputHeader(excelOutputsheet);
           writeExcelOutputData(excelOutputsheet);
           
           writableWorkbook.write();
           writableWorkbook.close();

       } catch (Exception e) {
           LOGGER.error("Error occured while creating Excel file", e);
       }

       return writableWorkbook;
       
//       List<InventoryItem> inventoryItems = (List<InventoryItem>) model.get("inventoryitem");
//       Sheet sheet = workbook.createSheet("Inventory Items");
//       Row header = sheet.createRow(0);
//       header.createCell(0).setCellValue("Name");
//       header.createCell(1).setCellValue("Description");
//       header.createCell(2).setCellValue("Value");
//       header.createCell(3).setCellValue("Barcode");
//       header.createCell(4).setCellValue("OrderNumber");
//        
//       int rowNum = 1;
//       for(InventoryItem inventoryItem:inventoryItems){
//       Row row = sheet.createRow(rowNum++);
//       row.createCell(0).setCellValue(inventoryItem.getName());
//       row.createCell(1).setCellValue(inventoryItem.getDescription());
//       row.createCell(2).setCellValue(inventoryItem.getValue());
//       row.createCell(3).setCellValue(inventoryItem.getBarcode());
//       row.createCell(4).setCellValue(inventoryItem.getOrderNumber());
       
    }
  
   
    private void addExcelOutputHeader(WritableSheet sheet) throws RowsExceededException, WriteException{
    	
       // create header row
        sheet.addCell(new Label(0, 0, "Id"));
        sheet.addCell(new Label(1, 0, "Name"));
        sheet.addCell(new Label(2, 0, "Order number"));
        sheet.addCell(new Label(3, 0, "Value"));
        sheet.addCell(new Label(4, 0, "Barcode"));
        sheet.addCell(new Label(5, 0, "Category name"));
    }
   
    private void writeExcelOutputData(WritableSheet sheet) throws RowsExceededException, WriteException{
             

       for(int rowNo = 1; rowNo<=10; rowNo++){
              sheet.addCell(new Label(0, rowNo, "Col Data "+ (rowNo+0)));
              sheet.addCell(new Label(1, rowNo, "Col Data "+ (rowNo+1)));
              sheet.addCell(new Label(2, rowNo, "Col Data "+ (rowNo+2)));
              sheet.addCell(new Label(3, rowNo, "Col Data "+ (rowNo+3)));
              sheet.addCell(new Label(4, rowNo, "Col Data "+ (rowNo+4)));
              sheet.addCell(new Label(5, rowNo, "Col Data "+ (rowNo+5)));
              sheet.addCell(new Label(6, rowNo, "Col Data "+ (rowNo+6)));  
              sheet.addCell(new Label(7, rowNo, "Col Data "+ (rowNo+7)));
              sheet.addCell(new Label(8, rowNo, "Col Data "+ (rowNo+8)));
              sheet.addCell(new Label(9, rowNo, "Col Data "+ (rowNo+9)));
              sheet.addCell(new Label(10, rowNo, "Col Data "+ (rowNo+10)));
              
       }
//              int rowNum = 1;
//            for(InventoryItem inventoryItem:inventoryItems){
//            Row row = sheet.createRow(rowNum++);
//            row.createCell(0).setCellValue(inventoryItem.getName());
//            row.createCell(1).setCellValue(inventoryItem.getDescription());
//            row.createCell(2).setCellValue(inventoryItem.getValue());
//            row.createCell(3).setCellValue(inventoryItem.getBarcode());
//            row.createCell(4).setCellValue(inventoryItem.getOrderNumber());

     
//       
//       List<InventoryItem> inventoryItems = inventoryItemService.findAll();
//       int rowCount = 1;
//       for(InventoryItem inventoryItem : inventoryItems){
//           Row userRow =  sheet.createRow(rowCount++);
//           sheet.createCell(0).setCellValue(inventoryItem.get());
//           gatewayRow.createCell(1).setCellValue(gateway.getLastName());
//           gatewayRow.createCell(2).setCellValue(gateway.getNumber());
//           gatewayRow.createCell(3).setCellValue(gateway.getAge());
//
//
//    }
}
}
