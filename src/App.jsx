import { CardCharacter } from "./components/CardCharacter";
import { Loading } from "./components/Loading";
import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";

export const App = () => {

  const {counter, handleIncrement, handleDecrement} = useCounter(1)

  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

  const {name, species, image, gender, origin} = !!data && data[0]

  return (
    <>
      <h1 style={{display: "flex", justifyContent: "center"}}>Rick and Morty Characters</h1>
      <hr />

        {
            isLoading ? <Loading/> : <CardCharacter name={name} species={species} image={image} gender={gender} origin={origin} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
        }
    </>
  )
}
