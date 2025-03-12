import { ChangeEvent, useState } from 'react'
import styles from './File.module.scss'

const File = () => {
	const [fileName, setFileName] = useState<string>('')

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			setFileName(file.name)
		}
	}

	return (
		<div className={styles.fileInputContainer}>
			<input
				className={styles.fileInput}
				type='file'
				id='file-upload'
				onChange={handleFileChange}
			/>
			<label htmlFor='file-upload' className={styles.fileLabel}>
				{fileName || 'выберите файл'}
			</label>
		</div>
	)
}

export default File
