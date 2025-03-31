export interface ISports {
  id: number;
  title: string;
  description: string;
  url: string;
  img: string;
}

export default async function GetSports(): Promise<ISports[] | undefined> {
  const API = `http://localhost:1337/api/sports?populate=image`

  try {
      const sports_response = await fetch(API).then(res => res.json());
      const sports: ISports[] = sports_response.data.map((sports: any) => ({
          id: sports.id,
          title: sports.title,
          url: sports.url,
          description: sports.description,
          img: 'http://localhost:1337' + sports.image[0].url
      }));

      console.log(sports)
      
      return sports;
  } catch (error) {
      console.log(error);
  }
}