import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"

export function Skill({ name, image, description }: { name: string; image: string; description: string }) {
    return (
        <div>
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
