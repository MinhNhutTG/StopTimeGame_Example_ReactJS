import { useState ,useRef} from "react"
import ResultModel from "./ResultModel";
export default function TimeStopper({title,targetTime}){
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining,setTimeMaining] = useState(targetTime * 1000);
    const timeActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
 
    if (timeRemaining <= 0){
        clearInterval(timer.current)
        dialog.current.open();
    }

    function handleClick(){
        timer.current = setInterval(() => {
            setTimeMaining((prevTime)=>prevTime-10);
        }, 10);

    }
    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
    }

    function handleRest(){
        setTimeMaining(targetTime * 1000);
    }

    return (
        <>
            <ResultModel ref={dialog}  targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleRest}></ResultModel>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">{targetTime} second{targetTime > 1 ? "s" : ""}</p>
                <button onClick={timeActive?handleStop: handleClick}>{timeActive?"Stop":"Start"}</button>
                <p className={timeActive?"active":undefined}> {timeActive?"Time is running...":"Time inactive"}</p>
            </section>
        </>
    )
}