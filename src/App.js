import Calender from "./components/Calender";

export default function App() {
  return (
    <div className="App">
      <Calender date={new Date()} />
    </div>
  );
}