export interface Card {
  readonly id: string;
  readonly name: string;
  readonly image: any;
  height: number;
  width(height: number): number;
}

export interface CardsState {
  cards: Card[];
}
