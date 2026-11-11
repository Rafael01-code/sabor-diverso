import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <span className="eyebrow eyebrow--plain">Erro 404</span>
        <h1>Essa receita saiu do forno.</h1>
        <p>O endereço que você procurou não existe — mas o cardápio completo está logo ali.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/receitas" className="btn">
            Ver as receitas
            <Icon name="arrow" size={16} />
          </Link>
          <Link to="/" className="btn btn--ghost">
            Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}
