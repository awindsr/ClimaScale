import { useState } from "react";
import { tips } from "../data";
import {AiFillCar} from "react-icons/ai"
import {BsFillBasket3Fill} from "react-icons/bs"
import {MdFastfood} from "react-icons/md"
import {HiHome} from "react-icons/hi"
import {GiFootprint} from "react-icons/gi"
import {BsTreeFill} from "react-icons/bs"
import climate from "../assets/climate-gif.gif"

import "./Tips.css"

function Tips(props) {
    const [tipData, setTipData] = useState([]) 
    const [type, setType] = useState("")

    // onClick function for setting tipData value
    function showTips(val){
        const data = tips.find(({category}) => category.toLowerCase() === val)
        setType(data.category)
        setTipData(data.tips)
    }

    return (
        <div className="tips center">
            <h1>Tips</h1>
            <div className="tip-buttons">
            <button 
            onClick = {() => showTips("transportation")}
            className="transportation tip-category">
                <AiFillCar size ={"40px"} />
            </button>
            <button 
            onClick = {() => showTips("general")}
            className="tip-category">
                <BsFillBasket3Fill size = {"40px"} />
            </button>
            <button 
            onClick = {() => showTips("food")}
            className="tip-category">
                <MdFastfood size = {"40px"} />
            </button>
            <button 
            onClick = {() => showTips("home")}
            className="tip-category">
                <HiHome size={"40px"} />
            </button>
            </div>

            <section className="show-tips">
                {tipData.length > 0 && <h2>{type}</h2>}
                { tipData.length > 0 &&
                    tipData.map((el,i) =>
                        <li key = {i}>
                            <BsTreeFill color = {"#15793c"} />
                            <span>{el}</span>
                        </li>) ||
                        <>
                        <h3>Click On An Icon  <br/><br/>
                        to View Ways to  <br/> <br/>  
                        Reduce Your Carbon<br/><br/> <GiFootprint size = {"50px"} />
                        </h3>
                        <br/>
                        <img className="tips-gif" src = {climate} alt = "gif" />
                        </>
                }
            </section>
        </div>
    );
}

export default Tips;