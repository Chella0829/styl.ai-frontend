import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './Upload.css';
const Upload = () => {
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) => Object.assign(file, {
                    priview: URL.createObjectURL(file)
                }))
            )
        }
    })

    const images = files.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.priview} style={{ width: "150px" }} alt='preview' />
            </div>
        </div>
    ))
    return (
        <div className='Imagegrag'>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className='dropdown'>
                    <p>Drop image here</p>
                </div>
            </div>
            <div className='showimg'>{images}</div>
            <div className='submit'>
                <button>Save</button>
            </div>
        </div>
    );
}

export default Upload;