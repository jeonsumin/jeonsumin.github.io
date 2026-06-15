import {useEffect, useState} from "react";
import {type Project, fetchPortfolioById} from "@entities/project";

export function usePortfolioById(id: string) {
    const [project, setProject] = useState<Project>({createdAt: "", id: "", tags: [], thumbnailUrl: "", title: "", description: "", images: []})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        fetchPortfolioById(id)
            .then(setProject)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [id]);

    return {project, loading, error}
}
