import logo from '../assets/logo.jpg';

const Navbar = () => {
    const navLinks = ["Home", "News", "Contact", "About"];

    return (
        <div className='navbar'>
            <img src={logo} alt="Logo" style={{ height: '80px', width: '80px', padding: '10px' }} />
            <ul className='menu'>
                {navLinks.map((link) => (
                    <li key={link}>
                        <a href={`#${link.toLowerCase()}`}>{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Navbar
