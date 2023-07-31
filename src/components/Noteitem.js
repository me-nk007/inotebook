import React from 'react';

const Noteitem = (props) => {
   const {note} = props;
   const myStyle = {
    color: '#ed0202'
   }
   const yourStyle = {
    color: '#005eff'
   }
  return (
    <div className='col-md-3'>
      <div className="card my-3">
        <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text my-3">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum quidem, amet reprehenderit dolores non est ab alias, harum, aspernatur vitae! Aliquid incidunt eum amet ab provident esse repudiandae, voluptate perspiciatis quo enim necessitatibus, possimus, facilis quam magnam nisi voluptas?</p>
            <div className="d-flex justify-content-between my-3">
            <i className="fa-solid fa-trash fa-xl mx-2" style={myStyle}></i>
            <i className="fa-solid fa-pen-to-square fa-xl mx-2" style={yourStyle}></i>
            </div>
           
             </div>
        </div>
            </div>
  );
}

export default Noteitem;
