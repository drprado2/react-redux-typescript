import React, { PropsWithChildren } from 'react';
import './styles.scss';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { Card as CardType, Player as PlayerType } from '../../store/modules/cards/types';
import CardsHand from '../CardsHand';

interface Props {
  styles?: React.CSSProperties;
  player: PlayerType;
  imageRight?: boolean;
  hiddenHand?: boolean;
  showCards?: boolean;
  bigBlindAmount: number;
}

const useStyles = makeStyles((theme) => ({
  customWidth: {
    fontSize: '.9em',
  },
}));

const Player : React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const {
    styles,
    player,
    imageRight,
    hiddenHand,
    bigBlindAmount,
    showCards,
  } = props;

  const bigBlindsLegend = Math.round((player.countBlinds(bigBlindAmount) + Number.EPSILON) * 100) / 100;

  const classes = useStyles();

  return (
    <Tooltip title={`${bigBlindsLegend} BB`} placement="top-start" arrow classes={{ tooltip: classes.customWidth }}>
      <div className={`player ${imageRight ? 'right' : 'left'} ${hiddenHand ? 'hidden' : ''} ${showCards ? 'show-cards' : ''}`}>
        <div className={`cards ${hiddenHand ? 'hidden' : ''} ${showCards ? 'show-cards' : ''}`}>
          <CardsHand cards={player.cards} />
        </div>
        <div className="avatar-area">
          <div className={`text-area ${imageRight ? 'right' : 'left'}`}>
            <div className="name"><span>{player.name}</span></div>
            <hr />
            <div className="chips">
              <span className="blinds-count">(<NumberFormat decimalScale={2} value={player.countBlinds(bigBlindAmount)} displayType="text" thousandSeparator prefix="" /> BB)</span>
              <span className="amount"><NumberFormat decimalScale={2} value={player.numberOfChips} displayType="text" thousandSeparator prefix="" /></span>
            </div>
          </div>
          <img className={`avatar-image ${imageRight ? 'right' : 'left'}`} alt="avatar" src={player.image} />
        </div>
      </div>
    </Tooltip>
  );
};

export default Player;
