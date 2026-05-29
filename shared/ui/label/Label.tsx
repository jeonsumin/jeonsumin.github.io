import {ReactNode} from "react";

type LabelProps = {
    className?: string
    children: ReactNode
}

export const Label = (
    {
        children
        , className = ''
    }: LabelProps
) => {
    return (
        <p className={`${className}`}>{children}</p>
    )
}
