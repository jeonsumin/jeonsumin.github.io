import {type Project, ProjectItem} from '@entities/project'
import {Spinner} from '@shared/ui/spinner'

type ProjectListProps = {
    projects: Project[]
    loading: boolean
    error: Error | null
}

export const ProjectList = ({projects, loading, error}: ProjectListProps) => {
    if (loading) return (
        <div className='max-w-[1140px] mx-auto flex justify-center'>
            <Spinner/>
        </div>
    )
    if (error) return <p className="text-center text-red-500">{error.message}</p>

    return (
        <div className='max-w-[1140px] mx-auto px-6 grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8'>
            {projects.map(project => (
                <ProjectItem key={project.id} project={project}/>
            ))}
        </div>
    )
}
