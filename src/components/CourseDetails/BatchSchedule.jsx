import Title from "../ReusedabaleComponenet/Title";

const BatchSchedule = () => {
    return (
        <div className="text-white">
            <Title title="Next Batch Schedule" />
            <div className="flex justify-center ">
                <div className="flex justify-between p-6 w-[1232px] h-[185px] ">
                    <div className="card p-4 bg-gray-900 rounded-md shadow-md w-1/4 flex items-center">
                        <img src="https://web.programming-hero.com/static/media/enrollment-start.781e854e.svg" alt="Enrollment Starts" className="text-4xl mr-4" /> {/* SVG for Enrollment Starts */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Enrollment Starts</h3>
                            <p className="text-lg font-bold">10 June, 2025</p>
                        </div>
                    </div>

                    <div className="card p-4 bg-gray-900 rounded-md shadow-md w-1/4 flex items-center">
                        <img src="https://web.programming-hero.com/static/media/enrollment-end.612d0dbd.svg" alt="Enrollment Ends" className="text-4xl mr-4" /> {/* SVG for Enrollment Ends */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Enrollment Ends</h3>
                            <p className="text-lg font-bold">24 June, 2025</p>
                        </div>
                    </div>

                    <div className="card p-4 bg-gray-900 rounded-md shadow-md w-1/4 flex items-center">
                        <img src="https://web.programming-hero.com/static/media/webinar.91b3d48f.svg" alt="Orientation Starts" className="text-4xl mr-4" /> {/* SVG for Orientation Starts */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Orientation Starts</h3>
                            <p className="text-lg font-bold">28 June, 2025</p>
                        </div>
                    </div>

                    <div className="card p-4 bg-gray-900 rounded-md shadow-md w-1/4 flex items-center">
                        <img src="https://web.programming-hero.com/static/media/webinar.91b3d48f.svg" alt="Class Starts" className="text-4xl mr-4" /> {/* SVG for Class Starts */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Class Starts</h3>
                            <p className="text-lg font-bold">30 June, 2025</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BatchSchedule;
