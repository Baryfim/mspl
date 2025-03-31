"use client"
import classesCollections from "./Collections.module.css"
import Collection from "../collection/Collection"
import { useEffect, useState } from "react"
import GetDocs, { IDocs } from "@/shared/services/docs.handle"

const Collections = () => {
    const [docs, setDocs] = useState<IDocs[]>([])

    useEffect(() => {
        const fetchDocs = async () => {
            try {
                const fetchedDocs = await GetDocs()
                if (fetchedDocs) {
                    setDocs(fetchedDocs)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchDocs()
    }, [])

    // Group docs by their collection using reduce
    const collections = docs.reduce<Record<string, IDocs[]>>((acc, doc) => {
        if (!acc[doc.collection]) {
            acc[doc.collection] = []
        }
        acc[doc.collection].push(doc)
        return acc
    }, {})

    return (
        <div className={classesCollections.collections}>
            {Object.keys(collections).map((collection) => (
                <Collection
                    key={collection}
                    title={collection}
                    documents={collections[collection]}
                />
            ))}
        </div>
    )
}

export default Collections