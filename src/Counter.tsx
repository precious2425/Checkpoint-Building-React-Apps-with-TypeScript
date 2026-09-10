import React, { Component } from 'react';

// Step 1: This component receives no props, so we describe that
// with an empty interface (or you could use `Record<string, never>`).
interface CounterProps {}

// Step 2: Define an interface describing the shape of this.state.
// This component only tracks a single numeric value, `count`.
interface CounterState {
  count: number;
}

// Step 3: Pass CounterProps and CounterState as generic type
// arguments to Component<P, S>. This makes TypeScript aware of
// what `this.props` and `this.state` look like inside the class,
// and enables autocomplete/type-checking on both.
class Counter extends Component<CounterProps, CounterState> {
  // Step 4: Explicitly type the state class field with CounterState.
  state: CounterState = {
    count: 0,
  };

  // Step 5: Type the arrow function's return value as void, since
  // it performs a state update and returns nothing.
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 6: Type the render method's return value as React.ReactElement.
  // (Newer versions of the React types moved the JSX namespace under
  // React.JSX, so React.ReactElement is the more portable annotation.)
  // Also note: `return (` followed immediately by JSX on the next
  // line works fine as long as the opening parenthesis is on the
  // same line as `return` — this avoids automatic semicolon
  // insertion silently turning it into `return;`.
  render(): React.ReactElement {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
