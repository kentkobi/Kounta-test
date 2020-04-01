import React, { Component } from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import Total from "./components/Total";

import "./styles.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, quantity: 0, label: "Flat White" },
      { id: 2, quantity: 2, label: "Latte" },
      { id: 3, quantity: 8, label: "Long Black" }
    ]
  };

  render() {
    return (
      // Feel free to delete the Instructions section
      <main>

        <div class="order">
          {this.state.counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
            />
          ))}
          <Total counters={this.state.counters} />
        </div>

       </main>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
