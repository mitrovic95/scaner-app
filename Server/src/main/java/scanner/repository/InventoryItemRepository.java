package scanner.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import scanner.model.InventoryItem;

public interface InventoryItemRepository extends JpaRepository<InventoryItem, Long> {
	Optional<InventoryItem> findByName(String name);
	List<InventoryItem> findByNameContains(String name);
}
