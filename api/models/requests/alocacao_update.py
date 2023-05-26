from typing import List, Optional
from pydantic import BaseModel

class AlocacaoUpdate(BaseModel):
    area: Optional[int] = None
    automovel: Optional[int] = None
    concessionaria: Optional[int] = None
    quantidade: Optional[int] = None