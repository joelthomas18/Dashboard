import "./App.css";
import Content from "./components/Content";

import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="flex ">
        <SideBar />
        <div className="w-full bg-slate-200">
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
