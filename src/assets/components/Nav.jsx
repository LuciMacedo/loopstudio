import { Link } from "react-router-dom";
import logo from "../images/logo.svg"
import "../components/style.css"

const Links = [
    {name: 'About'},
    {name: 'Carrers'},
    {name: 'Events'},
    {name: 'Products'},
    {name: 'Support'},
]

export function Nav() {
    return ( 
        <nav className="menuNav">       
            <ul>
                {
                    Links.map((link, index) => (
                        <li key={index}>
                            <Link to="#">{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>

     );
}

