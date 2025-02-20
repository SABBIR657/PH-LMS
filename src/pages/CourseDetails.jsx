import BatchSchedule from "../components/CourseDetails/BatchSchedule";
import CourseDetailsModule from "../components/CourseDetails/CourseDetailsModule";
import CourseHighlights from "../components/CourseDetails/CourseHighlights";
import SubHeader from "../components/CourseDetails/SubHeader";

const CourseDetails = () => {
  return (
    <div className="bg-black">
      <SubHeader />
      <BatchSchedule />
      <CourseDetailsModule />
      <CourseHighlights />
    </div>
  );
};

export default CourseDetails;