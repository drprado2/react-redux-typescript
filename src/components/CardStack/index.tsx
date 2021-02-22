import React, { PropsWithChildren, useEffect, useState } from 'react';
import './styles.scss';
import { Card as CardType } from '../../store/modules/cards/types';
import Card from '../Card';

interface Props {
  styles?: React.CSSProperties;
  isOpen: boolean;
  allBackUp?: boolean;
  cards: CardType[];
}

const CardStack : React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const {
    styles,
    isOpen,
    cards,
    allBackUp,
  } = props;

  const [greatherHeight, setGreatherHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (cards?.length > 0) {
      const [gh] = cards.slice().sort((ca, cb) => ca.height - cb.height).map((c) => c.height);
      setGreatherHeight(gh);
      const w = cards[0].width();
      setWidth(w);
    }
  }, [cards]);

  const innerCards = cards.map((c) => ({
    ...c,
    backUp: allBackUp,
  }));

  return (
    <div className={`cards-stack ${isOpen ? 'open' : 'close'}`} style={{ height: greatherHeight, width: isOpen ? width + (10 * (cards.length - 1)) : width, ...styles }}>
      {innerCards.map((card, index) => <Card key={card.id} card={card} transition={isOpen ? 'move-up' : 'flip'} wrapperStyles={{ left: isOpen ? `${index * 15}%` : 0 }} />)}
    </div>
  );
};

export default CardStack;
