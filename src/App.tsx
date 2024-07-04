import StopWatch from "./pages/StopWatch";

function App() {
  return (
    <div>
      <h1 className="flex justify-center my-4 mb-20 text-5xl font-bold">
        Stop Watch
      </h1>
      <div className="flex justify-center items-center w-screen text-center">
        <StopWatch />
      </div>
    </div>
  );
}

export default App;
