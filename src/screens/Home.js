import React, { useState } from 'react';
import "./Home.css";
import data from "../components/Data";

const Home = () => {

    const [count, setCount] = useState(0);
    const [para, setPara] = useState([]);

    const handleSubmit = (e) => {

        let amount = count;
        if(count <= 0){
            amount = 0;
            alert("ohhh Noo ! You have Entered a Negative Number")
        }
        if(count > 9 ){
            amount = 0;
            alert("You are Demanding too Much . Try again")
        }
        setPara(data.slice(0, amount));
    }

  return (
    <div className='container'>
        <div className='main'>
            <div className='head'>
                <h1 className='title'>
                    PARAGRAPH GENERATOR
                </h1>
                <div className='content'>
                    <label className='lab'>Number of Paragraphs:</label>
                    <input 
                        onChange={(e) => setCount(e.target.value)}
                        id='amount'
                        className='input-box'
                        type='number'
                        placeholder='00'
                    >
                    </input>
                    <button 
                        onClick={handleSubmit}
                        className='btn'
                    >
                        GENERATE
                    </button>
                </div>

                <div className='display-para'>
                    {
                        para.map((paragraph, index) => {
                            return <p key={index}>{paragraph}</p>;
                        })
                    }
                </div>
                
            </div>
        </div>   
    </div>
  )
}

export default Home