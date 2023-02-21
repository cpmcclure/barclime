const ShotData = ({ id, grind, dose, weight, time, roastDate, currentTime }) => {
    return(
        <section>
            <ul className="center shotDisplay">
                  <li className="shotItem">
                    <section className="container">
                        <section className="row">
                            <section className="col-9">
                                <a href={`../shot/${id}`} class="headerLink">
                                    <h3>{currentTime}</h3>
                                </a>
                            </section>
                            <section className="col-1">
                                <button id="hideEdit" className="editButton">Edit</button>
                            </section>
                            <section className="col-1">
                                <form action={`/shot/deleteShotData/${id}?_method=DELETE`} method="POST">
                                    <button className="editButton deleteButton" type="submit">Delete</button>
                                </form>
                            </section>
                        </section>
                    </section>
                    <section className="row">
                        <section className="col">
                            <table className="shotTable">
                                <tr>
                                    <th>Grind</th>
                                    <th>Dose</th>
                                    <th>Weight</th>
                                    <th>Time</th>
                                    <th>Roast Date</th>
                                </tr>
                                <tr>
                                    <td>{grind}</td>
                                    <td>{dose}</td>
                                    <td>{weight}</td>
                                    <td>{time}</td>
                                    <td>{roastDate}</td>
                                </tr>
                            </table>
                        </section>
                    </section>
                    <section className="row hidden" id="editSection">
                        <section className="col">
                            <form action={`/shot/editShotData/${id}?_method=PUT`}
                                method="POST">
                                <table className="editTable">
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
                                            <input class="editRoastDate" type="text" name="roastDate" id="roastDate" />
                                        </td>
                                    </tr>
                                </table>
                                <button className="editButton" type="submit">Update</button>
                            </form>
                        </section>
                    </section>
                  </li>
                </ul>
        </section>
    )
}

export default ShotData