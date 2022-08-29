import styles from '~/components/TaskModal/styles.module.css'
import { tagLine } from '~/global';

export const ModalTagline = ()=>{
    return(
        <div className={styles.taglineMainDiv}>
        <div className={styles.taglistText}>{tagLine}</div>
    </div>
    );
}