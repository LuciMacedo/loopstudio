import { Nav } from "../../components/Nav"
import "../../pages/home/style.css"
import Interactive from "../../images/desktop/image-interactive.jpg"
import Logo from "../../images/logo.svg"
import Fb from "../../images/icon-facebook.svg"
import It from "../../images/icon-instagram.svg"
import Pi from "../../images/icon-pinterest.svg"
import Tw from "../../images/icon-twitter.svg"

export function Home() {

    return (
        <body>
        <header className="bannerHeader">
            <div className="navLogo">
                <img src={ Logo } alt="Studio Logo" />
                <Nav/>
            </div>
            <h1>Immersive experiences that deliver</h1>
        </header>
        <main>
            <section className="descriptionSection">
                <div className="descriptionImg">
                    <img src={ Interactive} alt="Men playing with VR" />
                </div>
                <div className="descriptionText">
                    <h2>The leader in interactive VR</h2>
                    <p>
                        Founded in 2011, Loopstudios has been producing world-class virtual reality
                        projects for some of the best companies around the globe. Our award-winning
                        creations have transformed businesses through digital experiences that bind
                        to their brand.
                    </p>
                </div>
            </section>
            <section className="gallerySection">
                <header className='galleryHeader'>
                    <h2>
                        Our creations
                    </h2>
                    <h3>
                        See all
                    </h3>
                </header>
                <div className="galleryPictures">
                    <div className="galleryEarth">
                        <h2 className="galleryTitle">Deep earth</h2>
                    </div>
                    <div className="galleryArcade">
                        <h2 className="galleryTitle">Night arcade</h2>
                    </div>
                    <div className="gallerySoccer">
                        <h2 className="galleryTitle">Soccer team VR</h2>
                    </div>
                    <div className="galleryGrid">
                        <h2 className="galleryTitle">The grid</h2>
                    </div>
                    <div className="galleryVr">
                        <h2 className="galleryTitle">From up above VR</h2>
                    </div>
                    <div className="galleryBorealis">
                        <h2 className="galleryTitle">Pocket borealis</h2>
                    </div>
                    <div className="galleryCuriosity">
                        <h2 className="galleryTitle">The curiosity</h2>
                    </div>
                    <div className="galleryFisheye">
                        <h2 className="galleryTitle">Make it fisheye</h2>
                    </div>
                </div>
            </section>
    
        
            </main>
            <footer>
                <div className="footerLeftSide">
                    <img src= { Logo } alt="Studio Logo" />
                    <div>
                        <Nav/>
                    </div>
                </div>
                <div className="footerRightSide">
            
                    <div className="socialIcons">
                        <img src={Fb} alt="Facebook icon" />
                        <img src={Tw} alt="Twitter icon" />
                        <img src={Pi} alt="Pintarest icon" />
                        <img src={It} alt="Instagram icon" />
                    </div>
                    <p>© 2021 Loopstudios. All rights reserved.</p>
                </div>
            </footer>
        </body>
    )
}


