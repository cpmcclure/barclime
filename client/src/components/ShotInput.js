    import {useState} from 'react'
    
const ShotInput = ( { lastGrind, lastDose, lastWeight, lastTime, lastRoastDate } ) => {
    const [grind, setGrind] = useState(lastGrind)
    const [dose, setDose] = useState(lastDose)
    const [weight, setWeight] = useState(lastWeight)
    const [time, setTime] = useState(lastTime)
    const [roastDate, setRoastDate] = useState(lastRoastDate)

    return (
        <form>
            <fieldset className="fieldColumn">
                <div className="fieldRow">
                    <label htmlFor="">Grind</label>
                    <input 
                        type="range"
                        value={grind}
                        onChange={(e) => setGrind(e.target.value)}
                     />
                    <output>{grind}</output>
                </div>
                <div className="fieldRow">
                    <label htmlFor="">Dose</label>
                    <input 
                        type="range"
                        value={dose}
                        onChange={(e) => setDose(e.target.value)}
                     />
                     <output>{dose}</output>
                </div><div className="fieldRow">
                    <label htmlFor="">Weight</label>
                    <input 
                        type="range"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                     />
                     <output>{weight}</output>
                </div><div className="fieldRow">
                    <label htmlFor="">Time</label>
                    <input 
                        type="range"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                     />
                     <output>{time}</output>
                </div><div className="fieldRow">
                    <label htmlFor="">Roast Date</label>
                    <input 
                        type="date"
                        value={roastDate}
                        onChange={(e) => setRoastDate(e.target.value)}
                     />
                </div>
            </fieldset>
            <button type="submit" class="formButton" id="submitButton">Add</button>
        </form>
    )
}

export default ShotInput