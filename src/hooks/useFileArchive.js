import { useState } from "react";

export const useFileArchive = () => {
    const [uploadArchive, setUploadArchive] = useState([]);
    const onArchiveSubmit = (file)=> {
        setUploadArchive(file);
        console.log(uploadArchive)
    }
  return {
    uploadArchive,
    setUploadArchive,
    onArchiveSubmit,
    

  }
}
