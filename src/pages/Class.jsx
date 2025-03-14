import { useEffect, useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import { Accordion, AccordionItem } from "@heroui/accordion";
import Milestone from "../components/MyClass/Milestone";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useFetchQuery from "../hooks/shared/useFetch";
import Quiz from "../components/Quiz/Quiz";
import { setCourseId } from "../redux/new store/courseSlice";

const NewClass = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch(); 

  const newCourseId = useSelector((state) => state.course.courseId); // Access the courseId
  console.log(newCourseId, "newwwww coursseeeeee idddddd")

  //   console.log(courseId, "courseId from NewClass on line 9999999999999999999");
  const [milestones, setMilestones] = useState([]);
  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/embed/gFj5RnkPgiw?si=_S7szwEpwITMofSl"
  );
  const [index, setIndex] = useState("");
  const [currentVideoIndex, setCurrentVideoIndex] = useState("");
  const [questionPaper, setQuestionPaper] = useState("");
  
  const playlist = useSelector((state) => state.playlist);

  

  const response = useFetchQuery(
    `course/allMilestonesByCourseId?course_id=${courseId}`
  );

  // Dispatch the courseId to Redux
  useEffect(() => {
    if (courseId) {
      dispatch(setCourseId(courseId)); // Set the courseId in Redux
    }
  }, [courseId, dispatch]);

  useEffect(() => {
    if (response.isSuccess) {
      setMilestones(response?.data?.data);
      if (response?.data?.data.length > 0) {
        const firstMilestone = response?.data?.data[0];
        const firstModule = firstMilestone.moduleList[0];
        const firstVideo = firstModule.videoList[0];

        if (firstVideo) {
          const videoId = firstVideo.videoURL.split("v=")[1]?.split("&")[0];
          setVideoSrc(`https://www.youtube.com/embed/${videoId}`);
        }
      }
    }
  }, [response]);

  //   console.log(milestones, "milestones from NewClass on line 222222999999999");
  // console.log(videoSrc, "videoSrc from NewClass on line 333333333333333333333");

  useEffect(() => {
    console.log("mainIndex from-------", currentVideoIndex);
  }, [currentVideoIndex]);

  const handleNextVideo = () => {
    if (index === currentVideoIndex) {
      const currentVideoObj = playlist[index + 1];
      const videoId = currentVideoObj.videoURL.split("v=")[1]?.split("&")[0]; // Extract video ID
      setVideoSrc(`https://www.youtube.com/embed/${videoId}`);
      setIndex(index + 2);
    } else {
      if (index < playlist.length) {
        const currentVideoObj = playlist[index];
        const videoId = currentVideoObj.videoURL.split("v=")[1]?.split("&")[0];
        setVideoSrc(`https://www.youtube.com/embed/${videoId}`); // Extract video ID
        setIndex(index + 1);
      }
    }
  };

  const handlePreviousVideo = () => {
    if (index < 0) {
      return;
    }
    if (index == currentVideoIndex) {
      const currentVideoObj = playlist[index - 1];
      const videoId = currentVideoObj.videoURL.split("v=")[1]?.split("&")[0]; // Extract video ID
      setVideoSrc(`https://www.youtube.com/embed/${videoId}`);
      setIndex(index - 2);
    } else {
      // if (index < playlist.length) {
      //   const currentVideoObj = playlist[index];
      //   const videoId = currentVideoObj.videoURL.split("v=")[1]?.split("&")[0];
      //   setVideoSrc(`https://www.youtube.com/embed/${videoId}`); // Extract video ID
      //   setIndex(index + 1);
      // }
      const currentVideoObj = playlist[index];
      const videoId = currentVideoObj.videoURL.split("v=")[1]?.split("&")[0];
      setVideoSrc(`https://www.youtube.com/embed/${videoId}`); // Extract video ID
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    setIndex(currentVideoIndex);
  }, [currentVideoIndex]);

  return (
    <div>
      <CommonWrapper>
        <div className="lg:flex lg:gap-8 lg:p-4">
          <div className="lg:w-2/3">
            {videoSrc ? (
              <iframe
                width="100%"
                height="450"
                src={videoSrc}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ) : (
              <div className="w-full h-[450px] p-1">
                {questionPaper ? (
                  <Quiz quizData={questionPaper} />
                ) : (
                  "No question paper available"
                )}
              </div>
            )}
            {/* button  */}
            <div className="mt-4 flex justify-between gap-4 px-5">
              <button
                className="px-6 py-2 bg-transparent border-hero-button text-white rounded-lg border-2 border-hero-button cursor-pointer"
                onClick={handlePreviousVideo}
              >
                Previous
              </button>
              <button
                className="px-6 py-2 text-white rounded-lg hero-button cursor-pointer"
                onClick={handleNextVideo}
              >
                Next
              </button>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div>
              {/* <h1>Milestone</h1> */}
              <div className="">
                {Array.isArray(milestones.milestoneList) &&
                  milestones.milestoneList.map((milestone, index) => (
                    <Accordion key={milestone._id} className="">
                      <AccordionItem
                        className="mb-5 bg-[#160A2A] px-4 py-7 rounded-xl"
                        title={milestone.milestoneName}
                        subtitle={"Milestone " + (index + 1)}
                      >
                        <Milestone
                          milestone={milestone}
                          setVideoSrc={setVideoSrc}
                          setCurrentVideoIndex={setCurrentVideoIndex}
                          setQuestionPaper={setQuestionPaper}
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
