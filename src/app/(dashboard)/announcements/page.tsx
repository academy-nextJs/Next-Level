"use client";

import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  Pagination,
  Select,
  SelectItem,
  useDisclosure,
} from "@heroui/react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  getPaginationRowModel,
  OnChangeFn,
  SortingState,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { PiWarningCircleBold } from "react-icons/pi";
import { GiWallet } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaPlusCircle, FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { signOut } from "next-auth/react";
import { CgCheck } from "react-icons/cg";


export default function AnnouncementsPage() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

 const animals = [
  {key: "خوانده شده", label: "خوانده شده"},
  {key: "خوانده نشده", label: "خوانده نشده"},
  {key: "همه", label: "همه"},

];



  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 pb-6 border-b-2 border-dashed border-amber-500">
        <div className="flex items-center gap-2">
          <FaPlusCircle
            className="text-amber-900 dark:text-amber-200 "
            size={30}
          />
          <span className="text-amber-500 text-xl font-bold  dark:text-amber-200 pb-3 border-b-4 border-amber-500 relative group transition-all duration-300 ease-in-out">
            لیست اعلان های شما
          </span>

           
        </div>

         <Select
      className="max-w-45 mr-100 "
      items={animals}
      label=""
      placeholder="همه"
    >
      {(animal) => <SelectItem>{animal.label}</SelectItem>}
    </Select>

  
<Dropdown>
  <DropdownTrigger>
    <Button className="w-72" color="warning">
      علامت‌گذاری به عنوان خوانده شده
    </Button>
  </DropdownTrigger>

  <DropdownMenu>
    <DropdownItem
      key="logout"
      textValue="علامت‌گذاری به عنوان خوانده شده"
      color="warning"
      onPress={() => {
        Swal.fire({
          title: " آیا مطمئن هستید که میخواهید همه مطالب سایت را به عنوان خوانده شده علامت بزنید؟",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "موافقت",
          cancelButtonText: "انصراف",
          confirmButtonColor: "#d33",
          cancelButtonColor: "#aaa",
          customClass: {
            popup: "rounded-2xl shadow-lg dark:bg-gray-800",
            title: "text-lg font-bold text-gray-800 dark:text-white",
            htmlContainer: "text-sm text-gray-600 dark:text-gray-300",
            cancelButton:
              "bg-color2/20 hover:bg-color3 text-black dark:text-white px-4 py-2 rounded-md ml-2",
            confirmButton:
              "bg-color1 text-white px-4 py-2 ml-2 rounded-md",
          },
          buttonsStyling: false,
        }).then((result) => {
          if (result.isConfirmed) {
            signOut({ callbackUrl: "/" });
          }
        });
      }}
    >
      <div className="flex items-center gap-2">
              <CgCheck size={20} />
              علامت گذاری
            </div>
     
    </DropdownItem>
  </DropdownMenu>
</Dropdown>
    
 
 
      </div>
  <div className="w-full bg-gray-200 dark:bg-gray-800 py-3 px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
      {/* اعلان‌ها - راست در حالت دسکتاپ */}
      <div className="text-sm font-medium text-gray-800 dark:text-gray-100 sm:w-1/3 text-right w-full">
        اعلان‌ها
      </div>

      {/* تاریخ - مرکز در همه حال */}
      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 sm:w-1/3 text-center w-full">
        تاریخ
      </div>

      {/* فضای خالی چپ در حالت دسکتاپ برای تعادل */}
      <div className="sm:w-1/3 w-full hidden sm:block"></div>
    </div>
      <div className="overflow-x-auto  rounded-xl">
      </div>
      <div className="flex justify-end">
        {/* <Pagination
          dir="ltr"
          color="warning"
          isCompact
          showControls
          total={table.getPageCount()}
          page={table.getState().pagination.pageIndex + 1}
          onChange={(page) => table.setPageIndex(page - 1)}
        /> */}
      </div>
    </div>
  );
}
