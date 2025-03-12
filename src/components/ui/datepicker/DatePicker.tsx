import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './DatePicker.module.scss'

export const CustomDatePicker = () => {
	const [startDate, setStartDate] = useState<Date | null>(new Date())

	const handleDateChange = (date: Date | null) => {
		setStartDate(date)
	}

	return (
		<DatePicker
			className={styles.datepicker}
			selected={startDate}
			onChange={handleDateChange}
			dateFormat='dd/MM/yyyy'
		/>
	)
}
