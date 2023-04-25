import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './Api';
import { useState } from 'react';
import ImageList from './Components/ImageList';

function App() {
  const [images, setimages] = useState([])
  const handleSubmit= async (term)=>{
    const result= await searchImages(term);
    setimages(result);
  }
  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
      <ImageList imagesPlaceHolder={images}/>
    </div>
  );
}

export default App;
