const GradientButton = ({ text = "Click", onClick = () => {} }) => {
  return (
    <button
      style={{
        border: "2px solid",
        borderImage: "linear-gradient(to right, #0066ff, #ff32d6) 1",
        padding: "3px 6px",
        // background: "#44496D",
        // color: "#F1F5F9",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GradientButton;
