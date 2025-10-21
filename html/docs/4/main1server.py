#print("Hello, World!")
from flask import Flask, jsonify, request

app = Flask(__name__)

# Datos que enviará el servidor
datos = {
    "mensaje": "Hola desde el servidor Python!",
    "valor": 123,
    "lista": [1, 2, 3, 4]
}

@app.route('/datos')
def obtener_datos():
    return jsonify(datos)

@app.route('/guardar', methods=['POST'])
def guardar_datos():
    data = request.json
    print("Datos recibidos para guardar:", data)
    # Aquí puedes guardar en base de datos o archivo
    return jsonify({"status": "ok", "recibido": data})

if __name__ == '__main__':
    app.run(debug=True)
#Para correr este servidor, guarda el código en un archivo server.py y ejecútalo con:

#pip install flask
#python server.py






#from index import index
#from indexhtml import indexhtml

#from db_0z_1_user import db_0z_1_user
#from db_0z_1 import db_0z_1

#app = Flask(index)
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://db_0z_1_user:pvksALhiQnk4mdl4ChuaKGUTvY3YRAFi@dpg-d1dbh015pdvs73ak963g-a/db_0z_1'
#app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#db = SQLAlchemy(app)

#postgresql://db_0z_1_user:pvksALhiQnk4mdl4ChuaKGUTvY3YRAFi@dpg-d1dbh015pdvs73ak963g-a/db_0z_1
