import React, { useState } from 'react';
import Book from '../../components/book';
import Results from '../../components/result';
import Holy from '../../components/holy';
import Read from '../../components/read';
import Imam from '../../components/imam';
import Blog from '../../components/blog';
import AppQuran from '../../components/appquran';


const Home = () => {
  const [products,setProducts]=useState([
    {
      id:1,
      title:"Al-Fatihah",
      translate:"The Openar",
      arab:"الفاتحة",
      number:"7 verses",
    },
    {
      id:2,
      title:"Al-Baqarah",
      translate:"The Cow",
      arab:"البقرة",
      number:"286 verses",
    },
    {
      id:3,
      title:"Al-Imran",
      translate:"Family of Imran",
      arab:"آل عمران",
      number:"200 verses",
    },
    {
      id:4,
      title:"An-Nisa",
      translate:"The Women",
      arab:"النساء",
      number:"176 verses",
    },
    {
      id:5,
      title:"Al-Maidah",
      translate:"The Table Spread",
      arab:"المائدة",
      number:"120 verses",
    },
    {
      id:6,
      title:"Al-Anam",
      translate:"The Cattle",
      arab:"الانام",
      number:"165 verses",
    },
    {
      id:7,
      title:"Al-Araf",
      translate:"The Heights",
      arab:"العراف",
      number:"206 verses",
    },
    {
      id:8,
      title:"Al-Anfal",
      translate:"The Spoils of War",
      arab:"الأنفال",
      number:"75 verses",
    },
    {
      id:9,
      title:"At-Taubah",
      translate:"The Repentance",
      arab:"التوبة",
      number:"129 verses",
    },
    {
      id:10,
      title:"Yunus",
      translate:"Jonah",
      arab:"يونس",
      number:"109 verses",
    },
    {
      id:11,
      title:"Hud",
      translate:"Hud",
      arab:"هود",
      number:"123 verses",
    },
    {
      id:12,
      title:"Yusuf",
      translate:"Joseph",
      arab:"يوسف",
      number:"111 verses",
    },
  ]);

  return(
    
   <div>
    <Book/>
    <Results/>
    <Holy/>
    <Read data={products}/>
    <Imam/>
    <Blog/>
    <AppQuran/>
  </div>
)};

export default Home;
