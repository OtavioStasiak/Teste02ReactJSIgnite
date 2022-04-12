import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';


export function App() {

  const [selectedGenre, setSelectedGenre] = useState({title: "", genreId: 1});

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
     <SideBar onChangeGenre={(genreId, title) => setSelectedGenre({genreId:genreId, title:title})} />
      <Content {...selectedGenre} />
     
    </div>
  )
}