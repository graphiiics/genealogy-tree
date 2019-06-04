import React from 'react';
import Member from './Member';
import json from '../Daxcsa.json';
import Children from './Children';
const father = json.data.attributes[0];

class Tree extends React.Component{
    
    
    render(){
        return(
            <div className="tree">
                <ul className="level-0">
                    <li key={father.distributor_id}>
                        <Member distributor={father}/>
                        {father.children && 
                            <Children children={father.children} />
                        }
                    </li>
                </ul>
            </div>
        )
    }

}

export default Tree;