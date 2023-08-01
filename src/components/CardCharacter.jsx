import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const CardCharacter = ({name,species,image,gender,origin,handleIncrement,handleDecrement,}) => {

  return (
    <>
      <Card
        sx={{
          width: "80%",
          minHeight: "550px",
          bgcolor: "#13191c",
          position: "absolute",
          marginLeft: "8%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={name}
            src={image}
            sx={{
              height: "40%",
              width: "20%",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          />
          <Typography
            sx={{ color: "white" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
          <Typography sx={{ color: "white" }} variant="h6">
            {species}
          </Typography>
          <Typography sx={{ color: "white" }} variant="h6">
            {gender}
          </Typography>
          <Typography sx={{ color: "white" }} variant="h6">
            {origin.name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alingItem: "Center",
            marginTop: "26px",
          }}
        >
          <Button
            variant="contained"
            color="error"
            onClick={handleDecrement}
          >
            <ArrowBackIcon /> Last Character
          </Button>

          <Button
            variant="contained"
            onClick={handleIncrement}
            sx={{ marginLeft: "15px" }}
          >
            Next Character <ArrowForwardIcon />
          </Button>
        </Box>
      </Card>
    </>
  );
};