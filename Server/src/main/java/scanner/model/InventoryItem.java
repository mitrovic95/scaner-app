package scanner.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class InventoryItem {

	@Id
	@GeneratedValue
	private Long id;

	private String name;

	private String description;

	private int orderNumber;

	private int value;

	private Long barcode;

	@ManyToOne(fetch = FetchType.EAGER)
	Category category;

	public InventoryItem() {

	}

	public InventoryItem(Long id, String name, String description, int orderNumber, int value, Long barcode,
			Category category) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.orderNumber = orderNumber;
		this.value = value;
		this.barcode = barcode;
		this.category = category;
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

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "InventoryItem [id=" + id + ", name=" + name + ", description=" + description + ", orderNumber="
				+ orderNumber + ", value=" + value + ", barcode=" + barcode + ", category=" + category + "]";
	}





}