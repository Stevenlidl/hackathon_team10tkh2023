/* eslint-disable react/prop-types */
import "./messages.css";
import { MessagePill } from "./messagePill";
import {useEffect, useRef} from "react";

export function MessageBoard({ messages }) {
    const boardRef = useRef()

    useEffect(() => {
        const obj = boardRef.current
        obj.scrollTo({
            top: obj.scrollHeight,
            behavior: "smooth",
          })
    });

    return (
        <div className="message-board" ref={boardRef}>
            <MessagePill type="sent" by="John Appleseed" message="Lorem ipsum dorem" datetime={new Date().toLocaleString()} />
            <MessagePill type="received" by="John Appleseed" message="Lorem ipsum dorem" datetime={new Date().toLocaleString()} />
            {messages.map((message, index) => (
                <MessagePill key={`MessagePill-${index}`} type={message.type} by={message.by} message={message.message} datetime={message.datetime} />
            ))}
        </div>
    )
}