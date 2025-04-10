"use client"

import HeadBanner from "@/shared/components/banner/Banner.component";
import Typography from "@/ui/Typography/Typography";
import Collections from "./_components/Collection/Collection";

const Results = () => {
    return (
        <>
            <HeadBanner size="small">
                <Typography size="medium" color="light">Результаты</Typography>
            </HeadBanner>
            <Collections />
        </>
    )
}

export default Results;