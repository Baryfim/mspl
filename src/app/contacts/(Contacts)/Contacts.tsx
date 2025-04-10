"use client"
import HeadBanner from "@/shared/components/banner/Banner.component";
import Typography from "@/ui/Typography/Typography";
import List from "./_components/list/List";
import ContactCard from "./_components/card/Card";
import MailIcon from "@/icons/mail.icon";
import { useEffect, useState } from "react";
import GetContacts, { IContact } from "@/shared/services/contacts.handle";

const Contacts = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const fetchedContacts = await GetContacts();
        if (fetchedContacts) {
          setContacts(fetchedContacts);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDocs();
  }, []);

  return (
    <>
      <HeadBanner size="small">
        <Typography color="light" size="medium" center>
          Контакты
        </Typography>
      </HeadBanner>
      <List>
        {contacts.map((contact) => (
          <ContactCard
            key={contact.label}
            title={contact.label}
            value={contact.data}
            icon={<MailIcon />}
          />
        ))}
      </List>
    </>
  );
};

export default Contacts;
