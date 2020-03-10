import json

from flask import request, jsonify, Blueprints
from src.model.laboratorio import laboratorio
from src.util.mysql import estabelece_sessao


@blueprint.route
def index('/', methods=['GET']):

    sessao = estabelece_sessao()
    info = sessao.query(laboratorio).all()
    info = [i.marks() for i in info]
    sessao.close()
    return jsonify(info)

@blueprint.route
def servico(('/servico?Tag=<id>', methods=['POST'])):
    sessao = estabelece_sessao()
    info = sessao.query(laboratorio).filter(laboratorio.Id == Tag).one()
    info = [i.servicos() for i in info]
    sessao.close()
    return jsonify(info)
