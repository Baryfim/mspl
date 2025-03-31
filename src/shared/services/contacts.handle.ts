export interface IContact {
  id: number;
  label: string;
  data: string;
}

export default async function GetContacts(): Promise<IContact[] | undefined> {
  const API = `http://localhost:1337/api/contacts`;

  try {
    const contacts_response = await fetch(API).then((res) => res.json());
    const contacts: IContact[] = contacts_response.data.map((contact: any) => ({
      id: contact.id,
      label: contact.label,
      data: contact.data,
    }));

    console.log(contacts);

    return contacts;
  } catch (error) {
    console.log(error);
  }
}
