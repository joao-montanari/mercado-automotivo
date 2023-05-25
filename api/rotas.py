from fastapi import APIRouter

from controllers import automoveis_controller as automoveis
from controllers import clientes_controller as clientes
from controllers import concessionarias_controller as concessionarias
from controllers import alocacoes_controller as alocacao

router = APIRouter()

router.include_router(automoveis.router, prefix = '/automoveis')
router.include_router(clientes.router, prefix = '/clientes')
router.include_router(concessionarias.router, prefix = '/concessionarias')
router.include_router(alocacao.router, prefix = '/alocacao')