import { Title } from "../Title";

export function Hero() {
    return (
        <header className="min-h-screen flex flex-col items-center justify-center relative">
            <Title>Diogo Corigo</Title>

            <h3 className="text-xl lg:text-2xl leading-tight">
                Full Stack Developer <span className="text-muted-foreground">| Lisbon, Portugal</span>
            </h3>
        </header>
    )
}