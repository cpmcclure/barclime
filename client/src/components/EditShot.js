const EditShot = (id) => {
    return(
        <>
            <section className="row" id="editSection">
                        <section className="col">
                            <form action={`/shot/editShotData/${id}?_method=PUT`}
                                method="POST">
                                <table className="editTable">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="number" name="grind" id="grind" min="1" max="10" step=".1" />
                                            </td>
                                            <td>
                                                <input type="number" name="dose" id="dose" min="20.0" max="26.0" step=".1" />
                                            </td>
                                            <td>
                                                <input type="number" name="weight" id="weight" min="34" max="42" step=".1" />
                                            </td>
                                            <td>
                                                <input type="number" name="time" id="time" min="20" max="30" step="1" />
                                            </td>
                                            <td>
                                                <input className="editRoastDate" type="text" name="roastDate" id="roastDate" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="editButton" type="submit">Update</button>
                            </form>
                        </section>
                    </section>
        </>
    )
}

export default EditShot