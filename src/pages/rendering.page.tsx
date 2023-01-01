import { AppContextProvider } from "../context/app-context";
import { useLayoutEffectSample } from "../hooks/layout-effect";
import { MemoComponent } from "../hooks/use-memo";
import reactLogo from "../assets/react.svg";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/context";
import React from "react";
import { useCount, useCounter } from "../store";
import shallow from "zustand/shallow";
import "../App.css";

const RenderingPage = () => {
  var effectLayout = useLayoutEffectSample();
  console.count("rendering App");
  return (
    <AppContextProvider>
      <div className="App">
        <div
          ref={effectLayout}
          style={{ width: "50px", height: "50px", display: "block" }}
        />
        <div>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>React rendering concepts</h1>
        <MemoComponent />
        <FirstComponent />
        <SecondComponent />
        <ZustandComponent />
        <ZustandComponentSecond />
      </div>
    </AppContextProvider>
  );
};

const FirstComponent = () => {
  console.count("rendering FirstComponent");
  const { name, setName } = useContext(AppContext);

  return (
    <div className="card">
      <h3>Simple component</h3>
      <button onClick={() => setName(`${parseInt(name) + 1}`)}>
        count is {name}
      </button>
    </div>
  );
};

const SecondComponent = React.memo(() => {
  console.count("rendering SecondComponent");
  const { secondName, setSecondName } = useContext(AppContext);
  return (
    <div className="card">
      <h3>Simple component clone</h3>
      <button onClick={() => setSecondName(`${parseInt(secondName) + 1}`)}>
        count is {secondName}
      </button>
    </div>
  );
});

const ZustandComponent = () => {
  console.count("ZustandComponent rendered 1");
  const { count, inc, dec } = useCount((state) => state, shallow);
  return (
    <div className="card">
      <h3>Zustand simple component</h3>
      <button onClick={inc}>incr</button>
      <button onClick={dec}>dec</button>
      <p>Count {count}</p>
    </div>
  );
};

const ZustandComponentSecond = () => {
  console.count("ZustandComponentSecond rendered 1");
  const { count, inc, dec } = useCounter((state) => state, shallow);

  useEffect(() => {
    console.log("useEffect");

    return () => {
      console.log("useEffect unmount");
    };
  }, []);

  return (
    <div className="card">
      <h3>Zustand simple component clone</h3>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>decre</button>
      <p>Count {count}</p>
    </div>
  );
};

export default RenderingPage;
