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
      link:"https://previous.quran.com/1"
    },
    {
      id:2,
      title:"Al-Baqarah",
      translate:"The Cow",
      arab:"البقرة",
      number:"286 verses",
      link:"https://previous.quran.com/2"
    },
    {
      id:3,
      title:"Al-Imran",
      translate:"Family of Imran",
      arab:"آل عمران",
      number:"200 verses",
      link:"https://previous.quran.com/3"
    },
    {
      id:4,
      title:"An-Nisa",
      translate:"The Women",
      arab:"النساء",
      number:"176 verses",
      link:"https://previous.quran.com/4"
    },
    {
      id:5,
      title:"Al-Maidah",
      translate:"The Table Spread",
      arab:"المائدة",
      number:"120 verses",
      link:"https://previous.quran.com/5"
    },
    {
      id:6,
      title:"Al-Anam",
      translate:"The Cattle",
      arab:"الانام",
      number:"165 verses",
      link:"https://previous.quran.com/6"
    },
    {
      id:7,
      title:"Al-Araf",
      translate:"The Heights",
      arab:"العراف",
      number:"206 verses",
      link:"https://previous.quran.com/7"
    },
    {
      id:8,
      title:"Al-Anfal",
      translate:"The Spoils of War",
      arab:"الأنفال",
      number:"75 verses",
      link:"https://previous.quran.com/8"
    },
    {
      id:9,
      title:"At-Taubah",
      translate:"The Repentance",
      arab:"التوبة",
      number:"129 verses",
      link:"https://previous.quran.com/9"
    },
    {
      id:10,
      title:"Yunus",
      translate:"Jonah",
      arab:"يونس",
      number:"109 verses",
      link:"https://previous.quran.com/10"
    },
    {
      id:11,
      title:"Hud",
      translate:"Hud",
      arab:"هود",
      number:"123 verses",
      link:"https://previous.quran.com/11"
    },
    {
      id:12,
      title:"Yusuf",
      translate:"Joseph",
      arab:"يوسف",
      number:"111 verses",
      link:"https://previous.quran.com/12"
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
