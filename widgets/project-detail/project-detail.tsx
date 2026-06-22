import Image from "next/image";
import {type Project, type ProjectImage} from "@entities/project";
import {Badge} from "@shared/ui/badge";

type ProjectDetailProps = {
    project: Project
}

export const ProjectDetail = ({project}: ProjectDetailProps) => {
    return (
        <div className='max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden overflow-y-auto min-h-dvh'>
            <h1 className='text-3xl font-bold tracking-tight py-8'>
                {project.title}
            </h1>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.6fr)]">
                <div className="space-y-8 flex flex-col gap-8">
                    <div>
                        <Image
                            width={400}
                            height={300}
                            className={"w-full rounded-xl"}
                            src={project.thumbnailUrl}
                            alt={project.title}
                        />

                        {project.images?.map(({id, url}: ProjectImage) =>
                            <Image
                                key={id}
                                width={400}
                                height={300}
                                className={"w-full rounded-xl"}
                                src={url}
                                alt={project.title}
                            />
                        )}
                    </div>
                </div>

                <aside className="space-y-6 pb-10">
                    <div className="space-y-3 rounded-xl border border-border p-5 shadow-sm">
                        <div className='whitespace-pre-wrap text-sm leading-6 text-muted-foreground'>
                            {project.description}
                        </div>
                    </div>

                    <div className="space-y-3 rounded-xl border border-border p-5 shadow-sm">
                        <h2>기술 스펙</h2>
                        <div className="flex gap-2">
                            {project.tags.map((tag: string) => <Badge key={tag}>{tag}</Badge>)}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
