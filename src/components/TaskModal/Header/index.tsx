import { Typography } from "@mui/material";
import { modalTitle } from "~/global";
import styles from '~/components/TaskModal/styles.module.css'
 
export const ModalHeader = () => {
    return(
        <div className={styles.TopPart}>
        <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {modalTitle}
            </Typography>
        </div>
        <div>
            Top Buttons
        </div>
    </div>
    );
}