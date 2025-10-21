# In main file
# import script1
# print(script1.sum(1, 3))

#def sum(a, b):
 #   return a + b
 
 
 
 from flask import Flask, jsonify, request, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configuración de la base de datos PostgreSQL (Render - externa)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://db_0z_1_user:pvksALhiQnk4mdl4ChuaKGUTvY3YRAFi@dpg-d1dbh015pdvs73ak963g-a.oregon-postgres.render.com/db_0z_1'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Modelo de ejemplo para la base de datos (opcional)
class Datos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mensaje = db.Column(db.String(200))
    valor = db.Column(db.Integer)

# Ruta para servir el index.html
@app.route('/')
def index():
    return render_template('index.html')

# Ruta para obtener datos (ejemplo JSON)
@app.route('/datos')
def obtener_datos():
    datos = {
        "mensaje": "Hola desde el servidor Python y la base de datos!",
        "valor": 123,
        "lista": [1, 2, 3, 4]
    }
    return jsonify(datos)

# Ruta para guardar datos enviados desde JS (POST)
@app.route('/guardar', methods=['POST'])
def guardar_datos():
    data = request.json
    print("Datos recibidos para guardar:", data)
    # Aquí puedes guardar en la base de datos si quieres
    return jsonify({"status": "ok", "recibido": data})

if __name__ == '__main__':
    app.run(debug=True)