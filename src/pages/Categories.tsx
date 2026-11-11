import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { categorias, receitasDaCategoria } from '../data/recipes';

export default function Categories() {
  return (
    <>
      <header className="page-head">
        <div className="shell">
          <span className="eyebrow">Cinco categorias</span>
          <h1 className="page-head__title">
            Cada necessidade,
            <br />
            uma <em>mesa posta</em>.
          </h1>
          <p className="page-head__lede">
            As receitas estão agrupadas pelo que elas resolvem: a ausência de glúten, a
            ausência de leite, a densidade proteica, a leveza do dia a dia e as adaptações
            específicas.
          </p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="shell" style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {categorias.map((categoria, index) => {
            const lista = receitasDaCategoria(categoria.id);
            return (
              <Reveal key={categoria.id} delay={index * 0.04}>
                <Link
                  to={`/categorias/${categoria.id}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 0.6fr)',
                    gap: 24,
                    alignItems: 'center',
                    background: 'var(--paper)',
                    border: '1px solid var(--line-soft)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    padding: 'clamp(20px, 3vw, 36px)',
                  }}
                >
                  <div>
                    <span className="eyebrow" style={{ marginBottom: 12 }}>
                      {String(index + 1).padStart(2, '0')} · {lista.length} receitas
                    </span>
                    <h2
                      style={{
                        fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        marginBottom: 12,
                      }}
                    >
                      <Icon name={categoria.icone} size={26} />
                      {categoria.nome}
                    </h2>
                    <p style={{ color: 'var(--muted)', maxWidth: '46ch', lineHeight: 1.7, fontSize: '0.94rem' }}>
                      {categoria.descricao}
                    </p>
                    <span className="link-arrow" style={{ marginTop: 20, display: 'inline-flex' }}>
                      Ver receitas da categoria
                      <Icon name="arrow" size={16} />
                    </span>
                  </div>
                  <div
                    style={{
                      borderRadius: '140px 140px 18px 18px',
                      overflow: 'hidden',
                      aspectRatio: '5 / 4',
                      background: 'var(--sand)',
                    }}
                  >
                    <img
                      src={categoria.imagem}
                      alt={categoria.nome}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
