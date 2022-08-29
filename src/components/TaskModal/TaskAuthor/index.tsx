import { authorText } from "~/global";
import styles from '~/components/TaskModal/styles.module.css'

export const TaskAuthor = () => {
    return (<div className={styles.AuthorDiv}>
       {authorText}
    </div>);
}