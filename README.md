# Jitterbit API

API em Express + Mongoose para CRUD simples de pedidos.

## Pré-requisitos
- Node.js 18+ e npm
- MongoDB rodando em `mongodb://localhost:27017/`

## Instalação
```bash
npm install
```

## Rodando em desenvolvimento
```bash
npm run dev
```
O servidor sobe em `http://localhost:3002`.

## Build e produção
```bash
npm run build
npm start
```
`npm run build` gera a pasta `dist/` e `npm start` roda a versão compilada.

## Rotas disponíveis
- `GET /order/list` — lista todos os pedidos
- `GET /order/:orderId` — busca um pedido específico
- `POST /order` — cria pedido (campos esperados: `numeroPedido`, `valorTotal`, `items[]` com `idItem`, `quantidadeItem`, `valorItem`)
- `DELETE /order/:orderId` — exclui pedido

## Postman
1) Abra o Postman e exporte sua Collection de testes (File > Export) em formato v2.1.
2) Salve o arquivo exportado no repositório, por exemplo em `postman/jitterbit-api.postman_collection.json`.
3) Para reutilizar, importe esse arquivo no Postman (File > Import) ou use o botão Import e selecione o JSON.
4) Mantenha o arquivo atualizado quando mudar as requisições para facilitar o compartilhamento.

## Notas
- Se já existir `orderId` duplicado no banco, ajuste ou limpe a coleção antes de testar a unicidade.
- Certifique-se de que o MongoDB está ativo antes de iniciar a API.
