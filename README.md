# JS to TypeScript React Conversion

This checkpoint converts two React JavaScript components into TypeScript.

## Files
- `src/Greeting.tsx` — converted from Code 01 (functional component)
- `src/Counter.tsx` — converted from Code 02 (class component)

## Steps taken — Greeting component
1. Renamed the file to `.tsx` (required for JSX in a TS file).
2. Defined a `GreetingProps` interface describing the expected prop: `name: string`.
3. Annotated the destructured `{ name }` parameter with `GreetingProps`,
   so TypeScript validates any usage of `<Greeting />` at compile time.

## Steps taken — Counter component
1. Renamed the file to `.tsx`.
2. Defined a `CounterProps` interface (empty, since this component takes no props).
3. Defined a `CounterState` interface describing `{ count: number }`.
4. Extended `Component<CounterProps, CounterState>` so `this.props` and
   `this.state` are both type-checked inside the class.
5. Explicitly typed the `state` class field with `CounterState`.
6. Typed the `increment` arrow function's return value as `void`.
7. Typed `render()`'s return value as `React.ReactElement`.
8. Fixed a subtle bug from the original snippet: a bare `return` on its
   own line, followed by JSX on the next line, gets silently turned into
   `return;` (returning `undefined`) due to automatic semicolon insertion.
   The fix keeps `return (` on the same line as the opening parenthesis.

## Verify it yourself
```bash
npm install
npx tsc --noEmit
```
No errors should be reported — both components are correctly typed.
