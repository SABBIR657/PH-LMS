import BatchSchedule from "../components/CourseDetails/BatchSchedule";

import CourseDetailsModule from "../components/CourseDetails/CourseDetailsModule";
import SubHeader from "../components/CourseDetails/SubHeader";
import CourseHighlights from "../components/CourseDetails/CourseHighlights";
import VideoFram from "../components/CourseDetails/VideoFram";
import FoundationCard from "../components/CourseDetails/FoundationCard";
import SpecialityCard from "../components/CourseDetails/SpecialityCard";
import CourseWork from "../components/CourseDetails/CourseWork";

const CourseDetails = () => {
  return (
    <div className="bg-black">
      <SubHeader />
      <BatchSchedule />
      <VideoFram />
      <CourseHighlights />
      <FoundationCard />
      <CourseDetailsModule />
      <SpecialityCard />
      <CourseWork />
    </div>
  );
};

export default CourseDetails;