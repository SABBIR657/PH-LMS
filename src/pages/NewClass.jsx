import { useEffect, useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import { Accordion, AccordionItem } from "@heroui/accordion";
import Milestone from "../components/MyClass/Milestone";
import { useParams } from "react-router-dom";

const NewClass = () => {
  const { courseId } = useParams();
  console.log(courseId, "courseId from NewClass on line 9999999999999999999");
  //   const [courses, setCourses] = useState([]);

  //   useEffect(() => {
  //     const fetchCourses = async () => {
  //       try {
  //         const response = await fetch(
  //           `${import.meta.env.VITE_BACKEND_URL}/course/all-courses`
  //         );
  //         const data = await response.json();
  //         setCourses(data.data);
  //       } catch (error) {
  //         console.error("Error fetching courses: ", error);
  //       }
  //     };

  //     fetchCourses();
  //   }, []);

  return (
    <div>
      <CommonWrapper>
        <div className="flex gap-8 p-4">
          <div className="w-2/3">
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/gFj5RnkPgiw?si=_S7szwEpwITMofSl"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            {/* button  */}
            <div className="mt-4 flex justify-between gap-4">
              <button className="px-6 py-2 bg-transparent border-hero-button text-white rounded-lg border-2 border-hero-button cursor-pointer">
                Previous
              </button>
              <button className="px-6 py-2 text-white rounded-lg hero-button cursor-pointer">
                Next
              </button>
            </div>
          </div>
          <div className="w-1/3">
            <div>
              <h1>Milestone</h1>
              <div className="">
                <Accordion className="">
                  <AccordionItem
                    className="mb-5 bg-[#160929] px-4 py-7 rounded-xl"
                    title="Milestone 1"
                  >
                    <Milestone />
                  </AccordionItem>
                  <AccordionItem
                    className="mb-5 bg-[#160929] px-4 py-7 rounded-xl"
                    title="Milestone 2"
                  >
                    <Milestone />
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default NewClass;
