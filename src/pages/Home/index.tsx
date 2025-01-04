import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
    return (
        <HomeContainer >
            <form action="">
                <FormContainer>


                    <label htmlFor="task">Vou Trabalhar em</label>
                    <TaskInput
                        id="task"
                        list="task-suggestions"
                        placeholder="Dé um nome para o seu projeto " />

                    <datalist id="task-suggestions">

                        <option value="Projeto 1"></option>
                        <option value="Projeto 2"></option>
                        <option value="Projeto 3"></option>
                        <option value="Banana"></option>

                    </datalist>

                    <label htmlFor="">Durante</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                    />


                    <span>Minutos</span>

                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton disabled type="submit">

                    <Play size={24} />

                    Começar

                </StartCountdownButton>
            </form>

        </HomeContainer>
    )
}