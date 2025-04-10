"use client"
import { usePathname, useRouter } from "next/navigation";
import classesFooter from "./footer.module.css"
import Link from "next/link";
import PrimaryButton from "@/ui/PrimaryButton/PrimaryButton";

export default function Footer() {
    const pathname = usePathname();
    const isCPRoute = pathname.startsWith("/cp");

    const router = useRouter();

    if (isCPRoute) return null;
    const socialMediaLinks: {[key: string]: string} = {
        fb: "https://www.facebook.com/share/15MDQHjNud/?mibextid=wwXIfr",
        inst: "https://www.instagram.com/msplofficial/",
        vk: "https://vk.com/mspl8",
        tg: "https://t.me/mspl8",
        twitch: "https://www.twitch.tv/mspllife",
        yt: "https://www.youtube.com/@msplshow"
    }

    return (
        <footer className={classesFooter.footer_wrapper}>
            <div className={classesFooter.footer_inner}>
                <div className={classesFooter.social_media}>
                    {
                        ['fb', 'inst', 'vk', 'tg', 'twitch', 'yt'].map(social => (
                            <img style={{
                                cursor: 'pointer'
                            }} src={`/${social}.png`} onClick={() => router.push(socialMediaLinks[social])} key={social} />
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