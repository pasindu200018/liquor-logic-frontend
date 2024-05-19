import { Col, Row } from 'react-bootstrap'
import Statistics from './Statistics'
import WeeklySelesChart from './WeeklySelesChart'
import YearlySelesChart from './YearlySelesChart'
import Projects from './Projects'

// components
import { PageBreadcrumb } from '@/components'

// data
import {  statistics } from './data'
import { useEffect } from 'react'

// useEffect(() => {
//     async function fetchData() {
//       try {
//         const userResponse = await fetch('https://664a1aaaa300e8795d40ff3c.mockapi.io/user');
//         const users = await userResponse.json();
//         const userLength = users.length;

//         const iResponse = await fetch('https://664a1aaaa300e8795d40ff3c.mockapi.io/user');
//         const iData = await iResponse.json();
//         const iLength = iData.length;

//         const inResponse = await fetch('https://664a1aaaa300e8795d40ff3c.mockapi.io/user');
//         const inData = await inResponse.json();
//         const inLength = inData.length;

//         const oResponse = await fetch('https://664a1aaaa300e8795d40ff3c.mockapi.io/user');
//         const oData = await oResponse.json();
//         const oLength = oData.length;

//         console.log('User length:', userLength);
//         console.log('i length:', iLength);
//         console.log('in length:', inLength);
//         console.log('o length:', oLength);

//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);


const Dashboard = () => {
	return (
		<>
			<PageBreadcrumb title="Welcome!" subName="Dashboards" />
			<Row>
				{(statistics || []).map((item, idx) => {
					return (
						<Col xxl={3} sm={6} key={idx}>
							<Statistics
								title={item.title}
								stats={item.stats}
								change={item.change}
								icon={item.icon}
								variant={item.variant}
							/>
						</Col>
					)
				})}
			</Row>

			<Row>
				<Col lg={8}>
					<WeeklySelesChart />
				</Col>
				<Col lg={4}>
					<YearlySelesChart />
				</Col>

			</Row>


			<Row>
				<Col >
					<Projects />
				</Col>
			</Row>
		</>
	)
}

export default Dashboard
