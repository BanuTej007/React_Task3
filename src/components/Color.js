import './style.css'
import {useState} from 'react';

function Color({colors}){
    const [listvisible, setlistvisible]=useState(false)
    const [color, setcolor]=useState(null)
    const change=(color)=>{
        setcolor(color);
        setlistvisible(false)
    }
    return(
        <div>
            <h1>Color Picker</h1>
            <div class="box">
                <div class="space"></div>
                {listvisible &&
                <ul class="list">{colors.map((color, index) => (
                <li
                key={index}
                onClick={() => change(color)}
                style={{ backgroundColor: color }}
            ></li>))}
            </ul>}
            <button onClick={()=>setlistvisible(true)} style={{backgroundColor: color}}>Pick a color</button>
            </div>
        </div>
    )
}

export default Color;