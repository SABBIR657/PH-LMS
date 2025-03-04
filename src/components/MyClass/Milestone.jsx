import { Accordion, AccordionItem } from "@heroui/react";
import Module from "./Module";
import { useEffect, useState } from "react";
import useFetchQuery from "../../hooks/shared/useFetch";

const Milestone = ({
  milestone,
  setVideoSrc,
  setCurrentVideoIndex,
  setQuestionPaper,
}) => {
  //   console.log(milestone, "milestone from mahim in line 5");
  const milestoneId = milestone?._id;
  const [module, setModule] = useState([]);
  
  const response = useFetchQuery(
    `milestone/allModuleByMilestoneId/${milestoneId}`
  );

  useEffect(() => {
    if (response.isSuccess) {
      setModule(response?.data?.data);
    }
  }, [response]);

  // console.log(module, "module from mahim in line 27");
  return (
    <div>
      <Accordion >
        {Array.isArray(module.moduleList) &&
          module.moduleList.map((module) => (
            <AccordionItem key={module._id} title={module.moduleName} className="bg-[#221639] px-4 py-4 my-2 rounded-xl">
              <Module
                module={module}
                setVideoSrc={setVideoSrc}
                setCurrentVideoIndex={setCurrentVideoIndex}
                setQuestionPaper={setQuestionPaper}
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
