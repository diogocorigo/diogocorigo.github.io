import { Title } from "../Title";

export function AboutMe() {
    return (
        <section className="flex flex-col item-center relative">
            <Title size="small">About Me</Title>

            <div className="flex flex-col gap-2 md:text-lg text-zinc-900 dark:text-zinc-100 font-sans p-2 md:p-4 border-l border-b border-dashed border-muted-foreground leading-relaxed tracking-wider">
                <p>I’m a full-stack developer with <b>5+ years of experience</b> building <b>B2B platforms, internal tools, APIs, and business systems</b> for companies across multiple industries.</p>

                <p>My main stack is <b>Laravel and Vue (Inertia)</b>, working primarily with <b>MySQL and SQL Server</b>, with occasional work in <b>.NET and Go</b>. I focus on building <b>clean, maintainable architectures and interfaces</b> that are simple and efficient to use.</p>

                <p>I enjoy tackling <b>complex problems</b>, designing structured backend systems, and turning business requirements into well-designed applications. Outside of client work, I experiment with <b>AI integrations, SaaS products, and game development</b>.</p>

                <p className="font-bold text-muted-foreground">
                    Not a fan of vibe coding!
                </p>
            </div>
        </section>
    )
}

