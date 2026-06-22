import {type Project} from '../model/types'
import {sampleProject} from '../model/sample-project'

function getPortfolioApiUrl(path: string): URL {
    const apiOrigin = process.env.NEXT_PUBLIC_ERP_URL

    if (!apiOrigin) {
        throw new Error('NEXT_PUBLIC_ERP_URL must be set before building the portfolio pages.')
    }

    return new URL(path, apiOrigin)
}

export async function fetchPortfolio(): Promise<Project[]> {
    const response = await fetch(getPortfolioApiUrl('/api/portfolio'))

    if (!response.ok) {
        throw new Error(`Failed to fetch portfolio: ${response.status}`)
    }

    const projects: Project[] = await response.json()
    return projects.length > 0 ? projects : [sampleProject]
}

export async function fetchPortfolioById(id: string): Promise<Project> {
    if (id === sampleProject.id) {
        return sampleProject
    }

    const response = await fetch(getPortfolioApiUrl(`/api/portfolio/${id}`))

    if (!response.ok) {
        throw new Error(`Failed to fetch portfolio id: ${response.status}`)
    }

    return response.json()
}
