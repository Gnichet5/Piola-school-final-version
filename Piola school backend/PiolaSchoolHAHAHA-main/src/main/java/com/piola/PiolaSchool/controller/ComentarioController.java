package com.piola.PiolaSchool.controller;

import com.piola.PiolaSchool.DAO.IComentario;
import com.piola.PiolaSchool.atributes.Comentario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/comentarios")
public class ComentarioController {

    @Autowired
    private IComentario dao;

    public ComentarioController(IComentario dao){
        this.dao = dao;
    }

    @GetMapping
    public List<Comentario> comentarioList(){
        return (List<Comentario>) dao.findAll();
    }

    @PostMapping("/comentar")
    public Comentario criarComentario(@RequestBody Comentario comentarios){
        Comentario comentarioCreate = dao.save(comentarios);
        return comentarioCreate;
    }

    @DeleteMapping("/{id}")
    public Optional<Comentario> deletarComentario(@PathVariable Integer id){
        Optional<Comentario> Comentario = dao.findById(id);
        dao.deleteById(id);
        return Comentario;
    }

}
