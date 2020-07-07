import React from 'react';

class App_Component extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello');
  }

  state = {
    count: 0
  };

  add = () => {
    // this.setState({count: this.state.count + 1});
    this.setState(current => ({
      count: current.count + 1
    }));
    console.log('add');
  }

  minus = () => {
    // this.setState({count: this.state.count - 1});
    this.setState(current => ({
      count: current.count - 1
    }));
    console.log('minus');
  }

  // 컴포넌트가 처음 화면에 표시될때 실행되는 함수
  componentDidMount() {
    console.log('component rendered');
  }

  // 컴포넌트가 업데이트 되었을때 실행되는 함수
  componentDidUpdate() {
    console.log('I just updated');
  }

  // 컴포넌트가 종료되었을때 실행되는 함수
  componentWillUnmount() {
    console.log('Good bye, cruel world');
  }

  render() {
    // return <h1>The number is: {this.state.count}</h1>;
    console.log('render');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App_Component;