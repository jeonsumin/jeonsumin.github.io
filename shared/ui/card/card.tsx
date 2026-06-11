import Image from "next/image";
import {Label} from "../label";

type CardProps = {
    title: string
    imagPath: string
    tags: string[]
}

export const Card = (
    {title, imagPath, tags}: CardProps
) => {
    return (
        <div className="flex flex-col gap-2">
            <Image
                width={400}
                height={300}
                src={imagPath}
                alt={title}
                className="rounded-lg"
            />
            <Label className="text-xs text-muted-foreground/50">{title}</Label>
            <div className="flex gap-1 flex-wrap">
                {tags.map(tag => (
                    <Label key={tag}>{tag}</Label>
                ))}
            </div>
        </div>
    )
}
