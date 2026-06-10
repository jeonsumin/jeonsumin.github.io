import {Button} from "@/shared/ui/button";

export const CategoryList = () => {
    return (
        <div className='max-w-[1140px] mx-auto px-6'>
            <div className="flex flex-wrap gap-3 pb-8.5 border-b border-border mb-8.5">
                <Button variant={"outline"} size={'xs'}>All</Button>
                <Button variant={"outline"} size={'xs'}>Frontend</Button>
                <Button variant={"outline"} size={'xs'}>Backend</Button>
                <Button variant={"outline"} size={'xs'}>Full Stack</Button>
                <Button variant={"outline"} size={'xs'}>Mobile</Button>
                <Button variant={"outline"} size={'xs'}>DevOps</Button>
                <Button variant={"outline"} size={'xs'}>AL/ ML</Button>
            </div>
        </div>
    )
}
