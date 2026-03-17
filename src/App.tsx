import { Hero, AboutMe, MyStack, ContactMe } from "./components/sections"

export function App() {
    return (
        <div className="min-h-screen w-full bg-black relative">
            <div className="absolute inset-0 z-0" style={{
                background:
                    "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)"
            }} />

            <Hero />
            
            <div className="w-full pb-32 px-4 xl:max-w-7xl mx-auto grid gap-32">
                <AboutMe />
                <MyStack />
                <ContactMe />
            </div>
        </div>
    )
}

export default App
