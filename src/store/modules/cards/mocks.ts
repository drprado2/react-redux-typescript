import avatarImage from '../../../assets/images/avatar.png';
import sk from '../../../assets/images/KS.png';
import da from '../../../assets/images/AD.png';
import s7 from '../../../assets/images/7S.png';
import d4 from '../../../assets/images/4D.png';
import d6 from '../../../assets/images/6D.png';
import {
  Card, createCard, Player, Table,
} from './types';
import d2 from '../../../assets/images/2D.png';
import c2 from '../../../assets/images/2C.png';
import h2 from '../../../assets/images/2H.png';
import s2 from '../../../assets/images/2S.png';
import d3 from '../../../assets/images/3D.png';
import c3 from '../../../assets/images/3C.png';
import h3 from '../../../assets/images/3H.png';
import s3 from '../../../assets/images/3S.png';
import c4 from '../../../assets/images/4C.png';
import h4 from '../../../assets/images/4H.png';
import s4 from '../../../assets/images/4S.png';
import d5 from '../../../assets/images/5D.png';
import c5 from '../../../assets/images/5C.png';
import h5 from '../../../assets/images/5H.png';
import s5 from '../../../assets/images/5S.png';
import c6 from '../../../assets/images/6C.png';
import h6 from '../../../assets/images/6H.png';
import s6 from '../../../assets/images/6S.png';
import d7 from '../../../assets/images/7D.png';
import c7 from '../../../assets/images/7C.png';
import h7 from '../../../assets/images/7H.png';
import d8 from '../../../assets/images/8D.png';
import c8 from '../../../assets/images/8C.png';
import h8 from '../../../assets/images/8H.png';
import s8 from '../../../assets/images/8S.png';
import d9 from '../../../assets/images/9D.png';
import c9 from '../../../assets/images/9C.png';
import h9 from '../../../assets/images/9H.png';
import s9 from '../../../assets/images/9S.png';
import d10 from '../../../assets/images/10D.png';
import c10 from '../../../assets/images/10C.png';
import h10 from '../../../assets/images/10H.png';
import s10 from '../../../assets/images/10S.png';
import dj from '../../../assets/images/JD.png';
import cj from '../../../assets/images/JC.png';
import hj from '../../../assets/images/JH.png';
import sj from '../../../assets/images/JS.png';
import dq from '../../../assets/images/QD.png';
import cq from '../../../assets/images/QC.png';
import hq from '../../../assets/images/QH.png';
import sq from '../../../assets/images/QS.png';
import dk from '../../../assets/images/KD.png';
import ck from '../../../assets/images/KC.png';
import hk from '../../../assets/images/KH.png';
import ca from '../../../assets/images/AC.png';
import ha from '../../../assets/images/AH.png';
import sa from '../../../assets/images/AS.png';

function calcBlinds(blindAmount: number): number {
  // @ts-ignore
  return this.numberOfChips / blindAmount;
}

export const mockPlayers : Player[] = [
  {
    name: 'Adriano Oliveira',
    id: '1',
    chipType: 'BB',
    numberOfChips: 12000000,
    image: avatarImage,
    haveButton: false,
    cards: [
      createCard(90, 'sk', 'Rei de Espada', sk),
      createCard(90, 'da', 'Ás de Diamante', da),
    ],
    countBlinds: calcBlinds,
  },
  {
    name: 'Dalton Ramon',
    id: '2',
    chipType: 'BB',
    numberOfChips: 89756214,
    image: avatarImage,
    cards: [
      createCard(90, 'sk', 'Rei de Espada', sk, false),
      createCard(90, 'da', 'Ás de Diamante', da, false),
    ],
    countBlinds: calcBlinds,
  },
  {
    name: 'Ramena Borba',
    id: '3',
    chipType: 'BB',
    numberOfChips: 19,
    image: avatarImage,
    cards: [
      createCard(90, 'sk', 'Rei de Espada', sk, true),
      createCard(90, 'da', 'Ás de Diamante', da, true),
    ],
    countBlinds: calcBlinds,
  },
  {
    name: 'Renata Silva',
    id: '4',
    chipType: 'BB',
    numberOfChips: 27,
    image: avatarImage,
    cards: [
      createCard(90, 'sk', 'Rei de Espada', sk, true),
      createCard(90, 'da', 'Ás de Diamante', da, true),
    ],
    countBlinds: calcBlinds,
  },
  {
    name: 'Julia Luz',
    id: '5',
    chipType: 'BB',
    numberOfChips: 31,
    image: avatarImage,
    cards: [
      createCard(90, 'sk', 'Rei de Espada', sk, true),
      createCard(90, 'da', 'Ás de Diamante', da, true),
    ],
    countBlinds: calcBlinds,
  },
  {
    name: 'Roberto Silva',
    id: '6',
    chipType: 'BB',
    numberOfChips: 3,
    image: avatarImage,
    cards: [
      createCard(90, 'sk', 'Rei de Espada', sk, true),
      createCard(90, 'da', 'Ás de Diamante', da, true),
    ],
    countBlinds: calcBlinds,
  },
  {
    name: 'Bruno Augusto',
    id: '7',
    chipType: 'BB',
    numberOfChips: 41,
    image: avatarImage,
    cards: [
      createCard(90, 'sk', 'Rei de Espada', sk, true),
      createCard(90, 'da', 'Ás de Diamante', da, true),
    ],
    countBlinds: calcBlinds,
  },
  {
    name: 'Carlos Augusto',
    id: '8',
    chipType: 'BB',
    numberOfChips: 23,
    image: avatarImage,
    cards: [
      createCard(90, 'sk', 'Rei de Espada', sk, true),
      createCard(90, 'da', 'Ás de Diamante', da, true),
    ],
    countBlinds: calcBlinds,
  },
  {
    name: 'Pedro Augusto',
    id: '9',
    chipType: 'BB',
    numberOfChips: 29,
    image: avatarImage,
    cards: [
      createCard(90, 'sk', 'Rei de Espada', sk, true),
      createCard(90, 'da', 'Ás de Diamante', da, true),
    ],
    countBlinds: calcBlinds,
  },
  {
    name: 'Julia Oliveira',
    id: '10',
    chipType: 'BB',
    numberOfChips: 19,
    image: avatarImage,
    cards: [
      createCard(90, 'sk', 'Rei de Espada', sk, true),
      createCard(90, 'da', 'Ás de Diamante', da, true),
    ],
    countBlinds: calcBlinds,
  },
];

export const mockTableA : Table = {
  bets: [
    {
      amount: 3332115,
      playerId: mockPlayers[0].id,
    },
    {
      amount: 3225,
      playerId: mockPlayers[1].id,
    },
    {
      amount: 3225,
      playerId: mockPlayers[2].id,
    },
    {
      amount: 3225,
      playerId: mockPlayers[3].id,
    },
    {
      amount: 3225,
      playerId: mockPlayers[4].id,
    },
    {
      amount: 3225,
      playerId: mockPlayers[5].id,
    },
    {
      amount: 3225,
      playerId: mockPlayers[6].id,
    },
    {
      amount: 3225,
      playerId: mockPlayers[7].id,
    },
    {
      amount: 3225,
      playerId: mockPlayers[8].id,
    },
    {
      amount: 3225,
      playerId: mockPlayers[9].id,
    },
  ],
  flop: [
    createCard(90, 's7', '7 de Espada', s7, true),
    createCard(90, 'da', 'Ás de Diamante', da, true),
    createCard(90, 'h3', '3 de Coração', h3, true),
  ],
  id: '1',
  modality: "Texas Hold'em",
  prizePool: 136439,
  river:
    createCard(90, 'd4', '4 de Diamante', d4, true),
  turn:
    createCard(90, 'd6', '6 de Diamante', d6, true),
  players: mockPlayers.map((p, i) => {
    if (i === 0) return p;
    return { ...p, cards: p.cards.map((c) => ({ ...c, height: 90 })) };
  }),
  mainPlayerId: mockPlayers[0].id,
  mainPlayer(): Player | undefined {
    return this.players.find((p) => p.id === this.mainPlayerId);
  },
  bigBlindAmount: 500,
  smallBlindAmount: 200,
};

export const mockTableB = {
  bets: [],
  flop: [],
  id: '2',
  modality: "Texas Hold'em",
  prizePool: 48478,
  river: undefined,
  turn: undefined,
  players: mockPlayers.slice(0, 4),
  mainPlayerId: mockPlayers[0].id,
  mainPlayer(): Player | undefined {
    return this.players.find((p) => p.id === this.mainPlayerId);
  },
  bigBlindAmount: 500,
  smallBlindAmount: 200,
};

export const mockTableC = {
  bets: [],
  flop: [],
  id: '3',
  modality: "Texas Hold'em",
  prizePool: 9874,
  river: undefined,
  turn: undefined,
  players: mockPlayers.slice(0, 6),
  mainPlayerId: mockPlayers[0].id,
  mainPlayer(): Player | undefined {
    return this.players.find((p) => p.id === this.mainPlayerId);
  },
  bigBlindAmount: 500,
  smallBlindAmount: 200,
};

export const mockTableD = {
  bets: [],
  flop: [],
  id: '4',
  modality: "Texas Hold'em",
  prizePool: 740,
  river: undefined,
  turn: undefined,
  players: mockPlayers.slice(0, 8),
  mainPlayerId: mockPlayers[0].id,
  mainPlayer(): Player | undefined {
    return this.players.find((p) => p.id === this.mainPlayerId);
  },
  bigBlindAmount: 500,
  smallBlindAmount: 200,
};

export const mockAllCards : Card[] = [
  createCard(90, 'd2', '2 de Diamante', d2),
  createCard(90, 'c2', '2 de Paus', c2),
  createCard(90, 'h2', '2 de Coração', h2),
  createCard(90, 's2', '2 de Espada', s2),
  createCard(90, 'd3', '3 de Diamante', d3),
  createCard(90, 'c3', '3 de Paus', c3),
  createCard(90, 'h3', '3 de Coração', h3),
  createCard(90, 's3', '3 de Espada', s3),
  createCard(90, 'd4', '4 de Diamante', d4),
  createCard(90, 'c4', '4 de Paus', c4),
  createCard(90, 'h4', '4 de Coração', h4),
  createCard(90, 's4', '4 de Espada', s4),
  createCard(90, 'd5', '5 de Diamante', d5),
  createCard(90, 'c5', '5 de Paus', c5),
  createCard(90, 'h5', '5 de Coração', h5),
  createCard(90, 's5', '5 de Espada', s5),
  createCard(90, 'd6', '6 de Diamante', d6),
  createCard(90, 'c6', '6 de Paus', c6),
  createCard(90, 'h6', '6 de Coração', h6),
  createCard(90, 's6', '6 de Espada', s6),
  createCard(90, 'd7', '7 de Diamante', d7),
  createCard(90, 'c7', '7 de Paus', c7),
  createCard(90, 'h7', '7 de Coração', h7),
  createCard(90, 's7', '7 de Espada', s7),
  createCard(90, 'd8', '8 de Diamante', d8),
  createCard(90, 'c8', '8 de Paus', c8),
  createCard(90, 'h8', '8 de Coração', h8),
  createCard(90, 's8', '8 de Espada', s8),
  createCard(90, 'd9', '9 de Diamante', d9),
  createCard(90, 'c9', '9 de Paus', c9),
  createCard(90, 'h9', '9 de Coração', h9),
  createCard(90, 's9', '9 de Espada', s9),
  createCard(90, 'd10', '10 de Diamante', d10),
  createCard(90, 'c10', '10 de Paus', c10),
  createCard(90, 'h10', '10 de Coração', h10),
  createCard(90, 's10', '10 de Espada', s10),
  createCard(90, 'dj', 'Valete de Diamante', dj),
  createCard(90, 'cj', 'Valete de Paus', cj),
  createCard(90, 'hj', 'Valete de Coração', hj),
  createCard(90, 'sj', 'Valete de Espada', sj),
  createCard(90, 'dq', 'Dama de Diamante', dq),
  createCard(90, 'cq', 'Dama de Paus', cq),
  createCard(90, 'hq', 'Dama de Coração', hq),
  createCard(90, 'sq', 'Dama de Espada', sq),
  createCard(90, 'dk', 'Rei de Diamante', dk),
  createCard(90, 'ck', 'Rei de Paus', ck),
  createCard(90, 'hk', 'Rei de Coração', hk),
  createCard(90, 'sk', 'Rei de Espada', sk),
  createCard(90, 'da', 'Ás de Diamante', da),
  createCard(90, 'ca', 'Ás de Paus', ca),
  createCard(90, 'ha', 'Ás de Coração', ha),
  createCard(90, 'sa', 'Ás de Espada', sa),
];
