import { createContext, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

export const AppContext = createContext(false);

function App() {
  const [fixed, setFixed] = useState(true);

  return (
    <AppContext.Provider value={fixed}>
      <Header />
      <Main />
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
