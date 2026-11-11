import { Link, useParams } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { RecipeCard } from '../components/RecipeCard';
import { Reveal } from '../components/Reveal';
import { categorias, getCategoria, receitasDaCategoria } from '../data/recipes';
import NotFound from './NotFound';

export default function CategoryDetail() {
  const { slug = '' } = useParams();
  const categoria = getCategoria(slug);

  if (!categoria) {
    return <NotFound />;
  }

  const lista = receitasDaCategoria(categoria.id);
  const outras = categorias.filter((item) => item.id !== categoria.id);

  return (
    <>
      <section className="cat-hero">
        <div className="shell">
          <nav className="crumbs" aria-label="Você está aqui">
            <Link to="/">Início</Link>
            <span className="crumbs__sep">/</span>
            <Link to="/categorias">Categorias</Link>
            <span className="crumbs__sep">/</span>
            <span>{categoria.nome}</span>
          </nav>

          <div className="cat-hero__grid">
            <div>
              <span className="cat-hero__icon">
                <Icon name={categoria.icone} size={26} />
              </span>
              <h1 className="cat-hero__title">{categoria.nome}</h1>
              <p className="cat-hero__sub">{categoria.subtitulo}</p>
              <p className="cat-hero__desc">{categoria.descricao}</p>
              <p className="pill-label" style={{ marginTop: 22 }}>
                <Icon name="book" size={15} />
                {lista.length} {lista.length === 1 ? 'receita nesta categoria' : 'receitas nesta categoria'}
              </p>
            </div>
            <div className="cat-hero__figure">
              <img src={categoria.imagem} alt={categoria.nome} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="recipe-grid">
            {lista.map((receita, index) => (
              <RecipeCard key={receita.slug} receita={receita} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell">
          <Reveal>
            <div className="section-head">
              <div className="section-head__text">
                <span className="eyebrow">Continue explorando</span>
                <h2 className="section-title">
                  Outras <em>categorias</em>.
                </h2>
              </div>
              <Link to="/categorias" className="link-arrow">
                Ver todas
                <Icon name="arrow" size={16} />
              </Link>
            </div>
          </Reveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {outras.map((item) => (
              <Link key={item.id} to={`/categorias/${item.id}`} className="chip">
                <span className="chip__label">
                  <Icon name={item.icone} size={15} />
                  {item.nome}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
