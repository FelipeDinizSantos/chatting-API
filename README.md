# CHATTING APP 
Chatting APP é um projeto pessoal construido para praticar meus conhecimentos em ReactJS e NodeJS, bem como aprofundar meus estudos em conexões **WebSockets**! 

Tem como objetivo possibilitar a troca de mensagens entre dois usuários com base em IDs gerados randomicamente em um ambiente funcional. A interface e funcionalidades se assemelham, em uma comparação rustica, ao Whatsapp ou a qualquer outra aplicação de chat online. 

## O Que são WebSockets? 

WebSockets são uma tecnologia de comunicação bidirecional em tempo real entre um navegador (cliente) e um servidor. Eles permitem que dados sejam transmitidos de forma eficiente e contínua, tanto do cliente para o servidor quanto do servidor para o cliente, sem a necessidade de solicitações repetidas. 

Ao contrário do modelo tradicional de comunicação HTTP, no qual o cliente faz uma solicitação e o servidor responde, os WebSockets estabelecem uma conexão persistente entre o cliente e o servidor. Isso permite que informações sejam enviadas instantaneamente em ambas as direções, sem a sobrecarga de recriar a conexão a cada solicitação. 

## WebSockets Neste Servidor 

O WebSocket aqui é implementado para criar um lista de clientes conectados, enviar as informações de sessão para o cliente recém conectado e responder as mensagens enviadas pelo frontend,
estas que podem ser para finalizar a sessão e enviar uma mensagem para outro usuário. 
Para vizualizar o fluxo de dados e manipulações comece pela raiz do projeto `./app.js`. 

## Instalação 
Clone este repositório, vá até o terminal do projeto e execute o seguinte comando:
```bash
npm start
```

### Nota 
Através do terminal você pode vizualizar os usuarios que estão sendo conectados bem como seus IDs 

## Estado Atual do Projeto 
Este projeto ainda esta em desenvolvimento e demanda de muitos passos e correções, bem como da implementação de sessões, criptografias e do banco de dados (não-relacional). Sinta-se a vontade para faze-las.
