import "../../App.css"
const Loader = () => {
  const letters = "TheLifeAstro".split("");

  return (
    <div className="thelifeastro-loader">
      {letters.map((char, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
          {char}
        </span>
        
      ))}
    </div>
  );
};

export default Loader;
