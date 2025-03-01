const features = [
    {
        title: "Scribbles Cafe",
        image: 'https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fcar-doctor.png&w=256&q=75',
    },
    {
        title: "Scribbles Cafe",
        image: 'https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fcar-doctor.png&w=256&q=75',
    },
    {
        title: "Scribbles Cafe",
        image: 'https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fcar-doctor.png&w=256&q=75',
    },
    {
        title: "Scribbles Cafe",
        image: 'https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fcar-doctor.png&w=256&q=75',
    },
    {
        title: "Scribbles Cafe",
        image: 'https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fcar-doctor.png&w=256&q=75',
    },
    {
        title: "Scribbles Cafe",
        image: 'https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fcar-doctor.png&w=256&q=75',
    },
];

const ProjectBuild = () => {
    return (
        <div>
            <h1 className="text-6xl font-semibold text-center mb-4 mt-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
                Projects you will build_
            </h1>

            <div className="min-h-screen mt-10 flex items-center justify-center bg-[#060022] p-10 -mb-56">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full max-w-screen-xl ">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#1b0e3f] text-white p-6 rounded-2xl shadow-lg w-full max-w-[628px] h-[174px]"
                        >
                            <div className="flex justify-center items-start w-full">
                                <div className="ml-4 w-full mt-12">
                                    <h3 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500  font-semibold">{feature.title}</h3>
                                </div>
                                <img
                                    src={feature.image}
                                    alt="Check Icon"
                                    className="w-[164px] mb-6 h-[154px] rounded-md"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );
};

export default ProjectBuild;
