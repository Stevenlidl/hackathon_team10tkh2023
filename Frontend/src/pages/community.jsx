import { ChatBox } from "../components/chatBox"
import { MessageBoard } from "../components/messageBoard"
import { useState } from "react";

const response = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

export function CommunityBoard() {
    const [messages, setMessages] = useState([]);

    const onReceive = (message) => {
        setMessages((prevMessages) => {
            const newMessages = [...prevMessages, message]
            return newMessages
        })
    }

    const onSend = (message) => {
        setMessages((prevMessages) => {
            const newMessages = [...prevMessages, message]
            return newMessages
        })
        setTimeout(() => onReceive({
            type: "received",
            by: "Tenant Safe",
            message: response,
            datetime: new Date().toLocaleString(),
        }), 1000)
    }

    return (
        <div className="community-page">
            <MessageBoard messages={messages} />
            <ChatBox onSend={onSend} />
        </div>
    )
}
