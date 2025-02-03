import { logo, greenSkin, redSkin } from "./assets";
import Wrapper from "./layout/wrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";


import { useEffect, useState } from "react";
import { product_data } from "./data/data";
import { Swiper, SwiperSlide } from "swiper/react";

const App = () => {
  const [menu, setMenu] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [fromCart, setFromCart] = useState(false);

  const [isContactOpen, setIsContactOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMSG] = useState("");

  useEffect(() => {
    AOS.init({});
  }, []);

  const handleClick = () => {
    setMenu(true);
    document.body.style.overflow = "hidden";
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  const handleClose = () => {
    setMenu(false);
    document.body.style.overflow = "";
  };

  const sendMessage = async () => {
    const cartMessage = cart
      .map((item) => `${item.name} - ${item.quantity}`)
      .join("\n");
    const textt = `
      Имя: ${name},
      Электронная почта: ${email},
      Телефон: ${phone},
      Сообщение: ${msg},
      Корзина: ${cart.length !== 0 ? cartMessage : "Корзина пуста"}
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
    }).then(()=>{
      setEmail('')
      setName('')
      setPhone('')
      setMSG('')
      setCart([])
    });
  };

  return (
    <div className="bg-[#D6DDDE] overflow-hidden relative min-h-screen">
      <div>
        <div
          data-aos="zoom-in"
          data-aos-duration="100"
          className="w-[610px] z-20 h-[610px] right-[41px] -top-[163px] absolute bg-[#C0EF7E] rounded-full blur-[125px]"
        />
        <div
          data-aos="zoom-in"
          data-aos-duration="100"
          className="w-[411px] z-20 h-[411px] -right-[139px] -top-[112px] absolute bg-[#C0EF7E] rounded-full blur-[125px]"
        />
      </div>

      <div className="relative">
        <Wrapper>
          <div className="relative h-full">
            <div className="w-full xl:h-[880px] left-0 top-[0px] absolute rotate-[1.50deg] bg-[#fbfeff]/30 rounded-[60px] backdrop-blur-[10px]" />

            <div className="w-full relative z-30 mt-[35px] xl:h-[880px] py-10 md:py-[55px] px-5 md:px-10 xl:px-[85px] bg-[#FFFFFF8C] rounded-[60px] backdrop-blur-[20px]">
              <div
                data-aos-duration="100"
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
                    <div
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
                    </div>

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

                  {isCartOpen && (
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
                  )}

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
                <div className="logo-bar w-full flex flex-col items-center justify-center">
                  <img src={logo} alt="blitz" className="w-1/3" />
                  <p className="font-mono text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center mt-8">
                    Сигнальная одежда и СИЗ <br /> опт / розница
                  </p>
                </div>

                <div className="cards flex flex-row flex-wrap lg:flex-nowrap  mt-6">
                  <div  className="carde1 carde w-1/2 md:w-1/3 lg:w-full p-2 flex justify-center cursor-pointer">
                    <a href="#productss">
                    <div className="border pb-0 hover:scale-105 duration-200 border-solid rounded-3xl p-2">
                      <img src={product_data[0].images[0].img} alt="" />
                      <p className="font-mono text-center text-base mt-1.5 leading-[normal] pb-3 font-semibold">{product_data[0].name}</p>
                    </div>
                    </a>
                  </div>
                  <div  className="carde2 carde w-1/2 md:w-1/3 lg:w-full p-2 flex justify-center cursor-pointer">
                    <a href="#productss">
                    <div className="border pb-0 hover:scale-105 duration-200 border-solid rounded-3xl p-2">
                      <img src={product_data[1].images[0].img} alt="" className="relative -left-[15px]" />
                      <p className="font-mono text-center text-base mt-1.5 leading-[normal] pb-3 font-semibold">{product_data[1].name}</p>
                    </div>
                    </a>
                  </div>{" "}
                  <div  className="carde3 carde w-1/2 md:w-1/3 lg:w-full p-2 flex justify-center cursor-pointer">
                   <a href="#productss">
                   <div className="border pb-0 hover:scale-105 duration-200 border-solid rounded-3xl p-2">
                      <img src={product_data[2].images[0].img} alt="" />
                      <p className="font-mono text-center text-base mt-1.5 leading-[normal] pb-3 font-semibold">{product_data[2].name}</p>
                    </div>
                   </a>
                  </div>{" "}
                  <div  className="carde4 carde w-1/2 md:w-1/3 lg:w-full p-2 flex justify-center cursor-pointer">
                    <a href="#productss">
                    <div className="border pb-0 hover:scale-105 duration-200 border-solid rounded-3xl p-2">
                      <img src={product_data[3].images[0].img} alt="" />
                      <p className="font-mono text-center text-base mt-1.5 leading-[normal] pb-3 font-semibold">{product_data[3].name}</p>
                    </div>
                    </a>
                  </div>{" "}
                  <div  className="carde5 carde w-1/2 md:w-1/3 lg:w-full p-2 flex justify-center cursor-pointer">
                    <a href="#productss">
                    <div className="border pb-0 hover:scale-105 duration-200 border-solid rounded-3xl p-2">
                      <img src={product_data[4].images[0].img} alt="" className="relative -left-[13px]"  />
                      <p className="font-mono text-center text-base mt-1.5 leading-[normal] pb-3 font-semibold">{product_data[4].name}</p>
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
                  const cartItem = cart.find((item) => item.name === c2.name);
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
                            onClick={() => addToCart(c2)}
                            className="w-full duration-100 hover:scale-105 md:w-[131px] md:h-[35px] pl-7 pr-[26px] pt-[9.17px] pb-[8.83px] bg-[#161616] rounded-[30px] cursor-pointer justify-center items-center flex"
                          >
                            <div className="w-[77px] self-stretch pl-1.5 pr-[5px] pt-[0.17px] pb-[0.83px] cursor-pointer justify-center items-center inline-flex overflow-hidden">
                              <div className="text-center text-white text-[13px] font-medium font-mono cursor-pointer">
                                {cartItem ? `(${cartItem.quantity})` : "Купить"}
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
                    className="w-full font-mono bg-green-500 text-white p-2 rounded mt-3"
                    onClick={() => addToCart(selectedProduct)}
                  >
                    Купить
                  </button>
                </div>
              </div>
            )}

            <div id="abouts" className="our-major mt-[60px] relative">
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
                  <img
                    src="/src/assets/newLogo22.svg"
                    alt=""
                    className="max-w-[167px]"
                  />
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
                  <p className="cursor-pointer text-sm sm:text-base font-mono font-light text-[#000000B2] leading-[normal] mb-[6px]">
                    О нас
                  </p>
                  <p className="cursor-pointer text-sm sm:text-base font-mono font-light text-[#000000B2] leading-[normal] mb-[6px]">
                    Связаться
                  </p>
                  <p className="cursor-pointer text-sm sm:text-base font-mono font-light text-[#000000B2] leading-[normal] ">
                    Продукция
                  </p>
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
                    href="tel:+998(71) 200-11-66"
                    className="text-sm sm:text-base font-['REM'] font-light text-[#000000B2] leading-[normal] mb-3"
                  >
                    +998(71) 200-11-66
                  </a>
                  <a
                    href="tel:+998(93) 389-35-00"
                    className="text-sm sm:text-base font-['REM'] font-light text-[#000000B2] leading-[normal]"
                  >
                    +998(93) 389-35-00
                  </a>
                </div>
              </div>

              <div className="bottome flex flex-col gap-2 sm:flex-row justify-between items-center mt-[90px] mb-10">
                <div className="lft flex flex-row items-center gap-6">
                  <svg
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
                    className="cursor-pointer transition-all duration-300 hover:-translate-y-2"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                  </svg>
                  <svg
                    className="cursor-pointer transition-all duration-300 hover:-translate-y-2"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
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
                  {fromCart ? "Заказ" : "Свяжитесь с нами"}
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
