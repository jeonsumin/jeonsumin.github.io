import {fetchPortfolio} from '@entities/project'

export async function generateStaticParams() {
    const projects = await fetchPortfolio()
    return projects.map(project => ({id: project.id}))
}

export default function Detail() {
    return (
        <>Hi</>
    )
}
