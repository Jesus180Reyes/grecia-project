import { useFileArchive } from "../../hooks/useFileArchive";

export const CustomTable = () => {
    const { uploadArchive, setUploadArchive } = useFileArchive();
    const isData = true;
    if (isData) return (
        <>
            <div className="container">

                <table className="table">
                    <thead className="table-light">
                        <tr>
                            <th scope="col"><i className="fa-light fa-file"></i>Orden Trabajo</th>
                            <th scope="col"><i className="fa-solid fa-building"></i>Actividad</th>
                            <th scope="col"><i className="fa-solid fa-user"></i>Responsable</th>
                            <th scope="col"><i className="fa-light fa-calendar"></i>Fecha Progra</th>
                            <th scope="col"><i className="fa-regular fa-clock"></i>Horas Progra</th>
                            <th scope="col"><i className="fa-regular fa-clock"></i>Horas Inicio</th>
                            <th scope="col"><i className="fa-solid fa-turn-up"></i>Turno</th>
                            <th scope="col"><i className="fa-solid fa-circle-check"></i>Validacion</th>
                        </tr>
                    </thead>
                </table>
                <h4>No Hay Datos</h4>
                <hr />
                <p>Total: {uploadArchive.length}</p>
            </div>
        </>
    );
    return (
        <>
            <table className="table" >
                <thead className="table-light">
                    <tr>
                        <th scope="col"><i className="fa-light fa-file"></i>Orden Trabajo</th>
                        <th scope="col"><i className="fa-solid fa-building"></i>Actividad</th>
                        <th scope="col"><i className="fa-solid fa-user"></i>Responsable</th>
                        <th scope="col"><i className="fa-light fa-calendar"></i>Fecha Progra</th>
                        <th scope="col"><i className="fa-regular fa-clock"></i>Horas Progra</th>
                        <th scope="col"><i className="fa-regular fa-clock"></i>Horas Inicio</th>
                        <th scope="col"><i className="fa-solid fa-turn-up"></i>Turno</th>
                        <th scope="col"><i className="fa-solid fa-circle-check"></i>Validacion</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table >
            <p>Total:{uploadArchive.length}</p>
        </>
    )
}
