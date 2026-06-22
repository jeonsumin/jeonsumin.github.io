import {Card} from '@shared/ui/card'
import {type Project} from '../model/types'
import Link from "next/link";

type ProjectItemProps = {
    project: Project
}

export const ProjectItem = ({project}: ProjectItemProps) => {
    return (
        <Link href={`${project.id}`}>
            <Card
                title={project.title}
                imagePath={project.thumbnailUrl}
                tags={project.tags}
            />
        </Link>
    )
}
