import useUser from "@/hook/useUser"
import Chat from "./components/Chat";
import Prompt from "./components/Prompt";
import Message from "./components/Message";
import Avatar from "../../../components/ui/Avatar";

import './styles/tutoria.css'

export default function Tutoria() {
    const { user } = useUser()

    const firstName = user.nome.split(' ')[0];

    return (
            <Chat>
                <Chat.Body>
                    <Chat.MessageList>
                        <Message>
                            <Avatar username={user.nome} />
                            <Message.Header>
                                {firstName}
                            </Message.Header>

                            <Message.Content>
                                Ola mundo!
                            </Message.Content>
                        </Message>

                        <Message>
                            <Avatar username={"I A"} />
                            <Message.Header>
                                {"Tutor IA"}
                            </Message.Header>

                            <Message.Content>
                                Ola mundo!
                            </Message.Content>
                        </Message>

                    </Chat.MessageList>
                </Chat.Body>
                <Chat.Footer>
                    <Prompt>
                        <Prompt.Input />
                        <Prompt.SubmitButton />
                    </Prompt>
                </Chat.Footer>
            </Chat>
    )
}