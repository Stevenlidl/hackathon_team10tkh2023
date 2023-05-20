import { ChatBox } from "../components/chatBox"
import { MessagePill } from "../components/messagePill"

export function CommunityBoard() {
    return (
        <div>
            <MessagePill type="sent" by="John Appleseed" message="Lorem ipsum dorem" datetime={new Date().toLocaleString()} />
            <ChatBox />
        </div>
    )
}
