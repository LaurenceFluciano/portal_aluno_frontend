

function ChatRoot({children}) {
    return (
        <div className="chat">
            {children}
        </div>
    )
}

function ChatBody({ children }) {
    return (
        <div className="chat__body">
            { children }
        </div>
    )
}

function ChatFooter({ children }) {
    return (
        <div className="chat__footer">
            { children }
        </div>
    )
}

function ChatMessageList({ children }) {
    return (
        <div className="message-list">
            {children}
        </div>
    )
}


const Chat = Object.assign(ChatRoot, {
    Body: ChatBody,
    Footer: ChatFooter,
    MessageList: ChatMessageList
});

export default Chat;
