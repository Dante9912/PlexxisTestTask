import styles from '~/components/TaskModal/styles.module.css';

export const Description = ()=>{
return(
<div className={styles.DescriptionDiv}>
<input className={styles.descriptionInput} placeholder="Click to add the description"/>
</div>);
}
