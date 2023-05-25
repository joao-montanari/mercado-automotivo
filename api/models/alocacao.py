import ormar
from config import database, metadata

from models.automovel import Automovel
from models.concessionaria import Concessionaria

class Alocacao(ormar.Model):
    class Meta:
        metadata = metadata
        database = database
        tablename = 'alocaoes'

    id: int = ormar.Integer(primary_key=True)
    area: int = ormar.Integer()
    automovel: int = ormar.ForeignKey(Automovel, skip_reverse=True)
    concessionaria: int = ormar.ForeignKey(Concessionaria, skip_reverse=True)
    quantidade: int = ormar.Integer()