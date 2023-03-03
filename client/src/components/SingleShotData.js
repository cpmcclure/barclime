import { useState } from 'react'
import EditShot from './EditShot'

const SingleShotData = ({ id, grind, dose, weight, time, roastDate, currentTime }) => {
    const [showEdit, setShowEdit] = useState(false)
    
    return(
        <section>
            <ul className="center shotDisplay">
                  <li className="shotItem">
                    <section className="container">
                        <section className="row">
                            <section className="col-9">
                                <a href={`../shot/${id}`} className="headerLink">
                                    <h3>{currentTime}</h3>
                                </a>
                            </section>
                            <section className="col-1">
                                <button id="hideEdit" className="editButton" onClick={() => setShowEdit(!showEdit)}>Edit</button>
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
                                <tbody>
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
                                </tbody>
                            </table>
                        </section>
                    </section>
                    {showEdit && <EditShot id={id} />}
                  </li>
                </ul>
        </section>
    )
}

export default SingleShotData