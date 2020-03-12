from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine('mysql+pymysql://bd:inova@localhost:3306/inova_final')
Session = sessionmaker(bind=engine)

def estabelece_sessao():
        return Session()

