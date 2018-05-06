package com.conrado.crudpessoarest.resource;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.conrado.crudpessoarest.model.Pessoa;
import com.conrado.crudpessoarest.repository.PessoaRepository;

@RestController
public class PessoaResource {

	@Autowired
	private PessoaRepository pessoaRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/pessoas")
	public List<Pessoa> listar() {

		return pessoaRepository.findAll();

	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/pessoas")
	public Pessoa adicionar(@RequestBody @Valid Pessoa pessoa) {

		return pessoaRepository.save(pessoa);
	}
    
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/pessoas/{id}")
	public void remover(@PathVariable Long id) {
		pessoaRepository.deleteById(id);
	}

	@PutMapping("/pessoas/{id}")
	public void atualizar(@PathVariable Long id, @RequestBody @Valid Pessoa pessoa) {
		Pessoa pessoasalvo = pessoaRepository.getOne(id);
		BeanUtils.copyProperties(pessoa, pessoasalvo, "id");
		pessoaRepository.save(pessoasalvo);

	}

}
