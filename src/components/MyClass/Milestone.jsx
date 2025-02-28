import { Accordion, AccordionItem } from "@heroui/react";
import Module from "./Module";
import { useEffect, useState } from "react";

const Milestone = ({ milestone, setVideoSrc, setCurrentVideoIndex }) => {
  //   console.log(milestone, "milestone from mahim in line 5");
  const milestoneId = milestone?._id;
  const [module, setModule] = useState([]);
  useEffect(() => {
    const fetchModule = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/milestone/allModuleByMilestoneId/${milestoneId}`
        );
        const data = await response.json();
        // console.log(data, "data in fetchModule in line 16");
        setModule(data.data);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    fetchModule();
  }, [milestoneId]);

  // console.log(module, "module from mahim in line 27");
  return (
    <div>
      <Accordion className="">
        {Array.isArray(module.moduleList) &&
          module.moduleList.map((module) => (
            <AccordionItem key={module._id} title={module.moduleName}>
              <Module
                module={module}
                setVideoSrc={setVideoSrc}
                setCurrentVideoIndex={setCurrentVideoIndex}
              />
            </AccordionItem>
          ))}
        {/* <AccordionItem title="Module 1">
          <Module />
        </AccordionItem> */}
      </Accordion>
    </div>
  );
};

export default Milestone;
