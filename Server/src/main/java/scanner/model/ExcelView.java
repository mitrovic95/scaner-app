//package scanner.model;
//
//import java.util.List;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.hibernate.mapping.Map;
//import org.springframework.web.servlet.view.document.AbstractXlsView;
//
//import jxl.Sheet;
//import jxl.Workbook;
//
//public abstract class ExcelView extends AbstractXlsView{
//
//public void buildExcelDocument(Map<String, Object> inventoryItems, Workbook workbook, HttpServletRequest request,
//        HttpServletResponse response) throws Exception {
//    // TODO Auto-generated method stub
//
//
//    // change the file name
//    response.setHeader("Content-Disposition", "attachment; filename=\"my-exported-file.xls\"");
//
//    @SuppressWarnings("unchecked")
//    List<InventoryItem> inventoryItems= (List<InventoryItem>) model.get("inventory_item");
//
//    // create excel xls sheet
//    Sheet sheet = workbook.createSheet("Users Detail");
//    sheet.setDefaultColumnWidth(30);
//
//    // create style for header cells
//    CellStyle style = workbook.createCellStyle();
//    Font font = workbook.createFont();
//    font.setFontName("Arial");
//    style.setFillForegroundColor(HSSFColor.BLUE.index);
//    //style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
//    //font.setBold(true);
//    font.setColor(HSSFColor.BLACK.index);
//    style.setFont(font);
//
//
//    // create header row
//    Row header = sheet.createRow(0);
//    header.createCell(0).setCellValue("First Name");
//    header.getCell(0).setCellStyle(style);
//    header.createCell(1).setCellValue("Last Name");
//    header.getCell(1).setCellStyle(style);
//    header.createCell(2).setCellValue("Number");
//    header.getCell(2).setCellStyle(style);
//    header.createCell(3).setCellValue("Age");
//    header.getCell(3).setCellStyle(style);
//
//
//
//    int rowCount = 1;
//    for(User user : users){
//        Row userRow =  sheet.createRow(rowCount++);
//        gatewayRow.createCell(0).setCellValue(user.getFirstName());
//        gatewayRow.createCell(1).setCellValue(gateway.getLastName());
//        gatewayRow.createCell(2).setCellValue(gateway.getNumber());
//        gatewayRow.createCell(3).setCellValue(gateway.getAge());
//
//        }
//
//}
//}