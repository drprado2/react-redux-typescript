import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/modules/template/slice';
import { allRoutes } from '../../store/modules/auth/slice';
import { StoreState } from '../../store';
import CardStack from '../../components/CardStack';
import CardsHand from '../../components/CardsHand';
import Player from '../../components/Player';
import PokerTable from '../../components/PokerTable';

const CardsPage = () => {
  const dispatch = useDispatch();
  const {
    cards, players, table, tableB, tableC, tableD,
  } = useSelector(
    (state: StoreState) => state.cards,
  );

  const [isStackOpen, setIsStackOpen] = useState(false);
  const [isCardsBackUp, setIsCardsBackUp] = useState(false);

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
      <div>
        <h1>Cards vão aqui</h1>
        <button type="button" onClick={() => setIsStackOpen(!isStackOpen)}>{isStackOpen ? 'Retrair' : 'Expandir'} pilha</button>
        <button type="button" onClick={() => setIsCardsBackUp(!isCardsBackUp)}>Inverter cartas</button>
      </div>
      <div className="tables">
        <PokerTable table={table} />
        <PokerTable table={tableB} />
        <PokerTable table={tableC} />
        <PokerTable table={tableD} />
      </div>
      <CardStack isOpen={isStackOpen} allBackUp={isCardsBackUp} cards={cards} />
      <CardsHand cards={cards.map((c) => ({ ...c, backUp: false })).slice(0, 5)} />
    </div>
  );
};

export default CardsPage;
