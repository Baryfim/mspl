"use client"

import HeadBanner from "@/shared/components/banner/Banner.component";
import Typography from "@/ui/Typography/Typography";
import Form from "./_components/Form/form";

const Results = () => {
    return (
        <>
            <HeadBanner size="small">
                <Typography center size="medium" color="light">Результаты</Typography>
            </HeadBanner>
            <Form />
        </>
    )
}

export default Results;