const UserData = ({ userName, firstName, lastName, zipCode}) => {
    return (
        <>
            <h2>Hello {userName}</h2>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
            <h3>{zipCode}</h3>
        </>
    )
}

export default UserData