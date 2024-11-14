


import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container py-5">
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-auto">
                    <Link to="/">
                        <img
                            src="https://png.pngtree.com/png-vector/20220702/ourmid/pngtree-letter-d-logo-design-vector-illustration-png-image_5671474.png"
                            alt="Logo"
                            width={150}
                        />
                    </Link>
                </div>
                <div className="col">
                    <ul className="nav d-flex justify-content-end align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link text-light" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/miembros">Miembros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/discografia">Discografía</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;

