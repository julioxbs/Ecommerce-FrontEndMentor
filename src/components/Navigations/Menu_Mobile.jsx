export default function MobileMenu({ closeMenu }) {
    return (
        <div className="modal__mobile">
            <nav className="menu__mobile">
                <a href="#" onClick={() => closeMenu(false)}>
                    <img style={{ width: '20px'}} src="/images/icon-close.svg" alt="close menu" />
                </a>

                <ul className="p-0 m-0">
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Woman</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
}