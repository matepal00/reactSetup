import { CircularProgress } from "@mui/material";
import { Wrapper } from "./Loader.styles";

const Loader = () => {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
};

export default Loader;
