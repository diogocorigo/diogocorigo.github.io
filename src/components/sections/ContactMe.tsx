import { Skill } from "../Skill";
import { Title } from "../Title";
import { Button } from "../ui/button";
import { Field, FieldDescription, FieldLabel } from "../ui/field";
import { Textarea } from "../ui/textarea";

export function ContactMe() {
    return (
        <section className="flex flex-col item-center relative">
            <Title size="small">Contact Me</Title>

            <div className="flex flex-col gap-2 md:text-lg text-zinc-900 dark:text-zinc-100 font-sans p-2 md:p-4 border-l border-b border-dashed border-muted-foreground leading-relaxed tracking-wider">

                <div className="grid lg:grid-cols-2 gap-2">
                    <div className="flex flex-col gap-2 border-dashed border-muted-foreground border-b pb-2 lg:border-b-0 lg:pb-0 lg:border-r lg:pe-2 ">
                        <Skill name="Email" image="/email.png" description="diogoacorigo@gmail.com" />
                        <Skill name="Phone" image="/phone.png" description="+351 935 302 719" />
                        <Skill name="LinkedIn" image="/linkedin.svg" description="https://www.linkedin.com/in/diogoacorigo/" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Field>
                            <FieldLabel htmlFor="textarea-message">Or send me a message:</FieldLabel>
                            <Textarea id="textarea-message" placeholder="Type your message here." className="min-h-24"/>
                            <FieldDescription></FieldDescription>
                        </Field>

                        <div className="flex gap-2 items-center">
                            <Button>Send</Button>
                            <p className="text-muted-foreground text-sm">I try to respond within 24 hours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}