package br.edu.unasp.aluno.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import br.edu.unasp.aluno.model.Aluno;
import br.edu.unasp.aluno.service.AlunoService;


@RestController
public class AlunoController {
	
	
	@Autowired
	private AlunoService alunoService;

	@GetMapping("/aluno")
	@CrossOrigin(origins="*")
	public ResponseEntity<Iterable<Aluno>> getAluno(){
		return ResponseEntity.ok().body(alunoService.getAluno());
	}
	@GetMapping("/aluno/{id}")
	@CrossOrigin(origins="*")
	public ResponseEntity<Aluno> getAluno(@PathVariable Long id){
		return ResponseEntity.ok().body(alunoService.getAluno(id));
	}
	
	@PostMapping("/aluno")
	@CrossOrigin(origins="*")
	public ResponseEntity<Void> adicionarAluno(@RequestBody Aluno aluno){
		alunoService.createAluno(aluno);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@PutMapping("/aluno")
	@CrossOrigin(origins="*")
	public ResponseEntity<Void> updateAluno(@RequestBody Aluno aluno){
		alunoService.updateAluno(aluno);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	@DeleteMapping("/aluno/{id}")
	@CrossOrigin(origins="*")
	public ResponseEntity<Void> deletarAluno(@PathVariable Long id){
		var alu = alunoService.getAluno(id);
		alunoService.deleteAluno(alu);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
