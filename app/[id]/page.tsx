import {fetchPortfolio, fetchPortfolioById} from '@entities/project'
import {ProjectDetail} from '@widgets/project-detail'

export async function generateStaticParams() {
    const projects = await fetchPortfolio()
    return projects.map((project) => ({id: project.id}))
}

export default async function Detail({params}: {params: Promise<{id: string}>}) {
    const {id} = await params
    const project = await fetchPortfolioById(id)
    return <ProjectDetail project={project}/>
}
