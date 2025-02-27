import CommonWrapper from "../components/CommonWrapper";
import SuccessfulStudents from "../components/SuccessfulStudents/SuccessfulStudents";
import SuccessStudentList from "../components/SuccessfulStudents/SuccessStudentList";

const Success = () => {
  return (
    <div>
      <SuccessfulStudents />
      <CommonWrapper>
        <SuccessStudentList />
      </CommonWrapper>
    </div>
  );
};

export default Success;
