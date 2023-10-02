package com.piola.PiolaSchool.DAO;

import com.piola.PiolaSchool.model.Administrador;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface IAdministrador extends CrudRepository <Administrador, Integer> {
    public Optional<Administrador> findByNome(String login);
    public Optional<Administrador> findByEmail(String login);


}
