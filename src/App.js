import logo from "./logo.svg";
import "./App.css";
import Characters from "./components/Characters";
import CharacterWithQuery from "./components/CharacterWithQuery";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";



function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Characters/> */}
      <div className="container">
        <CharacterWithQuery />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
