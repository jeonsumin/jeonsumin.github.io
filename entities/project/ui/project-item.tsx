import {Card} from '@shared/ui/card'
import {type Project} from '../model/types'

type ProjectItemProps = {
    project: Project
}

export const ProjectItem = ({project}: ProjectItemProps) => {
    return (
        <Card
            title={project.title}
            imagPath={project.thumbnailUrl}
            tags={project.tags}
        />
    )
}
