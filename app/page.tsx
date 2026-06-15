'use client'

import {useMemo, useState} from "react";
import {Hero} from '@/widgets/hero'
import {CategoryList} from '@/widgets/category-list'
import {ProjectList} from '@/widgets/project-list'
import {usePortfolio} from '@features/portfolio'
import {Suspense} from "react";
import {Spinner} from "@shared/ui/spinner";

export default function Home() {
    const {projects, loading, error} = usePortfolio()
    const [active, setActive] = useState("ALL")

    const filtered = useMemo(() => {
        if (active === "ALL") return projects
        return projects.filter(p => p.tags.includes(active))
    }, [projects, active])

    return (
        <Suspense fallback={<Spinner/>}>
            <Hero title={"Hero"} subTitle={"sub-title"}/>
            <CategoryList projects={projects} active={active} onSelect={setActive}/>
            <ProjectList projects={filtered} loading={loading} error={error}/>
        </Suspense>
    )
}
