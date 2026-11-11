# TODO — Sabor Diverso (Cardápio Especial)

## 1. Página inicial com apresentação e acesso às cinco categorias — concluído
- Hero com título "Comida boa também é respeito", selo circular, estatísticas (15 receitas, 5 categorias, 10 min) e CTAs para receitas e categorias.
- Índice editorial das cinco categorias (Sem Glúten, Sem Leite, Ricas em Proteínas, Saudáveis, Outras Restrições) com número, descrição sempre visível em celular e tablet, contagem, indicação “Abrir categoria”, ícone e imagem de prévia no hover.
- Seções complementares: marquee de restrições, destaques em carrossel, manifesto "Alimentação inclusiva é qualidade de vida", grade de seis receitas e faixa de CTA.

## 2. Catálogo com as 15 receitas em cartões (nome, imagem e categoria) — concluído
- `src/data/recipes.ts` reúne as 15 receitas numeradas de 1 a 15, fiéis ao cardápio impresso, com imagem própria gerada para cada prato.
- Cartões exibem número, imagem, etiqueta da restrição, título, resumo, tempo, rendimento e o atalho visível “Ver receita completa”; clicar abre a ficha individual.
- Página `/receitas` lista todas as receitas; página inicial mostra as seis primeiras.

## 3. Filtro por categoria com opção de voltar a todas — concluído
- Chips "Todas" + cinco categorias com contagem, pílula ativa animada e estado sincronizado na URL (`?categoria=`).
- Busca por título, resumo, restrição, tags e ingredientes; contador de resultados e estado vazio com limpeza de filtros.

## 4. Página individual de cada receita — concluído
- Rota `/receitas/:slug` para as 15 receitas com breadcrumb, numeração "Receita X de 15", resumo e tags.
- Ficha com tempo, rendimento, dificuldade e restrição atendida.
- Ingredientes com checklist interativo e barra de progresso.
- Modo de preparo em passos numerados com título e descrição detalhada, dica de cozinha, impressão e navegação entre receitas.

## 5. Navegação entre início, catálogo, categorias e fichas — concluído
- Header fixo com Início, Receitas, Categorias e "Por que importa" (âncora), além de CTA "Ver as 15 receitas".
- Menu mobile em tela cheia com animação, botão de três linhas e links legíveis sem sobreposição; tocar em um link fecha o menu e abre a página escolhida. Rodapé com categorias, receitas e atalhos.
- Páginas `/categorias` e `/categorias/:slug` com descrição, imagem, lista dos nomes das três receitas por categoria, botão “Abrir as 3 receitas”, suas fichas e links cruzados; página 404 para endereços inválidos. Ao tocar em uma receita, a ficha completa abre sem exigir recarga manual.

## 6. Design responsivo e animações suaves — concluído
- Layout adaptado para desktop (≥1024px), tablet (≤1024px) e celular (≤780px), verificado por captura em 1280×900 e 390×844; painel móvel ocupa a tela toda e mantém os links separados.
- Animações: revelação no scroll, parallax do herói, hover de cartões e linhas de categoria, carrossel com controles, marquee e pílula de filtro animada.
- Respeito a `prefers-reduced-motion` e estilos de impressão da ficha.

## 7. Conteúdo em português e fiel ao cardápio impresso — concluído
- Todos os textos, ingredientes e modos de preparo em português do Brasil, mantendo as 15 receitas e as cinco categorias do material original, com preparo detalhado em etapas.

## 8. Validação técnica e publicação — validação concluída; publicação das melhorias aguarda autorização
- Typecheck (`tsc -b`) e build de produção (`vite build`) executados sem erros.
- Manifesto de rotas (`/manus-routes.json`), `app.config.ts` com logo, configuração de build estático e fallback SPA declarados.
- A versão com o painel móvel corrigido está publicada; a abertura imediata das fichas sem depender da animação da página está em validação e ainda não foi publicada.
