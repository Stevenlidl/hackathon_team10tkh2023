/* eslint-disable react/prop-types */
import "./messages.css";
import { MessagePill } from "./messagePill";

export function MessageBoard({ messages }) {
    return (
        <div className="message-board">
            <MessagePill type="sent" by="John Appleseed" message="Lorem ipsum dorem" datetime={new Date().toLocaleString()} />
            <MessagePill type="received" by="John Appleseed" message="Lorem ipsum dorem" datetime={new Date().toLocaleString()} />
            {messages.map((message, index) => (
                <MessagePill key={`MessagePill-${index}`} type={message.type} by={message.by} message={message.message} datetime={message.datetime} />
            ))}
        </div>
    )
}