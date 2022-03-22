import './App.css';

const name  = 'MrJay';
const year  = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date  = new Date().getDate();
const started_year = 2016;

const Main = () => {
  return (
    <div className="App-main">
{/*  
        <p>Jere Jere Jere Jere</p>
        <h1>Hello World, {name}, {year}, {month}, {date}</h1>
        <p>I started coding {year - started_year} years ago</p>
         */}
        <div className="container"> 
            <div className="cards">
                <h4>Maria</h4>
                <div>Title: CEO</div>
                <div>Age: 20</div>
            </div>

            <div className="cards">
                <h4>Kati</h4>
                <div>Tile: Designer</div>
                <div>Age: 25</div>
            </div>
            
            <div className="cards">
                <h4>Karin</h4>
                <div>Title: Designer</div>
                <div>Age: 35</div>
            </div>
        </div>

    </div>
  );
};

export default Main;