import { motion, useReducedMotion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { RecipeCard } from '../components/RecipeCard';
import { categorias, receitas } from '../data/recipes';
import type { CategoriaId } from '../data/recipes';

type Filtro = 'todas' | CategoriaId;

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export default function Recipes() {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const categoriaParam = params.get('categoria') as Filtro | null;
  const filtro: Filtro =
    categoriaParam && categorias.some((c) => c.id === categoriaParam) ? categoriaParam : 'todas';
  const [query, setQuery] = useState('');

  const lista = useMemo(() => {
    const termo = normalize(query.trim());
    return receitas.filter((receita) => {
      const combinaCategoria = filtro === 'todas' || receita.categoria === filtro;
      if (!combinaCategoria) return false;
      if (!termo) return true;
      const alvo = normalize(
        [receita.titulo, receita.resumo, receita.restricao, ...receita.tags, ...receita.ingredientes].join(' '),
      );
      return alvo.includes(termo);
    });
  }, [filtro, query]);

  const setFiltro = (novo: Filtro) => {
    if (novo === 'todas') {
      params.delete('categoria');
    } else {
      params.set('categoria', novo);
    }
    setParams(params, { replace: true });
  };

  const categoriaAtiva = categorias.find((categoria) => categoria.id === filtro);

  return (
    <>
      <header className="page-head">
        <div className="shell">
          <span className="eyebrow">O cardápio completo</span>
          <h1 className="page-head__title">
            Quinze receitas,
            <br />
            <em>nenhuma restrição</em> ao sabor.
          </h1>
          <p className="page-head__lede">
            Filtre pelo que você precisa — sem glúten, sem leite, rico em proteínas, saudável
            ou adaptado — e abra a ficha completa com ingredientes, passo a passo e dicas.
          </p>
          <div style={{ marginTop: 24 }}>
            <button
              type="button"
              className="btn btn--ghost btn--small"
              onClick={() => {
                const sorteada = receitas[Math.floor(Math.random() * receitas.length)];
                navigate(`/receitas/${sorteada.slug}`);
              }}
            >
              <Icon name="sparkle" size={16} />
              Surpreenda-me
            </button>
          </div>
        </div>
      </header>

      <div className="filters">
        <div className="filters__inner">
          <div className="chips" role="group" aria-label="Filtrar por categoria">
            <button
              type="button"
              className="chip"
              data-active={filtro === 'todas'}
              onClick={() => setFiltro('todas')}
              aria-pressed={filtro === 'todas'}
            >
              {filtro === 'todas' && (
                <motion.span layoutId="chip-bg" className="chip__bg" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
              )}
              <span className="chip__label">
                Todas
                <span className="chip__count">{receitas.length}</span>
              </span>
            </button>
            {categorias.map((categoria) => {
              const total = receitas.filter((r) => r.categoria === categoria.id).length;
              const ativa = filtro === categoria.id;
              return (
                <button
                  key={categoria.id}
                  type="button"
                  className="chip"
                  data-active={ativa}
                  onClick={() => setFiltro(categoria.id)}
                  aria-pressed={ativa}
                >
                  {ativa && (
                    <motion.span
                      layoutId="chip-bg"
                      className="chip__bg"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="chip__label">
                    {categoria.nome}
                    <span className="chip__count">{total}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="search">
            <Icon name="search" size={16} />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar receita ou ingrediente"
              aria-label="Buscar receita ou ingrediente"
            />
            {query && (
              <button
                type="button"
                className="search__clear"
                onClick={() => setQuery('')}
                aria-label="Limpar busca"
              >
                <Icon name="close" size={15} />
              </button>
            )}
          </div>
        </div>
      </div>

      <section className="section section--tight">
        <div className="shell">
          <div className="results-meta">
            <span>
              <b>{lista.length}</b> {lista.length === 1 ? 'receita encontrada' : 'receitas encontradas'}
              {categoriaAtiva ? ` em ${categoriaAtiva.nome}` : ''}
              {query ? ` para “${query}”` : ''}
            </span>
            <span className="pill-label">
              <Icon name="chef" size={15} />
              {categoriaAtiva ? categoriaAtiva.subtitulo : 'Sabor, saúde e inclusão'}
            </span>
          </div>

          {lista.length === 0 ? (
            <div className="empty">
              <h3>Nada por aqui ainda</h3>
              <p>
                Não encontramos receitas com esses filtros. Tente outra palavra ou volte para
                todas as receitas.
              </p>
              <button
                type="button"
                className="btn btn--ghost btn--small"
                style={{ marginTop: 20 }}
                onClick={() => {
                  setFiltro('todas');
                  setQuery('');
                }}
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <motion.div
              key={`${filtro}-${query}`}
              className="recipe-grid"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {lista.map((receita, index) => (
                <RecipeCard key={receita.slug} receita={receita} index={index} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
