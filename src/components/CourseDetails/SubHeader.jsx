import { Button } from "@heroui/react";
import Title from "../ReusedabaleComponenet/Title";

const BatchSchedule = () => {
    return (
        <div className="text-white">
            <Title title="Next Batch Schedule" />
            <div className="flex justify-center">
                <div className="card bg-gray-900 rounded-md shadow-md flex flex-wrap justify-between p-6 w-full md:w-[1232px] h-auto space-y-4 md:space-y-0">
                    <div className="w-full sm:w-1/2 md:w-1/4 flex items-center justify-center">
                        <img src="https://web.programming-hero.com/static/media/enrollment-start.781e854e.svg" alt="Enrollment Starts" className="text-4xl mr-4" />
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Enrollment Starts</h3>
                            <p className="text-lg font-bold">10 June, 2025</p>
                        </div>
                    </div>

                    <div className="card p-4 bg-gray-900 rounded-md shadow-md w-full sm:w-1/2 md:w-1/4 flex items-center justify-center">
                        <img src="https://web.programming-hero.com/static/media/enrollment-end.612d0dbd.svg" alt="Enrollment Ends" className="text-4xl mr-4" />
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Enrollment Ends</h3>
                            <p className="text-lg font-bold">24 June, 2025</p>
                        </div>
                    </div>

                    <div className="card p-4 bg-gray-900 rounded-md shadow-md w-full sm:w-1/2 md:w-1/4 flex items-center justify-center">
                        <img src="https://web.programming-hero.com/static/media/webinar.91b3d48f.svg" alt="Orientation Starts" className="text-4xl mr-4" />
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Orientation Starts</h3>
                            <p className="text-lg font-bold">28 June, 2025</p>
                        </div>
                    </div>

                    <div className="card p-4 bg-gray-900 rounded-md shadow-md w-full sm:w-1/2 md:w-1/4 flex items-center justify-center">
                        <img src="https://web.programming-hero.com/static/media/webinar.91b3d48f.svg" alt="Class Starts" className="text-4xl mr-4" />
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Class Starts</h3>
                            <p className="text-lg font-bold">30 June, 2025</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-4">
                <div className="text-center">
                    <h1 className="text-xl text-gray-500">
                        If you are interested To <span className="text-orange-600">Enroll in 12th Batch</span>, register on the website
                    </h1>

                    <div className="flex justify-center items-center mt-4">
                        <Button className="p-6 text-white text-semibold bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 transition">
                            Enroll Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BatchSchedule;
