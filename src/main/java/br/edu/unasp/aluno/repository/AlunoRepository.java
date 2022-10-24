package br.edu.unasp.aluno.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.edu.unasp.aluno.model.Aluno;

@Repository
public interface AlunoRepository extends CrudRepository<Aluno, Long>{
	

}
