import { useEffect, useState } from "react"
import { useSocketInfo } from "../contexts/SocketInfoContext"
import Message from "../components/Message"
import chatMessages from "../types/chatMessages"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"

const Chat = () => {
  const [message, setMessage] = useState("")
  const { socket, room, user } = useSocketInfo()
  const [chatMessages, setChatMessages] = useState<chatMessages[]>([])
  const navigate = useNavigate()

  const handleSendMessage = () => {
    if(message.length > 0) {
      socket.emit('sendMessage', { message, user, room })
    }
    setMessage("")
  }

  useEffect(() => {
    if(user.length <= 0 || room.length <= 0){
      navigate("/home")
    }

    socket.on('receiveMessage', (usersInfo) => {
      setChatMessages((oldMessages) => [...oldMessages, usersInfo])
    })
    
    return () => {
      socket.off('receiveMessage');
    };
  }, [])


  return (
    <>
    <Header/>
    <main className="sm:max-w-[50vw] mx-auto h-[100vh] relative w-[90vw] ">
      <section id="ChatApp">
        <ul className="mt-5 pb-28">
          {chatMessages.map((item: chatMessages, index) => (
            <Message
              position={"chat-end"}
              user={item.user}
              message={item.message}
              room={item.room}
              key={index}
              currentUser={item.currentUser}
              admin={item.admin}
              time={item.time}
            />
          ))}
        </ul>

        <label className="flex w-[100%] justify-between gap-2 fixed InputMessage sm:max-w-[50vw]">
          <input type="text" className="input w-[80%]" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}/>
          <button onClick={handleSendMessage} className="btn w-[20%] text-base">Send</button>
        </label>
      </section>
    </main>
    </>
  )
}

export default Chat