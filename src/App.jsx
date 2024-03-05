import AnalogClock from "./components/AnalogClock";

function App() {
  return (
    <div className="min-h-screen bg-slate-800 grid place-items-center">
      <div className="flex justify-center items-center flex-col gap-4">
        <AnalogClock />
      </div>
    </div>
  );
}

export default App;
