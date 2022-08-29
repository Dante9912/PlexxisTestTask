import styles from '~/components/TaskModal/styles.module.css'
import { TaskAssginDropDown } from '../TaskAssignDropDown';
import { TaskAuthor } from '../TaskAuthor';
import { TaskStatusDropDown } from '../TaskStatusDropDown';
export const StatusBar = ()=>{
    return(<div className={styles.statusBarMainDiv}><TaskStatusDropDown/> <TaskAssginDropDown/> <TaskAuthor/> </div>);
}