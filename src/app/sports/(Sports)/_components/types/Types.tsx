import SportCard from "../sport_card/SportCard";
import classesTypes from "./Types.module.css"

interface ITypesProps {
    src: string;
    title: string;
}

const Types = () => {
    return (
        <div className={classesTypes.types_wrapper}>
            <SportCard />
            <SportCard reflect />
            <SportCard />
            <SportCard reflect />
        </div>
    )
}

export default Types;