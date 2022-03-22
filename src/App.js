import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
       
      </header>
      
      <main className="App-main">
        <Main />
      </main>

      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;