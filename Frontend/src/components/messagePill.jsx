/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import './messages.css';

export function MessagePill({ type, datetime, by, message }) {
    return (
        <div className={type === "sent" ? "message-sent" : "message-received"}>
            <Card className={type === "sent" ? "message-sent-pill" : "message-received-pill"}>
                <Card.Body>
                    <Card.Title>
                        {by}
                    </Card.Title>
                    <Card.Text>
                        {message}
                    </Card.Text>
                    {datetime}
                </Card.Body>
            </Card>
        </div>
    )
}