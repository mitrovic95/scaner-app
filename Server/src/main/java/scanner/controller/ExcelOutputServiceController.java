package scanner.controller;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import scanner.service.ExcelOutputService;

@RestController
@RequestMapping(value="/exceloutput")
public class ExcelOutputServiceController {

    @Autowired
    ExcelOutputService excelOutputService;
   
    @RequestMapping(value="/download", method=RequestMethod.GET)
    public ModelAndView downloadExcelOutputExl(HttpServletResponse response){
      
       excelOutputService.createExcelOutputExcel(null, null, null, response);
       return null;
    }
}