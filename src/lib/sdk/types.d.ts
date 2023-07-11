export { Table, Record, RecordId } from './core'


type datetime = string
type image = {
    url: string,
}


export interface Lottery extends Table {
    __table__: 'Event',

    alias: string,
    start: datetime,
    end: datetime,
    rounds: RecordId[],
    tickets: RecordId[],
}

export interface Round extends Table {
    __table__: 'Round',

    lottery: RecordId[],
    prize_draw: RecordId[],
    datetime: datetime,
    drawn_str: string,
}

export interface PrizeDraw extends Table {
    __table__: 'Prize Draw',

    datetime: datetime,
    drawn: RecordId[],
    drawn_str: string,
    rounds: RecordId[],
}

export interface Drawn extends Table {
    __table__: 'Drawn',

    prize_draw: RecordId[],
    number: number,
    hit: RecordId[],
}

export interface Hit extends Table {
    __table__: 'Hit',

    bet: RecordId[],
    drawn: RecordId[],
}

export interface Bet extends Table {
    __table__: 'Bet',

    ticket: RecordId[],
    number: number,
    hit: RecordId[],
}

export interface Ticket extends Table {
    __table__: 'Ticket',

    buyer: string,
    lottery: RecordId[],
    bets: RecordId[],
    bets_str: string,
    hit_count: number,
}
