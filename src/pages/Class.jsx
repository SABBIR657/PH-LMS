import { useEffect, useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import { Accordion, AccordionItem } from "@heroui/accordion";
import Milestone from "../components/MyClass/Milestone";
import { useParams } from "react-router-dom";

const NewClass = () => {
  const { courseId } = useParams();
  //   console.log(courseId, "courseId from NewClass on line 9999999999999999999");
  const [milestones, setMilestones] = useState([]);
  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/embed/gFj5RnkPgiw?si=_S7szwEpwITMofSl"
  );
  useEffect(() => {
    const fetchMilestones = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/course/allMilestonesByCourseId?course_id=${courseId}`
        );
        const data = await response.json();
        setMilestones(data.data);
        if (data.data.length > 0 && data.data[0].milestoneList.length > 0) {
          const firstMilestone = data.data[0].milestoneList[0]; // Get the first milestone
          const firstModule = firstMilestone.moduleList[0]; // Get the first module
          const firstVideo = firstModule.videoList[0]; // Get the first video

          if (firstVideo) {
            const videoId = firstVideo.videoURL.split("v=")[1]?.split("&")[0];
            setVideoSrc(`https://www.youtube.com/embed/${videoId}`);
          }
        }
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    fetchMilestones();
  }, [courseId]);

  //   console.log(milestones, "milestones from NewClass on line 222222999999999");
  console.log(videoSrc, "videoSrc from NewClass on line 333333333333333333333");

  return (
    <div>
      <CommonWrapper>
        <div className="flex gap-8 p-4">
          <div className="w-2/3">
            <iframe
              width="100%"
              height="450"
              src={videoSrc}
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
                {Array.isArray(milestones.milestoneList) &&
                  milestones.milestoneList.map((milestone) => (
                    <Accordion key={milestone._id} className="">
                      <AccordionItem
                        className="mb-5 bg-[#160929] px-4 py-7 rounded-xl"
                        title={milestone.milestoneName}
                      >
                        <Milestone
                          milestone={milestone}
                          setVideoSrc={setVideoSrc}
                        />
                      </AccordionItem>
                    </Accordion>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default NewClass;
