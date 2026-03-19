import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"

export function Skill({ name, image, description, clickable, link, download }: { name: string; image: string; description: string; clickable?: boolean; link?: string; download?: boolean }) {
    return (
        <div className={clickable ? "cursor-pointer" : ""}
            onClick={() => {
                if (!clickable || !link) return

                if (download) {
                    const a = document.createElement('a')
                    a.href = link
                    a.download = ''
                    a.target = '_blank'
                    a.click()
                } else {
                    window.open(link, "_blank")
                }
            }}>
            <Item variant="outline">
                <ItemMedia>
                    <Avatar className="size-10 after:rounded-none after:border-0">
                        <AvatarImage src={`${image}`} className="rounded-none border-0" />
                        <AvatarFallback>{name}</AvatarFallback>
                    </Avatar>
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>{name}</ItemTitle>
                    <ItemDescription>{description}</ItemDescription>
                </ItemContent>
            </Item>
        </div>
    )
}
