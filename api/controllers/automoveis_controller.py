from fastapi import APIRouter, Response
from models.automovel import Automovel
import ormar

router = APIRouter()

@router.post("/")
async def add_automovel(automovel: Automovel):
    await automovel.save()
    return automovel

@router.get("/")
async def list_automovel():
    return await Automovel.objects.all()

@router.get('/{automovel_id}')
async def automoveis_id(automovel_id: int, response: Response):   
    try: 
        automovel = await Automovel.objects.get(id = automovel_id)
        return automovel
    except ormar.exceptions.NoMatch:
        response.status_code = 404
        return {'mensagem':'id nao encontrado'}
    
@router.delete('/{automovel_id}')
async def delete_automovel(automovel_id: int, response: Response):
    try:
        automovel = await Automovel.objects.get(id = automovel_id)
        return await automovel.delete()
    except:
        response.status_code = 404
        return {'mensagem':'id nao encontrado'}