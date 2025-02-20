

const SubHeader = () => {
    return (
        <div className="relative  bg-gradient-to-b from-[#140022] to-[#2b0142] text-center text-white py-16 px-4">

            <h2 className="text-3xl md:text-4xl font-bold">
                Breakthroughs Begin With Learning, Reach <br />
                For The Future You Deserve
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
                Master MongoDB, Express, React, and Node.js to build efficient,
                full-stack web applications from scratch. Connect front-end and
                back-end seamlessly for a smooth user experience.
            </p>


            <div>

                <img
                    src="https://web.programming-hero.com/static/media/Html.b47d1822.svg"
                    alt="HTML"
                    className="absolute top-10 left-5 w-[55px] h-[55px] rounded-full bg-[#6a0080] p-2 shadow-lg animate-spin"
                />
                <img
                    src="https://web.programming-hero.com/static/media/React.fa7754d1.svg"
                    alt="React"
                    className="absolute top-10 right-10 w-[55px] h-[55px] rounded-full bg-[#6a0080] p-2 shadow-lg animate-spin"
                />
                <img
                    src="https://web.programming-hero.com/static/media/Tailwind.ad0ef0ec.svg"
                    alt="Tailwind CSS"
                    className="absolute bottom-10 right-10 w-[55px] h-[55px] rounded-full bg-[#6a0080] p-2 shadow-lg animate-spin"
                />
                <img
                    src="https://web.programming-hero.com/static/media/React.fa7754d1.svg"
                    alt="Tailwind CSS"
                    className="absolute bottom-10 left-10 w-[55px] h-[55px] rounded-full bg-[#6a0080] p-2 shadow-lg animate-spin"
                />
            </div>

        </div>
    );
};



export default SubHeader;