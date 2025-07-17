export default function HeroSection() {
    return( <section id="HeroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Howdy! I'm Nate</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color"> Software Engineering </span>{" "}
                        <br /> & Data Science
                        
                    </h1>
                    <p className="hero--section--description"> I’m a driven professional with a strong background in leadership and project management, 
                        currently transitioning from the military into the engineering field. With experience in managing complex operations and spearheading special projects, 
                        I’ve also developed technical skills in programming, embedded systems, and web development. 
                        I hold a secret clearance and am excited to apply my problem-solving abilities in a new engineering career. Currently attending UT Austin's Master's of
                         Computer Science program where I am focusing my studies on Machine Learning and A.I to continually learn and work with cutting edge technology.
                    </p>
                </div>
                <a href="https://www.linkedin.com/in/nate-love" target="_blank">
                    <button className="btn btn-primary">Get in Touch</button>
                </a>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero.jpeg" alt="Hero Section" />
            </div>
        </section>
    );
    
}