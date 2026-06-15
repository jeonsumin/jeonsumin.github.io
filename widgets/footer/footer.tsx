import Link from "next/link";
import {siteConfig} from "@shared/config/site";

export const Footer = () => {
    return (
        <footer className="py-8 bg-muted px-2.5 space-y-8">
            <div className="flex gap-16 items-center h-14 px-[24px] max-w-[1140px] mx-auto">

                <div className="px-2.5 space-y-4">
                    <h2 className="text-muted-foreground text-[10px]">CONTACT</h2>
                    <a className="font-bold" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>

                <div className="px-2.5 space-y-4">
                    <h2 className="text-muted-foreground text-[10px]">FOLLOW</h2>
                    <Link className="font-bold" href={siteConfig.github}>Github</Link>
                </div>
            </div>
        </footer>
    )
}
