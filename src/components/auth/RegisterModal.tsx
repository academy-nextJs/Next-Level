import React, { useState } from "react";
import Image from "next/image";
import VerticalStepper from "./Stepper";
import RegisterBrown from "./../../assets/ModalRegister/Register-Brown.png";
import LoginGray from "./../../assets/ModalRegister/Login-Gray.png";
import Bayournt from "./../../assets/ModalRegister/Bayournt1.png";
import LoginBrown from "./../../assets/ModalRegister/Login-Brown.png";
import RegisterGray from "./../../assets/ModalRegister/Register-Gray.png";
import { InputOtp } from "@heroui/react";
import { HiEyeSlash } from "react-icons/hi2";
import { IoEyeSharp } from "react-icons/io5";
import { Formik } from "formik";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <>
            <p className="font-bold text-2xl">ایجاد حساب کاربری</p>
            <div className="flex flex-col">
              <label className="text-[#D27700] w-full font-bold text-right">
                ایمیل
              </label>
              <input
                type="text"
                className="border-2 border-[#CCCCCC] bg-white rounded-lg w-[300px] h-[40px] p-2"
                placeholder="ایمیل خود را وارد کنید"
              />
            </div>
            <button
              onClick={nextStep}
              className="bg-[#E89300] w-fit px-14 h-[40px] text-white rounded-xl "
            >
              دریافت کد تایید
            </button>
            <p
              className="text-1xl font-bold cursor-pointer"
              onClick={() => setStep(3)}
            >
              ورود به حساب کاربری
            </p>
          </>
        );
      case 1:
        return (
          <>
            <p className="font-bold text-2xl">ایجاد حساب کاربری</p>
            <p className="text-md font-normal text-right leading-relaxed break-words w-[300px]">
              کد تایید به ایمیل{" "}
              <span className="text-[#D27700]">example@gmail.com</span> ارسال
              شده است، در صورت مغایرت روی{" "}
              <span className="text-[#009993]">ویرایش</span> کلیک کنید.
            </p>
            <div className="flex flex-col ">
              <label className="text-[#D27700] w-full font-bold text-right">
                کد تایید
              </label>
              <InputOtp
                color={"default"}
                variant={"faded"}
                errorMessage="Invalid OTP code"
                length={4}
              />
            </div>
            <button
              onClick={nextStep}
              className="bg-[#E89300] w-fit px-14 h-[40px] text-white rounded-xl "
            >
              تایید
            </button>
          </>
        );
      case 2:
        return (
          <>
            <p className="font-bold text-2xl">تنظیم رمز عبور</p>
            <div className="flex flex-col gap-4">
              <div className="relative w-[300px]">
                <label className="text-[#D27700] font-bold mb-1 block text-right">
                  رمز عبور
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="border-2 border-[#CCCCCC] bg-white rounded-lg w-full h-[40px] p-2 pr-10"
                  placeholder="رمز عبور را وارد کنید"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-[38px] right-3 text-xl text-gray-500 cursor-pointer"
                >
                  {showPassword ? <HiEyeSlash /> : <IoEyeSharp />}
                </span>
              </div>

              <div className="relative w-[300px]">
                <label className="text-[#D27700] font-bold mb-1 block text-right">
                  تایید رمز عبور
                </label>
                <input
                  type={showConfirm ? "text" : "password"}
                  className="border-2 border-[#CCCCCC] bg-white rounded-lg w-full h-[40px] p-2 pr-10"
                  placeholder="رمز عبور را دوباره وارد کنید"
                />
                <span
                  onClick={() => setShowConfirm((prev) => !prev)}
                  className="absolute top-[38px] right-3 text-xl text-gray-500 cursor-pointer"
                >
                  {showConfirm ? <HiEyeSlash /> : <IoEyeSharp />}
                </span>
              </div>
            </div>
            <button
              onClick={nextStep}
              className="bg-[#E89300] w-fit px-14 h-[40px] text-white rounded-xl "
            >
              ایجاد حساب
            </button>
          </>
        );
      case 3:
        return (
          <>
            <p className="font-bold text-2xl text-[#444444]">
              {" "}
              ورود به حساب کاربری
            </p>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values, { setSubmitting }) => {
                console.log("ورود با:", values);
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 w-[300px]"
                >
                  <div className="flex flex-col text-right">
                    <label className="text-[#D27700] font-bold mb-1">
                      نام کاربری ( ایمیل )
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="border-2 border-[#CCCCCC] bg-white rounded-lg h-[40px] p-2"
                      placeholder="ایمیل را وارد کنید"
                    />
                    {errors.email && touched.email && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="relative text-right">
                    <label className="text-[#D27700] font-bold mb-1 block">
                      رمز عبور
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="border-2 border-[#CCCCCC] bg-white rounded-lg w-full h-[40px] p-2 pr-10"
                      placeholder="رمز عبور را وارد کنید"
                    />
                    <span
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute top-[38px] right-3 text-xl text-gray-500 cursor-pointer"
                    >
                      {showPassword ? <HiEyeSlash /> : <IoEyeSharp />}
                    </span>
                    {errors.password && touched.password && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#E89300] w-full h-[40px] text-white rounded-xl"
                  >
                    ورود
                  </button>
                </form>
              )}
            </Formik>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <button
          className="capitalize bg-yellow-500 text-white p-2 rounded"
          onClick={() => {
            setIsOpen(true);
            setStep(0); // reset to step 0
          }}
        >
          opaque
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white backdrop-blur-lg bg-opacity-50  flex justify-center items-center">
          <div
            className="relative bg-white p-8 w-[722px] h-[472px] border-[3px] border-[#D27700] rounded-l-[16px] rounded-r-[230px] shadow-lg backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute flex justify-center gap-20 items-center right-36 bg-[#FFF3E3] p-3 w-[684px] h-[408px] border-[2px] border-[#D27700] rounded-r-[16px] rounded-l-[204px] shadow-lg">
              <div className="h-full flex flex-col justify-between">
                <div>
                  {step === 3 ? (
                    <>
                      <Image
                        className="absolute -right-5 top-4 cursor-pointer"
                        src={RegisterGray}
                        alt="Register"
                        width={101}
                        height={46}
                        layout="intrinsic"
                        priority
                        placeholder="blur"
                        onClick={() => setStep(0)}
                      />
                      <Image
                        className="absolute -right-5 top-17 cursor-pointer"
                        src={LoginBrown}
                        alt="Login"
                        width={101}
                        height={46}
                        layout="intrinsic"
                        priority
                        placeholder="blur"
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        className="absolute -right-5 top-4 cursor-pointer"
                        src={LoginGray}
                        alt="Register"
                        width={101}
                        height={46}
                        layout="intrinsic"
                        priority
                        placeholder="blur"
                        onClick={() => setStep(3)}
                      />
                      <Image
                        className="absolute -right-5 top-17 cursor-pointer"
                        src={RegisterBrown}
                        alt="Login"
                        width={101}
                        height={46}
                        layout="intrinsic"
                        priority
                        placeholder="blur"
                      />
                    </>
                  )}
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-[#444444] text-lg font-medium self-center mb-2"
                >
                  بستن
                </button>
              </div>

              <div className="h-full flex flex-col items-center justify-center gap-12">
                {renderStepContent()}
              </div>

              {step === 3 ? (
                <Image
                  src={Bayournt}
                  alt="Register"
                  width={40}
                  height={33}
                  layout="intrinsic"
                  priority
                  placeholder="blur"
                />
              ) : (
                <VerticalStepper
                  currentStep={step}
                  step={step}
                  setStep={setStep}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
