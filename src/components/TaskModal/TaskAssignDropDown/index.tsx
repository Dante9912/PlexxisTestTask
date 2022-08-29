import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import styles from '~/components/TaskModal/styles.module.css'
import { StyledMenu } from "./StyledDropDown";
import { addAssginie, statusbarDropDownValues } from "~/global";
import { UsersMenuItem } from "~/Interfaces";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "~/redux/actions/UserActions";
import { RootState } from "~/redux/rootReducer";
import { useState } from "react";
import { isConstructorDeclaration } from "typescript/lib/tsserverlibrary";
export const TaskAssginDropDown = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const [selectedUsers, setselectedUsers] = useState<UsersMenuItem[]>([])
  const { users } = useSelector(
    (state: RootState) => state.users
  );

  const handleClick = (event: any) => {
    dispatch(getUsersRequest());
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const addUsers = (user: UsersMenuItem) => {
    const checkUserId = selectedUsers.find(oldUsers=>oldUsers.id == user.id);
    !checkUserId && setselectedUsers([...selectedUsers, user])
    handleClose();
  }

  return (
    <div>
      <Button

        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={styles.AssignButton}

      >
        {selectedUsers && selectedUsers.length ?
          selectedUsers.map((user,index) => {
            return (<div key={index} className={styles.assginedUsersDiv}> {user.name}</div>);
          })
          :
          <span className={styles.DropDownSelectedtext}>{addAssginie}</span>}
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
        {users.map((user: UsersMenuItem, index) => {
          return (<MenuItem
            key={index}
            onClick={() => {
              addUsers(user)
            }}
            disableRipple
          >
            {user.name}
          </MenuItem>);

        })}




      </StyledMenu>
    </div>
  );
}
