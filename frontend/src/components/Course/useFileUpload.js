import { useState, useRef } from 'react';
import axios from 'axios';

function useFileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const inputFileRef = useRef(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setFileName(file.name);
    };

    const handleClick = () => {
        inputFileRef.current.click();
    };

    const handleUpdate = (url) => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        axios.put(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return {
        selectedFile,
        inputFileRef,
        handleFileUpload,
        handleClick,
        handleUpdate,
        fileName
    }
}

export default useFileUpload;
