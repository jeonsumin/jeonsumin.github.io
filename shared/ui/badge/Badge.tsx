import {ReactNode} from "react";

type BadgeProps = {
    color?: string
    children: ReactNode
}
export const Badge = (
    {
        children,
        color
    }: BadgeProps
) => {
    return (
        <p className={``}>{children}</p>
    )
}
