import { createContext, useContext, useState, ReactNode } from "react";
import { Socket, io } from "socket.io-client";

type SocketInfoContextType = {
    user: string,
    setUser: React.Dispatch<React.SetStateAction<string>>,
    room: string,
    setRoom: React.Dispatch<React.SetStateAction<string>>;
    socket: Socket,
}

const SocketInfoContext = createContext<SocketInfoContextType | undefined>(undefined)

type SocketInfoProviderProps = {
    children: ReactNode
}

const SocketInfoProvider = ({ children }: SocketInfoProviderProps) => {
    const socket:Socket = io('https://chatapp-backend-n9gh.onrender.com/')
    //http://localhost:3000
    //https://chatapp-backend-n9gh.onrender.com/
    const [user, setUser] = useState("")
    const [room, setRoom] = useState("")


    return (
        <SocketInfoContext.Provider value={{user, setUser, room, setRoom, socket}}>
            {children}
        </SocketInfoContext.Provider>
    )
}

const useSocketInfo = () => {
    const context = useContext(SocketInfoContext)
    if(!context){
        throw new Error('Deve ser usado dentro de um provider')
    }
    return context
}

export {SocketInfoProvider, useSocketInfo}