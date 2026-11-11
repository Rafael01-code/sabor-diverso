import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { RecipeCard } from '../components/RecipeCard';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { Seal } from '../components/Seal';
import { categorias, destaques, receitas, receitasDaCategoria } from '../data/recipes';

const marqueeItems = [
  'Sem glúten',
  'Sem leite',
  'Ricas em proteínas',
  'Saudáveis',
  'Outras restrições',
  'Comida boa também é respeito',
];

export default function Home() {
  const reduce = useReducedMotion();
  const { hash } = useLocation();
  const destaquesReceitas = destaques();
  const primeiras = receitas.slice(0, 6);
  const heroRef = useRef<HTMLElement | null>(null);
  const carrosselRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imagemY = useTransform(scrollYProgress, [0, 1], ['0%', '4.5%']);

  const rolarCarrossel = (direcao: 1 | -1) => {
    carrosselRef.current?.scrollBy({ left: direcao * 360, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!hash) return;
    const alvo = document.querySelector(hash);
    if (!alvo) return;
    const timer = window.setTimeout(() => {
      alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="shell hero__grid">
          <div>
            <motion.p
              className="eyebrow"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Cardápio especial · 15 receitas
            </motion.p>

            <h1 className="hero__title">
              {['Comida boa', 'também é'].map((line, index) => (
                <motion.span
                  key={line}
                  style={{ display: 'block', overflow: 'hidden' }}
                  initial={reduce ? false : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.08 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                style={{ display: 'block' }}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <em>respeito.</em>
              </motion.span>
            </h1>

            <motion.p
              className="hero__lede"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
            >
              Quinze receitas para diferentes necessidades alimentares — sem glúten, sem
              leite, ricas em proteínas, saudáveis e adaptadas. Porque à mesa todo mundo
              merece comer bem, sem abrir mão do sabor.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.46 }}
            >
              <Link to="/receitas" className="btn">
                Explorar as receitas
                <Icon name="arrow" size={17} />
              </Link>
              <Link to="/categorias" className="btn btn--ghost">
                Ver categorias
              </Link>
            </motion.div>

            <motion.div
              className="hero__note"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.58 }}
            >
              <div className="hero__stat">
                <b>15</b>
                <span>receitas</span>
              </div>
              <div className="hero__stat-div" />
              <div className="hero__stat">
                <b>5</b>
                <span>categorias</span>
              </div>
              <div className="hero__stat-div" />
              <div className="hero__stat">
                <b>10 min</b>
                <span>a mais rápida</span>
              </div>
            </motion.div>
          </div>

          <div className="hero__visual">
            <Icon name="leaf-branch" size={84} className="hero__leaf" />
            <motion.div
              className="hero__arch"
              initial={reduce ? false : { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.04 }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                style={reduce ? undefined : { y: imagemY }}
                src="/manus-storage/async-images/RqVyhiA3ekZww7CHtjlECz/image-1.webp"
                alt="Mesa com panqueca de tapioca, purê de abóbora, salada de quinoa e biscoitos de banana"
              />
            </motion.div>
            <Seal />
            <motion.div
              className="hero__badge"
              initial={reduce ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <span className="hero__badge-icon">
                <Icon name="sparkle" size={18} />
              </span>
              <span>
                <b>15</b>
                <br />
                receitas para diferentes necessidades
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((group) => (
            <div className="marquee__group" key={group}>
              {marqueeItems.map((item) => (
                <span className="marquee__item" key={`${group}-${item}`}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="section" id="categorias">
        <div className="shell">
          <Reveal>
            <div className="section-head">
              <div className="section-head__text">
                <span className="eyebrow">Escolha pelo que você precisa</span>
                <h2 className="section-title">
                  Cinco caminhos,
                  <br />
                  <em>um só prazer</em> à mesa.
                </h2>
              </div>
              <p className="section-lede">
                Cada categoria reúne receitas pensadas para uma necessidade alimentar
                específica — e todas foram escritas para caber na rotina, com ingredientes
                simples.
              </p>
            </div>
          </Reveal>

          <div className="cat-list">
            {categorias.map((categoria, index) => (
              <motion.div
                key={categoria.id}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
              >
                <Link to={`/categorias/${categoria.id}`} className="cat-row">
                  <span className="cat-row__bg" aria-hidden="true" />
                  <span className="cat-row__num">{String(index + 1).padStart(2, '0')}</span>
                  <span className="cat-row__title">
                    <Icon name={categoria.icone} size={26} className="cat-row__icon" />
                    {categoria.nome}
                  </span>
                  <span className="cat-row__desc">{categoria.subtitulo}</span>
                  <span className="cat-row__side">
                    <span className="cat-row__count">
                      {receitasDaCategoria(categoria.id).length} receitas
                    </span>
                    <span className="cat-row__arrow">
                      <Icon name="arrow" size={16} />
                    </span>
                  </span>
                  <span className="cat-row__preview" aria-hidden="true">
                    <img src={categoria.imagem} alt="" loading="lazy" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper" id="destaques">
        <div className="shell">
          <Reveal>
            <div className="section-head">
              <div className="section-head__text">
                <span className="eyebrow">Para começar hoje</span>
                <h2 className="section-title">
                  Receitas em <em>destaque</em>.
                </h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                <div className="carousel-controls" style={{ display: 'flex', gap: 8 }}>
                  <button
                    type="button"
                    className="cat-row__arrow"
                    onClick={() => rolarCarrossel(-1)}
                    aria-label="Receitas anteriores"
                    style={{ transform: 'rotate(180deg)' }}
                  >
                    <Icon name="arrow" size={16} />
                  </button>
                  <button
                    type="button"
                    className="cat-row__arrow"
                    onClick={() => rolarCarrossel(1)}
                    aria-label="Próximas receitas"
                  >
                    <Icon name="arrow" size={16} />
                  </button>
                </div>
                <Link to="/receitas" className="link-arrow">
                  Ver todas as 15 receitas
                  <Icon name="arrow" size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="shell">
          <div className="featured" ref={carrosselRef}>
            {destaquesReceitas.map((receita, index) => (
              <RecipeCard key={receita.slug} receita={receita} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto" id="manifesto">
        <svg className="manifesto__art" viewBox="0 0 200 200" aria-hidden="true">
          <path
            d="M100 195V30M100 90C60 90 42 72 42 32c40 0 58 18 58 58Zm0 55c40 0 58-18 58-58-40 0-58 18-58 58Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
        <div className="shell">
          <div className="manifesto__grid">
            <Reveal>
              <span className="eyebrow" style={{ color: 'rgba(247,242,231,0.6)' }}>
                Por que este cardápio existe
              </span>
              <h2 className="manifesto__quote">
                Alimentação inclusiva é <em>qualidade de vida</em> — e começa no prato de
                cada dia.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="manifesto__text">
                Restrição alimentar não é castigo nem moda: é saúde, é convivência, é poder
                sentar à mesa sem explicar o que se come.
              </p>
              <p className="manifesto__text">
                Estas quinze receitas foram organizadas para que ninguém precise improvisar
                sozinho. Ingredientes honestos, modo de preparo claro e dicas para acertar
                de primeira.
              </p>
              <div className="manifesto__pillars">
                <span className="pill">Sabor</span>
                <span className="pill">Saúde</span>
                <span className="pill">Inclusão</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="section-head">
              <div className="section-head__text">
                <span className="eyebrow">Do cardápio completo</span>
                <h2 className="section-title">
                  Primeiras <em>colheradas</em>.
                </h2>
              </div>
              <p className="section-lede">
                Seis receitas para abrir o apetite. Cada ficha traz ingredientes, passo a
                passo, tempo de preparo e a restrição atendida.
              </p>
            </div>
          </Reveal>
          <Stagger className="recipe-grid">
            {primeiras.map((receita) => (
              <StaggerItem key={receita.slug}>
                <RecipeCard receita={receita} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
              <Link to="/receitas" className="btn btn--ghost">
                Ver o cardápio completo
                <Icon name="arrow" size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta-band section--paper" style={{ borderTop: '1px solid var(--line-soft)' }}>
        <div className="shell cta-band__inner">
          <Reveal>
            <span className="eyebrow eyebrow--plain">
              <Icon name="heart" size={14} />
              Feito para compartilhar
            </span>
            <h2 className="cta-band__title">
              Escolha uma receita e <em>cozinhe hoje</em>.
            </h2>
            <p className="section-lede" style={{ marginTop: 18, marginInline: 'auto' }}>
              Comece pela panqueca de tapioca — 15 minutos, uma frigideira e nenhuma farinha
              de trigo.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link to="/receitas/panqueca-de-tapioca-com-frango" className="btn">
                Abrir a receita
                <Icon name="arrow" size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
