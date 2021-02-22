import React, { PropsWithChildren, useEffect, useState } from 'react';
import './styles.scss';
import { Card as CardType } from '../../store/modules/cards/types';
import Card from '../Card';

interface Props {
  styles?: React.CSSProperties;
  cards: CardType[];
}

const CardsHand : React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const {
    styles,
    cards,
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

  return (
    <div
      className="cards-hand"
      style={{
        height: greatherHeight, width, marginRight: cards.length * 35 - 35, marginBottom: cards.length * 5 - 5, ...styles,
      }}
    >
      {cards.map((card, index) => <Card key={card.id} transition="none" card={card} boxStyles={{ left: `${index * 49}%`, top: index * 5 }} />)}
    </div>
  );
};

export default CardsHand;
