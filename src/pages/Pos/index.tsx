import {
	Button,
	Col,
	FloatingLabel,
	Modal,
	Row,
	Table,
	Form,
	Card,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select from 'react-select'

import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'
import { useModal, useToggle } from '@/hooks'
import { FormInput } from '@/components'
import logoDark from '@/assets/images/logo-dark.png'

import { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { useGetAllUserQuery } from '@/api/UserSlice'
import { useGetAllItemQuery } from '@/api/ItemSlice'

export const options = [
	{ value: '', label: 'Select' },
	{ value: 'AK', label: 'Alaska' },
	{ value: 'HI', label: 'Hawaii' },
	{ value: 'CA', label: 'California' },
	{ value: 'NV', label: 'Nevada' },
]

interface TableRecord {
	id: number
	name: string
	phoneNo: string
	dob: string
	country: string
	accountNo: string
	image: string
	cell: string
	activeClass?: string
}

const records: TableRecord[] = [
	{
		id: 1,
		name: 'Risa D. Pearson',
		phoneNo: '336-508-2157',
		dob: 'July 24, 1950',
		country: 'India',
		accountNo: 'AC336 508 2157',
		image: avatar2,
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
		image: avatar3,
		cell: 'Cell',
	},
	{
		id: 3,
		name: 'Paul J. Friend',
		phoneNo: '281-308-0793',
		dob: 'September 1, 1939',
		country: 'Canada',
		accountNo: 'DL281 308 0793',
		image: avatar4,
		cell: 'Cell',
	},
	{
		id: 4,
		name: 'Linda G. Smith',
		phoneNo: '606-253-1207',
		dob: 'May 3, 1962',
		country: 'Brazil',
		accountNo: 'CA269 714 6825',
		image: avatar5,
		cell: 'Cell',
	},
]
interface ExpandableRecord {
	product: string
	courier: string
	variant: string
	now: number
	status: string
	price: string
	Quantity: string
	Amount: string
}
const expandablerecords: ExpandableRecord[] = [
	{
		product: 'ASOS Ridley High Waist',
		courier: 'FedEx',
		variant: 'success',
		now: 100,
		status: 'Delivered',
		price: '$79.49',
		Quantity: '82',
		Amount: '6,518.18',
	},
	{
		product: 'Marco Lightweight Shirt',
		courier: 'DHL',
		variant: 'warning',
		now: 50,
		status: 'Shipped',
		price: '$128.50',
		Quantity: '37',
		Amount: '4,754.50',
	},
	{
		product: 'Half Sleeve Shirt',
		courier: 'Bright',
		variant: 'info',
		now: 25,
		status: 'Order Received',
		price: '$39.99',
		Quantity: '64',
		Amount: '2,559.36',
	},
	{
		product: 'Lightweight Jacket',
		courier: 'FedEx',
		variant: 'success',
		now: 100,
		status: 'Delivered',
		price: '$20.00',
		Quantity: '184',
		Amount: '3,680.00',
	},
	{
		product: 'Cargo Pant & Shirt',
		courier: 'FedEx',
		variant: 'danger',
		now: 10,
		status: 'Payment Failed',
		price: '$28.49',
		Quantity: '69',
		Amount: '1,965.81',
	},
	{
		product: 'ASOS Ridley High Waist',
		courier: 'FedEx',
		variant: 'danger',
		now: 10,
		status: 'Payment Failed',
		price: '$79.49',
		Quantity: '82',
		Amount: '6,518.18',
	},
]

const Pos = () => {
	// const { data: users, isLoading: usersLoading, error: usersError } =  useGetAllUserQuery()
	const { data: AllItem, refetch: AllItemReFetch } = useGetAllItemQuery()

	const [isStandardOpen, toggleStandard] = useToggle()

	const [total ,setTotal] = useState(0)

	const [addData, setAddData] = useState([])

	console.log(addData)

	const componentRef = useRef()

	const handlePrint = useReactToPrint({
		content: () => componentRef.current || null,
	})



	const handleAddData = (data) => {

		setAddData((prevData) => [...prevData, data]);
		setTotal(total + Number(data.unitPrice));
	}
	console.log(total)

	const {
		// isOpen,
		size,
		// className,
		scroll,
		toggleModal,
		// openModalWithSize,
		// openModalWithClass,
		// openModalWithScroll,
	} = useModal()

	const [modelOpen, setModelOpen] = useState(false)

	return (
		<>
			{/* model Start */}
			<Modal
				className="fade"
				show={modelOpen}
				onHide={toggleModal}
				dialogClassName="modal-full-width"
				size={size}
				scrollable={scroll}>
				<Modal.Header onHide={toggleStandard}>
					<Modal.Title as="h4">Billing</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="grid-structure">
						<Row className="mt-2">
							<Col lg={6}>
								<Row>
									<Col lg={6}>
										<h5>Payment</h5>
										<FloatingLabel
											controlId="floatingSelect"
											label="Payment Method"
											className="mb-3">
											<Form.Select aria-label="Floating label select example">
												<option defaultValue="selected">Cash</option>
												<option defaultValue="1">Card</option>
											</Form.Select>
										</FloatingLabel>
									</Col>
									<Col lg={12}>
										<Row>
											<Col lg={6}>
												<FormInput
													label="Pay Amount"
													type="number"
													name="text"
													containerClass="mb-3"
													// register={register}
													key="text"
													// errors={errors}
													// control={control}
												/>
											</Col>
										</Row>
									</Col>
									<Col lg={12} className="">
										<h5>
											Description <span className="opacity-50">(optional)</span>
										</h5>
										<Row>
											<Col lg={6}>
												<FloatingLabel
													className="mb-3"
													controlId="floatingTextarea2"
													label="Order Description">
													<Form.Control
														as="textarea"
														placeholder="Leave a comment here"
														style={{ height: '100px' }}
													/>
												</FloatingLabel>
											</Col>
											<Col lg={6}>
												<FloatingLabel
													controlId="floatingTextarea2"
													label="Customer Description">
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

							<Col lg={6} id="printableDiv" ref={componentRef}>
								<Row className="m-3">
									<Col lg={12}>
										<div className="clearfix">
											<div className="float-start mb-3">
												<img src={logoDark} alt="dark logo" height={22} />
											</div>
											<div className="float-end">
												<h4 className="m-0 d-print-none">Invoice</h4>
											</div>
										</div>
									</Col>
									<Col lg={12}>
										<div className="clearfix">
											<div className="float-start mb-3">
												<p>Order Time 5.60PM 2024/12/31</p>
											</div>
											<div className="float-end">
												<h4 className="m-0 d-print-none">
													Order ID : #45785841
												</h4>
											</div>
										</div>
									</Col>
									<Col lg={12}>
										<div>
											<div>
												<h4 className="header-title">Small table</h4>
												<p className="text-muted mb-0">
													Add <code>.table-sm</code> to make tables more compact
													by cutting cell padding in half.
												</p>
											</div>
											<div>
												<Table className="">
													<thead>
														<tr>
															<th>Product</th>
															<th>Price</th>
															<th>Quantity</th>
															<th>Amount</th>
														</tr>
													</thead>
													<tbody>
														{(addData || []).map((data, idx) => {
															
															return (
																<tr key={idx}>
																	<td>{data?.name}</td>
																	<td>{data?.brand}</td>
																	<td>{data?.qty}</td>
																	<td>{data?.unitPrice}</td>
																</tr>
															)
														})}
													</tbody>
												</Table>
											</div>
										</div>
									</Col>
									<Col
										lg={12}
										className="mt-3 px-4 d-flex justify-content-between">
										<h4>Total</h4>
										<h4>Rs {total}.00</h4>
									</Col>
									{/* <Col lg={4} className="p-4  d-flex justify-content-between">
										<h5>Thank You!</h5>
									</Col>
									<Col lg={8} className="px-4 mt-3 justify-content-between">
										<div className="d-flex justify-content-between">
											<h5>Pay Amount</h5>
											<h5>Rs 5000.00</h5>
										</div>
										<div className="d-flex justify-content-between">
											<h5>Total</h5>
											<h5>Rs 2000.00</h5>
										</div>
										<div className="d-flex justify-content-between">
											<h5>Change</h5>
											<h5>Rs 3000.00</h5>
										</div>
									</Col> */}
								</Row>
							</Col>
						</Row>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="light" onClick={() => setModelOpen(!modelOpen)}>
						Close
					</Button>
					{/* <ReactToPrint/> */}
					<Button variant="primary" onClick={handlePrint}>
						<i className="ri-printer-line" /> Print
					</Button>
					<Button variant="primary" onClick={toggleStandard}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
			{/* model End */}

			<div className="d-flex justify-content-between align-items-center mt-3 mb-3 ">
				<h4>Cashier : Imalka Thathmi</h4>
				<Link to="/order">
					<Button className="btn-primary">
						<i className="ri-paypal-line me-1" /> Histroy
					</Button>
				</Link>
			</div>

			{/* table Start */}
			<div className="grid-structure">
				<Row>
					<Col lg={7}>
						<div className="grid-container justify-content-between pt-3">
							<Row>
								<Col lg={3}>
									<h5>Customer</h5>
									<Select className="select2 z-3" options={options} />
								</Col>
								<Col lg={3}>
									<h5>Product ID</h5>
									<Select className="select2 z-3" options={options} />
								</Col>
								<Col lg={6}>
									<h5 className="-mt-5">Product Name</h5>
									<Select className="select2 z-3 " options={options} />
								</Col>
							</Row>
							{/* table  */}
							<Table className="table-bordered table-centered mb-3 mt-3">
								<thead>
									<tr>
										<th>Product</th>
										<th>Product ID</th>
										<th>Price</th>
										<th>Balance</th>
										<th className="text-center">Action</th>
									</tr>
								</thead>
								<tbody>
									{(AllItem || []).map((data, idx) => {
										return (
											<tr key={idx}>
												<td>{data?.name}</td>
												<td>{data?.brand}</td>
												<td>{data?.qty}</td>
												<td>{data?.unitPrice}</td>
												<Button
													className="btn-outline"
													onClick={() => {
														handleAddData(data)
													}}>
													<i className="ri-paypal-line me-1" /> Add
												</Button>
											</tr>
										)
									})}
								</tbody>
							</Table>

							{/* table  */}
						</div>
					</Col>

					<Col lg={5}>
						<div className="grid-container  pt-3">
							<h5>Selected Product</h5>
							<Table className="table-hover table-centered mb-0">
								<thead>
									<tr>
										<th>Product</th>
										<th>Product ID</th>
										<th>Price</th>
										<th>Balance</th>
										<th className="text-center">Action</th>
									</tr>
								</thead>
								<tbody>
									{(addData || []).map((data, idx) => {
										return (
											<tr key={idx}>
												<td>{data?.name}</td>
												<td>{data?.brand}</td>
												<td>{data?.qty}</td>
												<td>{data?.unitPrice}</td>
												<Button
													className="btn-outline"
													onClick={() => {
														handleAddData(data)
													}}>
													<i className="ri-paypal-line me-1" /> Remove
												</Button>
											</tr>
										)
									})}
								</tbody>
							</Table>
						</div>

						<div className="grid-container py-2">
							<Row>
								<Col
									className="d-flex justify-content-between align-items-center py-2"
									lg={4}>
									<span>Total item</span>
									<span className="fw-bold">04</span>
								</Col>
								<Col
									className="d-flex justify-content-between align-items-center py-2"
									lg={4}>
									<span>Total Cost</span>
									<span className="fw-bold">{total}</span>
								</Col>
								<Col
									className="d-flex justify-content-between align-items-center py-2"
									lg={4}>
									<span>Discount</span>
									<span className="fw-bold">04</span>
								</Col>
							</Row>
							<Button
								variant="secondary"
								className="btn-sm mt-2 w-100 p-2  fs-4"
								onClick={() => setModelOpen(true)}>
								Grand Total Rs {total}.00
							</Button>
						</div>
					</Col>
				</Row>
			</div>
			{/* table Start */}
		</>
	)
}

export default Pos
