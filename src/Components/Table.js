import React from "react";
import { NavLink } from "react-router-dom";
import { useTable } from "react-table";
import store from "../app/store";

const Table = () => {
	const data = React.useMemo(
		() => 
			store.getState().addEmployees == null || undefined
				? []
				: store.getState().addEmployees
		,
		[]
	);

	const columns = React.useMemo(
		() => [
			{
				Header: "First Name",
				accessor: "firstName", // accessor is the "key" in the data
			},
			{
				Header: "Last Name",
				accessor: "lastName",
			},
			{
				Header: "Start Date",
				accessor: "startDate", // accessor is the "key" in the data
			},
			{
				Header: "Department",
				accessor: "department",
			},
			{
				Header: "Date of Birth",
				accessor: "dateOfBirth", // accessor is the "key" in the data
			},
			{
				Header: "Street",
				accessor: "street",
			},
			{
				Header: "City",
				accessor: "city", // accessor is the "key" in the data
			},
			{
				Header: "State",
				accessor: "state",
			},
			{
				Header: "Zip Code",
				accessor: "zipCode", // accessor is the "key" in the data
			},
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data });

	return (
		<div className="table">
			<h1>Current Employees</h1>
			<table {...getTableProps()} style={{ border: "solid 1px black", margin: 'auto'}}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps()}
									style={{
										width: "10%",
										height: '50px',
										background: "#393E46",
										color: "#EEEEEE",
										fontWeight: "lighter",
									}}
								>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td
											{...cell.getCellProps()}
											style={{
												padding: "10px",
												border: "solid 1px gray",
												background: "#393E461c",
											}}
										>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<NavLink to="/">Home</NavLink>
		</div>
	);
};

export default Table;
