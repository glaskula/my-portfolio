import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Recent Projects</h1>
      <div className="projects-container">
        <img src={`${process.env.PUBLIC_URL}/FilmFriends.png`} alt="project-image" className="project-image"/>
        <img src={`${process.env.PUBLIC_URL}/Frogic.png`} alt="project-image" className="project-image"/>
        <img src={`${process.env.PUBLIC_URL}/Table Poster-1.png`} alt="project-image" className="project-image"/>
        <img src={`${process.env.PUBLIC_URL}/IXDPOSTER2.png`} alt="project-image" className="project-image"/>
      </div>
    </header>
  </div>
  );
}

export default App;
