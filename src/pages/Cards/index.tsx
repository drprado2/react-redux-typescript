import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/modules/template/slice';
import { allRoutes } from '../../store/modules/auth/slice';
import c2 from '../../assets/images/2C.png';
import { StoreState } from '../../store';

interface Card {
  readonly id: number;
  readonly name: string;
  image(): JSX.Element;
}

const Cards = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector(
    (state: StoreState) => state.cards,
  );

  console.log(cards);

  const currentRoute = allRoutes.find((r) => r.id === 'cards');

  useEffect(() => {
    if (currentRoute) {
      dispatch(setCurrentPage({
        icon: currentRoute.icon,
        routeId: currentRoute.id,
        title: currentRoute.title,
      }));
    }
  }, [currentRoute]);

  return (
    <div className="cards-area">
      <h1>Cards vão aqui</h1>
      {cards.map((card) => (
        <div key={card.id} className="card" style={{ backgroundImage: `url("${card.image}")`, width: card.width(card.height), height: card.height }} />
      ))}
    </div>
  );
};

export default Cards;
