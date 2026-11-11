import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { categorias, receitas } from '../data/recipes';
import { Icon } from './Icon';

const navItems = [
  { to: '/', label: 'Início' },
  { to: '/receitas', label: 'Receitas' },
  { to: '/categorias', label: 'Categorias' },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="brand" aria-label="Sabor Diverso — página inicial">
      <svg className="brand__mark" viewBox="0 0 64 64" aria-hidden="true">
        <circle
          cx="32"
          cy="32"
          r="24"
          fill="none"
          stroke={light ? 'rgba(247,242,231,0.6)' : '#4A5A36'}
          strokeWidth="1.4"
        />
        <path
          d="M32 47c0-9.5 4.2-16.5 13.5-19.5C44.5 37 40.5 44 32 47Z"
          fill={light ? '#D8A34A' : '#4A5A36'}
        />
        <path
          d="M32 47c0-7.2-3.2-12.4-10.4-14.6C22.4 39.6 25.6 44.7 32 47Z"
          fill={light ? '#D98A67' : '#BF5B3A'}
        />
        <circle cx="32" cy="23" r="2.6" fill="#D8A34A" />
      </svg>
      <span className="brand__text">
        <span className="brand__name">
          Sabor <em>Diverso</em>
        </span>
        <span className="brand__sub">Cardápio especial</span>
      </span>
    </Link>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

export function Layout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <ScrollProgress />

      <header className={`nav${scrolled || menuOpen ? ' nav--solid' : ''}`}>
        <div className="nav__inner">
          <Brand />
          <nav className="nav__links" aria-label="Navegação principal">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="nav__link"
                end={item.to === '/'}
                data-active={
                  item.to === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.to)
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link className="nav__link" to="/#manifesto">
              Por que importa
            </Link>
          </nav>
          <div className="nav__actions">
            <Link to="/receitas" className="btn btn--small nav__cta">
              Ver as 15 receitas
              <Icon name="arrow" size={16} />
            </Link>
            <button
              type="button"
              className="nav__toggle"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              data-open={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="nav__mobile"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * index + 0.05, duration: 0.45 }}
                >
                  <Link to={item.to}>{item.label}</Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.24, duration: 0.45 }}
              >
                <Link to="/#manifesto">Por que importa</Link>
              </motion.div>
              <p className="nav__mobile-foot">
                Comida boa também é respeito — 15 receitas, 5 categorias.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="conteudo"
          key={location.pathname}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <footer className="footer">
        <svg className="footer__art" viewBox="0 0 200 200" aria-hidden="true">
          <path
            d="M100 190V40M100 100c-30 0-45-15-45-45 30 0 45 15 45 45Zm0 40c30 0 45-15 45-45-30 0-45 15-45 45Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <div className="shell footer__inner">
          <div className="footer__top">
            <div className="footer__brand">
              <Brand light />
              <p className="footer__pitch">
                Um cardápio para diferentes necessidades alimentares. Sabor, saúde e
                inclusão em cada refeição.
              </p>
            </div>
            <div className="footer__col">
              <h4>Categorias</h4>
              <ul>
                {categorias.map((categoria) => (
                  <li key={categoria.id}>
                    <Link to={`/categorias/${categoria.id}`}>{categoria.nome}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__col">
              <h4>Receitas</h4>
              <ul>
                {receitas.slice(0, 5).map((receita) => (
                  <li key={receita.slug}>
                    <Link to={`/receitas/${receita.slug}`}>{receita.titulo}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__col">
              <h4>Navegar</h4>
              <ul>
                <li>
                  <Link to="/receitas">Todas as receitas</Link>
                </li>
                <li>
                  <Link to="/categorias">Categorias</Link>
                </li>
                <li>
                  <Link to="/#manifesto">Por que importa</Link>
                </li>
                <li>
                  <Link to="/#destaques">Destaques da semana</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} Sabor Diverso · Cardápio especial</span>
            <span>
              Alimentação inclusiva é qualidade de vida. Feito com{' '}
              <span className="footer__heart">♥</span> e sem preconceito à mesa.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
