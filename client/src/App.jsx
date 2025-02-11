import "./App.css";
import usePing from "./hooks/apis/queries/usePing";

function App() {
  const { isLoading, data } = usePing();

  if (isLoading) {
    return <>Loading.....</>;
  }
  return (
    <>
      <h1>Hello {data.message}</h1>
    </>
  );
}

export default App;
