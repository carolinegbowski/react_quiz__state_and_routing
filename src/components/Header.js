import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="main-header">
            <h1>Router Quiz</h1>            
            <Link class="link" to='/home'>Home</Link>
            <Link class="link" to='/contact'>Contact</Link>
            <Link class="link" to='/listAdd'>List Add</Link>
        </div>

    )
}

export default Header;

