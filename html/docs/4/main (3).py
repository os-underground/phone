print("Hello, World!")

#Servidor Flask: Servirá la IA, que responderá a peticiones.
#Base de datos SQLite: Guardará datos, por ejemplo, mensajes.
#Interfaz Tkinter: Cliente que enviará preguntas al servidor y mostrará respuestas.
#Código ejemplo:
#1. Archivo server.py (servidor Flask):

#from flask import Flask, request, jsonify
import sqlite3

#app = Flask(__name__)
DB = 'ia_personal.db'

# Inicializar base de datos
def init_db():
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS mensajes (id INTEGER PRIMARY KEY, pregunta TEXT, respuesta TEXT)''')
    conn.commit()
    conn.close()

#@app.route('/preguntar', methods=['POST'])
def preguntar():
    data = request.json
    pregunta = data.get('pregunta')
    
    # Aquí va la lógica de IA, por ahora respondemos con algo simple
    respuesta = f"Respuesta a: {pregunta}"
    
    # Guardar en base de datos
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    c.execute('INSERT INTO mensajes (pregunta, respuesta) VALUES (?, ?)', (pregunta, respuesta))
    conn.commit()
    conn.close()

    return jsonify({'respuesta': respuesta})

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
#2. Archivo client.py (interfaz gráfica con Tkinter):

import tkinter as tk
import requests

def enviar_pregunta():
    pregunta = entry.get()
    if pregunta:
        response = requests.post('http://127.0.0.1:5000/preguntar', json={'pregunta': pregunta})
        if response.status_code == 200:
            data = response.json()
            texto_respuesta = data.get('respuesta')
            text_area.insert(tk.END, f"Tú: {pregunta}\nIA: {texto_respuesta}\n\n")
            entry.delete(0, tk.END)
        else:
            text_area.insert(tk.END, "Error en la comunicación con el servidor.\n")

root = tk.Tk()
root.title("IA Personal")

text_area = tk.Text(root, height=20, width=60)
text_area.pack()

entry = tk.Entry(root, width=50)
entry.pack(side=tk.LEFT, padx=5, pady=5)

send_button = tk.Button(root, text="Enviar", command=enviar_pregunta)
send_button.pack(side=tk.LEFT, padx=5, pady=5)

root.mainloop()
#Cómo usar:
#Instala dependencias:
#pip install flask requests
#Ejecuta el servidor:
#python server.py
#Ejecuta la interfaz:
#python client.py
#Con esto tienes una base para una IA personal local, con servidor, base de datos y GUI.




#Si quieres que la IA sea más avanzada, podemos integrar modelos de NLP o aprendizaje automático, pero esto es un buen comienzo. ¿Quieres que te ayude con eso?

