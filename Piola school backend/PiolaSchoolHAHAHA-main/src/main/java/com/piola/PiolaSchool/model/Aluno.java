package com.piola.PiolaSchool.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "Aluno")
public class Aluno {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "matricula")
        private Integer matricula;
        @Size(min =4,message = "o nome deve ter no minimo 4 caracteres, ouvi falar q um nome bom é yuri, pequeno simples e rapido")
        @NotBlank(message = "Coloque seu nome, é obrigatorio")
        @Column(name = "nome",length = 200,nullable = false)
        private String nome;
        @Email(message = "insere um email de vdd irmao, vai dar golpe aqui n fi")
        @NotBlank(message = "Coloque seu email, é obrigatorio")
        @Column(name = "email",length = 50,nullable = false)
        private String email;
        @NotBlank(message = "Coloque a senha é obrigatorio")
        @Column(name = "senha",columnDefinition = "TEXT",nullable = false)
        private String senha;
        @NotBlank(message = "Tem q colocar o seu telefone gatinha(o) ;)")
        @Column(name = "telefone",length = 15,nullable = false)
        private String telefone;

        @Column(name = "curso")
        private Integer curso;


    public Integer getMatricula() {
        return matricula;
    }

    public void setMatricula(Integer matricula) {
        this.matricula = matricula;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Integer getCurso() {
        return curso;
    }

    public void setCurso(Integer curso) {
        this.curso = curso;
    }
}
