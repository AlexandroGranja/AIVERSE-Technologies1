---
name: ai-tools-prompt-research
description: Consulta a biblioteca local de system prompts e tool schemas do repositório system-prompts-and-models-of-ai-tools para extrair padrões úteis de execução de agentes e aplicar no desenvolvimento da página React/Vite deste projeto. Use quando o usuário pedir para usar prompts, adicionar skills, melhorar o fluxo do agente, planejar features, revisar código, debugar ou comparar práticas entre Cursor, v0, Lovable, Windsurf e VSCode Agent.
---

# AI Tools Prompt Research

## Objetivo

Aplicar padrões úteis de agentes de IA no desenvolvimento do projeto, transformando prompts de referência em ações práticas (decisões, implementação e validação).

## Fonte local

- Espelho local: `content/system-prompts-and-models-of-ai-tools`
- Mapa rápido de pastas: [reference.md](reference.md)

## Fluxo de uso

1. Classifique a tarefa do usuário:
   - **Frontend/UI** (layout, componentes, landing page, copy visual)
   - **Implementação técnica** (feature, refactor, integração)
   - **Debug/review** (correções, riscos, testes)
2. Consulte primeiro as fontes mais relevantes para o tipo de tarefa (veja `reference.md`).
3. Extraia de 3 a 7 regras acionáveis (ex.: formato de resposta, checklist, ordem de execução, critérios de qualidade).
4. Aplique as regras ao contexto deste repositório sem copiar prompts longos literalmente.
5. Entregue o resultado com:
   - decisões tomadas,
   - mudanças feitas,
   - como validar.

## Priorização por cenário

- **Página/UX**: priorizar `Lovable`, `v0 Prompts and Tools`, `Cursor Prompts`.
- **Fluxo de coding agent**: priorizar `Cursor Prompts`, `VSCode Agent`, `Windsurf`, `Trae`.
- **Comparação de ferramentas**: usar ao menos 2 fontes diferentes antes de concluir.

## Regras de qualidade

- Priorizar instruções concretas e curtas.
- Evitar regras conflitantes; em conflito, seguir o padrão deste projeto.
- Não usar informação sensível ou irrelevante do repositório de referência.
- Sempre transformar referência em ação de engenharia para o código atual.

## Recursos adicionais

- Guia de pastas e gatilhos: [reference.md](reference.md)
- Atualização do espelho local: `scripts/sync-source.ps1`
