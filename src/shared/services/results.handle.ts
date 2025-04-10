import { IDocs } from "./docs.handle";

export default async function GetResuls(): Promise<IDocs[] | undefined> {
    const API = `http://195.24.64.231:8888/api/docs?populate[0]=file&populate[1]=collection&filters[collection][title][$eq]=Результаты`

    try {
        const docs_response = await fetch(API).then(res => res.json());
        const docs: IDocs[] = docs_response.data.map((doc: any) => ({
            id: doc.id,
            title: doc.name,
            date: doc.date,
            description: doc.description,
            url: "http://195.24.64.231:8888" + doc.file[0].url,
            collection: doc.collection.title
        }));
        
        return docs;
    } catch (error) {
        console.log(error);
    }
}