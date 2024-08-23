import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav>
            <ul>
                <li> 
                    <Link to="/home">
                        <h1>Home</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/testings">Testing</Link>
                </li>
                <li>
                    <Link to="/maps">Maps</Link>
                </li>
                <li> 
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}