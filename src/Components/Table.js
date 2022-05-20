import React from "react";
import { NavLink } from "react-router-dom";
import { useTable } from "react-table";
import {
	usePagination,
	useSortBy,
} from "react-table/dist/react-table.development";
import store from "../app/store";
import SearchBar from "./SearchBar";

const Table = () => {
	// const storage = JSON.parse(localStorage.getItem("storage"));
	const data = React.useMemo(
		() => (store.getState().arr == null || undefined ? [] : store.getState().arr),
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
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{ columns, data, initialState: { pageIndex: 0 } },
		useSortBy,
		usePagination
	);

	const firstPageRows = rows.slice(0, 10);
	// console.log(prepareRow.length);
	return (
		<div className="table">
			<div className="header-table">
				<h1>Current Employees</h1>
				<SearchBar />
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
										{/* {console.log(headerGroup.headers.forEach((e) => e.Header == "First Name" ? e.toggleHidden() : ''))} */}
										{/* {console.log(headerGroup.headers.forEach((e) => console.log(e)))} */}
									</th>
								))}
								{/* {window.addEventListener("resize", () => {
									if (window.innerWidth < 700) {
										headerGroup.headers.forEach((e) =>
											e.Header === "First Name" ? e.toggleHidden(true) : null
										)
									}
								})} */}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{page.map((row, i) => {
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
					Showing {rows.length} of {rows.length} results
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
