import { useImperativeHandle, useRef } from "react"
import {createPortal} from "react-dom"
export default function ResultModel({result,targetTime,ref,timeRemaining , onReset}){

    const dialogInside = useRef();
    const youLost = timeRemaining <=0;
    const formatTimeRemaining = (timeRemaining / 1000 ).toFixed(2);
    const score = Math.round((1- timeRemaining / (targetTime*1000))*100 );
    useImperativeHandle(ref,()=>{
       return{
        open(){
            dialogInside.current.showModal();
        }
       } 
        
    })
    return  createPortal(
        <>
            <dialog ref={dialogInside} className="result-modal">
                {!youLost ? <h2>Your score {score}</h2>:<h2>You Lost</h2>} 
                <p>Thời gian đích <strong> {targetTime} second{targetTime>1?"s":""}</strong></p>
                <p>Bạn đã dừng tại <strong> {formatTimeRemaining} second{formatTimeRemaining>1?"s":""}</strong></p>
                <form method="dialog" onSubmit={onReset}>
                    <button>Close</button>
                </form>
            </dialog>
        </>,
        document.getElementById("modal")
    )
}