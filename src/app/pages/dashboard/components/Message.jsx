function MessageRoot({ children }) {
    return (
        <div className="message">
            { children }
        </div>
    )
}


function MessageHeader({ children }) {
    return (
        <div className="message__header">
            { children }
        </div>
    )
}

function MessageContent({ children }) {


    return (
        <div className="message__content">
            { children }
        </div>
    )
}


const Message = Object.assign(MessageRoot, {
    Header: MessageHeader,
    Content:  MessageContent
});

export default Message;
