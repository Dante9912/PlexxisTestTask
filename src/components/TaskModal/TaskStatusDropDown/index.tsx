import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import styles from '~/components/TaskModal/styles.module.css'
import { StyledMenu } from "./StyledDropDown";
import { statusbarDropDownValues } from "~/global";
import { DropDownMenuItem } from "~/Interfaces";
import { useState } from "react";
import { Checkbox } from "@mui/material";

  





export const TaskStatusDropDown=()=> {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedValue,setSelectedValue]= useState(statusbarDropDownValues[0])
  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
    
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={styles.dropDownButton}
      >
    <div className={styles.checkboxDiv}>
    <Checkbox checked={selectedValue.checked} />
    <span className={styles.DropDownSelectedtext}>{selectedValue.label} </span>
    </div>
 
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {statusbarDropDownValues.map((item:DropDownMenuItem,index)=>{
            return(<MenuItem
            key={index}
                onClick={() => {
                  setSelectedValue(statusbarDropDownValues[index])
                  handleClose();
                }}
                disableRipple
              >
              <div style={{backgroundColor:item.color}} className={styles.menuItemColorMain}> </div>
            {item.label}
              </MenuItem>);
   
        })}

   
       
      
      </StyledMenu>
    </div>
  );
}
