import { 
    Container, Row, Col
} from 'react-bootstrap';
import '../css/footer.css';

export default function Footer() {
    return (
        <footer className='main-footer'>
			<div className='top-section'>
				<Container>
					<Row>
						<Col md={6}>
							<div className="widget">
								<a href="#">
									<img src="/tenant-safe-logo.png" />
								</a>
							</div>
						</Col>
						<Col md={3}>
							<div className="widget">
								<h4>Take Action</h4>
								<ul>
									<li><a href="#">About Us</a></li>
									<li><a href="#">Services</a></li>
									<li><a href="#">FAQ</a></li>
								</ul>
							</div>
						</Col>
						<Col md={3}>
							<div className="widget">
								<h4>Contact Us</h4>
								<ul>
									<li><a href="#"><i className=''></i> Request Help Call 311</a></li>
									<li><a href="#"><i className=''></i> Hotline Help 718-557-1379</a></li>
								</ul>

							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className='bottom-section'>
				<Container className='bottom-container'>
					<p>2023 TKH Hackathon Team 10</p>
				</Container>
			</div>
        </footer>
    )
}