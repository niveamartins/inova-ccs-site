import json

from flask import request, jsonify, Blueprints
from src.model.laboratorio import laboratorio

@blueprint.route
def index('/', methods=['GET']):

