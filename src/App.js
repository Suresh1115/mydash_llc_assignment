import logo from './logo.svg';
import './App.css';
import Form from './components/form.js';
import image from './images/daterange.jpg';

function App() {
  return (

    <div className="App">
      <div className="container">
       <div className="image-section">
        <img src = {image} alt="daterange" />
        <p>Choose a date range</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
       <div className="form-section">
        <Form />
       </div>
      </div>
    </div>
  );
}

export default App;
