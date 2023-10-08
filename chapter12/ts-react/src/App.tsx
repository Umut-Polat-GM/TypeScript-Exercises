import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";

const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <Heading title="Hello World" />
      <Section title="Diffetent Title">
        <p>My paragraph</p>
      </Section>
      <Counter />
      <List
        items={["Coffee", "Tacos", "Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </div>
  );
};

export default App;
