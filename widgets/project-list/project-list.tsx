import {Suspense} from "react";
import {Card} from "@shared/ui/card";
import {Spinner} from "@shared/ui/spinner";

export const ProjectList = () => {
    return (
        <Suspense fallback={<Spinner/>}>
            <div className='max-w-[1140px] mx-auto px-6 grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8'>
                <Card title={""} imagPath={""} tag={""}/>
            </div>
        </Suspense>
    )
}
