import { Typography } from "@mui/material";
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
      <Typography variant="h4" sx={{display: "flex", justifyContent: "center", fontFamily: "cursive"}}>Rick and Morty Characters</Typography>
      <hr />

        {
            isLoading ? <Loading/> : <CardCharacter name={name} species={species} image={image} gender={gender} origin={origin} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
        }
    </>
  )
}
