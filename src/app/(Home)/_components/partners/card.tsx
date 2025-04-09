import classesPartners from './partners.module.css'

const Card = ({ id }: { id: string }) => {
    return (
        <div className={classesPartners["partner"]} key={id}>
            <div className={classesPartners["partner-inner"]}>
                <h2>{id}</h2>
            </div>
        </div>
    )
}

export default Card;