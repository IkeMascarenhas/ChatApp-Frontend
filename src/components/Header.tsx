import { Link } from 'react-router-dom'
import { useSocketInfo } from '../contexts/SocketInfoContext'

const Header = () => {
    const { socket, room, user } = useSocketInfo()

    const handleLeave = () => {
        socket.emit('leaveRoom', { user, room })
    }

    return (
        <header className="navbar bg-base-300 fixed top-0 z-30">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">{room}</a>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-outline btn-sm" to={"/"} onClick={handleLeave}>Leave</Link>
            </div>
        </header>
    )
}

export default Header