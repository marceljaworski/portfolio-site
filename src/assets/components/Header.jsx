import { Link } from "react-router-dom";
function Header () {
    return(
        <header>
            <Link to ="/">Main</Link>
            <Link to ="/projekte">Projekte</Link>
            <Link to ="/kontakt">Kontakt</Link>
            <Link to ="/lebenslauf">Lebenslauf</Link>
            <Link to ="/skills">Skills</Link>
        </header>
        
    );
}
export default Header;