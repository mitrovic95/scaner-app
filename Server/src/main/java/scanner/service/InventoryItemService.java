package scanner.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import scanner.model.InventoryItem;
import scanner.repository.InventoryItemRepository;

@Component
public class InventoryItemService {
	@Autowired
	InventoryItemRepository inventoryItemRepository;

	public Optional<InventoryItem> findByName(String name) {
		return inventoryItemRepository.findByName(name);
	}
	
	public List<InventoryItem> findByItemName(String name) {
		return inventoryItemRepository.findByNameContains(name);
	}
	
	public List<InventoryItem> findAll() {
		return inventoryItemRepository.findAll();
	}

	public Page<InventoryItem> findAll(Pageable page) {
		return inventoryItemRepository.findAll(page);
	}

	public InventoryItem findOne(Long id) {
		return inventoryItemRepository.findOne(id);
	}

	public InventoryItem save(InventoryItem inventoryItem) {
		return inventoryItemRepository.save(inventoryItem);
	}

	public void remove(Long id) {
		inventoryItemRepository.delete(id);
	}
}
