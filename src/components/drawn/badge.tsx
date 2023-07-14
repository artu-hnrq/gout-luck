import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export interface BadgeProps {
    className?: string
    highlighted?: boolean
    children: string | number
}

export function DrawnBadge({ className, highlighted, children }: BadgeProps) {
    return (
        <Badge className={cn(
            'max-w-[1.5rem] rounded-2xl p-0.5 px-1 mx-0.5',
            'flex justify-center',
            'cursor-default, hover:cursor-default',
            highlighted
                ? 'bg-green-400 hover:bg-green-500'
                : 'bg-slate-500',
            className
        )}>
            {children}
        </Badge >
    )
}