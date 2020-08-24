import React from "react";
import {
    Link,
    useLocation
} from "react-router-dom";

export default function PageNotFound(){
    const location = useLocation();

    return (
        <div>
            <h3>
                Página <span style={{color: '#777', textDecoration: 'underline'}}> {location.pathname} </span> não encontrada
                <br/>
                <Link to='home/123'>Retornar para home</Link>
            </h3>
        </div>
    )
}
