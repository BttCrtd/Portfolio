import { Link } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
function Layout({children}) {
    //const activeLink = useLocation()
    return(
        <div>
            <header>
                <p>Courtadon Baptiste</p>
                <nav>
                    <Link to='/'>Index</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
            </footer>
        </div>
    )
}

export default Layout