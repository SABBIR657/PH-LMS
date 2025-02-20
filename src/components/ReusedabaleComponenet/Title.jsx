const Title = ({ title, subtitle }) => {
    return (
        <div className=" w-full text-white text-center py-16">
            <h1 className="  text-[30px] sm:text-[40px] md:text-[45px] lg:text-[62px] leading-tight tracking-[-1%]">
                {title}
            </h1>
            <p className=" mt-2 text-sm sm:text-base md:text-lg">{subtitle}</p>
        </div>
    );
};


export default Title;