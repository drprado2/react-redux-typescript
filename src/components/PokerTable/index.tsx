import React, { PropsWithChildren, useEffect, useState } from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { Table } from '../../store/modules/cards/types';
import Player from '../Player';
import PokerChip from '../PokerChip';
import Card from '../Card';
import { flipFlopOfTable, flipTurnOfTable, flipRiverOfTable } from '../../store/modules/cards/slice';

interface Props {
  styles?: React.CSSProperties;
  table: Table;
}

const PokerTable : React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const {
    styles,
    table,
  } = props;

  const dispatch = useDispatch();
  const [alreadyFlipFlop, setAlreadyFlipFlop] = useState(false);
  const [alreadyFlipTurn, setAlreadyFlipTurn] = useState(false);
  const [alreadyFlipRiver, setAlreadyFlipRiver] = useState(false);

  console.log(table);

  const [playerTwo, playerThree, playerFour, playerFive, playerSix, playerSeven, playerEight, playerNine, playerTen] = table.players.filter((p) => p.id !== table.mainPlayerId);
  const mainPlayer = table.mainPlayer();

  useEffect(() => {
    if (table?.flop?.length > 0 && !alreadyFlipFlop) {
      setAlreadyFlipFlop(true);
      setTimeout(() => {
        dispatch(flipFlopOfTable(table.id));
      }, 2000);
    }
    if (table?.turn && !alreadyFlipTurn) {
      setAlreadyFlipTurn(true);
      setTimeout(() => {
        dispatch(flipTurnOfTable(table.id));
      }, 2000);
    }
    if (table?.river && !alreadyFlipRiver) {
      setAlreadyFlipRiver(true);
      setTimeout(() => {
        dispatch(flipRiverOfTable(table.id));
      }, 2000);
    }
  }, [table]);

  return (
    <div className="poker-table" style={styles}>
      <div className="table">
        <div className="inner-border" />
        <div className="center-table">
          <div className="cards">
            {table.flop.length > 0
              ? table.flop.map((c) => (<Card key={c.id} card={c} transition="none" />))
              : null}
            {table.turn ? <Card card={table.turn} transition="none" /> : null}
            {table.river ? <Card card={table.river} transition="none" /> : null}
          </div>
          <div className="prize-pool-chips">
            <PokerChip amount={table.prizePool + table.bets.reduce((a, b) => a + b.amount, 0)} bigBlindAmount={table.bigBlindAmount} />
          </div>
        </div>
        {
          mainPlayer
            ? (
              <div className="player-box player-1">
                <Player player={mainPlayer} bigBlindAmount={table.bigBlindAmount} showCards />
                {mainPlayer.haveButton || <div className="poker-button">D</div>}
                <div className="player-bet"><PokerChip amount={table.bets.find((x) => x.playerId === mainPlayer.id)?.amount ?? 0} bigBlindAmount={table.bigBlindAmount} ilustrativeBet /></div>
              </div>
            ) : null
        }
        {
          playerTwo
            ? (
              <div className="player-box player-2">
                <Player player={playerTwo} bigBlindAmount={table.bigBlindAmount} hiddenHand showCards />
                <div className="player-bet"><PokerChip amount={table.bets.find((x) => x.playerId === playerTwo.id)?.amount ?? 0} bigBlindAmount={table.bigBlindAmount} ilustrativeBet /></div>
                {playerTwo.haveButton || <div className="poker-button">D</div>}
              </div>
            ) : null
        }
        {
          playerThree
            ? (
              <div className="player-box player-3">
                <Player player={playerThree} bigBlindAmount={table.bigBlindAmount} imageRight hiddenHand showCards />
                <div className="player-bet"><PokerChip amount={table.bets.find((x) => x.playerId === playerThree.id)?.amount ?? 0} bigBlindAmount={table.bigBlindAmount} ilustrativeBet /></div>
                {playerThree.haveButton || <div className="poker-button">D</div>}
              </div>
            ) : null
        }
        {
          playerFour
            ? (
              <div className="player-box player-4">
                <Player player={playerFour} bigBlindAmount={table.bigBlindAmount} imageRight hiddenHand showCards />
                <div className="player-bet"><PokerChip amount={table.bets.find((x) => x.playerId === playerFour.id)?.amount ?? 0} bigBlindAmount={table.bigBlindAmount} ilustrativeBet /></div>
                {playerFour.haveButton || <div className="poker-button">D</div>}
              </div>
            ) : null
        }
        {
          playerFive
            ? (
              <div className="player-box player-5">
                <Player player={playerFive} bigBlindAmount={table.bigBlindAmount} hiddenHand showCards />
                <div className="player-bet"><PokerChip amount={table.bets.find((x) => x.playerId === playerFive.id)?.amount ?? 0} bigBlindAmount={table.bigBlindAmount} ilustrativeBet /></div>
                {playerFive.haveButton || <div className="poker-button">D</div>}
              </div>
            ) : null
        }
        {
          playerSix
            ? (
              <div className="player-box player-6">
                <Player player={playerSix} bigBlindAmount={table.bigBlindAmount} imageRight hiddenHand showCards />
                <div className="player-bet"><PokerChip amount={table.bets.find((x) => x.playerId === playerSix.id)?.amount ?? 0} bigBlindAmount={table.bigBlindAmount} ilustrativeBet /></div>
                {playerSix.haveButton || <div className="poker-button">D</div>}
              </div>
            ) : null
        }
        {
          playerSeven
            ? (
              <div className="player-box player-7">
                <Player player={playerSeven} bigBlindAmount={table.bigBlindAmount} hiddenHand showCards />
                <div className="player-bet"><PokerChip amount={table.bets.find((x) => x.playerId === playerSeven.id)?.amount ?? 0} bigBlindAmount={table.bigBlindAmount} ilustrativeBet /></div>
                {playerSeven.haveButton || <div className="poker-button">D</div>}
              </div>
            ) : null
        }
        {
          playerEight
            ? (
              <div className="player-box player-8">
                <Player player={playerEight} bigBlindAmount={table.bigBlindAmount} imageRight hiddenHand showCards />
                <div className="player-bet"><PokerChip amount={table.bets.find((x) => x.playerId === playerEight.id)?.amount ?? 0} bigBlindAmount={table.bigBlindAmount} ilustrativeBet /></div>
                {playerEight.haveButton || <div className="poker-button">D</div>}
              </div>
            ) : null
        }
        {
          playerNine
            ? (
              <div className="player-box player-9">
                <Player player={playerNine} bigBlindAmount={table.bigBlindAmount} hiddenHand showCards />
                <div className="player-bet"><PokerChip amount={table.bets.find((x) => x.playerId === playerNine.id)?.amount ?? 0} bigBlindAmount={table.bigBlindAmount} ilustrativeBet /></div>
                {playerNine.haveButton || <div className="poker-button">D</div>}
              </div>
            ) : null
        }
        {
          playerTen
            ? (
              <div className="player-box player-10">
                <Player player={playerTen} bigBlindAmount={table.bigBlindAmount} imageRight hiddenHand showCards />
                <div className="player-bet"><PokerChip amount={table.bets.find((x) => x.playerId === playerTen.id)?.amount ?? 0} bigBlindAmount={table.bigBlindAmount} ilustrativeBet /></div>
                {playerTen.haveButton || <div className="poker-button">D</div>}
              </div>
            ) : null
        }
      </div>
    </div>
  );
};

export default PokerTable;
