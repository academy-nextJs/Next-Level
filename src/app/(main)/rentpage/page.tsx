"use client"
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Select, useDisclosure } from "@heroui/react";
import Image from "next/image";
import React from "react";
import image4 from "./../../../assets/image4.png"
import { RiMenuSearchLine } from "react-icons/ri";



const RentPage = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const properties = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    title: "آپارتمان لوکس زعفرانیه",
    location: "تهران · زعفرانیه",
    price: "۱۵,۰۰۰,۰۰۰ تومان",
    oldPrice: "۱۶,۵۰۰,۰۰۰ تومان",
    discount: "۱۵٪ ",
    imageUrl: image4,
  }));
  
  return (
    <> 
    <div className=" mt-40 mr-36 gap-2 flex">
    <p className=" text-3xl" >رهن و اجاره آپارتمان</p>
    <p className="bg-[#586CFF] rounded-3xl w-20 h-10 text-center text-[#fff]  text-2xl" > رشت </p>
    </div>
   

  <div className=" flex md:flex-row mt-14  text-lg gap-4 text-center text-[#272727] rounded-2xl">
  <div className="relative flex mr-32 gap-10 ">
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
              <RiMenuSearchLine size={25} />
            </span>
            <input
              type="text"
              placeholder="جستجو کنید..."
              className="w-[20rem] p-3 pr-10 text-sm border  border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
 
            />
    
  <Button
            onPress={onOpen}
            className="text-xs cursor-pointe w-24 bg-[#586CFF] text-white p-4 rounded-2xl transition"
          >
            فیلترها
          </Button>
          <Modal
        backdrop="opaque"
        size="5xl"
        classNames={{
          backdrop: "bg-#FFFFFF from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
              <div className="w-full flex flex-col gap-4">

        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
       
          
          <Input label="Email" type="email" />
          <Input label="Email" type="email" />
          <Input label="Email" type="email" />
          <Input label="Email" placeholder="Enter your email"  type="email" />
        </div>
    
    </div>
            
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </div>
  <h2 className="w-24 pt-2.5 mr-2  border-[1px] border-[#ccc] rounded-2xl text-center text-nowrap text-base  ">همه </h2>
  <h2 className="w-24 pt-2.5  border-[1px] border-[#ccc] rounded-2xl text-center text-nowrap text-base  ">محبوب ترین</h2>
  <h2 className="w-24 pt-2.5  border-[1px] border-[#ccc] rounded-2xl text-center text-nowrap text-base ">ارزان ترین</h2>
  <h2 className="w-24 pt-2.5  border-[1px] border-[#ccc] rounded-2xl text-center text-nowrap text-base  ">گران ترین</h2>
  <h2 className="w-24 pt-2.5  border-[1px] border-[#ccc] rounded-2xl text-center text-nowrap text-base  ">عکس دار</h2>
  <h2 className="w-24 pt-2.5  border-[1px] border-[#ccc] rounded-2xl text-center text-nowrap text-base  ">پارکینگ دار</h2> 
  <h2 className="w-24 pt-2.5  border-[1px] border-[#ccc] rounded-2xl text-center text-nowrap text-base  ">حیاط دار</h2> 
  
        </div>

 
  
 
    <div className="bg-white p-6 mt-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
               <Image
          className="ml-1.5 "
          src={property.imageUrl}
          alt=""
          width={400}
          height={300}
          priority
        />
         
            <div className="p-4 mr-6">
              <h3 className="text-lg font-semibold text-gray-800">
                {property.title}
              </h3>
              <p className="text-sm text-gray-500">{property.location}</p>
              <div className="flex space-x-4 my-4">
                <div className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs">
                  ۲ خواب
                </div>
                <div className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs">
                  ۲ حمام
                </div>
                <div className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs">
                  پارکینگ
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm font-bold text-gray-500 line-through">
                  {property.price}
                </span>
                <span className="text-xl text-gray-800 ">
                  {property.oldPrice}
                </span>
                <div className="bg-red-500 text-sm text-white rounded-full w-8 text-center">
                {property.discount}
              </div>
              </div>
            
            </div>
          </div>
        ))}
        <div  dir="ltr" className=" ">

        <Pagination className=" mt-7  "
       color="warning" 
        showControls initialPage={1} total={20} />
        </div>
       
      </div>
     
    </div>
  

    </>
  );
};

export default RentPage