import React, { Component } from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import Total from "./components/Total";

import "./styles.css";

class App extends Component {
  frame = null;
  getRef = node => (this.frame = node);

  componentDidMount() {
    // console.log(this.frame.contentDocument);
    this.frame.height = 400;
    this.frame.width = "100%";
    this.frame.src =
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Ffi80RACSCdP6QBJzqraZxh%2FFrontend-exercise%3Fnode-id%3D1%253A2";
    this.frame.onload = () => console.log("loaded");
  }

  render() {
    return (
      // Feel free to delete the Instructions section
      <main>
        <section class="instructions">
          <h1 class="title">Frontend Code Exercise</h1>
          <h3>Instructions</h3>
          <ul>
            <li>
              Complete this exercise using codesandbox. You may fork this
              codesandbox exercise or create a new one.
            </li>
            <li>Implement the acceptance criteria below</li>
            <li>
              You should complete this exercise and email a link to the
              interviewer.
            </li>
          </ul>
          <h3>Acceptance Criteria</h3>
          <ol>
            <li>
              Add the ability for the Counter component for to increment and
              decrement the value by one integer
            </li>
            <li>The value displayed is read only.</li>
            <li>
              Render <strong>2</strong> <code>Counter</code> components on the
              screen
            </li>
            <li>
              The <code>Total</code> component should display below the{" "}
              <code>Counter</code> components and always display the running
              total of all the <code>Counter</code> values.
            </li>
            <li>
              The card containing the <code>Counter</code> and
              <code>Total</code> should be vertically and horizontally centred
              on the page.
            </li>
          </ol>
          <h3>Visual reference</h3>
          <p>
            You may use this Figma file as a reference of what the final
            implementation should look like. If you click on the Figma link you
            can see the spacing information.
          </p>
          <iframe title="Figma file" ref={this.getRef} />
          <h3>What we are looking for</h3>
          <ul>
            <li>Your approach on component composition</li>
            <li>CSS techniques used for styling and layout</li>
            <li>General functionality of the component (updating state)</li>
            <li>Handling of interaction states (focus, hover, etc)</li>
            <li>You may introduce any libraries to help you with this task</li>
          </ul>
        </section>
      </main>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
