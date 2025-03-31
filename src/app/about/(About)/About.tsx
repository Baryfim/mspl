"use client";
import { useEffect, useState } from "react";
import AboutBanner from "./_components/banner/Banner";
import InfoContent from "./_components/info/InfoContent";
import OurProjects from "./_components/our_projects/OurProjects";
import GetProjects, { IProject } from "@/shared/services/projects.handle";

const About = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const fetchedProjects = await GetProjects();
        if (fetchedProjects) {
          setProjects(fetchedProjects);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDocs();
  }, []);

  return (
    <>
      <AboutBanner />
      <InfoContent />
      <OurProjects
        projects={projects}
      />
    </>
  );
};

export default About;
