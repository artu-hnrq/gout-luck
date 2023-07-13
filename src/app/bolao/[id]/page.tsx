import sdk from '@/lib/sdk'
import { LotteryPanel, LotteryPanelProps } from '@/components/lottery/panel'


export default async function LotteryDetailPage({ params }: { params: { id: string } }) {

    const lottery = await getLottery(params.id)

    return (
        <LotteryPanel lottery={lottery} />
    )
}


export async function getLottery(id: string): Promise<LotteryPanelProps> {

    let lotteries = await sdk.Lottery.list({
        formula: `alias=${id}`
    })
    const lottery: any = lotteries[0]

    lottery.rounds = await sdk.Round.list({
        formula: `lottery=${id}`
    })

    // lottery.rounds = lottery.rounds.map((round: Record<Round>, i: number) => {
    //     return {
    //         ...round,
    //         index: i,
    //         drawn: round.fields.drawn_str.split(',')
    //     }
    // })

    lottery.tickets = await sdk.Ticket.list({
        formula: `lottery=${id}`,
    })

    return lottery

}