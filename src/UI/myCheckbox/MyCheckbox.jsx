import React from "react";
import './MyCheckbox.module.scss'

const MyCheckbox = () => {


    return (
        <ul>
            <p>Filter by status:</p>
                <li>
                    <input id="c1" type="checkbox" />
                    <label htmlFor="c1">Alive</label>
                </li>
                <li>
                    <input id="c1" type="checkbox" />
                    <label htmlFor="c1">Dead</label>
                </li>
                <li>
                    <input id="c1" type="checkbox" />
                    <label htmlFor="c1">Unknown</label>
                </li>
        </ul>
    )
}

export default MyCheckbox