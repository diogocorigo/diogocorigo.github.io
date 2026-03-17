import { Skill } from "../Skill";
import { Title } from "../Title";

export function MyStack() {
    return (
        <section className="flex flex-col item-center relative">
            <Title size="small" classes="mb-4" flipped>The Stack</Title>

            <div className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-2 md:text-lg text-zinc-900 dark:text-zinc-100 font-sans p-2 md:p-4 border-l border-b border-dashed border-muted-foreground leading-relaxed tracking-wider">
                <div id="primary" className="space-y-2">
                    <p className="font-semibold uppercase">Primary</p>
                    <Skill name="Laravel" image="/laravel.svg" description="Backend and APIs" />
                    <Skill name="Vue.js" image="/vuejs.svg" description="Frontend" />
                    <Skill name="MS SQL" image="/mssql.png" description="Database" />
                </div>

                <div id="secondary" className="space-y-2">
                    <p className="font-semibold uppercase">Secondary</p>
                    <Skill name=".NET" image="/dotnet.png" description="Windows Services" />
                    <Skill name="Golang" image="/golang.png" description="Scrappers and Microservices" />
                    <Skill name="MySql" image="/mysql.png" description="Database" />
                </div>
                
                <div id="tools" className="sm:col-span-2 xl:col-span-2">
                    <div className="grid sm:grid-cols-2 gap-2">
                        <p className="font-semibold uppercase col-span-full">Tools</p>
                        <Skill name="Git" image="/git.png" description="Version Control" />
                        <Skill name="Postman" image="/postman.svg" description="API Testing" />
                        <Skill name="Tailwind CSS" image="/tailwind.png" description="Styling" />
                        <Skill name="Figma" image="/figma.png" description="Design" />
                    </div>
                </div>
            </div>
        </section>
    )
}

