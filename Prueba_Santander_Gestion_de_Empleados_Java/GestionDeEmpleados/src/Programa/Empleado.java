package Programa;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author alvaro
 */
public class Empleado {

    private int codEmpleado;
    private String nombreEmpleado;
    private float sueldoEmpleado;
    private String funcionEmpleado;
    private static int contador = 1;

    public int getCodEmpleado() {
        return codEmpleado;
    }

    //public void setCodEmpleado(int codEmpleado) {
    //this.codEmpleado = codEmpleado;
    //}
    public String getNombreEmpleado() {
        return nombreEmpleado;
    }

    public void setNombreEmpleado(String nombreEmpleado) {
        this.nombreEmpleado = nombreEmpleado;
    }

    public float getSueldoEmpleado() {
        return sueldoEmpleado;
    }

    public void setSueldoEmpleado(float sueldoEmpleado) {
        this.sueldoEmpleado = sueldoEmpleado;
    }

    public String getFuncionEmpleado() {
        return funcionEmpleado;
    }

    public void setFuncionEmpleado(String funcionEmpleado) {
        this.funcionEmpleado = funcionEmpleado;
    }

    public Empleado() {
        generaCodEmpleado();
    }

    public Empleado(String nombreEmpleado, float sueldoEmpleado, String funcionEmpleado) {
        this.nombreEmpleado = nombreEmpleado;
        this.sueldoEmpleado = sueldoEmpleado;
        this.funcionEmpleado = funcionEmpleado;

        generaCodEmpleado();
    }

    public int generaCodEmpleado() {
        codEmpleado = contador;
        return contador++;
    }

    @Override
    public String toString() {
        return codEmpleado + "    -    " + nombreEmpleado + "   -   " + sueldoEmpleado + "   -   " + funcionEmpleado ;
    }

    public String toFile(){
        return codEmpleado+ ";" + nombreEmpleado + ";" + sueldoEmpleado + ";" + funcionEmpleado;
    }
    
    

}
