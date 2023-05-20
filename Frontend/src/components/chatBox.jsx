import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function ChatBox() {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Type in your message" />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Send
                </Button>
            </Form>
        </>
    )
}