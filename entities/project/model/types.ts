export type ProjectImage ={
    id: string
    sortOrder:number
    url: string
}
export type Project = {
    id: string
    title: string
    tags: string[]
    thumbnailUrl: string
    description: string
    images: ProjectImage[]
    createdAt: string
}

