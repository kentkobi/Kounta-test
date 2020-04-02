import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Total from './components/Total';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [
        { id: 1, quantity: 0, label: 'Flat White' },
        { id: 2, quantity: 2, label: 'Latte' },
        { id: 3, quantity: 8, label: 'Long Black' },
      ],
    };
  }

  counterUpdate(id, quantity) {
    this.setState((state) => {
      state.counters.find((counter) => counter.id === id).quantity = (quantity && quantity >= 0) ? quantity : 0;
      return {
        state,
      };
    });
  }

  render() {
    return (
      <main>

        <div className="order">
          {this.state.counters.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              counterUpdate={this.counterUpdate.bind(this)}
            />
          ))}
          <Total counters={this.state.counters} />
        </div>

      </main>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
