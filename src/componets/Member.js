import React from 'react';
import './styles/member.css'
import Children from './Children'

class Member extends React.Component{
    constructor( props ){
        super( props )
        this.state = { 
            display : false,
            label : 'show' 
        };
    }

    displayChildren = () => {
        const { display } = this.state;
        this.setState( { 
            display : !display,
            label : display ? 'show' : 'hidden'
        });
    }

    render(){
        return(
            <div>
                <div className="node">
                    <p>username: {this.props.distributor.username}</p>
                    <p>full name: {this.props.distributor.full_name}</p>
                    <p>status: {this.props.distributor.status}</p>
                    <p>product: {this.props.distributor.product_name}</p>
                    <p>category: {this.props.distributor.category_name}</p>
                    <button onClick={ this.displayChildren }>{this.state.label} Children</button>
                </div>
                {this.props.distributor.children && 
                    this.state.display && 
                        <Children children={this.props.distributor.children} />
                }
            </div>
        )
    }
}

export default Member;
