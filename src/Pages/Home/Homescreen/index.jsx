import AboutMe from "../AboutMe";
import MyWork from "../MyWork";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
export default function Home () {
    return(
        <>
            <HeroSection/>
            <AboutMe/>
            <MySkills/>
            <MyWork/>
            {/*<Testimonial/>*/}
            <ContactMe/>
            {/*<Footer/>*/}
        </>
    );
}