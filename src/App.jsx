import { logo, greenSkin, redSkin } from "./assets";
import Wrapper from "./layout/wrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";

import { useEffect, useState } from "react";
import { product_data } from "./data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import emailjs from 'emailjs-com';

emailjs.init('lOYFN_rtfegZs3TTp');

const App = () => {
  const [menu, setMenu] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  
 

  const [isContactOpen, setIsContactOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMSG] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  useEffect(() => {
    AOS.init({});
  }, []);

  const handleClick = () => {
    setMenu(true);
    document.body.style.overflow = "hidden";
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_htnerd4', 'template_7iqq32v', formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsOpen(false)
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });

  };
  
  
  const handleClose = () => {
    setMenu(false);
    document.body.style.overflow = "";
  };

  const sendMessage = async () => {
    const textt = `
      Имя: ${name},
      Электронная почта: ${email},
      Телефон: ${phone},
      Сообщение: ${msg},
    `;
    const chatId = "-1002358384632";
    const botToken = "7404948259:AAF2DIr34yY3kjkgKmzDtHly0O3vOePcmGA";
  
   
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: textt,
      }),
    });
  
    const emailData = {
      name:name,
      email:email,
      phone:phone,
      mss: msg,
    };
  
    await emailjs.send("service_htnerd4", "template_7iqq32v", emailData)
      .then(() => {
        console.log("Email sent successfully");
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
      });
  
    setEmail("");
    setName("");
    setPhone("");
    setMSG("");
    setIsContactOpen(false);
  };
  

  return (
    <div className="bg-[#D6DDDE] overflow-hidden relative min-h-screen">
      <div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="w-[610px] z-20 h-[610px] right-[41px] -top-[163px] absolute bg-[#C0EF7E] rounded-full blur-[125px]"
        />
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="w-[411px] z-20 h-[411px] -right-[139px] -top-[112px] absolute bg-[#C0EF7E] rounded-full blur-[125px]"
        />
      </div>

      <div className="relative">
        <Wrapper>
          <div className="relative h-full">
            <div className="w-full xl:h-[880px] left-0 top-[0px] absolute rotate-[1.50deg] bg-[#fbfeff]/30 rounded-[60px] backdrop-blur-[10px]" />

            <div className="w-full relative z-30 mt-[35px] xl:h-[880px] py-10 md:py-[55px] px-5 md:px-10 xl:px-[85px] bg-[#FFFFFF8C] rounded-[60px] backdrop-blur-[20px]">
              <div
                data-aos-duration="1000"
                data-aos="fade-down"
                className="w-full justify-between items-center flex"
              >
                <div className="justify-start hidden lg:flex items-center gap-5 lg:gap-[30px]">
                  <a
                    href="#productss"
                    className="text-[#0c0c0c]/80 transition-all duration-300 hover:scale-105 font-mono text-base md:text-lg lg:text-[22px]"
                  >
                    Продукция
                  </a>

                  <a
                    href="#abouts"
                    className="text-[#0c0c0c]/80 transition-all duration-300 hover:scale-105 font-mono text-base md:text-lg lg:text-[22px]"
                  >
                    О нас
                  </a>

                  {/* <a
                    href="/"
                    className="text-[#0c0c0c]/80 transition-all duration-300 hover:scale-105 font-mono text-base md:text-lg lg:text-[22px]"
                  >
                    Связаться
                  </a> */}
                </div>

                <a>
                  <img
                    className="h-[44px] lg:h-[51px] cursor-pointer"
                    alt="logo"
                    src={logo}
                  />
                </a>

                <div className="justify-end items-center gap-5 md:gap-[30px] flex">
                  <div className="flex justify-end items-center gap-[15px]">
                    {/* <div
                      onClick={() => setIsCartOpen(!isCartOpen)}
                      className="relative cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M18.3845 8.37109L18.6958 6.34784C18.8707 5.21059 19.8493 4.37109 20.9999 4.37109M18.3845 8.37109L17.3913 14.8273C17.1661 16.2908 15.9069 17.3711 14.4261 17.3711H7.40641C6.00031 17.3711 4.78287 16.3945 4.47785 15.0219L3.81118 12.0219C3.39484 10.1483 4.8205 8.37109 6.73974 8.37109H18.3845ZM15.4999 20.1211C15.4999 20.5353 15.1641 20.8711 14.7499 20.8711C14.3357 20.8711 13.9999 20.5353 13.9999 20.1211C13.9999 19.7069 14.3357 19.3711 14.7499 19.3711C15.1641 19.3711 15.4999 19.7069 15.4999 20.1211ZM7.4999 20.1211C7.4999 20.5353 7.16411 20.8711 6.7499 20.8711C6.33568 20.8711 5.9999 20.5353 5.9999 20.1211C5.9999 19.7069 6.33568 19.3711 6.7499 19.3711C7.16411 19.3711 7.4999 19.7069 7.4999 20.1211Z"
                          stroke="#363538"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 sm:px-2 py-1 rounded-full">
                          {cart.length}
                        </span>
                      )}
                    </div> */}

                    <svg
                      onClick={() => handleClick()}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0,0,256,256"
                      className="cursor-pointer lg:hidden"
                    >
                      <g
                        fill="#363538"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                      >
                        <g transform="scale(5.12,5.12)">
                          <path d="M3,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h44c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM3,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h44c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM3,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h44c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>

                  {/* {isCartOpen && (
                    <div
                      data-aos="fade-down"
                      className="absolute right-0 top-16 bg-white shadow-lg rounded-lg p-4 w-64"
                    >
                      {cart.length > 0 ? (
                        cart.map((item, index) => (
                          <div
                            key={index}
                            className="flex font-mono justify-between border-b p-2"
                          >
                            <span className="font-mono">
                              {item.name} ({item.quantity})
                            </span>
                            <button onClick={() => removeFromCart(item.id)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="16"
                                height="16"
                                viewBox="0 0 30 30"
                              >
                                <path d="M6 8v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8H6zM24 4h-6c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1H6C5.4 4 5 4.4 5 5s.4 1 1 1h18c.6 0 1-.4 1-1S24.6 4 24 4z"></path>
                              </svg>
                            </button>
                          </div>
                        ))
                      ) : (
                        <p className="text-center font-mono">Корзина пуста</p>
                      )}
                      <button
                        onClick={() => {
                          setFromCart(true);
                          setIsCartOpen(false);
                          setIsContactOpen(true);
                        }}
                        className="w-full font-mono bg-[#161616] text-white p-2 rounded mt-2"
                      >
                        Купить сейчас
                      </button>
                    </div>
                  )} */}

                  <div
                    onClick={() => setIsContactOpen(true)}
                    className="w-[168px] hidden sm:flex hover:bg-[#000] cursor-pointer hover:scale-105 px-8 py-[10px] bg-[#161616] transition-all duration-300 rounded-[70px] justify-center items-center gap-2.5"
                  >
                    <div className="text-white text-xl font-mono font-semibold">
                      Связаться
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[50px] gap-5 xl:gap-2 flex flex-col justify-between items-center">
                <div
                  data-aos-duration="1000"
                  data-aos="fade-up"
                  className="logo-bar w-full flex flex-col items-center justify-center"
                >
                  <img src={logo} alt="blitz" className="w-1/3" />
                  <p className="font-mono text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center mt-8">
                    Сигнальная одежда и СИЗ <br /> опт / розница
                  </p>
                </div>

                <div
                  data-aos-duration="1000"
                  data-aos="fade-up"
                  className="cards flex flex-row flex-wrap lg:flex-nowrap  mt-6"
                >
                  <div className="carde1 carde w-1/2 md:w-1/3 lg:w-full p-2 flex justify-center cursor-pointer">
                    <a href="#productss">
                      <div className="border pb-0 hover:scale-105 duration-200 border-solid rounded-3xl p-2">
                        <img src={product_data[0].images[0].img} alt="" />
                        <p className="font-mono text-center text-base mt-1.5 leading-[normal] pb-3 font-semibold">
                          {product_data[0].name}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="carde2 carde w-1/2 md:w-1/3 lg:w-full p-2 flex justify-center cursor-pointer">
                    <a href="#productss">
                      <div className="border pb-0 hover:scale-105 duration-200 border-solid rounded-3xl p-2">
                        <img
                          src={product_data[1].images[0].img}
                          alt=""
                          className="relative -left-[15px]"
                        />
                        <p className="font-mono text-center text-base mt-1.5 leading-[normal] pb-3 font-semibold">
                          {product_data[1].name}
                        </p>
                      </div>
                    </a>
                  </div>{" "}
                  <div className="carde3 carde w-1/2 md:w-1/3 lg:w-full p-2 flex justify-center cursor-pointer">
                    <a href="#productss">
                      <div className="border pb-0 hover:scale-105 duration-200 border-solid rounded-3xl p-2">
                        <img src={product_data[2].images[0].img} alt="" />
                        <p className="font-mono text-center text-base mt-1.5 leading-[normal] pb-3 font-semibold">
                          {product_data[2].name}
                        </p>
                      </div>
                    </a>
                  </div>{" "}
                  <div className="carde4 carde w-1/2 md:w-1/3 lg:w-full p-2 flex justify-center cursor-pointer">
                    <a href="#productss">
                      <div className="border pb-0 hover:scale-105 duration-200 border-solid rounded-3xl p-2">
                        <img src={product_data[3].images[0].img} alt="" />
                        <p className="font-mono text-center text-base mt-1.5 leading-[normal] pb-3 font-semibold">
                          {product_data[3].name}
                        </p>
                      </div>
                    </a>
                  </div>{" "}
                  <div className="carde5 carde w-1/2 md:w-1/3 lg:w-full p-2 flex justify-center cursor-pointer">
                    <a href="#productss">
                      <div className="border pb-0 hover:scale-105 duration-200 border-solid rounded-3xl p-2">
                        <img
                          src={product_data[4].images[0].img}
                          alt=""
                          className="relative -left-[13px]"
                        />
                        <p className="font-mono text-center text-base mt-1.5 leading-[normal] pb-3 font-semibold">
                          {product_data[4].name}
                        </p>
                      </div>
                    </a>
                  </div>
                  {/* <div  className="carde6 carde w-1/2 md:w-1/3 lg:w-full p-2 flex justify-center cursor-pointer">
                    <a className="w-full" href="#productss"><div className=" pb-0 hover:scale-105 duration-200 border-solid rounded-3xl p-2">
                      <img
                        src={''}
                        alt=""
                        className="max-w-[204px] w-full"
                      />
                    </div></a>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="w-full mt-[30px] px-6 md:px-10 xl:px-[87px] py-4 md:py-10 xl:py-12 bg-white/50 rounded-[35px] flex-col justify-center items-center gap-2.5 flex">
              <div className="w-full justify-between items-center flex">
                <div
                  data-aos="zoom-out"
                  className="flex-1 relative z-10 border-r border-r-[#6D6D8133]"
                >
                  <div className="text-[#373737] text-base sm:text-[22px] md:text-2xl lg:text-4xl font-semibold">
                    30 731
                  </div>
                  <div className="text-black/70 text-xs font-mono sm:text-base lg:text-lg font-light">
                    Товар продан
                  </div>
                </div>

                <div
                  data-aos="zoom-out"
                  className="flex-1 relative z-10 text-center"
                >
                  <div className="text-[#373737] text-base sm:text-[22px] md:text-2xl lg:text-4xl font-semibold">
                    98.5%
                  </div>
                  <div className="text-black/70 text-xs font-mono sm:text-base lg:text-lg font-light">
                    Заказов выкуплено
                  </div>
                </div>

                <div
                  data-aos="zoom-out"
                  className="flex-1 relative z-10 text-center lg:text-end border-l border-l-[#6D6D8133]"
                >
                  <div className="text-[#373737] text-base font-mono sm:text-[22px] md:text-2xl lg:text-4xl font-semibold">
                    3 года
                  </div>
                  <div className="text-black/70 text-xs sm:text-base lg:text-lg font-light">
                    На Wildberries
                  </div>
                </div>
              </div>
            </div>

            <div
              id="productss"
              className="max-w-[1280px] w-full relative mt-[45px]"
            >
              <div className="mb-5 text-[#373737] text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] font-light font-mono">
                Что мы продаем
              </div>
              <div className="cards z-10 relative flex flex-row justify-center flex-wrap gap-x-8 gap-y-[25px]">
                {product_data.map((c2, c3) => {
                  return (
                    <div
                      key={c3}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="w-[90%] sm:-w[46%] lg:w-[296px] px-[18px] py-5 bg-white/30 rounded-[30px] justify-center items-center gap-2.5 flex"
                    >
                      <div className="w-[260px] flex flex-col items-center relative">
                        <img
                          className="h-[217px] rounded"
                          src={c2.images[0].img}
                        />
                        <div className="left-[56px] line-clamp-1 text-center text-[#373737] text-xl md:text-2xl font-bold font-mono">
                          {c2.name}
                        </div>
                        <div className="w-[235px] line-clamp-2 left-[12px] top-[266px] text-center text-black/60 text-sm md:text-base font-light font-mono">
                          {c2.desc}
                        </div>
                        <div className="w-full mt-[15px] flex-wrap md:h-[35px] left-0 top-[321px] justify-start items-center gap-[5px] inline-flex">
                          <div
                            onClick={() => setSelectedProduct(c2)}
                            className="w-full duration-100 hover:scale-105 md:w-[124px] md:h-[35px] pl-[26.20px] pr-[25.80px] pt-[9.17px] pb-[8.83px] bg-[#f8f8f8]/60 cursor-pointer rounded-[30px] justify-center items-center flex"
                          >
                            <div className="grow shrink basis-0 self-stretch pl-[7.20px] pr-[4.80px] pt-[0.17px] pb-[0.83px] cursor-pointer justify-center items-center inline-flex overflow-hidden">
                              <div className="text-center text-[#161616] text-[13px] font-medium font-mono cursor-pointer">
                                Подробнее
                              </div>
                            </div>
                          </div>
                          <div
                                    onClick={() => setIsOpen(true)}
                            className="w-full duration-100 hover:scale-105 md:w-[131px] md:h-[35px] pl-7 pr-[26px] pt-[9.17px] pb-[8.83px] bg-[#161616] rounded-[30px] cursor-pointer justify-center items-center flex"
                          >
                            <div className="w-[77px] self-stretch pl-1.5 pr-[5px] pt-[0.17px] pb-[0.83px] cursor-pointer justify-center items-center inline-flex overflow-hidden">
                              <div className="text-center text-white text-[13px] font-medium font-mono cursor-pointer">
                                Связаться
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {selectedProduct && (
              <div
                className="fixed z-40 inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
                onClick={() => setSelectedProduct(null)}
              >
                <div
                  className="bg-white relative rounded-lg p-4 max-w-md w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute z-20 top-2 right-2"
                    onClick={() => setSelectedProduct(null)}
                  >
                    <svg
                      className="w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
                    </svg>
                  </button>
                  <Swiper spaceBetween={10} slidesPerView={1}>
                    {selectedProduct.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image.img}
                          alt="Product"
                          className="w-full h-48 object-contain"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <h2 className="text-lg font-mono font-bold mt-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-600 mt-1 font-mono">
                    {selectedProduct.desc}
                  </p>

                  <button
                    className="w-full font-mono bg-green-500 disabled:bg-red-500 disabled:cursor-not-allowed text-white p-2 rounded mt-3"
                    disabled={selectedProduct.linkToWB == ""}
                    onClick={() => window.open(`${selectedProduct.linkToWB}`)}
                  >
                    Подробнее на ВБ
                  </button>
                </div>
              </div>
            )}

            <div id="abouts" className="our-major mt-[80px] relative">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="our-major-content relative flex flex-row gap-5 md:gap-7 lg:gap-9 items-center py-6 sm:py-10 md:py-[45px] lg:py-[60px] px-6 sm:px-10 md:px-[55px] lg:px-[75px] w-full rounded-[35px] border border-solid border-[#FFFFFF1A] bg-[#FFFFFF59]"
              >
                <div className="lft-cnt">
                  <svg
                    className="mt-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="112"
                    viewBox="0 0 5 112"
                    fill="none"
                  >
                    <rect
                      x="0.914185"
                      y="112"
                      width="112"
                      height="3.86614"
                      rx="1.93307"
                      transform="rotate(-90 0.914185 112)"
                      fill="url(#paint0_linear_38_223)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_38_223"
                        x1="0.914185"
                        y1="113.933"
                        x2="112.914"
                        y2="113.933"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DBFF75" />
                        <stop offset="1" stopColor="#FFBC7D" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="rgt-cnt relative z-10">
                  <div className="tpl">
                    <h3
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] text-[#373737] font-mono font-bold leading-[normal]"
                    >
                      Условия работы
                    </h3>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="font-mono text-sm sm:text-base md:text-xl lg:text-2xl font-light text-[#000000B2] md:leading-[34px] tracking-[0.48px] max-w-[832px] mt-4"
                    >
                      100% предоплата, возможна работа с НДС. Обсуждается с
                      менеджером.
                    </p>
                  </div>

                  <div className="btl mt-11">
                    <h3
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] text-[#373737] font-mono font-bold leading-[normal]"
                    >
                      Доставка
                    </h3>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="font-mono text-sm sm:text-base md:text-xl lg:text-2xl font-light text-[#000000B2] md:leading-[34px] tracking-[0.48px] max-w-[832px] mt-4"
                    >
                      Осуществляем доставку по все России с центрального склада
                      в г.Москва.
                    </p>
                  </div>
                </div>

                <img
                  src={redSkin}
                  alt="redSkin"
                  className="hidden lg:block absolute right-0 bottom-0"
                />
              </div>
            </div>

            <div className="services mt-[67px] p-[30px] flex flex-row items-center justify-between">
              <div className="lfte max-w-[738px]">
                <div className="tpe">
                  <div className="br font-mono border border-solid border-[#8BCC00] rounded-[30px] mb-[30px] text-[#8BCC00] font-bold leading-[21.7px] text-sm max-w-[238px] h-[34px] flex items-center justify-center">
                    Услуги
                  </div>
                </div>
                <h3 className="text-[#1D1D1F] font-mono text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[56px] font-bold xl:leading-[56px] mb-4">
                  Услуги по нанесению логотипа
                </h3>
                <p className="text-lg font-normal font-mono text-[#1D1D1FB3] mb-[30px]">
                  У нас вы можете заказать нанесение логотипа на сигнальные
                  жилеты. Цена будет зависеть от количества жилетов и размера
                  логотипа. Для расчета цены свяжитесь пожалуйста с нами.
                </p>
                <a href="#productss">
                  <button className="max-w-[206px] w-full bg-[#8BCC00] rounded-[30px] h-[46px]">
                    <p className="text-sm lg:text-base font-bold font-mono text-white leading-[21.7px]">
                      Заказать
                    </p>
                  </button>
                </a>
              </div>

              <div className="rggt hidden lg:block">
                <img src={greenSkin} alt="greenSkin" />
              </div>
            </div>

            <div id="contacts" className="our-major mt-[60px] relative">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="our-major-content relative flex flex-row gap-5 md:gap-7 lg:gap-9 items-center py-6 sm:py-10 md:py-[45px] lg:py-[60px] px-6 sm:px-10 md:px-[55px] lg:px-[75px] w-full rounded-[35px] border border-solid border-[#FFFFFF1A] bg-[#FFFFFF59]"
              >
                <div className="lft-cnt">
                  <svg
                    className="mt-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="112"
                    viewBox="0 0 5 112"
                    fill="none"
                  >
                    <rect
                      x="0.914185"
                      y="112"
                      width="112"
                      height="3.86614"
                      rx="1.93307"
                      transform="rotate(-90 0.914185 112)"
                      fill="url(#paint0_linear_38_223)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_38_223"
                        x1="0.914185"
                        y1="113.933"
                        x2="112.914"
                        y2="113.933"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DBFF75" />
                        <stop offset="1" stopColor="#FFBC7D" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="rgt-cnt relative z-10 w-full">
                  <div className="tpl">
                    <h3
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] text-[#373737] font-mono font-bold leading-[normal]"
                    >
                      Контакты
                    </h3>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="font-mono text-sm sm:text-base md:text-xl lg:text-2xl font-light text-[#000000B2] md:leading-[34px] tracking-[0.48px] max-w-[832px] mt-4"
                    >
                      С нами связаться вы можете по:
                    </p>
                  </div>

                  <div className="btl mt-5">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="tpe flex flex-col md:flex-row gap-5"
                    >
                      <div className="phone flex flex-col gap-[2px] md:max-w-[40%] w-full">
                        <label
                          htmlFor="phone"
                          className="text-base font-mono text-black/70"
                        >
                          Телефон:
                        </label>
                        <input
                          type="phone"
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                          name="phone"
                          id="phone"
                          inputMode="numeric"
                          placeholder="Телефон"
                          className="outline-none border-none font-mono py-3 px-4 text-lg rounded-md"
                        />
                      </div>
                      <div className="name flex flex-col gap-[2px] md:max-w-[40%] w-full">
                        <label
                          htmlFor="name"
                          className="text-base font-mono text-black/70"
                        >
                          Имя:
                        </label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          type="name"
                          name="name"
                          id="name"
                          placeholder="Имя"
                          className="outline-none border-none font-mono py-3 px-4 text-lg rounded-md"
                        />
                      </div>
                    </div>

                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="txt-are mt-3"
                    >
                      <div className="msg flex flex-col gap-[2px] md:max-w-[50%] w-full">
                        <label
                          htmlFor="msg"
                          className="text-base font-mono text-black/70"
                        >
                          Сообщение:
                        </label>
                        <textarea
                          onChange={(e) => setMSG(e.target.value)}
                          value={msg}
                          type="text"
                          name="msg"
                          id="msg"
                          inputMode="text"
                          placeholder="Сообщение"
                          className="outline-none border-none font-mono py-3 px-4 text-lg rounded-md"
                        />
                      </div>
                    </div>

                    <button
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      onClick={sendMessage}
                      className="max-w-[206px] mt-3 w-full bg-[#8BCC00] rounded-[30px] h-[46px] text-base font-bold font-mono text-white leading-[21.7px]"
                    >
                      Отправить
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <footer className="mt-[250px]">
              <div className="tope flex flex-col md:flex-wrap gap-4 lg:flex-nowrap md:flex-row justify-between">
                <div className="lg flex flex-col gap-5">
                  <img src={logo} alt="" className="max-w-[167px]" />
                  <p className="text-sm sm:text-base text-[#000000B2] font-mono max-w-[290px] font-light">
                    Мы, компания, окторза занимаяется оптовой и рознично
                    продажей сигнальной одежды. Являемся продавцами на валберис
                    более года.
                  </p>
                </div>

                <div className="uli">
                  <h4 className="text-[#000000CC] font-mono font-normal text-lg sm:text-xl md:text-[22px] mb-3">
                    Компания
                  </h4>

                  <p className="cursor-pointer text-sm sm:text-base font-mono font-light text-[#000000B2] leading-[normal] mb-[6px]">
                    Главный
                  </p>
                  <a href="#abouts" className="flex">
                  <p className="cursor-pointer text-sm sm:text-base font-mono font-light text-[#000000B2] leading-[normal] mb-[6px]">
                    О нас
                  </p>
                  </a>
                  
                  <a href="#contacts" className="flex">
                  <p
                    className="cursor-pointer text-sm sm:text-base font-mono font-light text-[#000000B2] leading-[normal] mb-[6px]"
                  >
                    Связаться
                  </p>
                  </a>
                  <a href="#productss">
                  <p className="cursor-pointer text-sm sm:text-base font-mono font-light text-[#000000B2] leading-[normal] ">
                    Продукция
                  </p>
                  </a>
                </div>

                {/* <div className="uli">
                  <h4 className="text-[#000000CC] font-['REM'] font-normal text-lg sm:text-xl md:text-[22px] mb-3">
                    Biz yaqinmiz
                  </h4>

                  <p className="cursor-pointer text-sm sm:text-base font-['REM'] font-light text-[#000000B2] leading-[normal] mb-[6px]">
                    Facebook
                  </p>
                  <p className="cursor-pointer text-sm sm:text-base font-['REM'] font-light text-[#000000B2] leading-[normal] mb-[6px]">
                    Instagram
                  </p>
                  <p className="cursor-pointer text-sm sm:text-base font-['REM'] font-light text-[#000000B2] leading-[normal] mb-[6px]">
                    YouTube
                  </p>
                  <p className="cursor-pointer text-sm sm:text-base font-['REM'] font-light text-[#000000B2] leading-[normal] ">
                    Telegram
                  </p>
                </div> */}

                {/* <div className="uli">
                  <h4 className="text-[#000000CC] font-['REM'] font-normal text-lg sm:text-xl md:text-[22px] mb-3">
                    Karyera
                  </h4>

                  <p className="cursor-pointer text-sm sm:text-base font-['REM'] font-light text-[#000000B2] leading-[normal] mb-[6px]">
                    Novatioda ish
                  </p>
                  <p className="cursor-pointer text-sm sm:text-base font-['REM'] font-light text-[#000000B2] leading-[normal] ">
                    Novation akademiyasi
                  </p>
                </div> */}

                <div className="uli flex flex-col">
                  <h4 className="text-[#000000CC] font-mono font-normal text-lg sm:text-xl md:text-[22px] mb-3">
                    Контакты
                  </h4>

                  <a
                    href="tel:+8-902-561-31-82"
                    className="text-sm sm:text-base font-['REM'] font-light text-[#000000B2] leading-[normal] mb-3"
                  >
                    +8-902-561-31-82
                  </a>
                  <a
                    href="mailto:768100@mail.ru"
                    className="text-sm sm:text-base font-['REM'] font-light text-[#000000B2] leading-[normal]"
                  >
                    768100@mail.ru
                  </a>
                </div>
              </div>

              <div className="bottome flex flex-col gap-2 sm:flex-row justify-between items-center mt-[90px] mb-10">
                <div className="lft flex flex-row items-center gap-6">
                  <svg
                  onClick={()=> window.open("https://t.me/Leprus38", "_blank")}
                    className="cursor-pointer transition-all duration-300 hover:-translate-y-2"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z M 34.087891 16.035156 C 34.362891 16.035156 34.608406 16.080641 34.816406 16.181641 C 35.289406 16.408641 35.530031 16.914688 35.457031 17.679688 C 35.215031 20.202687 33.253938 33.008969 32.835938 34.292969 C 32.477938 35.390969 32.100813 36.335938 31.382812 36.335938 C 30.664813 36.335938 29.880422 36.08425 29.107422 35.53125 C 28.334422 34.97925 23.201281 31.536891 22.488281 31.087891 C 21.863281 30.693891 21.201813 29.711719 22.132812 28.761719 C 22.899812 27.979719 28.717844 22.332938 29.214844 21.835938 C 29.584844 21.464938 29.411828 21.017578 29.048828 21.017578 C 28.923828 21.017578 28.774141 21.070266 28.619141 21.197266 C 28.011141 21.694266 19.534781 27.366266 18.800781 27.822266 C 18.314781 28.124266 17.56225 28.341797 16.78125 28.341797 C 16.44825 28.341797 16.111109 28.301891 15.787109 28.212891 C 14.659109 27.901891 12.750187 27.322734 11.992188 27.052734 C 11.263188 26.792734 10.998047 26.543656 10.998047 26.097656 C 10.998047 25.463656 11.892938 25.026 12.835938 24.625 C 13.831938 24.202 31.066062 16.883437 32.414062 16.398438 C 33.038062 16.172438 33.608891 16.035156 34.087891 16.035156 z"></path>
                  </svg>

                  <svg
                  onClick={()=> window.open("https://wa.me/89025613182","_blank")}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 50 50"
                    className="cursor-pointer transition-all duration-300 hover:-translate-y-2"
                  >
                    <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z"></path>
                  </svg>
                </div>
                <p className="cursor-pointer text-[#000000B2] font-['REM'] font-light text-center text-sm sm:text-base">
                  © BLITZ, 2025 All rights reserved.
                </p>
              </div>
            </footer>
          </div>

          {isContactOpen && (
            <div
              className="fixed z-40 inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
              onClick={() => setIsContactOpen(false)}
            >
              <div
                className="bg-white rounded-lg p-4 max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute z-20 top-2 right-2"
                  onClick={() => setIsContactOpen(false)}
                >
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
                  </svg>
                </button>
                <h2 className="text-lg lg:text-xl font-mono font-bold mb-3">
                  Свяжитесь с нами
                </h2>
                <div className="phone flex mb-3 flex-col gap-[2px] w-full">
                  <label
                    htmlFor="phone"
                    className="text-base font-mono text-black/70"
                  >
                    Телефон:
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    id="phone"
                    inputMode="numeric"
                    placeholder="Телефон"
                    className="outline-none border font-mono py-3 px-4 text-lg rounded-md"
                  />
                </div>
                <div className="email flex flex-col gap-[2px] w-full">
                  <label
                    htmlFor="email"
                    className="text-base font-mono text-black/70"
                  >
                    E-mail:
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="email"
                    placeholder="E-mail"
                    className="outline-none border font-mono py-3 px-4 text-lg rounded-md"
                  />
                </div>
                <div className="name flex flex-col mt-3 gap-[2px] w-full">
                  <label
                    htmlFor="name"
                    className="text-base font-mono text-black/70"
                  >
                    Имя:
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Имя"
                    className="outline-none border font-mono py-3 px-4 text-lg rounded-md"
                  />
                </div>
                <button
                  className="w-full bg-[#8BCC00] font-mono rounded-[30px] text-white py-3 px-2 mt-3"
                  onClick={sendMessage}
                >
                  Отправлять
                </button>
              </div>
            </div>
          )}



{isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 font-mono">Свяжитесь с нами</h2>
            <p className="mb-4 text-gray-700 font-mono">Телефон: +8-902-561-31-82</p>
            <p className="mb-4 text-gray-700 font-mono">Оставьте заявку на обратный звонок:</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border font-mono border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                name="phone"
                inputMode="numeric"
                placeholder="Ваш телефон"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border font-mono border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 font-mono transition-colors bg-gray-400 text-white rounded-md hover:bg-gray-500"
                  onClick={() => setIsOpen(false)}
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 font-mono transition-colors bg-[#8BCC00] text-white rounded-md hover:bg-[#8cb632e1]"
                >
                  Отправлять
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


          
        </Wrapper>
        <div
          className={`menu-modal-drawer transition-all duration-300 ${
            menu ? "translate-x-0" : "translate-x-full"
          } fixed inset-0 w-full h-screen z-50`}
        >
          <div
            onClick={() => handleClose()}
            className={`md-bg fixed top-0 left-0 w-full h-screen transition-all duration-300 bg-[#00000042] ${
              menu ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <div className="md-content h-screen w-[65%] bg-[#DBFF75] shadow translate-x-[54%] flex justify-center items-center">
            <svg
              onClick={() => handleClose()}
              className="absolute top-6 right-6"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0,0,256,256"
            >
              <g
                fill="#363538"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M40.7832,7.27148c-0.52851,0.01247 -1.03058,0.23367 -1.39648,0.61523l-14.33594,14.33594l-14.33594,-14.33594c-0.37669,-0.38827 -0.89458,-0.60741 -1.43555,-0.60742c-0.81437,0.00019 -1.54731,0.49409 -1.85324,1.24881c-0.30592,0.75472 -0.12373,1.61957 0.46066,2.18673l14.33594,14.33594l-14.33594,14.33594c-0.52247,0.50164 -0.73292,1.24653 -0.55021,1.9474c0.18272,0.70087 0.73005,1.24821 1.43093,1.43093c0.70087,0.18272 1.44577,-0.02774 1.9474,-0.55021l14.33594,-14.33594l14.33594,14.33594c0.50164,0.52247 1.24653,0.73293 1.94741,0.55021c0.70088,-0.18272 1.24821,-0.73005 1.43093,-1.43093c0.18272,-0.70088 -0.02774,-1.44577 -0.55021,-1.94741l-14.33594,-14.33594l14.33594,-14.33594c0.59567,-0.57119 0.77939,-1.44958 0.46256,-2.21161c-0.31683,-0.76204 -1.06915,-1.25125 -1.8942,-1.23175z"></path>
                </g>
              </g>
            </svg>
            <ul className="text-center font-mono text-lg flex flex-col gap-2">
              <a onClick={() => handleClose()} href="#productss">
                <li className="font-mono font-bold">Продукция</li>
              </a>
              <a onClick={() => handleClose()} href="#abouts">
                <li className="font-mono font-bold">О нас</li>
              </a>
              <a onClick={() => handleClose()} href="#contacts">
                <li className="font-mono font-bold">Связаться</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
