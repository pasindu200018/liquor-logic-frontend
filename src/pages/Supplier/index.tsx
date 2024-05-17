import { FormInput , PageBreadcrumb } from '@/components'
import { Button, Card, Col, Row, Form, FloatingLabel, Modal } from 'react-bootstrap'
import { employeeRecords } from './data'
import { Column } from 'react-table'
import {  PageSize , Table } from '@/components'
import { useState } from 'react'
import { useModal, useToggle } from '@/hooks'


type Employee = {
	id: number
	age: number
	name: string
	company: string
	phone: string
	subRows?: Employee[]
}


const columns: ReadonlyArray<Column> = [
	{
		Header: 'ID',
		accessor: 'id',
		defaultCanSort: true,
	},
	{
		Header: 'Name',
		accessor: 'name',
		defaultCanSort: true,
	},
	{
		Header: 'Phone Number',
		accessor: 'phone',
		defaultCanSort: false,
	},
	{
		Header: 'Age',
		accessor: 'age',
		defaultCanSort: true,
	},
	{
		Header: 'Company',
		accessor: 'company',
		defaultCanSort: false,
	},
]
const sizePerPageList: PageSize[] = [
	{
		text: '5',
		value: 5,
	},
	{
		text: '10',
		value: 10,
	},
	{
		text: '25',
		value: 25,
	},
	{
		text: 'All',
		value: employeeRecords.length,
	},
]

const Supplier = () => {

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

	const [filterToggle , setFilterToggle] = useState(false)

	const filterToggleHandler = () => {
		setFilterToggle(!filterToggle)
	}
	return (
		<>
			<PageBreadcrumb title="Supplier" subName="Dashboards" />

			<div
				className="d-flex justify-content-between"
				style={{ marginTop: '10px' }}>
				<div className="d-flex gap-1">
					<Button className="btn-outline-primary" onClick={filterToggleHandler}>
						<i className="ri-equalizer-line me-1" /> filter
					</Button>
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
				{/* <div className="d-flex gap-1">
				<Button variant="danger">
						<i className="ri-save-fill me-1" /> <span>PDF</span>
					</Button>
					<Button variant="danger">
						<i className="ri-save-fill me-1" /> <span>Print</span>
					</Button>
					<Button variant="success">
						<i className="ri-rocket-line me-1" /> <span>WORD</span>
					</Button>
				</div> */}
			</div>

						{/* filter  */}
			<Card className={`mt-3 ${!filterToggle ? "d-none" : ""}`}>
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
			</Card>
			{/* filter end */}

			{/* Data table  */}
			<div className="mt-3">
			<Row>
				<Col>
					<Card>
					<Card.Header className="d-flex  justify-content-between">
								<div>
									<h4 className="header-title">Pagination &amp; Sort</h4>
									<p className="text-muted mb-0">
										A simple example of table with pagination and column sorting
									</p>
								</div>
								<div>
									<Button className="btn-outline-dark" onClick={() => openModalWithClass('modal-full-width')}>
										<i className="ri-folder-user-line me-1" /> Add Supplier
									</Button>
								</div>
							</Card.Header>
						<Card.Body>
							<Table<Employee>
								columns={columns}
								data={employeeRecords}
								pageSize={5}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								pagination={true}
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			</div>

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

export default Supplier
