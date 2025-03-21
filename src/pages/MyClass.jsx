import { Card, CardBody } from "@heroui/react";
import { Tabs, Tab } from "@heroui/tabs";
import CommmonWrapper from "../components/CommonWrapper";
import { Progress } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetchQuery from "../hooks/shared/useFetch";
import classphoto1 from "../assets/backround-image/course1.jpg";
import classphoto2 from "../assets/backround-image/course2.png";

const MyClass = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await fetch(
  //         `${import.meta.env.VITE_BACKEND_URL}/course/all-courses`
  //       );
  //       const data = await response.json();
  //       setCourses(data.data);
  //     } catch (error) {
  //       console.error("Error fetching courses: ", error);
  //     }
  //   };

  //   fetchCourses();
  // }, []);

  const response = useFetchQuery("course/all-courses");

  useEffect(() => {
    if (response.isSuccess) {
      setCourses(response?.data?.data);
    }
  }, [response]);

  console.log(courses, "courses from MyClass on line 28");

  return (
    <div className="bg-[#010313] p-4">
      <CommmonWrapper>
        <div>
          <h1 className="text-white text-3xl">
            Welcome Back Sabbir Rahman, Ready for Your Next Lesson
          </h1>
        </div>

        {/* Tabs for Course and Conceptual Session */}
        <div className="mt-6">
          <Tabs aria-label="Options">
            {/* Courses Tab */}
            <Tab
              key="courses"
              title="Courses"
              selectedClassName="text-white bg-black" // Make active tab text white and background black
              unselectedClassName="text-black bg-transparent" // Make inactive tab text black and transparent background
            >
              <div className="flex w-full flex-col mt-4">
                {courses.length > 0 ? (
                  courses.map((course, index) => (
                    <Card key={index} className="mb-6">
                      <CardBody className="bg-[#353958]">
                        <div className="flex items-center">
                          {/* Left Side - Image */}
                          <div className="w-1/3 pr-4">
                            <img
                              src={classphoto1} // Dynamically set course image URL
                              alt={course.title}
                              className="rounded-lg w-full h-auto"
                            />
                          </div>

                          {/* Right Side - Content */}
                          <div className="w-2/3">
                            <h2 className="text-white text-xl font-semibold">
                              {course.courseName}
                            </h2>
                            <h1 className="text-white text-2xl mt-2">
                              {course.instructor}{" "}
                              {/* Dynamically display instructor */}
                            </h1>

                            {/* Progress Bar */}
                            <div className="mt-4">
                              <label className="text-white text-sm">
                                Progress
                              </label>
                              <Progress
                                aria-label="Loading..."
                                className="max-w-md"
                                value={course.progress} // Dynamically use course progress
                              />
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex gap-4">
                              <button
                                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                onClick={() =>
                                  navigate(`/checkout/${course._id}`)
                                }
                              >
                                Continue Course
                              </button>
                              <button className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                                Course Outline
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))
                ) : (
                  <p className="text-white">No courses available.</p>
                )}
              </div>
            </Tab>

            {/* Conceptual Session Tab */}
            <Tab
              key="conceptual"
              title="Conceptual Session"
              selectedClassName="text-white bg-black" // Make active tab text white and background black
              unselectedClassName="text-black  bg-transparent" // Make inactive tab text black and transparent background
            >
              <Card className="bg-[#363958]">
                <CardBody>
                  <div className="flex  ">
                    <div className="w-1/3 pr-4">
                      <img
                        src={classphoto2}
                        alt=""
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                    <div className="ml-2">
                      <h2 className="text-white text-xl font-semibold">
                        Dummy Course (Conceptual Session)
                      </h2>
                      <p className="text-white mt-2">
                        This is a placeholder for the conceptual session. You
                        can add detailed content later.
                      </p>

                      <div className="mt-12 flex gap-4">
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                          Start Session
                        </button>
                        <button className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                          View Materials
                        </button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </CommmonWrapper>
    </div>
  );
};

export default MyClass;
