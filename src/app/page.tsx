import sdk from '@/lib/sdk'
import { LotteryCard } from '@/components/lottery/card'


export default async function Home() {

  const lotteries = await sdk.Lottery.list()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {lotteries.map(lottery => <LotteryCard lottery={lottery} />)}
    </main>
  )
}
