import './Card.css';
import React from 'react';
function Card(props){
    const classes = props.className;
      return <div style={{borderRadius:'30px',boxShadow:'0 1px 8px rgba(0, 0, 0, 0.25)'}} className={classes}>{props.children}</div>
}
export default Card;