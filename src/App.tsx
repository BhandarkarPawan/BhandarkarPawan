import { createContext, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

export const AppContext = createContext(false);

function App() {
  const fixed = true;

  useEffect(() => {
    document.title = 'Pawan Bhandarkar';
  });

  return (
    <AppContext.Provider value={fixed}>
      <Header />
      <Main />
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
