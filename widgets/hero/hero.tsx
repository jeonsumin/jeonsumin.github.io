type HeroProps = {
    title: string;
    subTitle: string
}
export const Hero = ({title, subTitle}: HeroProps) => {

    return (
        <section className="[padding-block-start:clamp(64px,10vw,120px)] [padding-block-end:clamp(40px,6vw,64px)] flex flex-col justify-center items-center">
            <h1 className='font-bold text-[64px]'>{title}</h1>
            <p className="text-muted-foreground text-[17px]"> {subTitle} </p>
        </section>
    )
}
