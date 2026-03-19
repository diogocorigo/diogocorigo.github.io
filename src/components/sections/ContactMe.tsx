import { Skill } from "../Skill";
import { Title } from "../Title";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

type Status = null | 'sending' | 'success' | 'error'

export function ContactMe() {

    const formRef = useRef<HTMLFormElement>(null)
    const [status, setStatus] = useState<Status>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!formRef.current) return
        setStatus('sending')

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            setStatus('success')
        } catch (err) {
            console.error(err)
            setStatus('error')
        }
    }


    return (
        <section className="flex flex-col item-center relative" id="contact-me">
            <Title size="small">Contact Me</Title>

            <div className="flex flex-col gap-2 md:text-lg text-zinc-900 dark:text-zinc-100 font-sans p-2 md:p-4 border-l border-b border-dashed border-muted-foreground leading-relaxed tracking-wider">

                <div className="grid lg:grid-cols-2 gap-2">
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <Input type="text" name="name" placeholder="Your name" required />
                        <Input type="email" name="email" placeholder="Your email" required />
                        <Textarea name="message" placeholder="Your message" className="min-h-24" required />

                        <div className="flex gap-2 items-center">
                            <Button type="submit" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Send'}
                            </Button>
                        </div>

                        <p className="text-muted-foreground text-sm">
                            {status === 'success' && "Thank you for your message! I'll respond within 24 hours."}
                            {status === 'error' && "Something went wrong. Try again."}
                        </p>
                    </form>

                    <div className="flex flex-col gap-2 border-dashed border-muted-foreground border-t pt-2 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-2 ">
                        <Skill name="Email" image="/email.svg" description="diogoacorigo@gmail.com" />
                        <Skill name="Phone" image="/phone.svg" description="+351 935 302 719" />
                        <Skill name="Curriculum" image="/curriculum.svg" description="Download my curriculum" clickable download link="/CV Diogo Corigo.pdf" />
                    </div>
                </div>
            </div>
        </section>
    )
}