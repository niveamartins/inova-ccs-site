from flask import Flask, request, jsonify
from flask_cors import CORS
from waitress import serve
from src.controller.endpoints import blueprint

if __name__ == '__main__':
    app = Flask(__name__)
    CORS(app)
    app.config['JSON_AS_ASCII'] = False

    @app.errorhandler(ConnectionError)
    def handle_connection_error(e):
        return "erro de conexao...", 502
    app.register_blueprint(blueprint)

    server(app, host='0.0.0.0', port=8081)
