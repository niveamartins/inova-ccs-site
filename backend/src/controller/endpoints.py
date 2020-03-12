import json

from flask import request, jsonify, Blueprint
from src.model.laboratorio import laboratorio
from src.util.mysql import estabelece_sessao

blueprint = Blueprint('endpoints',__name__)

@blueprint.route('/', methods=['GET'])
def index():

    sessao = estabelece_sessao()
    info = sessao.query(laboratorio).all()
    info = [i.marks() for i in info]
    sessao.close()
    print("foi")
    return jsonify(info)

@blueprint.route('/servico', methods=['GET'])
def servico():
    sessao = estabelece_sessao()
    Tag = request.args.get('Tag')
    print(Tag)
    info = sessao.query(laboratorio).filter(laboratorio.Id == Tag).all()
    info = [i.servicos() for i in info]
    sessao.close()
    return jsonify(info)
