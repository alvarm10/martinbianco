/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package GUI;

import javax.swing.DefaultListModel;

/**
 *
 * @author alvaro
 */
public class Controlador {
    private Modelo m = new Modelo();
    
   public void anhadir(String nombre, String sueldo, String funcion) {
       m.anhadir(nombre, sueldo, funcion);
  
    }

    public DefaultListModel getModeloLista(){
        return m.getModelo();
    }

    public void eliminarEmpleado(int selectedIndex) {
        m.eliminar(selectedIndex);
    }

    public void guardar() {
       m.guardar();
    }

    public void cargar() {
       m.cargar();
    }
    
}
