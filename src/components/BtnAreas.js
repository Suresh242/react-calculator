import React from 'react'
import {Button} from './Button'

export const BtnAreas = ({handleOnButtonClick}) => {
  const btnArg =[
    {
    cls:"btn-AC",
    label:"AC",
  },
  {
    cls:"btn-C",
    label:"C",
  },
  {
    cls:"btn-perc",
    label:"%",
  },
  {
    cls:"btn-divide",
    label:"/",
  },
  {
    cls:"btn-7",
    label:"7",
  },
  {
    cls:"btn-8",
    label:"8",
  },
  {
    cls:"btn-9",
    label:"9",
  },
  {
    cls:"btn-x",
    label:"*",
  },
  
  {
    cls:"btn-4",
    label:"4",
  },
  {
    cls:"btn-5",
    label:"5",
  },
  {
    cls:"btn-6",
    label:"6",
  },
  {
    cls:"btn-minus",
    label:"-",
  },

  
  {
    cls:"btn-1",
    label:"1",
  },
  {
    cls:"btn-2",
    label:"2",
  },
  {
    cls:"btn-3",
    label:"3",
  },
  {
    cls:"btn-plus",
    label:"+",
  },
 
  
  {
    cls:"btn-0",
    label:"0",
  },
  {
    cls:"btn-dot",
    label:".",
  },
  {
    cls:" btn btn-equals",
    label:"=",
  },
  
 

  ]
  return (
    <>
      {
        btnArg.map((item,i) => (
        // <Button cls ={item.cls} label={item.label} />)
        <Button  key={i} {...item} handleOnButtonClick={handleOnButtonClick}/>
        ))
      }


  
  
    
   
 
     {/* <Button cls ="btn-C" label="C"/>

     <div class="btn btn-c">C</div>
     <div class="btn btn-perc">%</div>
    <Button cls=" btn-C" label="C"/>
   <Button cls=" btn-perc" label="%"/>

     <div class="btn btn-divide">/</div>
     <div class="btn btn-7">7</div>
     <div class="btn btn-8">8</div>
     <div class="btn btn-9">9</div>
     <div class="btn btn-x">*</div>
     <div class="btn btn-4">4</div>
     <div class="btn btn-5">5</div>
     <div class="btn btn-6">6</div>
     <div class="btn btn-minus">-</div>
     <div class="btn btn-1">1</div>
     <div class="btn btn-2">2</div>
     <div class="btn btn-3">3</div>
     <div class="btn btn-plus">+</div> <div class="btn btn-0">0</div>
    <div class="btn btn-dot">.</div>
    <div class="btn btn-equals">=</div>  */} 
    
    </>
  );
};
