/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package GUI;

import Programa.Empleado;
import Programa.FachadaPrograma;
import java.util.ArrayList;

import javax.swing.DefaultListModel;
import javax.swing.JOptionPane;

/**
 *
 * @author alvaro
 */
public class Modelo {
    private FachadaPrograma fp = new FachadaPrograma();
    private final DefaultListModel modeloLista = new DefaultListModel();
    public void addEmpleado(Empleado e) {
    modeloLista.addElement(e);
}
    public void addTodos (ArrayList <Empleado> lista){
       
        for(int i = 0; i < lista.size();i++){
            addEmpleado(lista.get(i));
        }
    }
    
     
    public boolean leeFloat(String numero) {
boolean error = true;
        float leido = 0;

        try {
            leido = Float.valueOf(numero);

        } catch (NumberFormatException e) {
            error = false;
        }

        return error;
    }
  
    public void anhadir(String nombre, String sueldo, String funcion) {
        if(leeFloat(sueldo)==true && !"".equals(nombre) && !"".equals(funcion)){
        fp.anhadirEmpleado(nombre, Float.valueOf(sueldo), funcion);
        }
        else if("".equals(nombre)){
        JOptionPane.showMessageDialog(null, "NOMBRE VACIO", "ERROR", JOptionPane.ERROR_MESSAGE);
    }
        else if(leeFloat(sueldo)==false){
             JOptionPane.showMessageDialog(null, "SUELDO INCORRECTO", "ERROR", JOptionPane.ERROR_MESSAGE);
        }
        
       
        else if("".equals(funcion)){
        JOptionPane.showMessageDialog(null, "FUNCION VACIA", "ERROR", JOptionPane.ERROR_MESSAGE);
    }
        
    }

     public DefaultListModel getModelo() {
         
        addTodos(fp.mostrar());
      
     return modeloLista;
}

    public void eliminar(int selectedIndex) {
        if(selectedIndex >=0){
       fp.eliminar(selectedIndex);
        }
        else{
            JOptionPane.showMessageDialog(null, "NO HA SELECCIONADO NINGUN EMPLEADO", "ERROR", JOptionPane.ERROR_MESSAGE);
        }
    }

    public void guardar() {
        fp.guardar();
    }

    public void cargar() {
       fp.cargar();
    }
    
}
