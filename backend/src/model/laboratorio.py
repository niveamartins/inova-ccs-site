from sqlalchemy import Column, Float, String, Integer
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class laboratorio(Base):
    __tablename__ = 'laboratorio'
    Id = Column(Integer, primary_key=True)
    Nome = Column(String)
    Servico1 = Column(String)
    Servico2 = Column(String)
    Servico3 = Column(String)
    Descricao1 = Column(String)
    Descricao2 = Column(String)
    Descricao3 = Column(String)
    Unidade = Column(String)
    Responsavel1 = Column(String)
    Responsavel2 = Column(String)
    Responsavel3 = Column(String)
    Contato1 = Column(String)
    Contato2 = Column(String)
    Contato3 = Column(String)
    Endereco = Column(String)
    Coordenada_S = Column(Float)
    Coordenada_W = Column(Float)

    def servicos(self):
        return {
            "Id": f'{self.Id}',
            "Nome": f'{self.Nome}',
            "Servico1": f'{self.Servico1}',
            "Servico2": f'{self.Servico2}',
            "Servico3": f'{self.Servico3}',
            "Descricao1": f'{self.Descricao1}',
            "Descricao2": f'{self.Descricao2}',
            "Descricao3": f'{self.Descricao3}',
            "Unidade": f'{self.Unidade}',
            "Responsavel1": f'{self.Responsavel1}',
            "Responsavel2": f'{self.Responsavel2}',
            "Responsavel3": f'{self.Responsavel3}',
            "Contato1": f'{self.Contato1}',
            "Contato2": f'{self.Contato2}',
            "Contato3": f'{self.Contato3}',
            "Endereco": f'{self.Endereco}'
        }
    def marks(self):
        return {
            "Id": f'{self.Id}',
            "Nome": f'{self.Nome}',
            "Coordenada_S": f'{self.Coordenada_S}',
            "Coordenada_W": f'{self.Coordenada_W}'
        }
