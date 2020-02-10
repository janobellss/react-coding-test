import React from 'react';

import { Link } from 'react-router-dom';

import headerData from '../../datas/headerData';

const Header = (props) => {
    const btnStatus = props.isOpen ? 'ON' : 'OFF';

    // console.log("IS OPEN: " + isOpen + " COUNTER IS: " + props.counter);

    const navComp = headerData.map((item) => {
        // console.log(item.id + " " + item.nav + " " + item.link);
        
        return(
            // <li key={item.id}><a href={item.link}>{item.nav}</a></li>
            <Link key={item.id} to={item.link}>{item.nav}</Link>
        )
    });

    return(
        <header>
            <div className='container'>
                <nav><ul>{navComp}</ul></nav>
                <button onClick={props.toggleOpen}>BUTTON IS: {btnStatus}</button>
                <button onClick={props.handleIncrement}>INCREMENT COUNTER: {props.counter}</button>
            </div>
        </header>
    );
}

export default Header;