package com.piola.PiolaSchool.DAO;

import com.piola.PiolaSchool.atributes.Duvidas;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface IDuvida extends CrudRepository<Duvidas, String> {
    public List<Duvidas> findByCurso(Integer curso);
    public List<Duvidas> findAll();
}

