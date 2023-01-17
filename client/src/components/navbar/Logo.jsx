import { useNavigate } from "react-router-dom";
import { Typography, useTheme } from "@mui/material";

const Logo = () => {

  const theme = useTheme();
  const primaryLight = theme.palette.primary.light;
  const navigate = useNavigate();

  return (
    <Typography
      fontWeight="bold"
      fontSize="clamp(1rem, 2rem, 2.25rem)"
      color="primary"
      onClick={() => navigate("/home")}
      sx={{
        "&:hover": {
          color: primaryLight,
          cursor: "pointer",
        },
      }}
    >
      Sociopedia
    </Typography>
  );
};

export default Logo;
