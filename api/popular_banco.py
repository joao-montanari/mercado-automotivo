import sqlite3
import datetime
import os
import pandas as pd

clientes_df = pd.read_csv('./dados/clientes.csv', encoding='latin-1')
print('\033[33m' + 'TABELA CSV CLIENTE:' + '\033[0;0m')
print(clientes_df)
print('\n')

automoveis_df = pd.read_csv('./dados/automoveis.csv', encoding='latin-1')
print('\033[33m' + 'TABELA CSV AUTOMOVEIS:' + '\033[0;0m')
print(automoveis_df)
print('\n')

alocacao_df = pd.read_csv('./dados/alocacao.csv', encoding='latin-1')
print('\033[33m' + 'TABELA CSV ALOCACAO:' + '\033[0;0m')
print(alocacao_df)
print('\n')

concessionaria_df = pd.read_csv('./dados/concessionarias.csv', encoding='latin-1')
print('\033[33m' + 'TABELA CSV CONCESSIONARIAS:' + '\033[0;0m')
print(concessionaria_df)
print('\n')

conection = sqlite3.connect('db.sqlite')
cur = conection.cursor()

for index in range(len(clientes_df)):
    current_data = clientes_df.loc[index]
    cur.execute(f"INSERT INTO clientes VALUES ('{current_data['Id']}','{current_data['Nome']}')")

for index in range(len(automoveis_df)):
    current_data = automoveis_df.loc[index]
    cur.execute(f"INSERT INTO automoveis VALUES ('{current_data['id']}','{current_data['modelo']}','{current_data['preco']}')")

for index in range(len(alocacao_df)):
    current_data = alocacao_df.loc[index]
    cur.execute(f"INSERT INTO alocaoes VALUES ('{current_data['id']}','{current_data['area']}','{current_data['automovel']}','{current_data['concessionaria']}','{current_data['quantidade']}')")

for index in range(len(concessionaria_df)):
    current_data = concessionaria_df.loc[index]
    cur.execute(f"INSERT INTO concessonarias VALUES ('{current_data['id']}','{current_data['concessionaria']}')")


print('\n')
print('\033[32m' + 'DADOS ADICIONADOS NO BANCO DE DADOS' + '\033[0;0m')
conection.commit()