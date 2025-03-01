import { Accordion, AccordionItem } from "@heroui/react";
import { useEffect, useState } from "react";
import Video from "./Video";
import { addPlaylist } from "../../redux/new store/playlistSlice";
import { useDispatch } from "react-redux";
import useFetchQuery from "../../hooks/shared/useFetch";

const Module = ({
  module,
  setVideoSrc,
  setCurrentVideoIndex,
  setQuestionPaper,
}) => {
  const dispatch = useDispatch();
  const moduleId = module?._id;
  //   console.log(module, "module from maaaaaaahiiiiiiim in line 5");
  const [video, setVideo] = useState([]);

  // useEffect(() => {
  //   const fetchModule = async () => {
  //     try {
  //       const response = await fetch(
  //         `${
  //           import.meta.env.VITE_BACKEND_URL
  //         }/module/allVideosByModuleId/${moduleId}`
  //       );
  //       const data = await response.json();
  //       // console.log(data, "data in fetchModule in line 16");
  //       setVideo(data.data);
  //     } catch (error) {
  //       console.error("Error fetching courses: ", error);
  //     }
  //   };

  //   fetchModule();
  // }, [moduleId]);

  const response = useFetchQuery(`module/allVideosByModuleId/${moduleId}`);
  // console.log(response, "response from moudle 9999999999999999999999999");

  useEffect(() => {
    if (response.isSuccess) {
      setVideo(response?.data?.data);
    }
  }, [response]);

  useEffect(() => {
    if (video?.videoList?.length) {
      console.log("video has come", video?.videoList?.length);
      dispatch(addPlaylist(video?.videoList));
    }
  }, [video, dispatch]);

  const [quizResponse, setQuizResponse] = useState(null);

  const {
    data: quizData,
    isSuccess: quizIsSuccess,
    refetch: fetchQuiz,
  } = useFetchQuery(
    `/questionPaper/getSingleQuestionPaper?qp_id=${video.quizId}`,
    {},
    false // Disable automatic fetch
  );

  useEffect(() => {
    if (quizIsSuccess && quizData) {
      setQuizResponse(quizData?.data);
      setQuestionPaper(quizData?.data);
    }
  }, [quizIsSuccess, quizData, setQuestionPaper]);

  const handleQuiz = () => {
    setVideoSrc(null); // remove iframe
    fetchQuiz();
  };

  // console.log(quizResponse, "quizResponse from module newwwwwwwwwwwwwwwww");

  // console.log(video, "video from maaaaaaahiiiiiiim in line 27");

  // console.log(module, "single module from module component");
  // console.log(video.quizId, "quizId from module component 555555555555555555");

  return (
    <div className="">
      {/* <Video /> */}

      {Array.isArray(video.videoList) &&
        video?.videoList?.map((video, index) => (
          <Video
            key={video?._id}
            video={video}
            setVideoSrc={setVideoSrc}
            className="mb-2"
            index={index + 1}
            setCurrentVideoIndex={setCurrentVideoIndex}
            mainIndex={index}
          />
        ))}
      <div>
        {video.quizId && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleQuiz}
          >
            Start Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default Module;
