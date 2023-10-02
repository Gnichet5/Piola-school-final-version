package com.piola.PiolaSchool.DAO;

import com.piola.PiolaSchool.atributes.Curso;
import org.springframework.data.repository.CrudRepository;

public interface ICurso extends CrudRepository<Curso, Integer> {
}
