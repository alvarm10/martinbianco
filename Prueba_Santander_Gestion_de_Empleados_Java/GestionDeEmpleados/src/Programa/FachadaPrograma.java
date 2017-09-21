/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Programa;

import Almacenamiento.FachadaAlmacenamiento;
import java.util.ArrayList;

/**
 *
 * @author alvaro
 */
public class FachadaPrograma {
private GestionEmpleado ge = new GestionEmpleado();
private FachadaAlmacenamiento fa = new FachadaAlmacenamiento();
    public void anhadirEmpleado(String nombre, float sueldo, String funcion) {
        ge.anhadirEmpleado(nombre, sueldo, funcion);
    }
     public  ArrayList<Empleado> mostrar(){
        return ge.getListaEmpleado();
    }

    public void eliminar(int selectedIndex) {
        ge.EliminarEmpleado(selectedIndex);
    }

    public void guardar() {
        ge.guardar();
    }

    public void cargar() {
        ge.cargar();
    }
    
}
