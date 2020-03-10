from mysqlalchemy import create_engine
from mysqlalchemy.orm import sessionmaker

engine = create_engine('mysql://bd:inova@localhost')

def estabelece_sessao():
        return Session()

