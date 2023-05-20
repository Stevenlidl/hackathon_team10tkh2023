/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import './messagePill.css';

export function MessagePill({ type, datetime, by, message }) {
    return (
        <>
            <Card className={type === "sent" ? "message-sent" : "message-received"}>
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
        </>
    )
}