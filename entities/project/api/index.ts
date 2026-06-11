import {type Project} from '../model/types'

export async function fetchPortfolio(): Promise<Project[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ERP_URL}/api/portfolio`)

    if (!response.ok) {
        throw new Error(`Failed to fetch portfolio: ${response.status}`)
    }

    return response.json()
}
