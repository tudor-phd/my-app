
import React from 'react';
import './loader.css'

const displayLoader = () => {
    return(
        <div className = {"loader"}>
            <img src="https://bitblazer.info/main.gif" alt="this slowpoke moves" height="500" />
        </div>

    )
}
export default function Loader() {

    setTimeout(
        () => displayLoader(), 
        3000
      );
};
