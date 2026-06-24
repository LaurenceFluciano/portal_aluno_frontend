import { Group } from '@/components/layout/Group'

function MessageRoot({ children }) {
    return (
        <Group className="message__header" layout={{default: 'row'}}>
            { children }
        </Group>
    )
}


function MessageHeader({ children }) {
    return (
        <Group className="message__header" layout={{default: 'col'}}>
            { children }
        </Group>
    )
}

function MessageContent({ children, className }) {


    return (
        <div className={`message__content ${className}`}>
            { children }
        </div>
    )
}

function MessageSkeleton({isActive}) {
    return (
        <div className={`${isActive ? 'message__skeleton' : ''}`}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    )
}

const Message = Object.assign(MessageRoot, {
    Header: MessageHeader,
    Content:  MessageContent,
    Skeleton: MessageSkeleton
});

export default Message;
