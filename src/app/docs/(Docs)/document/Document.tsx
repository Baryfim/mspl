import DeltaIcon from "@/icons/delta.icon";
import classesDocument from "./Document.module.css";

export interface IDocumentsProps {
    title: string,
    description?: string,
    date: string
}

const Document = ({
    title,
    description,
    date
}: IDocumentsProps) => {
    return (
        <div className={classesDocument.document_card}>
            <div className={classesDocument.document_card_inner}>
                <div className={classesDocument.document_card_head}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <DeltaIcon className={classesDocument.document_card_delta} />
                <p className={classesDocument.document_card_date}>{date}</p>
            </div>
        </div>
    )
}

export default Document;