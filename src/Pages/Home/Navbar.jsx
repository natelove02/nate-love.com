import {useState, useEffect } from "react";
import {Link} from "react-scroll";
import {Link as RouterLink, useLocation} from "react-router-dom";

function Navbar(){
    const [navActive, setNavActive] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';
    
    const toggleNav = () => {
        setNavActive(!navActive)
    };
    const closeMenu = () => {
        setNavActive(false)
    };

    useEffect(() => {
        const handleResize = () =>{
            if(window.innerWidth <= 500) {
                closeMenu
            }
        };
        window.addEventListener("resize",handleResize);

        return () => {
            window.removeEventListener("resize",handleResize);
        };
    },[]);

    useEffect(() =>{
        if(window.innerWidth <= 1200){ closeMenu };
    }, [] );
    
    return(
        <nav className={`navbar ${navActive? "active":""}`}> 
            <div>
                <RouterLink to="/" onClick={closeMenu}>Nate Love</RouterLink>
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active": ""}`}>
                <ul>
                    <li>
                        {isHome ? (
                            <Link 
                            onClick={closeMenu} activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="HeroSection"
                            className="navbar--content">
                                Home
                            </Link>
                        ) : (
                            <RouterLink to="/" onClick={closeMenu} className="navbar--content">
                                Home
                            </RouterLink>
                        )}
                    </li>
                    <li>
                        {isHome ? (
                            <Link 
                            onClick={closeMenu} activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="AboutMe"
                            className="navbar--content">
                                About Me
                            </Link>
                        ) : (
                            <RouterLink to="/#AboutMe" onClick={closeMenu} className="navbar--content">
                                About Me
                            </RouterLink>
                        )}
                    </li>
                    <li>
                        {isHome ? (
                            <Link 
                            onClick={closeMenu} activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="MySkills"
                            className="navbar--content">
                                Skills
                            </Link>
                        ) : (
                            <RouterLink to="/#MySkills" onClick={closeMenu} className="navbar--content">
                                Skills
                            </RouterLink>
                        )}
                    </li>
                    <li>
                        {isHome ? (
                            <Link 
                            onClick={closeMenu} activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="MyWork"
                            className="navbar--content">
                                Projects
                            </Link>
                        ) : (
                            <RouterLink to="/#MyWork" onClick={closeMenu} className="navbar--content">
                                Projects
                            </RouterLink>
                        )}
                    </li>
                    <li>
                        <RouterLink to="/blog" onClick={closeMenu} className="navbar--content">
                            Blog
                        </RouterLink>
                    </li>
                    <li>
                        <a 
                        href="https://www.linkedin.com/in/nate-love" target="_blank"
                        className="navbar--content">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a 
                        href="https://github.com/natelove02" target="_blank"
                        className="navbar--content">
                            GitHub
                        </a>
                    </li>
                </ul>

            </div>
            {isHome ? (
                <Link
                onClick={closeMenu} activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="btn btn-outline-primary">
                    Contact Me
                </Link>
            ) : (
                <RouterLink to="/#Contact" onClick={closeMenu} className="btn btn-outline-primary">
                    Contact Me
                </RouterLink>
            )}
        </nav>
    )
}

export default Navbar;
