'use client'

import {useMemo} from "react";
import {Button} from "@shared/ui/button";
import {type Project} from "@entities/project";

type CategoryListProps = {
    projects: Project[]
    active: string
    onSelect: (category: string) => void
}

export const CategoryList = ({projects, active, onSelect}: CategoryListProps) => {
    const categories = useMemo(() => {
        const tags = new Set(projects.flatMap(p => p.tags))
        return ["ALL", ...tags]
    }, [projects])

    return (
        <div className='max-w-[1140px] mx-auto px-6'>
            <div className="flex flex-wrap gap-3 pb-8.5 border-b border-border mb-8.5">
                {categories.map((item) =>
                    <Button
                        key={item}
                        className="rounded-full py-1.5 px-3.5"
                        variant={active === item ? 'default' : 'outline'}
                        size={'xs'}
                        onClick={() => onSelect(item)}
                    >
                        {item}
                    </Button>
                )}
            </div>
        </div>
    )
}
