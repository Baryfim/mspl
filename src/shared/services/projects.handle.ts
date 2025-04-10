export interface IProject {
    id: number;
    title: string;
    description: string;
    url: string;
    img: string;
}

export default async function GetProjects(): Promise<IProject[] | undefined> {
    const API = `http://195.24.64.231:8888/api/projects?populate=image`

    try {
        const projects_response = await fetch(API).then(res => res.json());
        const projects: IProject[] = projects_response.data.map((project: any) => ({
            id: project.id,
            title: project.title,
            url: project.url,
            description: project.Description,
            img: 'http://195.24.64.231:8888' + project.image[0].url
        }));

        console.log(projects)
        
        return projects;
    } catch (error) {
        console.log(error);
    }
}