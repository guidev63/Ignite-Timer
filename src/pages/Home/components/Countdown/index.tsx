import { useEffect, useState } from "react";
import { CountdownContainer, Separator } from "./styles";
import { differenceInSeconds } from "date-fns";


interface CountdownProps{
  activeCycle:any
  setcycles:any
  activeCycleId:any
}
export  function Countdown({activeCycle,setcycles,activeCycleId}:CountdownProps){
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0 

  useEffect(() => {
    let interval: number | undefined;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds (
          new Date(),
          activeCycle.startDate
        );

        if (secondsDifference >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() };
              } else {
                return cycle;
              }
            }),
          )
          setAmountSecondsPassed(totalSeconds)
          
           clearInterval(interval)
          
          setActiveCycleId(null);
          setAmountSecondsPassed(totalSeconds);
        } else {
          setAmountSecondsPassed(secondsDifference);
        }
      }, 1000);
    }
 
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, activeCycleId]);

    return(
        <CountdownContainer>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
        <Separator>:</Separator> {/* O estilo de cor verde permanece */}
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </CountdownContainer>
    )
}