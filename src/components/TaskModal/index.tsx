import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { TaskModalProps } from "~/Interfaces";
import { Description } from "./Description";
import { ModalHeader } from "./Header";
import { StatusBar } from "./StatusBar";
import styles from './styles.module.css';
import { ModalTagline } from "./Tagline";

export const TaskModal: FC<TaskModalProps> = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}

        >
            <Box className={styles.modalBox}>

                <ModalHeader />
                <ModalTagline />
                <StatusBar />
                <Description/>


            </Box>
        </Modal>
    );
}
