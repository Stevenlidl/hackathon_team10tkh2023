/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import "./messages.css";

export function ChatBox({ onSend }) {
    const [message, setMessage] = useState("");

    const onMessageSubmit = (event) => {
        event.preventDefault()
        if (message === "") {
            return;
        }
        onSend({
            type: "sent",
            by: "User",
            message,
            datetime: new Date().toLocaleString(),
        })
        setMessage("");
    }

    return (
        <>
            <Form onSubmit={onMessageSubmit} className="message-input-box">
                <Form.Group style={{flexGrow: 1}}>
                    <Form.Control type="text" placeholder="Type in your message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Send
                </Button>
            </Form>
        </>
    )
}