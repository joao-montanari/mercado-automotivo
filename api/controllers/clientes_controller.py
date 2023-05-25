from fastapi import APIRouter, Response
from models.cliente import Cliente
import ormar

router = APIRouter()

@router.post("/")
async def add_cliente(cliente: Cliente):
    await cliente.save()
    return cliente

@router.get("/")
async def list_cliente():
    return await Cliente.objects.all()

@router.get('/{cliente_id}')
async def automoveis_id(cliente_id: int, response: Response):   
    try: 
        cliente = await Cliente.objects.get(id = cliente_id)
        return cliente
    except ormar.exceptions.NoMatch:
        response.status_code = 404
        return {'mensagem':'id nao encontrado'}
    
@router.delete('/{cliente_id}')
async def delete_cliente(cliente_id: int, response: Response):
    try:
        cliente = await Cliente.objects.get(id = cliente_id)
        return await cliente.delete()
    except:
        response.status_code = 404
        return {'mensagem':'id nao encontrado'}