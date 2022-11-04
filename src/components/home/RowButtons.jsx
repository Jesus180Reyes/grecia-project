import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useFileArchive } from "../../hooks/useFileArchive";
import { useFileTarget } from "../../hooks/useFileTarget";

export const RowButtons = () => {

    const { startUpload, uploads, authUser } = useFileTarget();
    const { onArchiveSubmit, setUploadArchive, uploadArchive } = useFileArchive();
    const dispatch = useDispatch();
    const fileRef = useRef();
    const onFileInputChange = (e) => {
        if (e.target.files === 0) return;
        // setFile(target.files);
        Swal.fire({ icon: "success", title: "Archivos Subidos Correctamente", text: "Los Archivos han sido subidos correctamente" });
        console.log("Subiendo Archivos", e.target.files);
        setUploadArchive(e.target.file);

        console.log(uploadArchive);


    }


    return (
        <>
            <div className="container">
                <button type="button" className="btn btn-primary mr-10"><i className="fa-solid fa-check"></i>Importar</button>
                <button type="button" className="btn btn-primary"><i className="fa-solid fa-download"></i>Descargar Datos o Plantilla</button>
                <button type="button" className="btn btn-danger"><i className="fa-solid fa-trash"></i>Limpiar</button>
                <div className="row-container">
                    <input type="file" style={{ display: 'none' }} onChange={onFileInputChange} ref={fileRef} multiple />
                    <button onClick={() => fileRef.current.click()} type="button" className="btn btn-success"><i className="fa-solid fa-cloud-arrow-up"></i>Seleccionar Archivo</button>
                </div>
            </div>

        </>
    )
}
