import React from 'react';
import Member from './Member'

function Children (props){
    const children = props.children;
    console.log(children);
    
    return(
        <ul>
            {children.map(distributor => {
            return (
                <li key={distributor.distributor_id}>
                    <Member distributor={distributor}/>
                </li>
            );
            })}
        </ul>
    )
}

export default Children;