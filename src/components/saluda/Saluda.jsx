import React, {Component} from 'react';
import './saluda.css';

class Saluda extends Component {
constructor(props) {
    super(props);
    this.state = {
        text: '',
        color: true,
    }
}

    getColor = () => {
        const {color} = this.props;
        return color;
    }

    handlerOnClick = () => {
        this.setState((prevState) => {
            return {
                color: !prevState.color
            };
        })

    }

    handlerOnChange = (event) => {
        this.setState({
            text: event.target.value
        })
        //console.log(event.target.value);
    }

    render() {
    //const {color} = this.state;
    const {text, children} = this.props;

    return (
        <div className = {`saluda ${this.getColor()}`}>
            <div>
                {text}
                {/* {children} */}
                <input onChange={this.handlerOnChange} />
                <input value = {this.state.text} />
                <button onClick = {()=> {this.handlerOnClick()} } > hace </button>
            </div>
        </div>
    );
};
}

export default Saluda;
