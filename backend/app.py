from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'root:123456@localhost:5002/database'
db = SQLAlchemy(app)

class marcadores(db.Model):
    Id = db.Column(db.Integer, primary_key=True)
    Coordenada_S = db.Column(db.Float(precision=10,asdecimal=True))
    Coordenada_W = db.Column(db.Float(precision=10,asdecimal=True))

    def __repr__(self):
        return '<id %r>' % self.Id

#@app.route('/')

