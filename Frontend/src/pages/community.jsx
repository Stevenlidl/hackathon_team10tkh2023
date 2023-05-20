import { ChatBox } from "../components/chatBox"
import { MessageBoard } from "../components/messageBoard"
import { useState } from "react";

export function CommunityBoard() {
    const [messages, setMessages] = useState([]);

    const onSend = (message) => {
        setMessages((prevMessages) => {
            const newMessages = [...prevMessages, message]
            return newMessages
        })
    }

    return (
        <div>
            <MessageBoard messages={messages} />
            <ChatBox onSend={onSend} />
        </div>
    )
}
