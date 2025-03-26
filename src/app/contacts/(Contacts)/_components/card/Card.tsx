import classesContactCard from "./Card.module.css"


interface IContactCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
}

const ContactCard = ({
    title,
    value,
    icon
}: IContactCardProps) => {
    return (
        <div className={classesContactCard.card_wrapper}>
            <div className={classesContactCard.card_inner}>
                <div className={classesContactCard.card_info}>
                    <h1>{title}</h1>
                    <p>{value}</p>
                </div>
                {icon}
            </div>
        </div>
    )
}

export default ContactCard;