package com.piola.PiolaSchool.Response;

public class LoginResponse {
    private boolean authenticated;
    private String matricula;

    public LoginResponse(boolean authenticated, String matricula) {
        this.authenticated = authenticated;
        this.matricula = matricula;
    }

    public boolean isAuthenticated() {
        return authenticated;
    }

    public void setAuthenticated(boolean authenticated) {
        this.authenticated = authenticated;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }
}
