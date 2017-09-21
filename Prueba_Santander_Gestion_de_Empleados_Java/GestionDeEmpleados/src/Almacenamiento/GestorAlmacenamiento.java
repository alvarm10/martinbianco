/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Almacenamiento;

import Programa.Empleado;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

/**
 *
 * @author alvaro
 */
public class GestorAlmacenamiento {

    private ArrayList<Empleado> listaEmpleados = new ArrayList<>();

    public static void escribeFichero(String nombreFichero, String cadena) {

        FileWriter fichero;
        BufferedWriter escritor = null;
        try {
            fichero = new FileWriter(nombreFichero, true);
            escritor = new BufferedWriter(fichero);
            escritor.write(cadena);
            escritor.newLine();
        } catch (Exception e) {
            e.printStackTrace();
        }
        try {
            if (escritor != null) {
                escritor.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static ArrayList<String> leeFichero(String nombreFichero) {
        FileReader fichero;
        BufferedReader lector = null;
        String linea;
        ArrayList<String> todas_lineas = new ArrayList<String>();
        int i = 0;
        try {
            fichero = new FileReader(nombreFichero);
            lector = new BufferedReader(fichero);
            while ((linea = lector.readLine()) != null) {

                todas_lineas.add(linea);
                i++;
            }
        } catch (Exception e) {
            //e.printStackTrace();

        }
        try {
            if (lector != null) {
                lector.close();
            }
        } catch (Exception e) {
            //e.printStackTrace();
        }

        return todas_lineas;
    }

    public ArrayList<Empleado> cargar(String file_name) {
        ArrayList<String> recoge_linea = new ArrayList<String>();
        String[] linea_troceada = null;
        recoge_linea = leeFichero(file_name);

        for (int x = 0; x < recoge_linea.size(); x++) {

            linea_troceada = recoge_linea.get(x).split(";");

            Empleado i = new Empleado();
            for (int y = 0; y < linea_troceada.length; y++) {

                switch (y) {
                    case 1:
                        i.setNombreEmpleado(linea_troceada[y]);
                        break;
                    case 2:
                        i.setSueldoEmpleado(Float.valueOf(linea_troceada[y]));
                        break;
                    case 3:
                        i.setFuncionEmpleado(linea_troceada[y]);
                        break;

                }
            }
            listaEmpleados.add(i);
        }

        return this.listaEmpleados;
    }

    void guardar(ArrayList<Empleado> listaProductos) {
        File fichero = new File("empleados.txt");
        fichero.delete();
        for (int i = 0; i < listaProductos.size(); i++) {
            escribeFichero("empleados.txt", listaProductos.get(i).toFile());
                      
        }

    }
}
