'use client'

import {Hero} from '@/widgets/hero'
import {CategoryList} from '@/widgets/category-list'
import {ProjectList} from '@/widgets/project-list'
import {usePortfolio} from '@features/portfolio'

export default function Home() {
    const {projects, loading, error} = usePortfolio()

    return (
        <>
            <Hero title={"Hero"} subTitle={"sub-title"}/>
            <CategoryList/>
            <ProjectList projects={projects} loading={loading} error={error}/>
        </>
    )
}
