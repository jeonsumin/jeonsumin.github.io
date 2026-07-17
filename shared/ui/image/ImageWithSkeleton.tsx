'use client'

import Image from "next/image";
import {useState} from "react";
import {cn} from "@shared/utils";

type ImageWithSkeletonProps = {
    src: string
    alt: string
    fill?: boolean
    width?: number
    height?: number
    className?: string        // wrapper
    imageClassName?: string   // <Image />
}

export const ImageWithSkeleton = (
    {src, alt, fill, width = 400, height = 300, className, imageClassName}: ImageWithSkeletonProps
) => {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className={cn("relative overflow-hidden", className)}>
            {!loaded && (
                <div className="absolute inset-0 animate-pulse bg-gray-200 rounded-[inherit]"/>
            )}
            <Image
                src={src}
                alt={alt}
                fill={fill}
                width={fill ? undefined : width}
                height={fill ? undefined : height}
                onLoad={() => setLoaded(true)}
                className={cn(
                    "transition-opacity duration-300",
                    loaded ? "opacity-100" : "opacity-0",
                    imageClassName
                )}
            />
        </div>
    )
}
