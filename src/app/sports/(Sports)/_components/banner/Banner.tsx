import HeadBanner from "@/shared/components/banner/Banner.component"
import classesBanner from "./Banner.module.css"


const SportsBanner = () => {
    return (
        <HeadBanner size="small">
            <h1 className={classesBanner.about_banner_title}>
                Виды спорта
            </h1>
        </HeadBanner>
    )
}

export default SportsBanner;