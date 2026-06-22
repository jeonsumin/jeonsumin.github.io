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
        <p className="w-fit px-2.5 text-sm bg-muted rounded-full text-xs">{children}</p>
    )
}
