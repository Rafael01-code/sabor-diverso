import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Receita } from '../data/recipes';
import { Icon } from './Icon';

export function RecipeCard({ receita, index = 0 }: { receita: Receita; index?: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="card"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.3), ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/receitas/${receita.slug}`} aria-label={`Ver receita: ${receita.titulo}`}>
        <div className="card__media">
          <img src={receita.imagem} alt={receita.titulo} loading="lazy" />
          <span className="card__num">{String(receita.numero).padStart(2, '0')}</span>
          <span className="card__tag">{receita.restricao}</span>
        </div>
        <div className="card__body">
          <h3 className="card__title">{receita.titulo}</h3>
          <p className="card__resumo">{receita.resumo}</p>
          <div className="card__foot">
            <span className="card__meta">
              <Icon name="clock" size={14} />
              {receita.tempo}
            </span>
            <span className="card__meta">{receita.porcoes}</span>
            <span className="card__open">
              Ver receita completa
              <span className="card__arrow">
                <Icon name="arrow" size={15} />
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
