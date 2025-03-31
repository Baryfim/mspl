import HeadBanner from "@/shared/components/banner/Banner.component"
import classesBanner from "./Banner.module.css"
import Typography from "@/ui/Typography/Typography";


const DocsBanner = () => {
    return (
        <HeadBanner size="small">
            <Typography size="large" center color="light">
                Документы
            </Typography>
        </HeadBanner>
    )
}

export default DocsBanner;