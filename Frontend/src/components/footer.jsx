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
									<img src="/images/tenant-safe-logo.png" />
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
									<li><img width="20" src="/images/phone-plus-icon.png" /> <span>Request Help Call 311</span></li>
									<li><img width="20" src="/images/phone-plus-icon.png" /> <span>Hotline Help 718-557-1379</span></li>
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