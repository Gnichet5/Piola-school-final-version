package com.piola.PiolaSchool.controller;
import com.piola.PiolaSchool.DAO.IAdministrador;
import com.piola.PiolaSchool.Response.LoginResponse;
import com.piola.PiolaSchool.model.Administrador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/Administrador")
public class AdministradorController  {


    @Autowired
    private IAdministrador dao;
    @Autowired
    private PasswordEncoder encoder;

    public AdministradorController(IAdministrador dao){
        this.dao = dao;
        this.encoder = encoder;
    }

    @GetMapping
    public List<Administrador> administradorList (){
    return (List<Administrador>)dao.findAll();
    }
    
    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/cadastrar")
    @CrossOrigin
    public Administrador criarAdministrador(@Valid @RequestBody Administrador admiministrador){
        admiministrador.setSenha(encoder.encode(admiministrador.getSenha()));
        Administrador administradorCreate = dao.save(admiministrador);
        return administradorCreate;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map <String,String> handleValidatioExpetion(MethodArgumentNotValidException ex){
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
    public Optional<Administrador> deletarAdministrador(@PathVariable Integer matricula){
            Optional<Administrador> administrador = dao.findById(matricula);
            dao.deleteById(matricula);
            return administrador;
    }
    
    @GetMapping("/{matricula}")
    @CrossOrigin
    public Optional<Administrador> getAdministrador(@PathVariable Integer matricula){
            Optional<Administrador> administrador = dao.findById(matricula);
            return administrador;
    }


    @PostMapping("/login")
    public ResponseEntity<Integer> validarSenha(@RequestParam String email,
                                                @RequestParam String senha) {

        Optional<Administrador> optionalAdministrador = dao.findByEmail(email);
        if (optionalAdministrador.isEmpty()) {
            Administrador administrador = null;
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(0);
        }

        Administrador administrador = optionalAdministrador.get();
        boolean valid = encoder.matches(senha, administrador.getSenha());
        boolean status = true;
        if (status == (valid)) {
            return ResponseEntity.status(HttpStatus.OK).body(administrador.getMatricula());
        } else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(0);
    }

}

