import React, { PropsWithChildren } from 'react';
import './styles.scss';
import { Card as CardType } from '../../store/modules/cards/types';

interface Props {
  card: CardType;
  boxStyles?: React.CSSProperties;
  wrapperStyles?: React.CSSProperties;
  cardStyles?: React.CSSProperties;
  transition: 'none' | 'flip' | 'move-down' | 'move-up' | 'focus';
}

const Card : React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const {
    card, boxStyles, cardStyles, wrapperStyles, transition,
  } = props;

  return (
    <div className="card-box" style={{ width: card.width(), height: card.height, ...boxStyles }}>
      <div className={`card-wrapper ${transition} ${card.backUp ? 'back' : ''}`} style={wrapperStyles}>
        <div key={card.id} className="card" style={{ backgroundImage: `url("${card.image}")`, ...cardStyles }} />
        <div className="card-background" />
      </div>
    </div>
  );
};

export default Card;
