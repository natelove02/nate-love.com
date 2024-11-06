import AboutMe from "../AboutMe";
import MyWork from "../MyWork";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
export default function Home () {
    return(
        <>
            <HeroSection/>
            <MySkills/>
            <AboutMe/>
            <MyWork/>
            {/*<Testimonial/>*/}
            <ContactMe/>
            {/*<Footer/>*/}
        </>
    );
}