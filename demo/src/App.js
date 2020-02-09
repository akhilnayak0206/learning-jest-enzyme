import React, { useState, Component } from 'react';
import './App.css';

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div data-test='component-app' className='App'>
//       <h1 data-test='counter-display'>The counter is currently {counter}</h1>
//       <button
//         data-test='increment-button'
//         onClick={() => setCounter(counter + 1)}
//       >
//         Increment counter
//       </button>
//     </div>
//   );
// };

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      belowZero: false
    };
  }

  setDecrement = () => {
    if (this.state.counter === 0) {
      this.setState({ belowZero: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  render() {
    return (
      <div data-test='component-app' className='App'>
        <h1 data-test='counter-display'>
          The counter is currently {this.state.counter}
        </h1>
        {this.state.belowZero && (
          <h1 data-test='counter-belowZero' className='Alert'>
            Set Counter Above zero
          </h1>
        )}
        <button
          data-test='increment-button'
          onClick={() =>
            this.setState({ counter: this.state.counter + 1, belowZero: false })
          }
        >
          Increment counter
        </button>
        <button
          data-test='decrement-button'
          onClick={() => this.setDecrement()}
        >
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
