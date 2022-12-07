import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <span className="fs-3 bg-white rounded me-2">🏋</span>
                        <span className="fs-3">Academia</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navMenu">
                        <div className="navbar-nav">
                            <NavLink to="/" className="nav-link">
                                Principal
                            </NavLink>
                            <NavLink to="/alunos" className="nav-link">
                                Alunos
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
