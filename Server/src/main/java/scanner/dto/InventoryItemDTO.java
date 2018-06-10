package scanner.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import scanner.model.InventoryItem;

public class InventoryItemDTO {

	@Id
	@GeneratedValue
	private Long id;

	private String name;

	private String description;

	private int orderNumber;

	private int value;

	private Long barcode;

	private CategoryDTO category;

	public InventoryItemDTO(Long id, String name, String description, int orderNumber, int value, Long barcode,
			CategoryDTO category) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.orderNumber = orderNumber;
		this.value = value;
		this.barcode = barcode;
		this.category = category;
	}

	public InventoryItemDTO(InventoryItem inventoryItem) {
		this.id = inventoryItem.getId();
		this.name = inventoryItem.getName();
		this.description = inventoryItem.getDescription();
		this.orderNumber = inventoryItem.getOrderNumber();
		this.value = inventoryItem.getValue();
		this.barcode = inventoryItem.getBarcode();
		this.category = new CategoryDTO(inventoryItem.getCategory());
	}

	public InventoryItemDTO() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(int orderNumber) {
		this.orderNumber = orderNumber;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	public Long getBarcode() {
		return barcode;
	}

	public void setBarcode(Long barcode) {
		this.barcode = barcode;
	}

	public CategoryDTO getCategory() {
		return category;
	}

	public void setCategory(CategoryDTO category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "InventoryItemDTO [id=" + id + ", name=" + name + ", description=" + description + ", orderNumber="
				+ orderNumber + ", value=" + value + ", barcode=" + barcode + ", category=" + category + "]";
	}

}
