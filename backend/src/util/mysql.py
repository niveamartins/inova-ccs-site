from mysqlalchemy import create_engine
from mysqlalchemy.orm import sessionmaker

engine = create_engine('mysql://teste:inova@127.0.0.1:3306')

def estabelece_sessao():
        return Session()

