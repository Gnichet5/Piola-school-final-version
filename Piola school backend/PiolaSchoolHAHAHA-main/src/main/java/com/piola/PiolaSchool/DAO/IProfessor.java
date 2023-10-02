package com.piola.PiolaSchool.DAO;

import com.piola.PiolaSchool.model.Professor;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface IProfessor extends CrudRepository <Professor, Integer> {
    public Optional<Professor> findByNome(String login);
    public Optional<Professor> findByEmail(String login);


}
