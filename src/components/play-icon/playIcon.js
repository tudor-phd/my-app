
import React from 'react';
import './playIcon.css'

const PlayIcon = ({play}) => {
    return (
        <div className="bar-c">
            <div id="bar-1" className={`${!play ? 'noAnim bar' : 'bar' }`}></div>
            <div id="bar-2" className={`${!play ? 'noAnim bar' : 'bar' }`}></div>
            <div id="bar-3" className={`${!play ? 'noAnim bar' : 'bar' }`}></div>
            <div id="bar-4" className={`${!play ? 'noAnim bar' : 'bar' }`}></div>
            <div id="bar-5" className={`${!play ? 'noAnim bar' : 'bar' }`}></div>
            <div id="bar-6" className={`${!play ? 'noAnim bar' : 'bar' }`}></div>
        </div>

    )
}
export default PlayIcon
