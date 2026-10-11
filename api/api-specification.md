# Especificação Técnica da API Pública — Proposta

**Status:** proposta conceitual. Nenhum endpoint foi implementado.

## Objetivo

Permitir que pesquisadores, jornalistas e organizações civis reutilizem os dados publicados pelo Observatório da Preservação Institucional.

## Campos mínimos

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `event_id` | string | Identificador único do evento |
| `event_date` | date | Data do acontecimento |
| `jurisdiction` | string | País, estado ou município |
| `institution` | string | Instituição afetada |
| `dimension` | string | Dimensão do IPI (D1 a D5) |
| `event_type` | string | Tipo de evento |
| `source_url` | string | URL da fonte primária |
| `verification_status` | string | Estado da verificação |
| `severity` | integer | Gravidade preliminar (1 a 5) |
| `confidence` | float | Grau de confiança (0 a 1) |
| `last_updated` | datetime | Última atualização |
| `correction_history` | array | Histórico de correções |

## Endpoints propostos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/events` | Lista todos os eventos |
| GET | `/events/{id}` | Detalhes de um evento |
| GET | `/dimensions` | Lista as dimensões do IPI |
| GET | `/alerts` | Lista os alertas emitidos |
| GET | `/methodology` | Documentação metodológica |

## Formato de resposta

JSON.

## Licença

CC BY 4.0.

## Observação

Esta API é uma **proposta**. Nenhum endpoint foi implementado. A especificação está sujeita a revisão.
