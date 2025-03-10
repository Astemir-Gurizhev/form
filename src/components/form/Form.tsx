import styles from './Form.module.scss'

export const Form = () => {
	return (
		<div className={styles.form}>
			<div className={styles.formContainer}>
				<div className={styles.formRow}>
					<img className={styles.formIcon} src='/form.png' alt='' />
					<div className={styles.inputsArea}>
						<input type='text' placeholder='имя' />
						<input type='text' placeholder='фамилия' />
					</div>
					<div className={styles.inputsArea}>
						<input type='text' placeholder='должность' />	
					</div>
				</div>
			</div>
		</div>
	)
}
