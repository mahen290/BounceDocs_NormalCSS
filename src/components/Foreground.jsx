import React, { useRef } from 'react';
import './Foreground.css';
import Card from './Card';

function Foreground() {

  const ref = useRef( null );
  const data = [
    {
      title : "This Is Ramdom Text That Is Displayed For You.",
      filesize : "1.8 MB",
      close : true,
      footer : { isOpen : true, footerTitle : "Download Now", footerColor : "green" },
    },
    {
      title : "Hello How Are You Today Is Nice Saturday Enjoy With Us.",
      filesize : "2.9 MB",
      close : true,
      footer : { isOpen : true, footerTitle : "Download Now", footerColor : "blue" },
    },
    {
      title : "This Is Card No. 3 For You I Hope You Will Feel Cherish With This Card",
      filesize : "2.3 MB",
      close : false,
      footer : { isOpen : true, footerTitle : "Download Now", footerColor : "green" },
    },
    {
      title : "This Card Is Only For Practical Purpose To Display",
      filesize : "0.85 MB",
      close : true,
      footer : { isOpen : true, footerTitle : "Download Now", footerColor : "blue" },
    }
  ];
  
  return (
    <div reference = { ref } className = "foreground-container">
      { 
        data.map( ( item ) => (
          <Card data = { item } />
        ))
      }
    </div>
  );
}

export default Foreground;
