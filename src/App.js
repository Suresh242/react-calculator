import {useState} from 'react';
import "./App.css";
import {Display} from './components/Display'
import {BtnAreas} from './components/BtnAreas'

const operators =["+","-","*","/","%"];


function App (){
  

  const[strToDisplay, setstrToDisplay] = useState("")
  const[lastOperator, setLastOperator] = useState("")


  const handleOnButtonClick =(val)=>{
    // console.log(val);
    
    if (val==="C"){
      return  setstrToDisplay(strToDisplay.slice(0,-1));
    }
    if (val==="AC"){
      return setstrToDisplay("");
    }
    if (val==="="){
      const lastChar =strToDisplay[strToDisplay.length-1];
      let temStr = strToDisplay;
      if(operators.includes(lastChar)){
        temStr = strToDisplay.slice(0,-1);
      }
      return setstrToDisplay(eval(temStr).toString())
    //   if (operators.includes(lastChar)) {
    //     strToDisplay = strToDisplay.slice(0, -1);
    //   }

    //   return total();
    // }

    // if (operators.includes(val)) {
    //   if (!strToDisplay) {
    //     return;
    //   }
    //   const lastChar = strToDisplay[strToDisplay.length - 1];

    }
    if (operators.includes(val)){
      if (!strToDisplay){
        return;
      }
      let temStr = strToDisplay;
      const lastChar =strToDisplay[strToDisplay.length-1];
      if(operators.includes(lastChar)){
        temStr=strToDisplay.slice(0,-1);
      }
      setLastOperator(val);
      setstrToDisplay(temStr+val);
      return;
      
    }
    if (val==="."){
      if(lastOperator){
        const operatorIndex = strToDisplay.lastIndexOf(lastOperator);
        const lastNumberSet = strToDisplay.slice(operatorIndex+1);
        if(lastNumberSet.includes(".")){
          return;
        }
        console.log(operatorIndex);
      }
      if (!lastOperator && strToDisplay.includes(".")){
        return;
      }
  
    }
    setstrToDisplay(strToDisplay + val)
};

  return (
    <div>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="calculator">
         <Display strToDisplay={strToDisplay}/>
         <BtnAreas handleOnButtonClick={handleOnButtonClick}/>
        </div>
      </div>
    </div>
  );
}

export default App;
