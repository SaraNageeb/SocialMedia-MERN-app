import { useState } from "react";
import {
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  Close,
} from "@mui/icons-material";
import FlexBetween from "../style/FlexBetween";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Mainbar from "./Mainbar";

const Navbar = () => {
  
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  const background = theme.palette.background.default;
  const alt = theme.palette.background.alt;

   return (
    <>
      <FlexBetween padding="1rem 6%" backgroundColor={alt}>
        <FlexBetween gap="1.75rem">
          <Logo />
          {isNonMobileScreens && (<Searchbar />)}
        </FlexBetween>

        {/* DESKTOP NAV */}
        {isNonMobileScreens ? (
          <FlexBetween gap="2rem">
            <Mainbar />
          </FlexBetween>
        ) : (
          <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
           >
            <Menu />
          </IconButton>
        )}
       
       
      {/* MOBILE NAV */}
       {!isNonMobileScreens && isMobileMenuToggled && (
      <Box
        position="fixed"
        right="0"
        bottom="0"
        height="100%"
        zIndex="10"
        maxWidth="500px"
        minWidth="300px"
        backgroundColor={background}
      >
        {/* CLOSE ICON   */}
        <Box display="flex" justifyContent="flex-end" p="1rem">
          <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Close />
          </IconButton>
        </Box>

        {/* MENU ITEMS  */}
        <FlexBetween
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="3rem"
        >
          <Mainbar />
        </FlexBetween>
      </Box> 
         )} 
      </FlexBetween>
    </>
  );
};

export default Navbar;
