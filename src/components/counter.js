import React, {Component} from 'react';
import Button from './button';
import Result from './result'

export default class Counter extends Component {

  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }))
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="card text-center border-light">
            <div className="card-body">
              <Result output={this.state.count}/>
              <div className="btn-group" role="group" aria-label="counter button">
                <Button label="Increment" onClickCb={this.handleIncrement}/>
                <Button label="Decrement" onClickCb={this.handleDecrement}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};

