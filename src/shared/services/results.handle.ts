export interface IResult {
    url: string;
}

export default async function GetResults({
    date,
    project
}: {
    date: string;
    project: string;
}): Promise<IResult | undefined> {
    const API = `http://195.24.64.231:8888/api/docs?populate=project&populate[0]=file&filters[date][$eq]=${date}&filters[project][title][$eq]=${project}`

    try {
        const doc_response = await fetch(API).then(res => res.json());
        const doc: IResult = {
            url: "http://195.24.64.231:8888" + doc_response.data[0].file[0].url,
        };
        
        return doc;
    } catch (error) {
        console.log(error);
    }
}