package com.piola.PiolaSchool.controller;

import com.piola.PiolaSchool.DAO.IDuvida;
import com.piola.PiolaSchool.atributes.Duvidas;
import com.piola.PiolaSchool.model.Professor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/duvidas")
public class DuvidaController {

    @Autowired
    private final IDuvida dao;

    public DuvidaController(IDuvida dao) {
        this.dao = dao;
    }

    @GetMapping()
    public List<Duvidas> listaDuvidas(@RequestParam Integer curso) {
        List<Duvidas> listDuvida = dao.findByCurso(curso);
        return listDuvida;
    }
    
    @GetMapping("/adm")
    public List<Duvidas> admDuvidas() {
        List<Duvidas> listDuvida = dao.findAll();
        return listDuvida;
    }
    

    @PostMapping
    public Duvidas gerarDuvida(@RequestParam String duvida, @RequestParam String email,
                               @RequestParam Integer curso,  Duvidas duvidas){
        Duvidas duvidaCreate = dao.save(duvidas);
        return duvidaCreate;
    }

}
