import {Badge} from "../badge";
import {ImageWithSkeleton} from "../image";

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
            <ImageWithSkeleton
                fill
                src={imagePath}
                alt={title}
                className="aspect-[4/3] w-full rounded-lg"
                imageClassName="object-cover"
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
