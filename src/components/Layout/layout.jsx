import { Link, useLocation } from "react-router-dom";
import PresentationPorfolio from "../../section/PresentationPortfolio/presentationPortfolio";
import imgFond from "../../assets/imgFond2.webp";

function Layout({ children }) {
    const location = useLocation();
    const isProjetPage = location.pathname === "/projet"; 

    return (
        <div>
            <div 
                className="content-with-background" 
                style={{ backgroundImage: `url(${imgFond})` }}
            >
                <header>
                    <p>Courtadon Baptiste</p>
                    <nav>
                        <Link to='/'>Index</Link>
                        <Link to='/contact'>Contact</Link>
                    </nav>
                </header>
                {!isProjetPage && <PresentationPorfolio />} 
            </div>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;