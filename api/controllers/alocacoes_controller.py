from fastapi import APIRouter, Response
from models.alocacao import Alocacao
import ormar

router = APIRouter()

@router.post("/")
async def add_alocacao(alocacao: Alocacao):
    await alocacao.save()
    return alocacao

@router.get("/")
async def list_alocacao():
    return await Alocacao.objects.all()

@router.get('/{alocacao_id}')
async def alocacao_id(alocacao_id: int, response: Response):   
    try: 
        alocacao = await Alocacao.objects.get(id = alocacao_id)
        return alocacao
    except ormar.exceptions.NoMatch:
        response.status_code = 404
        return {'mensagem':'id nao encontrado'}
    
@router.delete('/{alocacao_id}')
async def delete_automovel(alocacao_id: int, response: Response):
    try:
        alocacao = await Alocacao.objects.get(id = alocacao_id)
        return await alocacao.delete()
    except:
        response.status_code = 404
        return {'mensagem':'id nao encontrado'}