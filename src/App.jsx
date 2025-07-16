import Header from "./components/Header";
import Player from "./components/Player";
import TimeStopper from "./components/TimeStopper";
function App() {
  return (
    <>
      <Header></Header>
      <Player></Player>
      <div id="challenges">
        <TimeStopper title="Level 1" targetTime={1}></TimeStopper>
        <TimeStopper title="Level 2" targetTime={5}></TimeStopper>
        <TimeStopper title="Level 3" targetTime={10}></TimeStopper>
        <TimeStopper title="Level 4" targetTime={15}></TimeStopper>
      </div>
    </>
  );
}

export default App;
