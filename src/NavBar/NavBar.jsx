import React from 'react';
import Link from './Link';

const navigationData = [
    { name: "Home", path: "/", id: "home" },
    { name: "Products", path: "/products", id: "products" },
    { name: "Product Details", path: "/products/:id", id: "product-details" },
    { name: "Contact", path: "/contact", id: "contact" }
];


const NavBar = () => {
    return (
        <nav>

            <ul className='flex'>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

            {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}
                    </a></li>)
                }
            </ul> */}

            {/* <ul className='flex '>
                <li className='mr-10'><a href="">About</a></li>
                <li className='mr-10'><a href="">Home</a></li>
                <li className='mr-10'><a href="">Blog</a></li>
            </ul> */}
        </nav>
    );
};

export default NavBar;