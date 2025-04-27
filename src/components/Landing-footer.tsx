import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiAparat } from "react-icons/si";

import samandehi from "../assets/samandehi-qsyjhvdpkg3mrncpddhc1pydnd5299bemn3wof7no2 1.svg"
import enamad from "../assets/enamad-qsyjhvdpkg3mrncpddhc1pydnd5299bemn3wof7no2 1.svg"
import eteh from "../assets/eteh-qsyjhvdpkg3mrncpddhc1pydnd5299bemn3wof7no2 1.svg"
import AsProfile from "../assets/AS-67207980 1.svg"
import Rectangle from "../assets/Rectangle 30.svg"
import Logo from "../assets/Logo - Name.svg"

import Image from 'next/image'

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
// import './styles.css';

const Landingfooter = () => {
  return (
    <>
    <div className=' bg-white border-[1px] flex flex-col mx-auto text-right w-[375px] h-[900px]'>

        <div className='text-[#444] text-right leading-6 pt-4 '>

        <div className='flex text-lg text-nowrap '>
        <h2 className='text-[#D27700]'>بزرگترین مرجع خرید و فروش و اجاره ملک در کشور</h2>
        <h1 className='text-[#444] pl-0.5'>بایورنت</h1>
        </div>

        <p className='pt-8 text-[13px] px-3 text-justify rtl'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. </p>

        <button className='bg-[#E89300] h-8 w-full mt-4 text-white rounded-lg '>درباره بایورنت</button>

        <div className='bg-white w-[360px] h-[235px] mt-6 shadow-2xl rounded-2xl'>
            <Image
             className= "dark:invert"
            src={Rectangle}
            alt=""
            width={350}
            height={50}
            priority
            />
        </div>
        
        <div className='flex pt-9'>
        <h4 className='text-[#9A815F] text-[12px] text-nowrap pt-1 pr-1'>! بدی های ما رو به ما بگید خوبی های ما رو به دیگران</h4>
        <h3 className='text-[#D27700] text-lg text-nowrap'>بایورنت از نگاه مشتریان</h3>
        </div>

        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>        <div className='w-[350px] mx-auto mt-8 flex rtl justify-between'>

<div>
  <div className='w-[220px] flex text-nowrap justify-between pt-2'>
    <p>*****</p>

    <h1 className='text-[#777777]'>مهرداد مشکور</h1>
  </div>

  <div className='w-[220px] flex text-nowrap justify-between pt-2'>
    <p className='text-[14px] text-[#777777]'>1403/12/06</p>

    <h2 className='text-[#777777]'>پزشک</h2>
  </div>

  <div className='w-[220px] flex text-wrap text-justify justify-between pt-1'>
    <h3 className='text-[#777777] text-[12px] px-2'>ترانسفر اوکی پذیرش اوکی سوییت چهار تخته سه شب اجاره کردیم سوییت تمیز و قابل قبول بود چایی ساز داشت محوطه هتل هم بسیار خوب و زیبا بود.            </h3>
  </div>
</div>

<div>
<Image
   className= "pt-2"
  src={AsProfile}
  alt=""
  width={130}
  height={130}
  priority
  />
</div>
</div></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

        </div>
      
    </div>

    <div className='w-[375px] h-[990px] border-[1px] bg-white flex flex-col m-auto'>
      <div className='w-[300px] h-[850px] ml-10 border-2 border-[#A85F00] rounded-b-[20px] rounded-t-[190px]'>
      <Image
             className= "dark:invert mt-10 ml-24"
            src={Logo}
            alt=""
            width={118}
            height={116}
            priority
            />
      </div>
      
      <div className='w-[250px] h-[780px] flex flex-col bg-[#FFEFD9] rounded-t-[20px] rounded-b-[162px] absolute ml-16 mt-48'>

          <div className='text-right'>
          <h1 className='text-black text-lg pr-4 pt-2'>مختصری از بایورنت</h1>
          <h2 className='text-[#737373] text-[12px] text-balance text-justify px-2'>لورم ایپسوم  تولید  نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </h2>
          </div>

          <div className='text-right leading-7'>
          <h3 className='text-black text-lg pr-4 pt-2'>لینک های مفید</h3>
          <p className='text-[#737373] text-[12px] px-2'>درباره ما</p>
          <p className='text-[#737373] text-[12px] px-2'>شرایط و ظوابط</p>
          <p className='text-[#737373] text-[12px] px-2'>راهنمای کاربران</p>
          <p className='text-[#737373] text-[12px] px-2'>پشتیبانی</p>
          <p className='text-[#737373] text-[12px] px-2'>اخبار و مقالات</p>
          </div>

          <div className='text-right leading-7'>
          <h4 className='text-black text-lg pr-4 pt-2'>تماس با ما</h4>
          <p className='text-[#737373] text-[12px] px-2'>مرکز پیام</p>
          <p className='text-[#737373] text-[12px] px-2'>دفتر مرکزی</p>
          <p className='text-[#737373] text-[12px] px-2'>مدیر شعبات</p>
          <p className='text-[#737373] text-[12px] px-2'>info@buyorent.com</p>
          <p className='text-[#737373] text-[12px] px-2'>021-22556256</p>
          </div>

          <div className='flex justify-around pt-5'>
          <Image
             className= ""
            src={enamad}
            alt=""
            width={66}
            height={66}
            priority
            />
                  <Image
             className= ""
            src={eteh}
            alt=""
            width={66}
            height={66}
            priority
            />
                  <Image
             className= ""
            src={samandehi}
            alt=""
            width={66}
            height={66}
            priority
            />
          </div>

          <div className='text-center pt-10'>
          <h5 className='text-black text-lg'>ما را دنبال کنید</h5>
          </div>

      <div className=''>
        <FaTelegramPlane className='ml-6 mt-11' size={30} />
        <FaInstagram className='ml-18 mt-6' size={30} />
        <SiAparat className='ml-36 mt-[-2rem]' size={30} />
        <FaLinkedinIn className='ml-52 mt-[-5rem]' size={30} />
        </div>

      </div>

    </div>
    </>
  )
}

export {Landingfooter}