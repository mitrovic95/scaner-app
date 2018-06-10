package scanner.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import scanner.dto.InventoryItemDTO;
import scanner.model.InventoryItem;
import scanner.service.InventoryItemService;

@RestController
public class InventoryItemController {
		@Autowired
		AuthenticationManager authenticationManager;

		@Autowired
		private InventoryItemService inventoryItemService;

	    @PreAuthorize("isAuthenticated()")
		@GetMapping(value = "api/item")
		public ResponseEntity<List<InventoryItemDTO>> getItemsPage() {
			final List<InventoryItemDTO> retVal = inventoryItemService.findAll().stream().map(InventoryItemDTO::new)
					.collect(Collectors.toList());

			return new ResponseEntity<>(retVal, HttpStatus.OK);
		}

	    @PreAuthorize("isAuthenticated()")
		@GetMapping(value = "api/item" , params = {"name"})
	    public ResponseEntity<List<InventoryItemDTO>> findByItemName(@RequestParam String name) {
	        final List<InventoryItemDTO> retVal = inventoryItemService.findByItemName(name).stream()
	                .map(InventoryItemDTO::new)
	                .collect(Collectors.toList());

	        return new ResponseEntity<>(retVal, HttpStatus.OK);
	    }

	    @PreAuthorize("isAuthenticated()")
		@GetMapping(value = "api/item/{id}")
		public ResponseEntity<InventoryItemDTO> getItem(@PathVariable Long id) {
			final InventoryItem inventoryItem = inventoryItemService.findOne(id);

			if (inventoryItem == null) {
				return new ResponseEntity<InventoryItemDTO>(HttpStatus.NOT_FOUND);
			}

			final InventoryItemDTO inventoryItemDTO = new InventoryItemDTO(inventoryItem);
			return new ResponseEntity<>(inventoryItemDTO, HttpStatus.OK);
		}

	    @PreAuthorize("hasAnyAuthority('CompanyAdmin', 'CompanyUser')")
		@PostMapping(value = "/api/item")
		public ResponseEntity<String> registerNewItem(@RequestBody InventoryItem inventoryItem) {
			final Optional<InventoryItem> checkItem = inventoryItemService.findByName(inventoryItem.getName());
			if (checkItem.isPresent()) {
				return new ResponseEntity<>("Item already used", HttpStatus.BAD_REQUEST);
			} else if (inventoryItem.getName() == null) {
				return new ResponseEntity<>("Item is null", HttpStatus.BAD_REQUEST);
			}
			inventoryItemService.save(inventoryItem);
			return new ResponseEntity<>("Item created", HttpStatus.CREATED);
		}

	    @PreAuthorize("hasAnyAuthority('CompanyAdmin', 'CompanyUser')")
		@PutMapping(value = "/api/item/{id}")
		public ResponseEntity<String> updateItem(@PathVariable Long id, @RequestBody InventoryItem inventoryItem) {
			final InventoryItem foundItem = inventoryItemService.findOne(id);
			if (foundItem == null) {
				return new ResponseEntity<>("Not found", HttpStatus.NOT_FOUND);
			}
			foundItem.setName(inventoryItem.getName());
			foundItem.setDescription(inventoryItem.getDescription());
			foundItem.setOrderNumber(inventoryItem.getOrderNumber());
			foundItem.setValue(inventoryItem.getValue());
			foundItem.setBarcode(inventoryItem.getBarcode());
			foundItem.setCategory(inventoryItem.getCategory());
			inventoryItemService.save(foundItem);
			return new ResponseEntity<>("Item updated successfully", HttpStatus.OK);

		}

	    @PreAuthorize("hasAnyAuthority('CompanyAdmin', 'CompanyUser')")
		@DeleteMapping(value = "/api/item/{id}")
		public ResponseEntity<String> deleteItem(@PathVariable Long id) {
			final InventoryItem foundItem = inventoryItemService.findOne(id);
			if (foundItem == null) {
				return new ResponseEntity<>("Not found", HttpStatus.NOT_FOUND);
			}
			inventoryItemService.remove(id);
			return new ResponseEntity<>("OK", HttpStatus.OK);
		}
		

//		@GetMapping(value = "/api/item/export")
//		public void export(HttpServletResponse response) {
//			List<InventoryItem> inventoryItems = inventoryItemService.findAll();
//			List<String> headers = Arrays.asList("name", "description", "orderNumber", "value", "barcode");
//			try {
//				response.addHeader("Content-disposition", "attachment; filename=InventoryItem.xls");
//				response.setContentType("application/vnd.ms-excel");
//				new SimpleExporter().gridExport(headers, inventoryItems, "name, description, orderNumber, value, barcode ", response.getOutputStream());
//				response.flushBuffer();
//			} catch (IOException e) {
//				log.warn(e.getMessage(), e);
//			}
		
//		@RequestMapping(value="/api/download", method=RequestMethod.GET)
//		public void getDownload(HttpServletResponse response) throws IOException {
//
//			// Get your file stream from wherever.
//			InputStream myStream = InventoryItem.returnFile();
//
//			// Set the content type and attachment header.
//			response.addHeader("Content-disposition", "attachment;filename=myfilename.xls");
//			response.setContentType("txt/plain");
//
//			// Copy the stream to the response's output stream.
//			IOUtils.copy(myStream, response.getOutputStream());
//			response.flushBuffer();
//		}
//		
//		@RequestMapping(value = "/download", method = RequestMethod.GET)
//		public String download(InventoryItem inventoryItem) {
//			inventoryItem.addAttribute("name, orderNumber", inventoryItemService.findAll());
//		    return "";
//		}
		
//		public class Excelervice {
//
//			private static final String FILE_PATH = "c:\\excel-file.xls";
//			 
//			@GetMapping(value = "/api/item/export")
//			@Produces("application/vnd.ms-excel")
//			public Response getFile() {
//		 
//				File file = new File(FILE_PATH);
//		 
//				ResponseBuilder response = Response.ok((Object) file);
//				response.header("Content-Disposition",
//					"attachment; filename=new-excel-file.xls");
//				return response.build();
//		 
		
//		@RequestMapping(value = "/downloadExcel", method = RequestMethod.GET)
//		public ModelAndView downloadExcel(InventoryItem inventoryItem) {
//
//		    List<InventoryItem> inventoryItems = inventoryItemService.findAll();
//		    return new ModelAndView(new ExcelView(), "inventoryItem ", inventoryItems );
//		    }
//		
}

