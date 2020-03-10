import json

from flask import request, jsonify, Blueprints
from src.model.laboratorio import laboratorio
from src.util.mysql import estabelece_sessao

blueprint = Blueprint('endpoints',__name__)

@blueprint.route('/', methods=['GET'])
def index():

    sessao = estabelece_sessao()
    info = sessao.query(laboratorio).all()
    info = [i.marks() for i in info]
    sessao.close()
    return jsonify(info)

@blueprint.route('/servico?Tag=<id>', methods=['POST'])
def servico(Tag):
    sessao = estabelece_sessao()
    info = sessao.query(laboratorio).filter(laboratorio.Id == Tag).one()
    info = [i.servicos() for i in info]
    sessao.close()
    return jsonify(info)
