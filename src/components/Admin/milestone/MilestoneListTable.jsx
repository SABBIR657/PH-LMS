import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Pagination,
  Tooltip,
  Spinner,
} from "@heroui/react";
import {
  EyeIcon,
  DeleteIcon,
  EditIcon,
  PlusIcon,
  SearchIcon,
} from "../course/CourseListTable";

export const columns = [
  { name: "NAME", uid: "milestoneName" },
  { name: "Total Module", uid: "moduleList" },
  { name: "Status", uid: "isDeleted" },
  { name: "ACTIONS", uid: "actions" },
];

export const users = new Array(20);

export default function MilestoneListTable({
  courses = [],
  isLoading = false,
  onDelete,
  onView,
  onEdit,
  createLink = "/",
}) {
  const [filterValue, setFilterValue] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(courses.length / rowsPerPage);

  const renderCell = React.useCallback((item, columnKey, index) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex justify-center items-center gap-10">
            <Tooltip content="Details" color="primary">
              <span
                className="text-2xl text-blue-500 cursor-pointer active:opacity-50"
                onClick={() => onView(item._id)}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete">
              <span
                className="text-2xl text-red-600 cursor-pointer active:opacity-50"
                onClick={() => onDelete(item._id)}
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      case "isDeleted":
        return (
          <span
            className={`text-md font-semibold ${
              item.isDeleted ? "text-red-600" : "text-green-600"
            }`}
          >
            {item.isDeleted ? "Deleted" : "Live"}
          </span>
        );
      case "moduleList":
        return <div className="flex items-center">{cellValue?.length}</div>;
      default:
        return <span className="text-lg">{cellValue}</span>;
    }
  }, [onDelete, onView]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 pl-[42rem] mt-10">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[40%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search by name..."
            size="lg"
            startContent={<SearchIcon className="text-purple-600" />}
            value={filterValue}
            variant="flat"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Link to={createLink}>
              {/* <Button
                // className="bg-foreground text-background"
                endContent={<PlusIcon />}
                size="sm"
              >
                Add New
              </Button> */}
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label className="flex items-center text-slate-400 text-md mt-4">
            Rows per page:
            <select
              className="bg-transparent outline-none text-blue-600 text-md font-bold pl-2"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, onSearchChange, onRowsPerPageChange, createLink]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-center items-center mt-10">
        <Pagination
          showControls
          color="default"
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
      </div>
    );
  }, [page, pages]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        "group-data-[first=true]/tr:first:before:rounded-none",
        "group-data-[first=true]/tr:last:before:rounded-none",
        "group-data-[middle=true]/tr:before:rounded-none",
        "group-data-[last=true]/tr:first:before:rounded-none",
        "group-data-[last=true]/tr:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <div className="ml-3 mr-3">
      <Table
        isCompact
        removeWrapper
        aria-label="Milestone table with searching, pagination and sorting"
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        checkboxesProps={{
          classNames: {
            wrapper:
              "after:bg-foreground after:text-background text-background",
          },
        }}
        classNames={classNames}
        topContent={topContent}
        topContentPlacement="outside"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
              className="text-lg"
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          emptyContent={
            <div className="flex justify-center items-center p-6">
              <span className="text-gray-500 text-lg">No milestones found</span>
            </div>
          }
          items={courses}
          isLoading={isLoading}
          loadingContent={
            <div className="flex justify-center items-center p-6">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          }
        >
          {(item) => (
            <TableRow
              key={item._id}
              className="hover:bg-slate-300 transition duration-200 cursor-pointer"
            >
              {(columnKey) => (
                <TableCell className="py-3 text-lg">
                  {renderCell(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}