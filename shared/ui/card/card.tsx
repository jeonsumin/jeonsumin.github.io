import Image from "next/image";
import {Badge} from "../badge";

type CardProps = {
    title: string
    imagePath: string
    tags: string[]
}

export const Card = (
    {title, imagePath, tags}: CardProps
) => {
    return (
        <div className="flex flex-col gap-2">
            <Image
                width={400}
                height={300}
                src={imagePath}
                alt={title}
                className="rounded-lg"
            />
            <p className="text-xs text-muted-foreground/50">{title}</p>
            <div className="flex gap-1 flex-wrap">
                {tags.map(tag => (
                    <Badge key={tag}>{tag}</Badge>
                ))}
            </div>
        </div>
    )
}
