package com.piola.PiolaSchool.controller;

import com.piola.PiolaSchool.DAO.IAluno;
import com.piola.PiolaSchool.model.Aluno;
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
@RequestMapping("/Aluno")
public class AlunoController {

    @Autowired
    private IAluno dao;

    @Autowired
    private PasswordEncoder encoder;

    public AlunoController(IAluno dao){
        this.dao = dao;
        this.encoder = encoder;
    }


    @GetMapping
    public List<Aluno> AlunoList (){
        return (List<Aluno>) dao.findAll();
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/cadastrar")
    @CrossOrigin
    public Aluno criarAluno(@Valid @RequestBody Aluno aluno){
        aluno.setSenha(encoder.encode(aluno.getSenha()));
        Aluno alunoCreate = dao.save(aluno);
        return alunoCreate;
    }


    @PutMapping
    public Aluno editarAluno(@Valid @RequestParam String nome, @RequestParam String email,
                             @RequestParam String senha, @RequestParam String telefone, @RequestParam Integer curso, Aluno aluno){
        aluno.setSenha(encoder.encode(aluno.getSenha()));
        Aluno alunoEdit = dao.save(aluno);
        return alunoEdit;
    }



    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String,String> handleValidatioExpetion(MethodArgumentNotValidException ex){
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError)error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        } ) ;
        return errors;
    }

    @DeleteMapping("/{matricula}")
    @CrossOrigin
    public Optional<Aluno> deletarAluno(@PathVariable Integer matricula){
        Optional<Aluno> Aluno = dao.findById(matricula);
        dao.deleteById(matricula);
        return Aluno;
    }
    
    @GetMapping("/{matricula}")
    @CrossOrigin
    public Optional<Aluno> getAluno(@PathVariable Integer matricula){
        Optional<Aluno> Aluno = dao.findById(matricula);
        return Aluno;
    }

    @PostMapping("/login")
    @CrossOrigin
    public ResponseEntity<Integer> validarSenha(@RequestParam String email,
                                                @RequestParam String senha) {

        Optional<Aluno> optionalAluno = dao.findByEmail(email);
        if (optionalAluno.isEmpty()) {
            Aluno aluno = null;
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(0);
        }

        Aluno aluno = optionalAluno.get();
        boolean valid = encoder.matches(senha, aluno.getSenha());
        boolean status = true;
        if (status == (valid)) {
            return ResponseEntity.status(HttpStatus.OK).body(aluno.getMatricula());
        } else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(0);
    }


}
