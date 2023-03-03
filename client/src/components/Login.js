const Login = () => {
    return (
        <section className="info">
            <h3>Enter Login Info</h3>
            <form action="/login" method="POST">
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" />
            </form>
        </section>
    )
}

export default Login