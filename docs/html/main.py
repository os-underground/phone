print("Hello, World!")



#Sin  t¿Quieres que quite todas las letras "t" del código o te refieres a otra cosa? Por favor, aclara un poco más.>

#Sin tener que importar de otro servidor, como estarían programadas las ase de datos para importar para que funcione bien solo usando puro phyton pero investigue por internet , 🥺solo algoritmos , completos para esta interfaz y funciones de ia 

#Aquí tienes un ejemplo completo que usa solo Python estándar para:
#Base de datos con SQLite (sin servidor externo)
#Interfaz gráfica con Tkinter
#Funciones básicas de "IA" (respuesta simple basada en reglas)
#No necesitas importar nada externo, solo módulos estándar (sqlite3, tkinter).

import sqlite3
#import tkinter as tk

DB = 'ia_personal.db'

# Inicializar base de datos y tabla
def init_db():
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS mensajes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        pregunta TEXT,
        respuesta TEXT
    )''')
    conn.commit()
    conn.close()

# Guardar interacción en base de datos
def guardar_mensaje(pregunta, respuesta):
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    c.execute('INSERT INTO mensajes (pregunta, respuesta) VALUES (?, ?)', (pregunta, respuesta))
    conn.commit()
    conn.close()

# Algoritmo simple de IA (Reglas básicas)
def responder_ia(pregunta):
    p = pregunta.lower()
    if "hola" in p or "buenos días" in p:
        return "¡Hola! ¿En qué puedo ayudarte?"
    elif "adiós" in p or "hasta luego" in p:
        return "Hasta luego, que tengas un buen día."
    elif "cómo estás" in p:
        return "Estoy bien, gracias por preguntar."
    elif "gracias" in p:
        return "De nada, para eso estoy."
    else:
        return "No entiendo la pregunta, ¿puedes reformularla?"

# Función para enviar pregunta desde la interfaz
def enviar_pregunta():
    pregunta = entry.get()
    if pregunta.strip():
        respuesta = responder_ia(pregunta)
        guardar_mensaje(pregunta, respuesta)
        text_area.insert(tk.END, f"Tú: {pregunta}\nIA: {respuesta}\n\n")
        entry.delete(0, tk.END)
    else:
        text_area.insert(tk.END, "Por favor, ingresa una pregunta.\n\n")

# Configuración de la interfaz Tkinter
init_db()

root = tk.Tk()
root.title("IA Personal - Solo Python")

text_area = tk.Text(root, height=20, width=60)
text_area.pack(padx=10, pady=10)

entry = tk.Entry(root, width=50)
entry.pack(side=tk.LEFT, padx=10, pady=10)

send_button = tk.Button(root, text="Enviar", command=enviar_pregunta)
send_button.pack(side=tk.LEFT, padx=10, pady=10)

root.mainloop()