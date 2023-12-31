package com.muebleria.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.muebleria.demo.model.Proveedor;

@Repository
public interface iProveedorRepository extends JpaRepository<Proveedor, Integer> {
	//Metodos Crud
	List<Proveedor> findByRazonContaining(String razon);

}
