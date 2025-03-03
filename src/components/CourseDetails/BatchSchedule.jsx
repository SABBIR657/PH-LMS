import { Button } from "@heroui/react";
import Title from "../ReusedabaleComponenet/Title";

const BatchSchedule = () => {
  return (
    <div className="text-white w-full flex justify-center items-center py-8">
      <div className="w-[1500px] flex flex-col items-center">
        <Title title="Next Batch Schedule" />
        <div className="flex justify-center items-center px-4 flex-wrap">
          <div className="card w-[1200px] bg-gray-900 rounded-md shadow-md flex justify-start p-6  space-y-4 lg:flex-row flex-col items-center">
            {/* Enrollment Starts */}
            <div className="w-[300px] sm:w-1/2 lg:w-1/4 flex items-center mb-4 lg:mb-0 justify-center">
              <img
                src="https://web.programming-hero.com/static/media/enrollment-start.781e854e.svg"
                alt="Enrollment Starts"
                className="text-4xl mr-4"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-500">
                  Enrollment Starts
                </h3>
                <p className="text-lg font-bold">10 June, 2025</p>
              </div>
            </div>
            {/* Enrollment Ends */}
            <div className="w-[300px] sm:w-1/2 lg:w-1/4 flex items-center mb-4 lg:mb-0 justify-center">
              <img
                src="https://web.programming-hero.com/static/media/enrollment-end.612d0dbd.svg"
                alt="Enrollment Ends"
                className="text-4xl mr-4"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-500">
                  Enrollment Ends
                </h3>
                <p className="text-lg font-bold">24 June, 2025</p>
              </div>
            </div>
            {/* Orientation Starts */}
            <div className="w-[300px] sm:w-1/2 lg:w-1/4 flex items-center mb-4 lg:mb-0 justify-center">
              <img
                src="https://web.programming-hero.com/static/media/webinar.91b3d48f.svg"
                alt="Orientation Starts"
                className="text-4xl mr-4"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-500">
                  Orientation Starts
                </h3>
                <p className="text-lg font-bold">28 June, 2025</p>
              </div>
            </div>
            {/* Orientation Starts */}
            <div className="w-[300px] sm:w-1/2 lg:w-1/4 flex items-center mb-4 lg:mb-0 justify-center">
              <img
                src="https://web.programming-hero.com/static/media/webinar.91b3d48f.svg"
                alt="Orientation Starts"
                className="text-4xl mr-4"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-500">
                  Orientation Starts
                </h3>
                <p className="text-lg font-bold">28 June, 2025</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8 w-full" />
        <div className="text-center">
          <h1 className="text-xl text-gray-500 sm:text-2xl md:text-xl lg:text-2xl">
            If you are interested To{" "}
            <span className="text-orange-600 block sm:inline">
              Enroll in 12th Batch
            </span>
            , register on the website
          </h1>
        </div>

        <div className="flex justify-center mt-6">
          <Button className="p-6 text-white font-semibold bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 transition">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BatchSchedule;
