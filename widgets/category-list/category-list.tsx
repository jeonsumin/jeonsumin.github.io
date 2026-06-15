import {act, useState} from "react";
import {Button} from "@shared/ui/button";

const CATEGORIES = ["ALL", "FrontEnd", "Backend", "Full Stack", "Mobile", 'DevOps', 'AL / ML']

export const CategoryList = () => {

    const [active, setActive] = useState("ALL")
    return (
        <div className='max-w-[1140px] mx-auto px-6'>
            <div className="flex flex-wrap gap-3 pb-8.5 border-b border-border mb-8.5">
                {
                    CATEGORIES.map((item: string, index: number) =>
                        <Button
                            key={index}
                            className="rounded-full py-1.5 px-3.5"
                            variant={active === item ? 'default' : 'outline'}
                            size={'xs'}
                            onClick={() => setActive(item)}
                        >
                            {item}
                        </Button>
                    )
                }
            </div>
        </div>
    )
}
