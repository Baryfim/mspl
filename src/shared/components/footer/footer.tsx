"use client"
import { usePathname } from "next/navigation";
import classesFooter from "./footer.module.css"
import Link from "next/link";
import PrimaryButton from "@/ui/PrimaryButton/PrimaryButton";

export default function Footer() {
    const pathname = usePathname();
    const isCPRoute = pathname.startsWith("/cp");
    if (isCPRoute) return null;

    return (
        <footer className={classesFooter.footer_wrapper}>
            <div className={classesFooter.footer_inner}>
                <div className={classesFooter.social_media}>
                    {
                        ['fb', 'inst', 'vk', 'tg', 'twitch', 'yt'].map(social => (
                            <img src={`/${social}.png`} key={social} />
                        ))
                    }
                </div>
                <div className={classesFooter.links}>
                    <Link href="/about">О нас</Link>
                    <Link href="/docs">Документация</Link>
                    <Link href="/sports">Виды спорта</Link>
                </div>
                <hr />
                <p className={classesFooter.year}>© 2025</p>
            </div>
        </footer>
    )
}