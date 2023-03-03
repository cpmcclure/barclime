const Signup = () => {
    return (
        <section class="info">
            <h3>Enter User Information</h3>
            <form action="/signup" method="POST">
                <input type="text" name="userName" placeholder="User Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                <input type="submit" />
            </form>
        </section>
    )
}

export default Signup