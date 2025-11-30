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
Já existe uma collection pronta em `postman/Jitterbit.postman_collection.json`.

Como usar:
- No Postman, clique em **Import** e selecione o arquivo `postman/Jitterbit.postman_collection.json`.
- Após importar, ajuste o `base_url` (se houver variável) ou edite as URLs para `http://localhost:3002`.
- Atualize a collection se mudar alguma rota e reexporte para manter o arquivo em repositório sincronizado.

## Notas
- Se já existir `orderId` duplicado no banco, ajuste ou limpe a coleção antes de testar a unicidade.
- Certifique-se de que o MongoDB está ativo antes de iniciar a API.
