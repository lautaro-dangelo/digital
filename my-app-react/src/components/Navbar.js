import React from 'react';
import propTypes from 'prop-types';

function Navbar(props){
    return(
        <nav>
            <ul>
                {
                    props.enlaces.map((unEnlace, i) =>{
                        return(
                            <li key={ unEnlace + i }><a href={ unEnlace.url }></a></li>
                        )
                    })
                }

            </ul>
        </nav>

    );
};

export default Navbar;