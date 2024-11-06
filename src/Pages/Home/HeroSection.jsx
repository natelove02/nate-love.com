export default function HeroSection() {
    return( <section id="HeroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Howdy! I'm Nate</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color"> Project Management </span>{" "}
                        <br /> Software Engineering
                        
                    </h1>
                    <p className="hero--section--description"> Transitioning Army officer that is a results-driven professional with an electrical engineering degree 
                    <br /> and a proven track record in project management, leading diverse teams to achieve complex goals. Skilled in programming through hands-on personal projects, with a strong foundation in technical problem-solving. Eager to leverage leadership and engineering expertise in a dynamic engineering role.
                    </p>
                </div>
                <a href="https://www.linkedin.com/in/nathaniel-love-27146115a" target="_blank">
                    <button className="btn btn-primary">Get in Touch</button>
                </a>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero.jpeg" alt="Hero Section" />
            </div>
        </section>
    );
    
}