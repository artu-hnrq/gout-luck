'use client'

import { Record, Round } from "@/lib/sdk/types"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { RoundCheckbox } from "./checkbox"


export interface RoundsPanelProps {
    rounds: Record<Round>[]
    index: number
    setIndex: (index: number) => void
}


export function RoundsPanel({ rounds, index, setIndex }: RoundsPanelProps) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>Rodadas</CardTitle>
                <CardDescription>Selecione as rodadas que deseja visualizar</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4 w-fit">
                    {rounds.map((round, i) => {
                        return <RoundCheckbox
                            key={round.id}
                            round={round}
                            onCheckedChange={(value) => {
                                setIndex(i + 1)
                            }}
                            selected={i < index}
                        />
                    })}
                </div>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
                <p>Próximo sorteio 13/07</p>
            </CardFooter>
        </Card >
    )
}