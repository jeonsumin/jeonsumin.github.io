import Image from "next/image";

type CardProps = {
    title: string
    tag: string[]
}

export const Card = () => {
    return (
        <div className="flex flex-col gap-2">
            <Image
                width={400}
                height={300}
                src="https://github-production-user-asset-6210df.s3.amazonaws.com/51107183/308792839-d70fac55-2a9d-4908-aa59-1db51f84b9f7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260610T080137Z&X-Amz-Expires=300&X-Amz-Signature=12a4b765f42f642c1e4e97dda58632b34edca6324a863d3a2172c5d19df34f50&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng"
                alt={"sample"}
                className="rounded-lg"
            />
            <label className="text-xs text-muted-foreground/50">WEB</label>

            <label>ASMS</label>
        </div>
    )
}
