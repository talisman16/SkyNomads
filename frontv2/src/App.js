  import NavBar from "./components/Navbar";
  import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <NavBar/>
        <h1> Hello Nassim </h1>
    </div>
    </ChakraProvider>
  );
}

export default App;
