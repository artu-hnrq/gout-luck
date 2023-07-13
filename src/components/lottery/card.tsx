import { Record, Lottery } from "@/lib/sdk/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function LotteryCard({ lottery }: { lottery: Record<Lottery> }) {
    return (
        <Link
            href={`/bolao/${lottery.fields.alias}`}
            className={cn(
                "group rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 transition-colors",
                "hover:border-gray-300 hover:bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
            )}
        >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                Bolão {lottery.fields.alias}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-blue-500`}>
                {lottery.fields.alias}
            </p>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {lottery.fields.tickets.length} bilhetes
            </p>
        </ Link >
    )
}