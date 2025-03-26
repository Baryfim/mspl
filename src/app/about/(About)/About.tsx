import AboutBanner from "./_components/banner/Banner";
import InfoContent from "./_components/info/InfoContent";
import OurProjects from "./_components/our_projects/OurProjects";

const About = () => {
  return (
    <>
      <AboutBanner />
      <InfoContent />
      <OurProjects
        projects={[
          {
            id: "1",
            title: "Project 1",
            description: "Description 1",
          },
          {
            id: "2",
            title: "Project 2",
            description: "Description 2",
          },
          {
            id: "3",
            title: "Project 3",
            description: "Description 3",
          },
          {
            id: "4",
            title: "Project 4",
            description: "Description 6",
          },
          // {
          //   id: "5",
          //   title: "Project 5",
          //   description: "Description 9",
          // },
            // {
            //   id: "6",
            //   title: "Project 6",
            //   description: "Description 9",
            // },
          
        ]}
      />
    </>
  );
};

export default About;
