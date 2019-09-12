package pl.pai2.pai2.services;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import pl.pai2.pai2.domain.Warehouse;
import pl.pai2.pai2.repositories.WarehouseRepository;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertFalse;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class WarehouseServiceTest {

    @Autowired
    WarehouseService warehouseService;

    @MockBean
    WarehouseRepository warehouseRepository;

    @Test
    public void saveOrUpdateWarehouse() {
        Warehouse warehouse = new Warehouse();
        warehouse.setIdWarehouse(1);
        warehouse.setName("Name");

        Mockito.when(warehouseRepository.save(warehouse)).thenReturn(warehouse);

        assertThat(warehouseService.saveOrUpdateWarehouse(warehouse)).isEqualTo(warehouse);
    }

    @Test
    public void findByName() {
        Warehouse warehouse = new Warehouse();
        warehouse.setIdWarehouse(1);
        warehouse.setName("Name");

        Mockito.when(warehouseRepository.findByName("Name")).thenReturn(warehouse);

        assertThat(warehouseService.findByName("Name")).isEqualTo(warehouse);
    }

    @Test
    public void findAllWarehouses() {
        Warehouse warehouse = new Warehouse();
        warehouse.setIdWarehouse(1);
        warehouse.setName("Name");

        Warehouse warehouse1 = new Warehouse();
        warehouse1.setIdWarehouse(2);
        warehouse1.setName("Name1");


        List<Warehouse> warehouseList = new ArrayList<>();
        warehouseList.add(warehouse);
        warehouseList.add(warehouse1);

        Mockito.when(warehouseRepository.findAll()).thenReturn(warehouseList);

        assertThat(warehouseService.findAllWarehouses()).isEqualTo(warehouseList);
    }
}