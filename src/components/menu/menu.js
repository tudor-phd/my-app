import './menu.css';
import React, { useState } from 'react';
import NeonButton from '../neon-button/neonButton'
import { slide as Menu } from 'react-burger-menu'

function MenuItems() {

    const [open, setOpen] = useState(false);
    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    const handleStateChange = (state) => {
        setOpen(state.isOpen)
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    const closeMenu = () => {
        setOpen(false)
    }
    return (
        <Menu isOpen={open}
            onStateChange={(state) => handleStateChange(state)}
        >
            <div onClick={closeMenu}><NeonButton title={'Welcome'} url={'/my-app'} /></div>
            <div onClick={closeMenu}><NeonButton title={'About'} url={'/my-app/about'} /></div>
            <div onClick={closeMenu}><NeonButton title={'Skills'} url={'/my-app/skills'} /></div>
            <div onClick={closeMenu}><NeonButton title={'Work'} url={'/my-app/work'} /></div>
            {/* <div onClick={closeMenu}><NeonButton title={'Contact'} url={'/contact'} /></div> */}
        </Menu>
    );
}

export default MenuItems;
