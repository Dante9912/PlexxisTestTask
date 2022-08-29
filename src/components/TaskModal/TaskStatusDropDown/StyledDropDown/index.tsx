import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";

export const StyledMenu = styled((props:any) => (
    <Menu
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      transform: 'translate(849px, 225px) rotate(0deg)',
      maxHeight:'191px',
      width:'233px',
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
       "& .MuiMenuItem-root": {
         fontSize:'12px',
        "&:active": {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        },
      },
    },
  }));