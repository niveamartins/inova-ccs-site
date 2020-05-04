import json

from flask import request, jsonify, Blueprint
from src.model.laboratorio import laboratorio
from src.util.mysql import estabelece_sessao

blueprint = Blueprint('endpoints',__name__)

@blueprint.route('/api/', methods=['GET'])
def index():

    sessao = estabelece_sessao()
    info = sessao.query(laboratorio).all()
    info = [i.marks() for i in info]
    sessao.close()
    return jsonify(info)

@blueprint.route('/api/servico', methods=['GET'])
def servico():
    sessao = estabelece_sessao()
    Tag = request.args.get('Tag')
    info = sessao.query(laboratorio).filter(laboratorio.Id == Tag).all()
    info = [i.servicos() for i in info]
    sessao.close()
    return jsonify(info)
