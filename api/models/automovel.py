import ormar
from config import database, metadata

class Automovel(ormar.Model):
    class Meta:
        metadata = metadata
        database = database
        tablename = 'automoveis'

    id: int = ormar.Integer(primary_key=True)
    modelo: str = ormar.String(max_length = 200)
    preco: str = ormar.Float()