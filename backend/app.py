from flask import Flask, request, jsonify
from sqlalchemy import S
from flask_cors import CORS

if __name__ == '__main__':
    app = Flask(__name__)
    CORS(app)
    app.config['JSON_AS_ASCII'] = False

    app.run(port=8081)
