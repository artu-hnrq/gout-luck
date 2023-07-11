import { AirtableSDK } from './core'
import Goutluck from './types'


// TODO: get sdk table name argument from type template
export default {

    Lottery: new AirtableSDK<Goutluck.Lottery>('Lottery'),
    Round: new AirtableSDK<Goutluck.Round>('Round'),
    PrizeDraw: new AirtableSDK<Goutluck.PrizeDraw>('PrizeDraw'),
    Drawn: new AirtableSDK<Goutluck.Drawn>('Drawn'),

    Hit: new AirtableSDK<Goutluck.Hit>('Hit'),
    Bet: new AirtableSDK<Goutluck.Bet>('Bet'),
    Ticket: new AirtableSDK<Goutluck.Ticket>('Ticket'),
}

export type { Goutluck }
