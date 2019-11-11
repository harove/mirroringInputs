import React, {Component} from 'react';

// const Card = () => (<div> soy una card  </div>);

class Card extends Component{
    constructor (props){
        super(props);
        this.state = {
            version: '1.0.0',
        }
    }


    render() {
        const {cuerpo} = this.props;

        return (
            <div>
                {cuerpo}
                {this.state.version}
            </div>
        )
    }
}

export default Card;
