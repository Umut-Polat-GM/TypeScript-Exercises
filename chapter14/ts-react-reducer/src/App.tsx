import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <Counter>{(num: number) => <>Current Count {num}</>}</Counter>
    </div>
  );
};

export default App;
