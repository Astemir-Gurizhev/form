import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './Form.module.scss'
import File from '../ui/file/File'
import { CustomDatePicker } from '../ui/datepicker/DatePicker'

export const Form = () => {
	const [name, setName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [status, setStatus] = useState<string>('')

	const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}
	const handleInputLastName = (e: ChangeEvent<HTMLInputElement>) => {
		setLastName(e.target.value)
	}
	const handleInputStatus = (e: ChangeEvent<HTMLInputElement>) => {
		setStatus(e.target.value)
	}
	const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<form onSubmit={handleSumbit} className={styles.form}>
			<div className={styles.formContainer}>
				<div className={styles.formRow}>
					<img className={styles.formIcon} src='/form.png' alt='' />
					<div className={styles.inputsArea}>
						<input
							value={name}
							onChange={handleInputName}
							type='text'
							placeholder='имя'
						/>
						<input
							value={lastName}
							onChange={handleInputLastName}
							type='text'
							placeholder='фамилия'
						/>
					</div>
					<div className={styles.inputsArea}>
						<input
							value={status}
							onChange={handleInputStatus}
							type='text'
							placeholder='должность'
						/>
					</div>
	
					<CustomDatePicker />
					<File />
				
					<button className={styles.btnSubmit} type='submit'>
						отправить
					</button>
				</div>
			</div>
		</form>
	)
}
