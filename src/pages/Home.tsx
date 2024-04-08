import { useSocketInfo } from "../contexts/SocketInfoContext"
import InputHome from "../components/InputHome"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
type HomeProps = {

}

const Home = ({ }: HomeProps) => {
    const [error, setError] = useState(false)
    const { user, setUser, room, setRoom, socket } = useSocketInfo()
    const navigate = useNavigate()

    const handleLogin = () => {
        if (user.length > 0 && room.length > 0) {
            console.log(user.length)
            navigate("/chat")
            socket.emit('createUser_joinRoom', {user, room})
        } else {
            setError(true)
            setTimeout(()=>{
                setError(false)
            }, 2000)
        }
    }

    return (
        <main className="m-auto grid place-content-center w-[50vw] h-[100vh] relative">
            <h1 className="text-2xl text-center mb-8">Login</h1>
            {error && 
            <div role="alert" className="alert alert-warning absolute top-14">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>O nome e a sala devem ser preenchidos!</span>
            </div>}


            <form onSubmit={(e) => e.preventDefault()}
                className="flex flex-col justify-center items-center gap-3"
            >
                <InputHome InputValue={user} setInputValue={setUser} d={"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"} placeholder="Username" />

                <InputHome InputValue={room} setInputValue={setRoom} d={"M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"} placeholder={"Room"} />

                <button
                    className="btn w-[80%]"
                    onClick={handleLogin}
                >Entrar</button>
            </form>
        </main>
    )
}

export default Home