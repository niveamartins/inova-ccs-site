from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'root:123456@localhost:5002/database'
db = SQLAlchemy(app)

class marcadores(db.Model):
    Id = db.Column(db.Integer, primary_key=True)
    Coordenada_S = db.Column(db.Float(precision=10,asdecimal=True))
    Coordenada_W = db.Column(db.Float(precision=10,asdecimal=True))

    def __repr__(self):
        return '<id %r>' % self.Id

#@app.route('/', methods=['GET','POST'])
#def index():
 #   if request.method == 'POST':
 #       request.form





#def get_marcador(id):


if __name__ == '__main__':
    app.run(host='127.0.0.1')
