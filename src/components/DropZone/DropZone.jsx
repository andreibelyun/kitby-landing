import st from './DropZone.module.scss'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import clsx from 'clsx'
import IconImport from '@/assets/svg/IconImport'

export function DropZone({ files, setFiles, className }) {
  const [warning, setWarning] = useState(null)

  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    maxFiles: 5,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    onDrop: acceptedFiles => {
      try {
        const newFiles = acceptedFiles.map(
          blob =>
            new File([blob], blob.name, {
              type: blob.type
            })
        )

        setFiles(newFiles)
        setWarning(null)
      } catch (err) {
        setWarning('Один из файлов не соответствует условиям')
      }
    }
  })

  if (Boolean(files?.length))
    return (
      <div className={st.files}>
        {files.map((file, i) => (
          <FileLine
            key={file.name + i}
            fileName={file.name}
            onFileDelete={() => {
              setFiles(prev => prev.filter((_, index) => index !== i))
            }}
          />
        ))}
      </div>
    )

  return (
    <div className={clsx(st.container, className)} {...getRootProps()}>
      <IconImport className={st.iconImport} />
      <p className={st.title}>Нажмите, чтобы добавить файлы к сообщению.</p>
      <p className={st.caption}>Можно добавить до 5 файлов с разрешением jpeg, png и весом до 512 Кбайт.</p>
      <input {...getInputProps()} value={files} />
      <p className={st.error}>{warning}</p>
    </div>
  )
}

const FileLine = ({ fileName, onFileDelete }) => (
  <div className={st.fileLine}>
    <p className={st.fileName}>{fileName}</p>
    <button onClick={() => onFileDelete()} className={st.deleteFile}>
      <svg width='30' height='30' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M20.2446 20.5022L59.5062 59.7638' stroke='#466881' strokeWidth='2' strokeLinecap='round' />
        <path d='M59.5063 20.5022L20.2447 59.7638' stroke='#466881' strokeWidth='2' strokeLinecap='round' />
      </svg>
    </button>
  </div>
)
