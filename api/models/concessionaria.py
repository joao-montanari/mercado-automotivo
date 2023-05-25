import ormar
from config import database, metadata

class Concessionaria(ormar.Model):
    class Meta:
        metadata = metadata
        database = database
        tablename = 'concessonarias'

    id: int = ormar.Integer(primary_key=True)
    concessionaria: str = ormar.String(max_length = 200)