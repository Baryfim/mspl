import classesCollections from "./Collections.module.css"
import Collection from "../collection/Collection"



const Collections = () => {
    const DATA = [
        {
            title: "Учредительные документы",
            documents: [
                {
                    title: "Устав МСПЛ",
                    date: "31.01.2024",
                },
                {
                    title: "Правила",
                    description: "J4jk iu4u34",
                    date: "31.01.2024",
                },
                {
                    title: "Устав МСПЛ",
                    date: "31.01.2024",
                },
                {
                    title: "Правила",
                    description: "J4jk iu4u34",
                    date: "31.01.2024",
                },
                {
                    title: "Устав МСПЛ",
                    date: "31.01.2024",
                },
                {
                    title: "Правила",
                    description: "J4jk iu4u34",
                    date: "31.01.2024",
                }
            ]
        },
        {
            title: "Учредительные документы",
            documents: [
                {
                    title: "Устав МСПЛ",
                    date: "31.01.2024",
                },
                {
                    title: "Правила",
                    description: "J4jk iu4u34",
                    date: "31.01.2024",
                },
                {
                    title: "Устав МСПЛ",
                    date: "31.01.2024",
                },
                {
                    title: "Правила",
                    description: "J4jk iu4u34",
                    date: "31.01.2024",
                },
                {
                    title: "Устав МСПЛ",
                    date: "31.01.2024",
                },
                {
                    title: "Правила",
                    description: "J4jk iu4u34",
                    date: "31.01.2024",
                }
            ]
        }
    ]

    return (
        <div className={classesCollections.collections}>
            {
                 DATA.map((collection) => (
                    <Collection key={collection.title} {...collection} />
                ))
            }
        </div>
    )
}

export default Collections;