# AulaAcessível — Módulo Química v5

Protótipo acadêmico de um sistema físico-digital para apoiar o planejamento e a condução de aulas inclusivas de Química.

## Como abrir

### Jeito mais simples
Abra `index.html` no navegador.

### No Windows
Dê dois cliques em `INICIAR_AULA_ACESSIVEL_WINDOWS.bat`.

### No Linux/Mac
Execute `./iniciar_aula_acessivel_linux_mac.sh` ou, na pasta do projeto:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Fluxo de uso

1. Escolha um modelo pronto, crie uma aula guiada ou adapte um roteiro.
2. Revise as necessidades/barreiras sugeridas.
3. Confira o plano gerado e ajuste somente o necessário.
4. Use as saídas: visão da aula, kit físico, roteiro do aluno, orientação do professor e checklist.

## Integração com o kit físico

- O sistema informa os códigos dos cards físicos recomendados.
- O painel principal mostra até **5 cards de rotina por vez**; os próximos entram conforme a aula avança.
- Segurança e avisos sensoriais ficam no painel conforme a necessidade da aula.
- Cards de comunicação ficam próximos aos estudantes, sem ocupar o painel principal.
- Marcadores `AGORA`, `PAUSA` e `FIM` apoiam o acompanhamento da aula.

## Roteiro do aluno

A versão para impressão usa apenas elementos visuais funcionais: pequenos pictogramas de ação, sequência numerada, avisos essenciais, opções de comunicação e espaço de registro. O objetivo é apoiar leitura e organização sem criar excesso de estímulos visuais.

## Funcionamento

O protótipo funciona sem login e não exige celular dos estudantes. Em hospedagem HTTPS, o service worker permite reaproveitar arquivos em cache para uso offline após o primeiro acesso.

## Base curricular

Os modelos iniciais foram organizados a partir do PPC do curso Técnico Integrado em Laboratório de Ciências da Natureza do IFSC São José, com foco em Química 1 a 6 e Laboratório de Química 1 a 3.
