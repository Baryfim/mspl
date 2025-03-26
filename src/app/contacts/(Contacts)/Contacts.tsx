import HeadBanner from "@/shared/components/banner/Banner.component";
import Typography from "@/ui/Typography/Typography";
import List from "./_components/list/List";
import ContactCard from "./_components/card/Card";
import MailIcon from "@/icons/mail.icon";

const Contacts = () => {
    const contacts = [
        {
            title: "Телефон",
            value: "+7 (926) 333-33-33"
        },
        {
            title: "Email",
            value: "info@mspl.ru"
        },
        {
            title: "Телефон",
            value: "+7 (926) 333-33-33"
        },
        {
            title: "Email",
            value: "info@mspl.ru"
        },
        {
            title: "Телефон",
            value: "+7 (926) 333-33-33"
        },
        {
            title: "Email",
            value: "info@mspl.ru"
        }
    ]
    
    return (
        <>
            <HeadBanner size="small">
                <Typography color="light" size="medium">Контакты</Typography>
            </HeadBanner>
            <List>
                {contacts.map((contact) => (
                    <ContactCard key={contact.title} title={contact.title} value={contact.value} icon={<MailIcon />} />
                ))}
            </List>
        </>
    )
}

export default Contacts;