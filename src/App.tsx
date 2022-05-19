import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counter-slice";
import { useFetchBreedQuery } from "./features/dogs/dogs-api-slice";
function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { data = [], isFetching } = useFetchBreedQuery(count);
  function handleClick() {
    dispatch(amountAdded(5));
  }

  function loading() {
    if (isFetching) {
      return <h1>Fetching</h1>;
    } else {
      return <h1>Not fetching</h1>;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
        </p>
        <div>{loading()}</div>
        <div>Number of Dogs fetched {data.length}</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img
                    src={breed.image.url}
                    alt={breed.name}
                    height={250}
                    width={250}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
