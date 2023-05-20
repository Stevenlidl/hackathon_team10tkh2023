import "./messages.css";
import { MessagePill } from "./messagePill";

export function MessageBoard() {
    return (
        <div className="message-board">
            <MessagePill type="sent" by="John Appleseed" message="Lorem ipsum dorem" datetime={new Date().toLocaleString()} />
            <MessagePill type="received" by="John Appleseed" message="Lorem ipsum dorem" datetime={new Date().toLocaleString()} />
        </div>
    )
}