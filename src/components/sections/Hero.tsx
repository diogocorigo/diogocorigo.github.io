import { Download, Mail } from "lucide-react";
import { Title } from "../Title";
import { Button } from "../ui/button";

export function Hero() {
    return (
        <header className="min-h-screen flex flex-col items-center justify-center relative">
            <Title>Diogo Corigo</Title>

            <h3 className="text-base sm:text-xl lg:text-2xl leading-tight flex flex-col md:flex-row items-center gap-2 mb-4">
                <span>Full Stack Developer</span>
                <span className="hidden md:inline">| </span>
                <span className="text-muted-foreground">Lisbon, Portugal</span>
            </h3>

            <div className="flex gap-2">
                <Button onClick={() => {
                    const a = document.createElement('a')
                    a.href = '/CV Diogo Corigo.pdf'
                    a.download = 'CV Diogo Corigo.pdf'
                    a.click()
                }}>
                    <Download /> Download CV
                </Button>

                <Button variant="outline" onClick={() => {
                    document.getElementById('contact-me')?.scrollIntoView({ behavior: 'smooth' })
                }}>
                    <Mail /> Contact Me
                </Button>
            </div>
        </header>
    )
}