package Programa;


import Almacenamiento.FachadaAlmacenamiento;
import java.util.ArrayList;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author alvaro
 */
public class GestionEmpleado {
    private static ArrayList<Empleado> listaEmpleado = new ArrayList<Empleado>();
    FachadaAlmacenamiento fa = new FachadaAlmacenamiento();

    public ArrayList<Empleado> getListaEmpleado() {
        System.out.println(listaEmpleado.size());
        return listaEmpleado;
        
    }

    public void setListaEmpleado(ArrayList<Empleado> listaEmpleado) {
        GestionEmpleado.listaEmpleado = listaEmpleado;
    }
    
    
    
    public void anhadirEmpleado(String nombre, float sueldo, String funcion){
       Empleado e = new Empleado(nombre, sueldo, funcion);
       listaEmpleado.add(e);
    
    }
    
    public void EliminarEmpleado(int selectedIndex) {
        listaEmpleado.remove(selectedIndex);
    }

    public void guardar() {
        fa.guardar(listaEmpleado);
    }

    public void cargar() {
        setListaEmpleado(fa.cargar("empleados.txt"));
    }
}
