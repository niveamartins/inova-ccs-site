# Como configurar

## BD:
### para pegar o arquivo .sql e criar banco no client:
	* $ cd backend
	* $ sudo mysql inova_final < inova-final.sql

### para rodar o servidor sql ():
	* $ sudo systemctl mysql

### servidor do banco de dados esta no localhost na porta 3306

## Flask:
### para entrar no ambiente virtual:
	* $ source env/bin/activate

### para rodar o flask:
	* $ /env/bin/python3 app.py

## testando o backend:
### fazendo os GETS nas rotas '/' '/servico?Tag=<id>'
	* $ curl http://localhost:8081/
	* $ curl http://localhost:8081/servico?Tag=1

## Front:
## Leaflet:
	* $ npm i leaflet

## entrar na pasta do projeto
	* $ cd frontend 

## para instalar o projeto 
	* $ npm update
	* $ npm install

## para servir o projeto
	* $ npm serve


