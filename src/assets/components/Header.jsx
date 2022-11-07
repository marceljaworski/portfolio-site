import { Link } from "react-router-dom";
function Header () {
    return(
        <header>
            <Link to ="/">Main</Link>&nbsp;|&nbsp;
            <Link to ="/projekte">Projekte</Link>&nbsp;|&nbsp;
            <Link to ="/skills">Skills</Link>&nbsp;|&nbsp;
            <Link to ="/lebenslauf">Lebenslauf</Link>&nbsp;|&nbsp;
            <Link to ="/kontakt">Kontakt</Link>
        </header>
        
    );
}
export default Header;