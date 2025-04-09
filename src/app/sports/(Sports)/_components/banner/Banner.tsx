import HeadBanner from "@/shared/components/banner/Banner.component"
import classesBanner from "./Banner.module.css"
import Typography from "@/ui/Typography/Typography";


const SportsBanner = () => {
    return (
        <HeadBanner size="small">
            <Typography size="medium" color="light" center>Виды спорта</Typography>
        </HeadBanner>
    )
}

export default SportsBanner;