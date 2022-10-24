package br.edu.unasp.aluno.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.edu.unasp.aluno.model.Aluno;
import br.edu.unasp.aluno.repository.AlunoRepository;


@Service
public class AlunoService {
	
	@Autowired
	private AlunoRepository repository;
	
	public Iterable<Aluno> getAluno(){
		return repository.findAll();
	}
	
	public void createAluno(Aluno aluno) {
		repository.save(aluno);
	}
	public Aluno getAluno(Long id) {
		return repository.findById(id).orElse(null);
	}
	public void updateAluno(Aluno aluno) {
		repository.save(aluno);
	}
	public void deleteAluno(Aluno aluno) {
		repository.delete(aluno);
	}

}
