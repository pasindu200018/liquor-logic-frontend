import { FormInput, PageBreadcrumb } from '@/components'
import {
	Button,
	Card,
	Col,
	FloatingLabel,
	Modal,
	Row,
	Form,
	Table,
	Spinner,
} from 'react-bootstrap'
import { employeeRecords } from './data'
import { Column } from 'react-table'
import { PageSize } from '@/components'
import { useState } from 'react'
import { useModal, useToggle } from '@/hooks'

import { useCreateAItemMutation, useGetAllItemQuery } from '@/api/ItemSlice'
import { toast } from 'react-toastify'
import { useCreateAOrderMutation, useGetAllOrderQuery } from '@/api/orderSlice'

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
const Order = () => {
	const [isStandardOpen, toggleStandard] = useToggle()
	const [isModelOpen, setIsModelOpen] = useState(false)
	const [filterToggle, setFilterToggle] = useState(false)

	const [items, setName] = useState('')
	const [paid, setBrand] = useState('')
	const [date, setDate] = useState('')
	const [totalPrice, setTotalPrice] = useState('')
	const [qty, setQty] = useState('')
	const [unitPrice, setUnitPrice] = useState('')
	const [manufactureDate, setManufactureDate] = useState('')
	const [expireDate, setExpireDate] = useState('')
	const [userId, setUserId] = useState('177f61b8-3d99-44ff-aef5-2e6603ae039a')
	const [supplierId, setSupplierId] = useState('')
	const [description, setDescription] = useState('')

	// console.log(, qty, unitPrice, manufactureDate,expireDate, userId,supplierId,description)

	const { data: AllItem, refetch: AllItemReFetch } = useGetAllOrderQuery()
	const [
		createAOrder,
		{ isLoading: itemLoading, isError: itemError, isSuccess: itemSuccess },
	] = useCreateAOrderMutation()

	console.log(items, paid, date)
	const handleItemSave = async () => {
		// if (!name || !brand || !qty || !unitPrice || !manufactureDate || !expireDate || !supplierId || !description) {
		// 	toast.error("All fields are required");
		// 	return;
		// }

		const itemData = {
			items,
			paid,
			date,
			totalPrice,

		}

		try {
			const result = await createAOrder(itemData)

			if (result.data) {
				setName('')
				setBrand('')
				setDate('')
				setTotalPrice('')

				toast.success('Order Added')
				setIsModelOpen(false)
				AllItemReFetch()
			} else if (result.error) {
				toast.error('Server Error')
			}
		} catch (err) {
			console.error('Failed to create item:', err)
			toast.error('Server Error')
		}
	}

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
	return (
		<>
			<PageBreadcrumb title="Order" subName="Dashboards" />

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

				<div className="d-flex gap-1">
					<Button variant="danger">
						<i className="ri-file-pdf-line me-1" /> <span>PDF</span>
					</Button>
					<Button variant="success">
						<i className="ri-file-excel-line me-1" /> <span>excel</span>
					</Button>
					<Button variant="secondary">
						<i className="ri-printer-line me-1" /> <span>Print</span>
					</Button>
				</div>
			</div>

			{/* filter  */}
			<Card className={`mt-3 ${!filterToggle ? 'd-none' : ''}`}>
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
			<Card className="mt-3">
				<Card.Header className="d-flex justify-content-between">
					<div>
						<h4 className="header-title">Order table</h4>
					</div>
					<Button
						className="btn-outline-dark"
						onClick={() => setIsModelOpen(true)}>
						<i className="ri-user-add-line me-1" /> Add Order
					</Button>
				</Card.Header>
				<Card.Body>
					<Table responsive className="mb-0">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">totalPrice</th>
								<th scope="col">Date</th>
								<th scope="col">Paid</th>
								{/* <th scope="col">Date</th> */}
								{/* <th scope="col">Unit Price</th>
								<th scope="col">M Date</th>
								<th scope="col">E Date</th> */}
							</tr>
						</thead>
						<tbody>
							{(AllItem || []).map((data, index) => {
								return (
									<tr key={index}>
										<td>{data?.items}</td>
										<td>{data?.totalPrice}</td>
										<td>{data?.date}</td>
										<td>{data?.paid}</td>
									</tr>
								)
							})}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
			{/* Data table  */}

			{/* model  */}
			<Modal
				className="fade"
				show={isModelOpen}
				onHide={toggleModal}
				dialogClassName="lg"
				size={size}
				scrollable={scroll}>
				<Modal.Header onHide={toggleStandard}>
					<Modal.Title as="h4">Add Inventory</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="grid-structure">
						<Row className="mt-2">
							<Col lg={12}>
								<Row>
									<Col lg={12}>
										<FormInput
											label="items"
											type="text"
											name="text"
											containerClass="mb-3"
											// register={register}
											key="text"
											// errors={errors}
											// control={control}
											onChange={(e) => setName(e.target.value)}
										/>
									</Col>

									<Col lg={12}>
										<FormInput
											label="paid"
											type="text"
											name="text"
											containerClass="mb-3"
											// register={register}
											key="text"
											onChange={(e) => setBrand(e.target.value)}
											// errors={errors}
											// control={control}
										/>
									</Col>
									<Col lg={12}>
										<FormInput
											label="Total Price"
											type="text"
											name="text"
											containerClass="mb-3"
											// register={register}
											key="text"
											onChange={(e) => setTotalPrice(e.target.value)}
											// errors={errors}
											// control={control}
										/>
									</Col>
									<Col lg={6}>
										<FormInput
											label="date"
											type="date"
											name="text"
											containerClass="mb-3"
											// register={register}
											key="text"
											onChange={(e) => setDate(e.target.value)}
											// errors={errors}
											// control={control}
										/>
									</Col>
								</Row>
							</Col>

							<Col lg={6}></Col>
						</Row>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="light" onClick={() => setIsModelOpen(false)}>
						Close
					</Button>
					<Button variant="primary" onClick={handleItemSave}>
						{itemLoading ? <Spinner className="" size="sm" /> : 'Save'}
					</Button>
				</Modal.Footer>
			</Modal>
			{/* model  */}
		</>
	)
}

export default Order
