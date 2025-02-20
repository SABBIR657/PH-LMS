import { Card, CardBody } from "@heroui/react";
import { Tabs, Tab } from "@heroui/tabs";
import CommmonWrapper from "../components/CommonWrapper";
import { Progress } from "@heroui/react";
import { useNavigate } from "react-router-dom";

const MyClass = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#010313] p-4">
      <CommmonWrapper>
        <div>
          <h1 className="text-white text-3xl">
            Welcome Back Sabbir Rahman, Ready for Your Next Lesson
          </h1>
        </div>

        <div>
          <div className="flex w-full flex-col ">
            <Tabs aria-label="Options">
              <Tab key="level1" title="Level 1 Course">
                <Card>
                  <CardBody className="bg-[#353958]">
                    <div className="flex items-center">
                      {/* Left Side - Image */}
                      <div className="w-1/3 pr-4">
                        <img
                          src="https://via.placeholder.com/150" // Replace with your image URL
                          alt="Course Image"
                          className="rounded-lg w-full h-auto"
                        />
                      </div>

                      {/* Right Side - Content */}
                      <div className="w-2/3">
                        <h2 className="text-white text-xl font-semibold">
                          Pro Course (Content Updated up to Batch 10)
                        </h2>
                        <h1 className="text-white text-2xl mt-2">
                          Sabbir Rahman
                        </h1>

                        {/* Progress Bar */}
                        <div className="mt-4">
                          <label className="text-white text-sm">Progress</label>
                          <Progress
                            aria-label="Loading..."
                            className="max-w-md"
                            value={60}
                          />
                        </div>

                        {/* Buttons */}
                        <div className="mt-4 flex gap-4">
                          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                          onClick={() => navigate(`/class`)}
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
              </Tab>
              <Tab key="session" title="Conceptual Session">
                <Card>
                  <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>

        <div>
          <h1 className="text-white text-2xl mt-4">Available For You</h1>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Course Image"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </CommmonWrapper>
    </div>
  );
};

export default MyClass;
