"use client"
import DeltaIcon from "@/icons/delta.icon";
import classesDocument from "./Document.module.css";
import { useRouter } from "next/navigation";


export interface IDocumentsProps {
    title: string,
    description?: string,
    date: string,
    url: string
}

const Document = ({
    title,
    description,
    date,
    url
}: IDocumentsProps) => {
    const router = useRouter();

    return (
        <div className={classesDocument.document_card} onClick={() => router.push(url)}>
            <div className={classesDocument.document_card_inner}>
                <div className={classesDocument.document_card_head}>
                    <h2 style={{
                        fontSize: title.length > 99 ? "14px" : "16px"
                    }}>{title}</h2>
                    <p>{description}</p>
                </div>
                <DeltaIcon className={classesDocument.document_card_delta} />
                <p className={classesDocument.document_card_date}>{date}</p>
            </div>
        </div>
    )
}

export default Document;