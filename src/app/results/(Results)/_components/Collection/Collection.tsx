"use client";
import classesCollections from "./Collections.module.css";
import { useEffect, useState } from "react";
import { IDocs } from "@/shared/services/docs.handle";
import GetResuls from "@/shared/services/results.handle";
import Document from "@/app/docs/(Docs)/document/Document";
import Grid from "@/app/docs/(Docs)/grid/Grid";

const Collections = () => {
  const [docs, setDocs] = useState<IDocs[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const fetchResults = await GetResuls();
        if (fetchResults) {
          setDocs(fetchResults);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchResults();
  }, []);

  const collections = docs.reduce<Record<string, IDocs[]>>((acc, doc) => {
    if (!acc[doc.collection]) {
      acc[doc.collection] = [];
    }
    acc[doc.collection].push(doc);
    return acc;
  }, {});

  const collection = "Результаты"

  return (
    <div className={classesCollections.collections}>
        <Grid>
            {collections[collection] &&
                collections[collection].map((document) => (
                    <Document key={document.title} {...document} />
            ))}
        </Grid>
    </div>
  );
};

export default Collections;
