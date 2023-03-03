import SingleShotData from "./SingleShotData";

const MultiShotData = ({shots}) => {
    console.log(shots)
    return (
        <>
            {shots.map(shot => (
                <SingleShotData id={shot.id} grind={shot.grind} dose={shot.dose} weight={shot.weight} time={shot.time} roastDate={shot.roastDate} currentTime={shot.currentTime} />
            ))}
        </>
    )
}

export default MultiShotData