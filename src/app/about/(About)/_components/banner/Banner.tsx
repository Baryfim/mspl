import HeadBanner from "@/shared/components/banner/Banner.component"
import classesBanner from "./Banner.module.css"
import Typography from "@/ui/Typography/Typography";


const AboutBanner = () => {
    return (
        <HeadBanner size="small">
           <Typography size="large" center color="light">
                О лиге
           </Typography>
        </HeadBanner>
    )
}

export default AboutBanner;