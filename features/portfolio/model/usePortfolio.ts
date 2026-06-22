'use client'

import {useEffect, useState} from 'react'
import {fetchPortfolio, type Project} from '@entities/project'

export function usePortfolio() {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        fetchPortfolio()
            .then(setProjects)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    return {projects, loading, error}
}
