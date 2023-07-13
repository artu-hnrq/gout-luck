export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className={"flex items-start justify-center gap-8 w-full p-24"}>
            {children}
        </main>
    )
}