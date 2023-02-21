const Header = () => {
    return (
        <nav className="header">
            <a href="../profile" class="profileIcon">
                <i className="fa fa-user-circle fa-3x" aria-hidden="true"></i>
            </a>
            <a href="../logout" className="logout headerLink">Logout</a>
            <h1><a href="../shot" className="headerLink"> BarClime </a></h1>
		</nav>
    )
}

export default Header