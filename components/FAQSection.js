import { Accordion } from 'react-bootstrap';
import { PortableText } from '@portabletext/react';

export default function FAQSeciton(props) {
	const { title, items } = props;
	let eventKey = 0;
	return (
		<div className="my-4 py-4">
			<h4 style={{ color: '#aaa' }}>{title}</h4>
			<Accordion flush>
				{items &&
					items.map((item) => {
						return (
							<div key={item._key}>
								<Accordion.Item eventKey={eventKey++}>
									<Accordion.Header>{item.question}</Accordion.Header>
									<Accordion.Body>
										<PortableText value={item.answer} />
									</Accordion.Body>
								</Accordion.Item>
							</div>
						);
					})}
			</Accordion>
		</div>
	);
}
