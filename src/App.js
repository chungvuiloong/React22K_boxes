import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

const name  = 'MrJay';
const year  = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date  = new Date().getDate();
const started_year = 2016;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
       
      </header>
      <main>
        <p>Jere Jere Jere Jere</p>
        <h1>Hello World, {name}, {year}, {month}, {date}</h1>
        <p>I started coding {year - started_year} years ago</p>
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;