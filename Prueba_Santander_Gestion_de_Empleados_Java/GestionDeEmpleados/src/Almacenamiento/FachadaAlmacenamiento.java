/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Almacenamiento;

import Programa.Empleado;
import java.util.ArrayList;

/**
 *
 * @author alvaro
 */
public class FachadaAlmacenamiento {
    private GestorAlmacenamiento g = new GestorAlmacenamiento();
    
    public ArrayList<Empleado> cargar(String nombreFichero){
        return g.cargar(nombreFichero);
    }

    public void guardar(ArrayList<Empleado> listaProductos) {
        g.guardar(listaProductos);
    }

   
}

