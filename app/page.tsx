'use client'

import {Hero} from '@/widgets/hero'
import {CategoryList} from '@/widgets/category-list'
import {ProjectList} from '@/widgets/project-list'
import {usePortfolio} from '@features/portfolio'
import {Suspense} from "react";
import {Spinner} from "@shared/ui/spinner";

export default function Home() {
    const {projects, loading, error} = usePortfolio()

    return (
        <Suspense fallback={<Spinner/>}>
            <Hero title={"Hero"} subTitle={"sub-title"}/>
            <CategoryList/>
            <ProjectList projects={projects} loading={loading} error={error}/>
        </Suspense>
    )
}
