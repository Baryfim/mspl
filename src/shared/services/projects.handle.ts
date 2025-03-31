export interface IProject {
    id: number;
    title: string;
    description: string;
    url: string;
    img: string;
}

export default async function GetProjects(): Promise<IProject[] | undefined> {
    const API = `http://localhost:1337/api/projects?populate=image`

    try {
        const projects_response = await fetch(API).then(res => res.json());
        const projects: IProject[] = projects_response.data.map((project: any) => ({
            id: project.id,
            title: project.title,
            url: project.url,
            description: project.Description,
            img: 'http://localhost:1337' + project.image[0].url
        }));

        console.log(projects)
        
        return projects;
    } catch (error) {
        console.log(error);
    }
}