import {fetchPortfolioById} from '@entities/project'
import {ProjectDetail} from '@widgets/project-detail'

export default async function Detail({params}: {params: Promise<{id: string}>}) {
    const {id} = await params
    const project = await fetchPortfolioById(id)
    return <ProjectDetail project={project}/>
}
