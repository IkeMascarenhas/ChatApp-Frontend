import chatMessages from '../types/chatMessages'
type MessageProps = chatMessages & {
    position: string,
}

const Message = ({ user, message, currentUser, admin, time }: MessageProps) => {

    if (admin) return (
        <div className={"alert alert-info flex justify-center max-w-[80%] mx-auto my-3"}>
            <div className="chat-header">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>{message}</div>
            <time className="text-xs opacity-50">{time}</time>

        </div>
    )

    return (

        <div className={`chat ${currentUser ? 'chat-start' : 'chat-end'}`}>
            <div className="chat-header">
                {user} 
            </div>
            <div className="chat-bubble">{message}</div>
            <div className="chat-footer"><time className="text-xs opacity-50 ml-1">12:45</time></div>
        </div>
    )
}

export default Message