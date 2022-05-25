import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTable } from "react-table";
import {
	usePagination,
	useSortBy,
} from "react-table/dist/react-table.development";
import store from "../app/store";

/**
 * I use react-table plugin for show employees datas
 * @returns {React.ReactElement} react-table
 */

const Table = () => {
	/**
	 * On change, the search bar calls handleSearch, then changes the constant 'search' with useSate, then filters the data
	 */

	const [search, setSearch] = useState("");
	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const data = React.useMemo(
		() =>
			store.getState().arr == null || undefined
				? []
				: store
						.getState()
						.arr.filter(
							(item) =>
								item.firstName.toLowerCase().includes(search.toLowerCase()) ||
								item.lastName.toLowerCase().includes(search.toLowerCase()) ||
								item.department.toLowerCase().includes(search.toLowerCase()) ||
								item.state.toLowerCase().includes(search.toLowerCase()) ||
								item.dateOfBirth.toLowerCase().includes(search.toLowerCase()) ||
								item.startDate.toLowerCase().includes(search.toLowerCase()) ||
								item.street.toLowerCase().includes(search.toLowerCase()) ||
								item.city.toLowerCase().includes(search.toLowerCase()) ||
								item.zipCode.toLowerCase().includes(search.toLowerCase())
						),
		[search]
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
				accessor: "startDate",
			},
			{
				Header: "Department",
				accessor: "department",
			},
			{
				Header: "Date of Birth",
				accessor: "dateOfBirth",
			},
			{
				Header: "Street",
				accessor: "street",
			},
			{
				Header: "City",
				accessor: "city",
			},
			{
				Header: "State",
				accessor: "state",
			},
			{
				Header: "Zip Code",
				accessor: "zipCode",
			},
		],
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{ columns, data, initialState: { pageIndex: 0 } },
		useSortBy,
		usePagination
	);

	return (
		<div className="table">
			<div className="header-table">
				<h1>Current Employees</h1>
				<label htmlFor="search">
					<input
						className="searchbar"
						type="search"
						placeholder="search in table"
						onChange={handleSearch}
					/>
				</label>
			</div>
			<div className="responsive-version">
				<table {...getTableProps()} style={{ margin: "auto" }}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th
										{...column.getHeaderProps(column.getSortByToggleProps())}
										style={{
											width: "10%",
											height: "50px",
											background: "#393E46",
											color: "#EEEEEE",
											fontWeight: "lighter",
										}}
									>
										{column.render("Header")}
										<span>
											{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
										</span>
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{page.map((row) => {
							prepareRow(row);
							return (
								<tr className="rows-content" {...row.getRowProps()}>
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
			</div>
			<div className="bottom-table">
				<div>
					Showing {page.length} of {rows.length} results
				</div>
				<NavLink to="/">Home</NavLink>
				<div className="pagination">
					<button
						className="arrows-btn"
						onClick={() => previousPage()}
						disabled={!canPreviousPage}
						style={{
							background: "#00ADB5",
							width: "40px",
							height: "20px",
							borderRadius: "4px",
							border: "none",
						}}
					>
						{"<"}
					</button>{" "}
					<span>
						{" "}
						<strong>
							{pageIndex + 1} / {pageOptions.length}
						</strong>{" "}
					</span>
					<button
						className="arrows-btn"
						onClick={() => nextPage()}
						disabled={!canNextPage}
					>
						{">"}
					</button>{" "}
					<select
						value={pageSize}
						onChange={(e) => {
							setPageSize(Number(e.target.value));
						}}
					>
						{[10, 20, 30, 40, 50].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								Show {pageSize}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
};

export default Table;
