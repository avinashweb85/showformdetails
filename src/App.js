import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ShowFormDetails from './components/ShowFormDetails';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({})
  return (
    <div className="App">
     <Form formData={formData} setFormData={setFormData}/>
     <ShowFormDetails formData={formData}/>
    </div>
  );
}

export default App;
