import useUser from "@/hook/useUser"
import Chat from "./components/Chat";
import Prompt from "./components/Prompt";
import Message from "./components/Message";
import Avatar from "../../../components/ui/Avatar";

import './styles/tutoria.css'
import { useState } from "react";
import { sendMessage } from "../../services/chat.service";

import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import ErrorDialog from "../../../components/ui/ErrorDialog";

export default function Tutoria() {
    const { user } = useUser()
    const firstName = user.nome.split(' ')[0];

    const [messages, setMessages] = useState([
        { 
            role: "assistant",
            text: "Olá! Como posso te ajudar nos seus estudos hoje?", 
            username: "Tutor IA" 
        }
    ]);

    const [input, setInput] = useState("")
    const [isInputDisabled, setInputDisabled] = useState(true)

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ message: null });

    async function handleSubmit() {
        setError({ message: null })
        setLoading(true)

        if (input.trim().length <= 1) {
            const validationMsg = "Por favor insira mais letras.";
            setError({ message: validationMsg });
            
            setLoading(false);
            return;
        }

        const userMessage = {
            role: "user",
            text: input,
            username: user.nome
        }
        
        setMessages((prev) => [...prev, { ...userMessage }])
        
        setInput("")
        
        try {
            const result = await sendMessage(userMessage.text)

            const aiResponse = {
                role: "assistant",
                text: result.response,
                username: "Tutor IA"
            }

            setMessages((prev) => [...prev, { ...aiResponse }])

        } catch (err) {
            const msgFinal = err instanceof Error ? err.message : "Erro desconhecido";

            setError({
                message: msgFinal
            })
        } finally {
            setLoading(false)
            setInputDisabled(true)
        }
    }

    

    return (
            <Chat>
                <Chat.Body>
                    <Chat.MessageList>
                        {messages.map(message => {
                            return (
                                <Message>
                                    <Message.Header>
                                        <Avatar username={message.username} />
                                        <span className="ml--sm">{message.role === 'user' ? firstName : message.username}</span>
                                    </Message.Header>

                                    <Message.Content  className="markdown-content">
                                        <ReactMarkdown 
                                            remarkPlugins={[remarkMath]} 
                                            rehypePlugins={[rehypeKatex]}
                                        >
                                            {message.text}
                                        </ReactMarkdown>
                                    </Message.Content>
                                </Message>
                            )
                        })}
                    </Chat.MessageList>
                    <Message.Skeleton isActive={loading} />
                </Chat.Body>
                <Chat.Footer>
                    <Prompt>
                        <Prompt.Input
                            value={input} 
                            onChange={(e) => {
                                const value = e.target.value;
                                setInput(value)
                                setInputDisabled(value.trim().length <= 1);
                            }}
                            
                        />
                        <Prompt.SubmitButton 
                            onSubmit={handleSubmit} 
                            isDisabled={isInputDisabled || loading}
                        />
                    </Prompt>
                </Chat.Footer>
                <ErrorDialog message={error.message ?? ""}/>
            </Chat>
    )
}