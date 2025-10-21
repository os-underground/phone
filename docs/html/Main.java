/*
 * Proyecto Ético Personal
 * Autor: [Tu Nombre]
 * Fecha: 2025
 * 
 * Derechos reservados. Prohibida la reproducción total o parcial sin autorización.
 */


//Cómo organizar tu proyecto
//1. Archivos Java
 // Main.java: conexión a la base de datos y consulta básica.
//  GuiaEtica.java: lógica para evaluar acciones y relacionarlas con valores positivos.
//  2. Scripts SQL
//  Archivo ProyectoEtico.sql con las sentencias para crear la base de datos y tablas, y para insertar valores iniciales.
//  Ejemplo de organización
//  ProyectoEtico.sql (ejecutar en MySQL)
//  CREATE DATABASE ProyectoEtico;
//  
//  //USE ProyectoEtico;
//  
//  //CREATE TABLE Temas (
//      id INT AUTO_INCREMENT PRIMARY KEY,
//      nombre VARCHAR(100) UNIQUE NOT NULL,
//      descripcion TEXT
//  );
//  
//  //CREATE TABLE Valores (
//      id INT AUTO_INCREMENT PRIMARY KEY,
//      nombre VARCHAR(100) UNIQUE NOT NULL,
//      descripcion TEXT
//  );
//  
//  //CREATE TABLE Conceptos (
//      id INT AUTO_INCREMENT PRIMARY KEY,
//      tema_id INT,
//      nombre VARCHAR(100),
//      descripcion TEXT,
//      FOREIGN KEY (tema_id) REFERENCES Temas(id) ON DELETE CASCADE
//  );
//  
//  //CREATE TABLE Conceptos_Valores (
//      concepto_id INT,
//      valor_id INT,
//      PRIMARY KEY (concepto_id, valor_id),
//      FOREIGN KEY (concepto_id) REFERENCES Conceptos(id) ON DELETE CASCADE,
//      FOREIGN KEY (valor_id) REFERENCES Valores(id) ON DELETE CASCADE
//  );
//  
//  //CREATE TABLE Reflexiones (
//      id INT AUTO_INCREMENT PRIMARY KEY,
//      fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//      texto TEXT,
//      valor_id INT,
//      FOREIGN KEY (valor_id) REFERENCES Valores(id)
//  //);
//  
//  //INSERT INTO Valores(nombre, descripcion) VALUES 
//  ('Bondad', 'Actuar con benevolencia y generosidad'),
//  ('Amor', 'Sentimiento de afecto profundo y cuidado'),
//  ('Aprecio', 'Reconocimiento del valor y la importancia'),
//  ('Hermandad', 'Sentido de unión y solidaridad entre personas'),
//  ('Integridad', 'Comportamiento honesto y coherente con principios éticos');











// Main.java (conexión y consulta básica)
//  import java.sql.*;
//  
//  public class Main {
//      public static void main(String[] args) {
//          String url = "jdbc:mysql://localhost:3306/ProyectoEtico"; // Cambia si es otra base
//          String usuario = "root";
//          String contraseña = "tu_contraseña";
//  
//          try {
//              Class.forName("com.mysql.cj.jdbc.Driver");
//              Connection conexion = DriverManager.getConnection(url, usuario, contraseña);
//              Statement stmt = conexion.createStatement();
//  
//              String sql = "SELECT * FROM Valores";
//              ResultSet rs = stmt.executeQuery(sql);
//  
//              while (rs.next()) {
//                  System.out.println(rs.getInt("id") + ": " + rs.getString("nombre") + " - " + rs.getString("descripcion"));
//              }
//  
//              rs.close();
//              stmt.close();
//              conexion.close();
//          } catch (Exception e) {
//              e.printStackTrace();
//          }
//      }
//  }










//GuiaEtica.java (algoritmo para guiar hacia valores positivos)
// import java.util.*;
// 
// public class GuiaEtica {
// 
//     static Set<String> valoresPositivos = new HashSet<>(Arrays.asList(
//         "bondad", "amor", "aprecio", "hermandad", "integridad"
//     ));
// 
//     public static String evaluarAccion(String accion) {
//         accion = accion.toLowerCase();
//         for (String valor : valoresPositivos) {
//             if (accion.contains(valor)) {
//                 return "Acción alineada con el valor positivo: " + valor;
//             }
//         }
//         return "Acción no alineada con valores positivos. Por favor, reflexiona para mejorar.";
//     }
// 
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Ingrese una acción o pensamiento:");
//         String input = sc.nextLine();
//         System.out.println(evaluarAccion(input
// benito juarez: el respeto al derecho ajeno es la paz, Albert Einstein (no se como se escribe xd) las matematicas son la poesia de la logica Platon y muchas personas que me menciono mi ia amada; El valor de un hombre se mide en sus acciones con el poder, no dicho correctamente pero todas son importantes para mi
// 
// ¡Muy buenas citas y reflexiones! Aquí te dejo una forma sencilla de almacenarlas en la base de datos que hablamos, para que puedas conservar y trabajar con esas frases inspiradoras.
// 
// SQL para crear tabla de citas y ejemplos de inserción
// CREATE TABLE Citas (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     autor VARCHAR(100),
//     texto TEXT NOT NULL
// );
// 
//  INSERT INTO Citas (autor, texto) VALUES
//  ('Benito Juárez', 'El respeto al derecho ajeno es la paz.'),
//  ('Albert Einstein', 'Las matemáticas son la poesía de la lógica.'),
//  ('Platón', 'El valor de un hombre se mide en sus acciones con el poder.');
//  Ejemplo de Java para mostrar estas citas desde la base de datos


//import java.sql.*;

// public class MostrarCitas {
//    public static void main(String[] args) {
//        String url = "jdbc:mysql://localhost:3306/ProyectoEtico"; // Cambia según tu configuración
//        String usuario = "root";
//        String contraseña = "tu_contraseña";
//
//        try {
//            Class.forName("com.mysql.cj.jdbc.Driver");
//            Connection conexion = DriverManager.getConnection(url, usuario, contraseña);
//
//            Statement stmt = conexion.createStatement();
//            ResultSet rs = stmt.executeQuery("SELECT autor, texto FROM Citas");
//
//            while (rs.next()) {
//                System.out.println(rs.getString("autor") + ": " + rs.getString("texto"));
//            }
//
//            rs.close();
//            stmt.close();
//            conexion.close();
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
// }