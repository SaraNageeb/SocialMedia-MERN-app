import FlexBetween from "../style/FlexBetween";
import {IconButton,InputBase,useTheme } from "@mui/material";
  import {Search} from "@mui/icons-material";

const Searchbar = () => {
const theme = useTheme();
const neutralLight = theme.palette.neutral.light;

  return (
    <FlexBetween
    backgroundColor={neutralLight}
    borderRadius="9px"
    gap="3rem"
    padding="0.1rem 1.5rem"
  >
    <InputBase placeholder="Search..." />
    <IconButton>
      <Search />
    </IconButton>
  </FlexBetween>
 
 
  )
}

export default Searchbar