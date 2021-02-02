import React,{useState,useEffect}from 'react';




const Pokemon = (props) => {
    const [people, setPeople] = useState([]);

    const on=()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(response => {
            return response.json();
        }).then(response => {
            setPeople(response.results);
        }).catch(err=>{
            console.log(err);
        });
    }

 
    return (
        <div>
            <button onClick={on}>fetch name</button>   
            {
                people.map((item , index)=>
                    <p key ={index}> {item.name}</p>
                
                )
            }         
        </div>
    );
}
export default Pokemon;