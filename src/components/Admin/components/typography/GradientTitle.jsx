const GradientTitle = ({ title = "title", className }) => {
  return (
    <div>
      <h1
        className={`text-3xl font-semibold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400 ${className}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default GradientTitle;
