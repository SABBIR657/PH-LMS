const Title = ({ title, subtitle }) => {
    return (
        <div className=" w-full text-white text-center py-16">
            <h1 className="font-bold text-[14px] sm:text-[26px] md:text-[30px] lg:text-[48px] leading-tight tracking-[-1%]">
                {title}
            </h1>

            <p className=" mt-2 text-sm sm:text-base md:text-lg">{subtitle}</p>
        </div>
    );
};


export default Title;