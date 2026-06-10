import {ReactNode} from "react";

type BadgeProps = {
    children: ReactNode
}
export const Badge = (
    {
        children
    }: BadgeProps
) => {
    return (
        <p className="border w-fit px-2.5 rounded-full border-muted-foreground/50 text-muted-foreground">{children}</p>
    )
}
