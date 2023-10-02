package com.piola.PiolaSchool.controller;

import com.piola.PiolaSchool.DAO.ICurso;
import com.piola.PiolaSchool.atributes.Curso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/curso")
public class CursoController {

    @Autowired
    private ICurso dao;

    public CursoController(ICurso dao){
        this.dao = dao;
    }

    @GetMapping
    public List<Curso> CursoList () {
        return (List<Curso>) dao.findAll();
    }

    @PostMapping("/adicionar")
    public Curso criarCurso(@RequestBody Curso curso){
        Curso cursoCreate = dao.save(curso);
        return cursoCreate;
    }

}
