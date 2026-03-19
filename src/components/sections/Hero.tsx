import { Title } from "../Title";

export function Hero() {
    return (
        <header className="min-h-screen flex flex-col items-center justify-center relative">
            <Title>Diogo Corigo</Title>

            <h3 className="text-base sm:text-xl lg:text-2xl leading-tight flex flex-col md:flex-row items-center gap-2">
                <span>Full Stack Developer</span>
                <span className="hidden md:inline">| </span>
                <span className="text-muted-foreground">Lisbon, Portugal</span>
            </h3>
        </header>
    )
}