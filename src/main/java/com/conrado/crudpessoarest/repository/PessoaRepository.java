package com.conrado.crudpessoarest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.conrado.crudpessoarest.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

}
