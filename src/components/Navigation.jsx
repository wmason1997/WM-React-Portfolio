// // Bringing in the required import from 'react-router-dom'
// import { Link } from 'react-router-dom';
// import Navbar from './UI/Navbar';

// export default function Nav() {
//     // The Navbar UI component will render each of the Link elements in the links prop
//     return (
//         <Navbar
//             links={[
//                 <Link key = {1} className="nav-link text-light" activeClassName="active" exact to="/about">
//                     About Me
//                 </Link>,
//                 <Link key = {2} className="nav-link text-light" activeClassName = "active" exact to="/portfolio">
//                     Portfolio
//                 </Link>,
//                 <Link key = {3} className="nav-link text-light" activeClassName = "active" exact to="/contact">
//                     Contact
//                 </Link>,
//                 <Link key = {4} className="nav-link text-light" activeClassName = "active" exact to="/resume">
//                     Resume  
//                 </Link>,
//             ]}
//         />
//     )
// }

import './Navigation.css';

// Import Link and useLocation from react-router-dom
import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    // Get the current location using useLocation hook
    const location = useLocation();

    // Function to determine if a link is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <Navbar
            links={[
                <Link key={1} className={`nav-link text-light ${isActive('/about') ? 'active' : ''}`} to="/about">
                    About Me
                </Link>,
                <Link key={2} className={`nav-link text-light ${isActive('/portfolio') ? 'active' : ''}`} to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={3} className={`nav-link text-light ${isActive('/contact') ? 'active' : ''}`} to="/contact">
                    Contact
                </Link>,
                <Link key={4} className={`nav-link text-light ${isActive('/resume') ? 'active' : ''}`} to="/resume">
                    Resume
                </Link>,
            ]}
        />
    );
}