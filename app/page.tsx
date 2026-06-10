import {Hero} from "@/widgets/hero";
import {CategoryList} from "@/widgets/category-list";
import {ProjectList} from "@/widgets/project-list/project-list";

export default function Home() {
    return (
        <>
            <Hero title={"Hero"} subTitle={"sub-title"}/>
            <CategoryList/>
            <ProjectList/>
        </>
    );
}
