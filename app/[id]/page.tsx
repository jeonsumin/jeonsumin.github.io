import {fetchPortfolio, fetchPortfolioById} from '@entities/project'
import {BackButton, ProjectDetail} from '@widgets/project-detail'

// GitHub Pages serves only the routes generated during `next build`.
export const dynamicParams = false

export async function generateStaticParams() {
    const projects = await fetchPortfolio()
    return projects.map((project) => ({id: project.id}))
}

export default async function Detail({params}: {params: Promise<{id: string}>}) {
    const {id} = await params
    const project = await fetchPortfolioById(id)
    return (
        <>
            <div className="max-w-[1140px] mx-auto px-4 pt-6 sm:px-6 lg:px-8">
                <BackButton/>
            </div>
            <ProjectDetail project={project}/>
        </>
    )
}
