import React from 'react';
import './Card.css';
import { FaFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Card( { data, reference } ) {
  return (
    <motion.div 
      drag 
      dragConstraints = { reference } 
      whileDrag = {{ scale:1.5 }} 
      dragElastic = { 0.5 } 
      dragTransition = {{ bounceStiffness:100, bounceDamping:10 }}

      className = "card-wrapper">

        <div className = "card">
          <FaFileAlt />
          <p className = "para"> { data.title } </p>
        
          <div className = "card-data">
            <h2> { data.filesize } </h2>
            <span className = "dwnld">
              { data.close ? <IoCloseSharp /> : <IoDownloadOutline /> }
            </span>
          </div>

          { data.footer.isOpen ? <div className = "card-footer"> { data.footer.footerColor } <h3> { data.footer.footerTitle } </h3> </div> : null }
    
        </div>
    </motion.div>
  );
}

export default Card;
