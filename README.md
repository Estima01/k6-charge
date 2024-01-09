# Testes de Carga com k6 - k6-charge

Este repositório contém scripts e configurações para realizar testes de carga automatizados usando a ferramenta k6. Os testes são configurados para serem executados automaticamente por meio da integração contínua usando GitHub Actions.

[![Test charge k6](https://github.com/Estima01/k6-charge/actions/workflows/charge_test.yml/badge.svg?branch=main)](https://github.com/Estima01/k6-charge/actions/workflows/charge_test.yml)
[![pages-build-deployment](https://github.com/Estima01/k6-charge/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main&event=page_build)](https://github.com/Estima01/k6-charge/actions/workflows/pages/pages-build-deployment)

## Resultados dos Testes

Os resultados dos testes de carga são automaticamente gerados e disponibilizados [aqui](https://github.com/Estima01/k6-charge/actions/workflows/pages/pages-build-deployment). Os gráficos e estatísticas fornecem insights valiosos sobre o desempenho do sistema durante os testes de carga.

### Métricas Principais

- **RPS (Requisições por Segundo):** O número de requisições que o sistema pode processar por segundo.
- **Tempo de Resposta:** O tempo médio que o sistema leva para responder a uma requisição.
- **Erro de Taxa de Resposta:** A porcentagem de respostas com erro em relação ao total de requisições.
