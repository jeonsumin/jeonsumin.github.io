'use client'

import {useEffect, useMemo, useState} from 'react'
import {usePathname} from 'next/navigation'
import {fetchPortfolioById, type Project} from '@entities/project'
import {Spinner} from '@shared/ui/spinner'
import {BackButton, ProjectDetail} from '@widgets/project-detail'

type ProjectResult = {
    id: string
    project?: Project
    error?: Error
}

export default function NotFound() {
    const pathname = usePathname()
    const id = useMemo(() => pathname.split('/').filter(Boolean)[0], [pathname])
    const [result, setResult] = useState<ProjectResult | null>(null)
    const project = result?.id === id ? result.project : undefined
    const error = result?.id === id ? result.error : undefined
    const loading = Boolean(id && result?.id !== id)

    useEffect(() => {
        if (!id) {
            return
        }

        let ignore = false

        fetchPortfolioById(id)
            .then((project) => {
                if (!ignore) {
                    setResult({id, project})
                }
            })
            .catch((error: Error) => {
                if (!ignore) {
                    setResult({id, error})
                }
            })

        return () => {
            ignore = true
        }
    }, [id])

    if (loading) {
        return (
            <div className="max-w-[1140px] mx-auto flex justify-center py-20">
                <Spinner/>
            </div>
        )
    }

    if (project) {
        return (
            <>
                <div className="max-w-[1140px] mx-auto px-4 pt-6 sm:px-6 lg:px-8">
                    <BackButton/>
                </div>
                <ProjectDetail project={project}/>
            </>
        )
    }

    return (
        <div className="max-w-[1140px] mx-auto px-4 py-20 text-center sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold tracking-tight">페이지를 찾을 수 없습니다.</h1>
            <p className="mt-3 text-sm text-muted-foreground">
                {error?.message ?? '요청한 주소가 올바른지 확인해주세요.'}
            </p>
            <div className="mt-6 flex justify-center">
                <BackButton/>
            </div>
        </div>
    )
}
