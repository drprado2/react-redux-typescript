import d2 from '../../../assets/images/2D.png';

export interface Card {
  id: string;
  name: string;
  image: any;
  height: number;
  width(): number;
  backUp?: boolean;
}

export function createCard(height: number, id: string, name: string, image: any, backUp = false) : Card {
  return {
    height, width(): number { return this.height * 0.7; }, id, name, image, backUp,
  };
}

export interface Player {
  id: string;
  name: string;
  image: any;
  cards: Card[];
  numberOfChips: number;
  countBlinds(blindAmount: number): number;
  chipType: string;
  haveButton?: boolean;
}

export interface Table {
  id: string;
  modality: string;
  flop: Card[];
  turn?: Card;
  river?: Card;
  prizePool: number;
  bets: Bet[];
  players: Player[];
  mainPlayerId: string;
  smallBlindAmount: number;
  bigBlindAmount: number;
  mainPlayer(): Player | undefined;
}

export interface Bet {
  playerId: string;
  amount: number;
}

export interface CardsState {
  cards: Card[];
  players: Player[];
  table: Table;
  tableB: Table;
  tableC: Table;
  tableD: Table;
}
