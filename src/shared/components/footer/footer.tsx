"use client"
import { usePathname } from "next/navigation";
import classesFooter from "./footer.module.css"
import TgIcon from "@/icons/tg.icon";
import TwitchIcon from "@/icons/twitch.icon";
import YoutubeIcon from "@/icons/youtube.icon";
import VkIcon from "@/icons/vk.icon";
import InstagramIcon from "@/icons/instagram.icon";
import FacebookIcon from "@/icons/facebook.icon";


export default function Footer() {
    const pathname = usePathname();
    const isCPRoute = pathname.startsWith("/cp");
    if (isCPRoute) return null;

    return (
        <footer className={classesFooter.footer_wrapper}>
            <div className={classesFooter.footer_inner}>
                {/* <TgIcon color="#000" colorCircle="#fff"  />
                <TwitchIcon color="#000" colorCircle="#fff" />
                <YoutubeIcon color="#000" colorCircle="#fff" />
                <VkIcon color="#000" colorCircle="#fff" />
                <InstagramIcon color="#000" colorCircle="#fff" />
                <FacebookIcon color="#000" colorCircle="#fff" /> */}
            </div>
        </footer>
    )
}