import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { RecipeCard } from '../components/RecipeCard';
import { Reveal } from '../components/Reveal';
import { getCategoria, getReceita, receitas, receitasDaCategoria } from '../data/recipes';
import NotFound from './NotFound';

export default function RecipeDetail() {
  const { slug = '' } = useParams();
  const receita = getReceita(slug);
  const [marcados, setMarcados] = useState<number[]>([]);
  const reduce = useReducedMotion();

  useEffect(() => {
    setMarcados([]);
  }, [slug]);

  useEffect(() => {
    if (!receita) return;
    document.title = `${receita.titulo} — Sabor Diverso`;
    return () => {
      document.title = 'Sabor Diverso — Cardápio especial para diferentes necessidades alimentares';
    };
  }, [receita]);

  if (!receita) {
    return <NotFound />;
  }

  const categoria = getCategoria(receita.categoria);
  const indice = receitas.findIndex((item) => item.slug === receita.slug);
  const anterior = receitas[(indice - 1 + receitas.length) % receitas.length];
  const proxima = receitas[(indice + 1) % receitas.length];
  const daCategoria = receitasDaCategoria(receita.categoria).filter(
    (item) => item.slug !== receita.slug,
  );
  const deFora = receitas.filter(
    (item) => item.slug !== receita.slug && item.categoria !== receita.categoria,
  );
  const relacionadas = [...daCategoria, ...deFora].slice(0, 3);

  const progresso = receita.ingredientes.length
    ? marcados.length / receita.ingredientes.length
    : 0;

  const alternar = (index: number) => {
    setMarcados((atual) =>
      atual.includes(index) ? atual.filter((item) => item !== index) : [...atual, index],
    );
  };

  return (
    <article className="recipe">
      <div className="shell">
        <nav className="crumbs" aria-label="Você está aqui">
          <Link to="/">Início</Link>
          <span className="crumbs__sep">/</span>
          <Link to="/receitas">Receitas</Link>
          <span className="crumbs__sep">/</span>
          {categoria && (
            <>
              <Link to={`/categorias/${categoria.id}`}>{categoria.nome}</Link>
              <span className="crumbs__sep">/</span>
            </>
          )}
          <span>{receita.titulo}</span>
        </nav>

        <header className="recipe__head">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="recipe__num">
              Receita {String(receita.numero).padStart(2, '0')} de 15
            </span>
            <h1 className="recipe__title">{receita.titulo}</h1>
            <p className="recipe__resumo">{receita.resumo}</p>
            <div className="recipe__tags">
              {receita.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="recipe__meta"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="meta-item">
              <span>Tempo</span>
              <b>{receita.tempo}</b>
            </div>
            <div className="meta-item">
              <span>Rendimento</span>
              <b>{receita.porcoes}</b>
            </div>
            <div className="meta-item">
              <span>Dificuldade</span>
              <b>{receita.dificuldade}</b>
            </div>
            <div className="meta-item">
              <span>Restrição</span>
              <b>{receita.restricao}</b>
            </div>
          </motion.div>
        </header>

        <div className="recipe__layout">
          <aside className="recipe__aside">
            <motion.figure
              className="recipe__figure"
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ margin: 0 }}
            >
              <img src={receita.imagem} alt={receita.titulo} />
            </motion.figure>

            {categoria && (
              <div className="recipe__aside-note">
                <Icon name={categoria.icone} size={20} />
                <span>
                  <strong style={{ color: 'var(--ink)' }}>{categoria.nome}.</strong>{' '}
                  {categoria.subtitulo}{' '}
                  <Link
                    to={`/categorias/${categoria.id}`}
                    style={{ color: 'var(--terracotta)', textDecoration: 'underline' }}
                  >
                    Ver as outras receitas
                  </Link>
                  .
                </span>
              </div>
            )}
          </aside>

          <div>
            <section className="panel">
              <div className="panel__head">
                <h2 className="panel__title">
                  Ingredientes <span>{receita.ingredientes.length} itens</span>
                </h2>
                <span className="panel__hint">
                  Toque para marcar o que já separou
                </span>
              </div>

              <div className="progress" aria-hidden="true">
                <motion.div
                  className="progress__bar"
                  animate={{ scaleX: progresso }}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 160, damping: 24 }}
                  style={{ width: '100%', transformOrigin: 'left' }}
                />
              </div>

              <ul className="ingredients">
                {receita.ingredientes.map((ingrediente, index) => (
                  <li key={ingrediente}>
                    <label className="ingredient">
                      <input
                        type="checkbox"
                        checked={marcados.includes(index)}
                        onChange={() => alternar(index)}
                      />
                      <span className="ingredient__box">
                        <Icon name="check" size={12} strokeWidth={2.4} />
                      </span>
                      <span className="ingredient__text">{ingrediente}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </section>

            <section className="panel">
              <div className="panel__head">
                <h2 className="panel__title">
                  Modo de preparo <span>{receita.preparo.length} passos</span>
                </h2>
                <span className="panel__hint">{receita.tempo} de cozinha</span>
              </div>

              <ol className="steps">
                {receita.preparo.map((passo, index) => (
                  <motion.li
                    className="step"
                    key={passo.titulo}
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.55, delay: 0.04 * index }}
                  >
                    <span className="step__num">{index + 1}</span>
                    <div className="step__body">
                      <h3 className="step__title">{passo.titulo}</h3>
                      <p className="step__text">{passo.texto}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>

              <div className="tip">
                <span className="tip__icon">
                  <Icon name="sparkle" size={18} />
                </span>
                <div>
                  <span className="tip__label">Dica da cozinha</span>
                  <p>{receita.dica}</p>
                </div>
              </div>

              <div className="recipe__actions">
                <button type="button" className="btn btn--small" onClick={() => window.print()}>
                  <Icon name="print" size={16} />
                  Imprimir receita
                </button>
                <Link to="/receitas" className="btn btn--ghost btn--small">
                  <Icon name="arrow-left" size={16} />
                  Todas as receitas
                </Link>
                {marcados.length > 0 && (
                  <button
                    type="button"
                    className="link-arrow"
                    style={{ background: 'none', border: 0, padding: 0 }}
                    onClick={() => setMarcados([])}
                  >
                    Limpar marcações
                  </button>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="pager">
        <Link to={`/receitas/${anterior.slug}`} className="pager__item">
          <span className="pager__label">← Receita anterior</span>
          <span className="pager__name">{anterior.titulo}</span>
        </Link>
        <Link to={`/receitas/${proxima.slug}`} className="pager__item pager__item--next">
          <span className="pager__label">Próxima receita →</span>
          <span className="pager__name">{proxima.titulo}</span>
        </Link>
      </div>

      {relacionadas.length > 0 && (
        <section className="section">
          <div className="shell">
            <Reveal>
              <div className="section-head">
                <div className="section-head__text">
                  <span className="eyebrow">Na mesma categoria</span>
                  <h2 className="section-title">
                    Se gostou desta, <em>prove estas</em>.
                  </h2>
                </div>
                {categoria && (
                  <Link to={`/categorias/${categoria.id}`} className="link-arrow">
                    Ver {categoria.nome}
                    <Icon name="arrow" size={16} />
                  </Link>
                )}
              </div>
            </Reveal>
            <div className="recipe-grid">
              {relacionadas.map((item, index) => (
                <RecipeCard key={item.slug} receita={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
