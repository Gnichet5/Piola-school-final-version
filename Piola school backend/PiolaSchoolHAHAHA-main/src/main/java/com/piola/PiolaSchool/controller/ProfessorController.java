package com.piola.PiolaSchool.controller;

import com.piola.PiolaSchool.DAO.IAluno;
import com.piola.PiolaSchool.DAO.IProfessor;
import com.piola.PiolaSchool.Response.LoginResponse;
import com.piola.PiolaSchool.model.Aluno;
import com.piola.PiolaSchool.model.Professor;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@RequestMapping("/Professor")
public class ProfessorController {

    @Autowired
    private IProfessor dao;

    @Autowired
    private IAluno daoaluno;

    @Autowired
    private PasswordEncoder encoder;

    public ProfessorController(IProfessor dao){
        this.dao = dao;
        this.encoder = encoder;
    }

    @GetMapping
    public List<Professor> ProfessorList(){
        return (List<Professor>) dao.findAll();
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/cadastrar")
    @CrossOrigin
    public Professor criarProfessor(@Valid @RequestBody Professor professor){
        professor.setSenha(encoder.encode(professor.getSenha()));
        Professor ProfessorCreate = dao.save(professor);
        return ProfessorCreate;
    }

    @DeleteMapping("/{matricula}")
    @CrossOrigin
    public Optional<Professor> deletarProfessor(@PathVariable Integer matricula){
        Optional<Professor> Professor = dao.findById(matricula);
        dao.deleteById(matricula);
        return Professor;
    }
    
    @GetMapping("/{matricula}")
    @CrossOrigin
    public Optional<Professor> getProfessor(@PathVariable Integer matricula){
        Optional<Professor> Professor = dao.findById(matricula);
        return Professor;
    }

    public Map<String,String> handleValidatioExpetion(MethodArgumentNotValidException ex){
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError)error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        } ) ;
        return errors;
    }

    @PostMapping("/login")
    public ResponseEntity<Integer> validarSenha(@RequestParam String email,
                                                @RequestParam String senha) {

        Optional<Professor> optionalProfessor = dao.findByEmail(email);
        if (optionalProfessor.isEmpty()) {
            Professor professor = null;
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(0);
        }

        Professor professor = optionalProfessor.get();
        boolean valid = encoder.matches(senha, professor.getSenha());
        boolean status = true;
        if (status == (valid)) {
            return ResponseEntity.status(HttpStatus.OK).body(professor.getMatricula());
        } else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(0);
    }

}
