import ormar
from config import database, metadata

class Cliente(ormar.Model):
    class Meta:
        metadata = metadata
        database = database
        tablename = 'clientes'

    id: int = ormar.Integer(primary_key=True)
    nome: str = ormar.String(max_length = 200)