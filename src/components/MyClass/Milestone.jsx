import { Accordion, AccordionItem } from "@heroui/react";
import Module from "./Module";

const Milestone = () => {
  return (
    <div>
      <Accordion className="mb-5 bg-[#160929] px-4 py-7 rounded-xl space-y-2">
        {/* <Milestone /> */}
        <AccordionItem title="Module 1">
          <Module />
        </AccordionItem>
        <AccordionItem title="Module 2">
          <Module />
        </AccordionItem>
        <AccordionItem title="Module 3">
          <Module />
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Milestone;
