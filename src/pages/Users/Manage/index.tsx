import { FormInput, PageBreadcrumb } from '@/components'
import {
	Button,
	Card,
	Col,
	FloatingLabel,
	Modal,
	Row,
	Form,
} from 'react-bootstrap'
import { useModal, useToggle } from '@/hooks'

import { Table } from 'react-bootstrap'

import { useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'

interface TableRecord {
	id: number
	name: string
	phoneNo: string
	dob: string
	country: string
	accountNo: string
	cell: string
	activeClass?: string
}

const states = ['Report view', 'Report edit', 'Report print']

const records: TableRecord[] = [
	{
		id: 1,
		name: 'Risa D. Pearson',
		phoneNo: '336-508-2157',
		dob: 'July 24, 1950',
		country: 'India',
		accountNo: 'AC336 508 2157',

		cell: 'Cell',
		activeClass: 'table-active',
	},
	{
		id: 2,
		name: 'Ann C. Thompson',
		phoneNo: '646-473-2057',
		dob: 'January 25, 1959',
		country: 'USA',
		accountNo: 'SB646 473 2057',

		cell: 'Cell',
	},
	{
		id: 3,
		name: 'Paul J. Friend',
		phoneNo: '281-308-0793',
		dob: 'September 1, 1939',
		country: 'Canada',
		accountNo: 'DL281 308 0793',

		cell: 'Cell',
	},
	{
		id: 4,
		name: 'Linda G. Smith',
		phoneNo: '606-253-1207',
		dob: 'May 3, 1962',
		country: 'Brazil',
		accountNo: 'CA269 714 6825',

		cell: 'Cell',
	},
]

const Manage = () => {
	const [filterToggle, setFilterToggle] = useState(false)
	const [multiSelections, setMultiSelections] = useState<any>([])
	const [isStandardOpen, toggleStandard] = useToggle()

	const {
		isOpen,
		size,
		className,
		scroll,
		toggleModal,
		openModalWithSize,
		openModalWithClass,
		openModalWithScroll,
	} = useModal()

	const filterToggleHandler = () => {
		setFilterToggle(!filterToggle)
	}
	const onChangeMultipleSelection = (selected: any) => {
		setMultiSelections(selected)
	}

	return (
		<>
			<PageBreadcrumb title="User Manage" subName="User" />

			<div
				className="d-flex justify-content-between"
				style={{ marginTop: '10px' }}>
				<div className="d-flex gap-1">
					{/* <Button className="btn-outline-primary" onClick={filterToggleHandler}>
						<i className="ri-equalizer-line me-1" /> filter
					</Button> */}
					<form>
						<div className="input-group">
							<input
								type="search"
								className="form-control"
								placeholder="Search..."
							/>
						</div>
					</form>
				</div>
			</div>

			{/* filter  */}
			{/* <Card className={`mt-3 ${!filterToggle ? "d-none" : ""}`}>
				<Card.Header>
					<div className="grid-container">
						<Row className="grid-container">
							<Col lg={4}>
								<FormInput
									label="To Date"
									type="date"
									name="date"
									containerClass="mb-3"
									// register={register}
									key="date"
									// errors={errors}
									// control={control}
								/>
							</Col>
							<Col lg={4}>
								<FormInput
									label="From Date"
									type="date"
									name="date"
									containerClass="mb-3"
									// register={register}
									key="date"
									// errors={errors}
									// control={control}
								/>
							</Col>

							<Col lg={4}>
								<FormInput
									label="From Date"
									type="date"
									name="date"
									containerClass="mb-3"
									// register={register}
									key="date"
									// errors={errors}
									// control={control}
								/>
							</Col>
							<Col lg={6}>
							<FormInput
								name="select"
								label="Cashier"
								type="select"
								containerClass="mb-3"
								className="form-select"
								// register={register}
								key="select"
								// errors={errors}
								// control={control}
							>
								<option defaultValue="selected">1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</FormInput>
								</Col>
								<Col lg={6}>
							<FormInput
								name="select"
								label="Input Select"
								type="select"
								containerClass="mb-3"
								className="form-select"
								// register={register}
								key="select"
								// errors={errors}
								// control={control}
							>
								<option defaultValue="selected">1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</FormInput>
								</Col>
						</Row>
					</div>
				</Card.Header>
			</Card> */}
			{/* filter  */}

			{/* Data table  */}

			<Card className="mt-3">
				<Card.Header className="d-flex justify-content-between">
					<div>
						<h4 className="header-title">User Tabel</h4>
					</div>
					<Button
						className="btn-outline-dark"
						onClick={() => openModalWithClass('modal-full-width')}>
						<i className="ri-user-add-line me-1" /> Add User
					</Button>
				</Card.Header>
				<Card.Body>
					<Table responsive className="mb-0">
						<thead>
							<tr>
								<th scope="col">ID</th>
								<th scope="col"> Cashier Name</th>
								<th scope="col">Mobile Number</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							{(records || []).slice(0, 3).map((record, idx) => {
								return (
									<tr key={idx}>
										<td>12</td>
										<td>Imalka ththmi</td>
										<td>
											<Typeahead
												id="multi"
												labelKey={'label'}
												multiple
												onChange={onChangeMultipleSelection}
												options={states}
												placeholder="Basic Example"
												selected={multiSelections}
											/>
										</td>
										<td>Edit Delete</td>
									</tr>
								)
							})}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
			{/* model  */}
			<Modal
				className="fade"
				show={isOpen}
				onHide={toggleModal}
				dialogClassName="lg"
				size={size}
				scrollable={scroll}>
				<Modal.Header onHide={toggleStandard} closeButton>
					<Modal.Title as="h4">Add Inventory</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="grid-structure">
						<Row className="mt-2">
							<Col lg={12}>
								<Row>
									<Col lg={12}>
										<FormInput
											label="Name"
											type="text"
											name="text"
											containerClass="mb-3"
											// register={register}
											key="text"
											// errors={errors}
											// control={control}
										/>
									</Col>
									<Col lg={12}>
										<FormInput
											label="Brand"
											type="text"
											name="text"
											containerClass="mb-3"
											// register={register}
											key="text"
											// errors={errors}
											// control={control}
										/>
									</Col>
									<Col lg={6}>
										<FormInput
											label="QTY"
											type="Number"
											name="text"
											containerClass="mb-3"
											// register={register}
											key="text"
											// errors={errors}
											// control={control}
										/>
									</Col>
									<Col lg={6}>
												<FormInput
													label="Unit Price"
													type="number"
													name="text"
													containerClass="mb-3"
													// register={register}
													key="text"
													// errors={errors}
													// control={control}
												/>
											</Col>
											<Col lg={6}>
										<FormInput
											label="Manufacture Date"
											type="date"
											name="text"
											containerClass="mb-3"
											// register={register}
											key="text"
											// errors={errors}
											// control={control}
										/>
									</Col>
									<Col lg={6}>
												<FormInput
													label="Expire Date"
													type="date"
													name="text"
													containerClass="mb-3"
													// register={register}
													key="text"
													// errors={errors}
													// control={control}
												/>
											</Col>
									{/* <Col lg={6}>
										<h5>Brand</h5>
										<FloatingLabel
											controlId="floatingSelect"
											label="Payment Method"
											className="mb-3">
											<Form.Select aria-label="Floating label select example">
												<option defaultValue="selected">Cash</option>
												<option defaultValue="1">Card</option>
												
											</Form.Select>
										</FloatingLabel>
									</Col> */}
									
									<Col lg={12} className="">
										<h5>
											Description <span className="opacity-50">(optional)</span>
										</h5>
										<Row>
											<Col lg={6}>
												<FloatingLabel
													controlId="floatingTextarea2"
													label="Order Description">
													<Form.Control
														as="textarea"
														placeholder="Leave a comment here"
														style={{ height: '100px' }}
													/>
												</FloatingLabel>
											</Col>
											
										</Row>
									</Col>
								</Row>
							</Col>

							<Col lg={6}></Col>
						</Row>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="light" onClick={toggleStandard}>
						Close
					</Button>
					{/* <Button variant="primary" onClick={toggleStandard}>
						Print
					</Button> */}
					<Button variant="primary" onClick={toggleStandard}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
			{/* model  */}
		</>
	)
}

export default Manage
