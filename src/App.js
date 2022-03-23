import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Box from './Box';

const persons = [
  {name:"Maria",  title:"CEO",        age:"29", lang:[{name:'English', id: 1}, {name:'Russian', id: 2}]},
  {name:"Kati",   title:"Developer",  age:"25", lang:[{name:'English', id: 1}, {name:'Russian', id: 2}]},
  {name:"Karin",  title:"Designer",   age:"55", lang:[{name:'English', id: 1}, {name:'Russian', id: 2}]},
  {name:"Jere",   title:"CEO",        age:"29", lang:[{name:'English', id: 1}, {name:'Russian', id: 2}, {name:'Japanese', id:3}]},
  {name:"Eric",   title:"CFO",        age:"20", lang:[{name:'English', id: 1}, {name:'Russian', id: 2}]},
  {name:"Niina",  title:"CO-CEO",     age:"25", lang:[{name:'English', id: 1}, {name:'Russian', id: 2}, {name: 'Spanish', id:3}]},
];

const App = () => {
  return (
    <div className="App">
        <Header />
        {/* <Main /> */}
   
        {/* <Box name={persons[0].name} title={persons[0].title} age={persons[0].age}/> */}
    <main className="container">


        {persons.map((person) => (
            <Box 
              name={person.name} 
              title={person.title} 
              age={person.age}
              lang={person.lang.map((language) => (
                <li>{language.name}</li>
              ))}
            />
          ))
        }

        {persons.map((person) => (
            <Box 
                name={person.name} 
                title={person.title} 
                age={person.age}
                lang={person.lang.map((language) => (
                  <div>{language.id}) {language.name}</div>))}
            />
         ))
        }
        
      </main>
        <Footer />
    </div>
  );
};

export default App;