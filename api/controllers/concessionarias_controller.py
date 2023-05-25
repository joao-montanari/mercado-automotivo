from fastapi import APIRouter, Response
from models.concessionaria import Concessionaria
import ormar

router = APIRouter()

@router.post("/")
async def add_cliente(concessionaria: Concessionaria):
    await concessionaria.save()
    return concessionaria

@router.get("/")
async def list_cliente():
    return await Concessionaria.objects.all()

@router.get('/{concessionaria_id}')
async def automoveis_id(concessionaria_id: int, response: Response):   
    try: 
        cliente = await Concessionaria.objects.get(id = concessionaria_id)
        return cliente
    except ormar.exceptions.NoMatch:
        response.status_code = 404
        return {'mensagem':'id nao encontrado'}
    
@router.delete('/{concessionaria_id}')
async def delete_cliente(cliente_id: int, response: Response):
    try:
        concessionaria = await Concessionaria.objects.get(id = cliente_id)
        return await concessionaria.delete()
    except:
        response.status_code = 404
        return {'mensagem':'id nao encontrado'}