package com.piola.PiolaSchool.DAO;


import com.piola.PiolaSchool.model.Aluno;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface IAluno extends CrudRepository <Aluno, Integer> {
    public Optional<Aluno> findByNome(String login);
    public Optional<Aluno> findByEmail(String login);


}
