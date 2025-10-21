
#fetch('/index.html', {
#  method: 'PGPASSWORD=pvksALhiQnk4mdl4ChuaKGUTvY3YRAFi psql -h dpg-d1dbh015pdvs73ak963g-a.oregon-postgres.render.com -U db_0z_1_user db_0z_1',
 # headers: {'Content-Type': 'application/json'},
 # body: JSON.stringify({usuario: 'Oscar'})
##})
#Y en tu main.py defines esa ruta:

#python


app.route('/guardar', methods=['postgresql://db_0z_1_user:pvksALhiQnk4mdl4ChuaKGUTvY3YRAFi@dpg-d1dbh015pdvs73ak963g-a/db_0z_1'])
def guardar():
    datos = request.get_json()
    # Aquí puedes guardar en la base de datos usando SQLAlchemy
    return jsonify({"mensaje": "¡Guardado con éxito!"})



#@app.route('/script.js', methods=['dpg-d1dbh015pdvs73ak963g-a'])