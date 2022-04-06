import { useState } from 'react';
import { useSelector } from 'react-redux';
import Menu from './Menu_Mobile';
import Cart from './Basket';
import './styles.css'

export default function Header() {
    const count = useSelector((state) => state.counter.value);
    const isPurchased = useSelector((state) => state.counter.addCart);
    const [menuMobile, setMenu] = useState(false);
    const [cart, setCart] = useState(false);

    const activeMenu = (bool) => {
        setMenu(bool);
    }

    const openCart = () => {
        setCart(!cart);
    }

    return(
        <header className="container d-flex align-items-center p-3">
            {menuMobile && <Menu closeMenu={activeMenu} />}

            <div className="menu_logo d-flex align-items-center gap-3">
                <a onClick={() => activeMenu(true)} href="#"><img src="/images/icon-menu.svg" alt="icon menu" className='d-block d-md-none' /></a>
                <img src="/images/logo.svg" alt="logo" />

                <nav className='d-none d-md-block ms-5'>
                    <ul className="p-0 m-0 d-flex align-items-center gap-5 text-muted">
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Woman</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>

            <div className="user_item d-flex align-items-center ms-auto gap-4">
                <a onClick={() => openCart()} href="#" className='position-relative'>
                    <i class="bi bi-cart2 fs-4"></i>
                    {isPurchased && <span className="count__items position-absolute top-6 start-100 translate-middle badge rounded-pill">{count}</span>}
                </a>

                <a href="#"><img style={{ width: '30px' }} src="/images/image-avatar.png" alt="logo" /></a>

                {cart && <Cart />}
            </div>
        </header>
    );
}