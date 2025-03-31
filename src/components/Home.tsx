const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm <span className="home-content-name">Dioni Gálvez</span></h1>
        <p>I build responsive, user-centered web applications with modern technologies and clean, maintainable code.</p>
        <div className="home-content-buttons">
          <a href="#projects" className="home-content-button-projects">View projects</a>
          <a href="#contact" className="home-content-button-contact">Contact me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
