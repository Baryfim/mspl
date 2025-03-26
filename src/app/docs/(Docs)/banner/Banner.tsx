import HeadBanner from "@/shared/components/banner/Banner.component"
import classesBanner from "./Banner.module.css"


const DocsBanner = () => {
    return (
        <HeadBanner size="small">
            <h1 className={classesBanner.docs_banner_title}>
                Документы
            </h1>
        </HeadBanner>
    )
}

export default DocsBanner;