import sqlalchemy

from config import DATABASE_URL, metadata
from models.automovel import Automovel
from models.cliente import Cliente
from models.concessionaria import Concessionaria
from models.alocacao import Alocacao

def config_banco(database_url = DATABASE_URL):
    engine = sqlalchemy.create_engine(database_url)
    metadata.drop_all(engine)
    metadata.create_all(engine)

if __name__ == '__main__':
    config_banco()