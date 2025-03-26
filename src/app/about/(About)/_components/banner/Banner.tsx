import HeadBanner from "@/shared/components/banner/Banner.component"
import classesBanner from "./Banner.module.css"


const AboutBanner = () => {
    return (
        <HeadBanner size="small">
            <h1 className={classesBanner.about_banner_title}>
                О лиге
            </h1>
        </HeadBanner>
    )
}

export default AboutBanner;