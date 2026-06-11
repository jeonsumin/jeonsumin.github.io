import Link from "next/link";
import {siteConfig} from "@shared/config/site";

export const Footer = () => {
    return (
        <footer className="py-8 bg-muted px-2.5 space-y-8">
            <div className="px-2.5 space-y-4">
                <h2 className="text-muted-foreground text-sm">CONTACT</h2>
                <a className="" href={`mailto:${siteConfig.email}`}>CONTACT</a>
            </div>

            <div className="px-2.5 space-y-4">
                <h2 className="text-muted-foreground text-sm">FOLLOW</h2>
                <Link href={siteConfig.github}>Github</Link>
            </div>
        </footer>
    )
}
