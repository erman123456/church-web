import Link from 'next/link';
import { useEffect, useState } from 'react';

// const currentEndpoint = '';
const MainMenu = () => {
    // const [routeName, setRouteName] = useState('');
    // const changeNav = (param) => {
    //     console.log(param)
    //     setRouteName(param)
    //     console.log('erman', routeName)
    // }
    // useEffect[routeName]
    return (
        <>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/team">Team</Link>
                </li>
                <li>
                    <Link href="/pdf">Tatib & Warta</Link>
                </li>

                {/* <li onClick={() => changeNav('/home')} className={routeName === '/home' || routeName === '' ? 'active' : ''}>
                    <Link href="/">Home</Link>
                </li>
                <li onClick={() => changeNav('/team')} className={routeName === '/team' ? 'active' : ''}>
                    <Link href="/team">Team</Link>
                </li>
                <li onClick={() => changeNav('/pdf')} className={routeName === '/pdf' ? 'active' : ''}>
                    <Link href="/pdf">Tatib & Warta</Link>
                </li> */}
                {/* <li className="menu-item-has-children"><Link href="#">Portfolio <i className="fas fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link href="/portfolio/2-columns">2 Columns</Link></li>
                        <li><Link href="/portfolio/3-columns">3 Columns</Link></li>
                        <li><Link href="/portfolio/gateway-integration">Portfolio Details</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link href="#">Pages <i className="fas fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/testimonial">Testimonials</Link></li>
                        <li><Link href="/pricing-plan">Pricing Plan</Link></li>
                        <li><Link href="/faq">Faq</Link></li>
                        <li className="menu-item-has-children"><Link href="#">Team<i className="fas fa-angle-right"></i></Link>
                            <ul className="sub-menu">
                                <li><Link href="/team">Team Style 01</Link></li>
                                <li><Link href="/team-two">Team Style 02</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/request-quote">Request Quote</Link></li>
                        <li><Link href="/404">404</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link href="#">Services <i className="fas fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link href="/services">Services 01</Link></li>
                        <li><Link href="/services-two">Services 02</Link></li>
                        <li><Link href="/services/data-analytics">Services Details</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link href="#">Blog <i className="fas fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog/ux-ui-designing-the-future-web-design">Blog Details</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact">Contact</Link></li> */}
            </ul>
        </>
    );
};

export default MainMenu;