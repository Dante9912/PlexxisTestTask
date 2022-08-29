
import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styles from './styles.module.css';
import { TaskModal } from "~/components";
import { useDispatch, useSelector } from "react-redux";
import { getTasksRequest } from "~/redux/actions/TaskActions";
import { RootState } from "~/redux/rootReducer";



export const TaskCard = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const { tasks } = useSelector(
    (state: RootState) => state.tasks
  );
  useEffect(() => {
    dispatch(getTasksRequest());
  }, []);

  return (
    <div>

      {tasks.map((task, key) => {
        return (
          <Card key={key} onClick={() => handleOpen()} className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Typography className={styles.cardTitle} >
                {task.title}
              </Typography>

              <Typography className={styles.cardDescription} >
                {task.description}
              </Typography>

              <div className={styles.tagListMain}>{task.type}</div>
            </CardContent>

          </Card>
        );

      })}

      <TaskModal open={open} handleClose={handleClose} />
    </div>
  );
};
