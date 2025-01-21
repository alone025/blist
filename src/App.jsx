import { f1, f2, f3, f4, logo, product, product_image } from "./assets";
import Wrapper from "./layout/wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		AOS.init({});
	}, []);

	return (
		<div className="bg-[#D6DDDE] overflow-hidden relative min-h-screen">
			<div>
				<div data-aos="zoom-in" data-aos-duration="500" className="w-[610px] z-20 h-[610px] right-[41px] -top-[163px] absolute bg-[#dbff74] rounded-full blur-[125px]" />
				<div data-aos="zoom-in" data-aos-duration="500" className="w-[411px] z-20 h-[411px] -right-[139px] -top-[112px] absolute bg-[#ffbc7d] rounded-full blur-[125px]" />

				<img data-aos="fade-left" data-aos-duration="1200" className="w-[350px] z-20 absolute -right-[95px] top-[304px] h-[350px] rotate-45 blur-[10px]" src={product_image} />

				<img data-aos="fade-right" data-aos-duration="1200" className="w-[520px] z-20 absolute left-[37px] bottom-[91px] h-[520px] rotate-2 blur-[10px]" src={product_image} />
			</div>

			<div className="relative">
				<Wrapper>
					<div className="relative h-full">
						<div className="w-full h-[880px] left-0 top-[0px] absolute rotate-[1.50deg] bg-[#fbfeff]/30 rounded-[60px] backdrop-blur-[10px]" />

						<div className="w-full relative z-30 mt-[35px] h-[880px] py-[55px] px-[85px] bg-[#FFFFFF8C] rounded-[60px] backdrop-blur-[20px]">
							<div data-aos-duration="600" data-aos="fade-down" className="w-full justify-between items-center flex">
								<div className="justify-start items-center gap-[30px] flex">
									<a href="/" className="text-[#0c0c0c]/80 transition-all duration-300 hover:scale-105 text-[20px]">
										Mahsulotlar
									</a>

									<a href="/" className="text-[#0c0c0c]/80 transition-all duration-300 hover:scale-105 text-[20px]">
										Vazifamiz
									</a>

									<a href="/" className="text-[#0c0c0c]/80 transition-all duration-300 hover:scale-105 text-[20px]">
										Blog
									</a>
								</div>

								<a>
									<img className="h-[51px]" alt="logo" src={logo} />
								</a>

								<div className="justify-end items-center gap-[30px] flex">
									<div className="flex justify-end items-center gap-[15px]">
										<a href="/">
											<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 25" fill="none">
												<path d="M3.11544 8.39716C3.20159 7.87471 3.37795 7.35225 3.6104 6.8457C5.00201 3.81324 8.95827 3.75043 11.6675 5.66741C11.8671 5.80862 12.1327 5.80862 12.3323 5.66741C15.0416 3.75043 18.9979 3.81324 20.3895 6.8457C20.6219 7.35225 20.7983 7.87471 20.8844 8.39716C22.0204 15.2869 14.4678 20.3711 11.9999 20.3711C9.53202 20.3711 1.98019 15.2822 3.11544 8.39716Z" stroke="#363538" stroke-width="1.5" stroke-linejoin="round" />
											</svg>
										</a>

										<a href="/">
											<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 25" fill="none">
												<path
													d="M18.3845 8.37109L18.6958 6.34784C18.8707 5.21059 19.8493 4.37109 20.9999 4.37109M18.3845 8.37109L17.3913 14.8273C17.1661 16.2908 15.9069 17.3711 14.4261 17.3711H7.40641C6.00031 17.3711 4.78287 16.3945 4.47785 15.0219L3.81118 12.0219C3.39484 10.1483 4.8205 8.37109 6.73974 8.37109H18.3845ZM15.4999 20.1211C15.4999 20.5353 15.1641 20.8711 14.7499 20.8711C14.3357 20.8711 13.9999 20.5353 13.9999 20.1211C13.9999 19.7069 14.3357 19.3711 14.7499 19.3711C15.1641 19.3711 15.4999 19.7069 15.4999 20.1211ZM7.4999 20.1211C7.4999 20.5353 7.16411 20.8711 6.7499 20.8711C6.33568 20.8711 5.9999 20.5353 5.9999 20.1211C5.9999 19.7069 6.33568 19.3711 6.7499 19.3711C7.16411 19.3711 7.4999 19.7069 7.4999 20.1211Z"
													stroke="#363538"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</a>
									</div>

									<div className="w-[168px] hover:bg-[#000] cursor-pointer hover:scale-105 px-8 py-[10px] bg-[#161616] transition-all duration-300 rounded-[70px] justify-center items-center gap-2.5 flex">
										<div className="text-white text-[18px] font-semibold">Bog’lanish</div>
									</div>
								</div>
							</div>

							<div className="mt-[50px] flex justify-between items-center">
								<div data-aos="fade-left" data-aos-duration="800" className="flex flex-col">
									<div className="w-[298px] text-[#373737] text-[82px] font-bold second_font leading-tight">Jigar Detox Choy</div>

									<div className="text-neutral-600 mt-[12px] text-[32px] font-extralight">200.0 so’m</div>

									<div className="justify-start mt-[20px] items-center gap-5 inline-flex">
										<div className="w-[168px] hover:bg-[#000] cursor-pointer hover:scale-105 px-8 py-[10px] bg-[#161616] transition-all duration-300 rounded-[70px] justify-center items-center gap-2.5 flex">
											<div className="text-white text-[18px] font-semibold">Sotib olish</div>
										</div>

										<svg xmlns="http://www.w3.org/2000/svg" width="34" height="36" viewBox="0 0 34 36" fill="none">
											<path d="M4.41355 11.9547C4.53559 11.1928 4.78542 10.4309 5.11474 9.69218C7.08618 5.26984 12.6909 5.17824 16.529 7.97384C16.8118 8.17977 17.1881 8.17977 17.4708 7.97384C21.3089 5.17824 26.9136 5.26984 28.8851 9.69218C29.2144 10.4309 29.4642 11.1928 29.5863 11.9547C31.1956 22.0023 20.4961 29.4167 16.9999 29.4167C13.5037 29.4167 2.80527 21.9954 4.41355 11.9547Z" stroke="#363538" stroke-width="2" stroke-linejoin="round" />
										</svg>
									</div>
								</div>

								<div data-aos="zoom-in" data-aos-duration="800" className="w-[380px] relative flex justify-center items-center h-[530px] bg-gradient-to-b from-[#97abaf49] to-[#bbc8cb49] rounded-tl-[500px] rounded-tr-[500px] rounded-bl-[25px] rounded-br-[25px]">
									<Swiper
										navigation={{
											nextEl: ".swiper-button-next",
											prevEl: ".swiper-button-prev",
										}}
										modules={[Navigation]}
									>
										<SwiperSlide>
											<img src={product} alt="image" className="cursor-grab mt-[100px]" />
										</SwiperSlide>
										<SwiperSlide>
											<img src={product} alt="image" className="cursor-grab mt-[100px]" />
										</SwiperSlide>
										<SwiperSlide>
											<img src={product} alt="image" className="cursor-grab mt-[100px]" />
										</SwiperSlide>
									</Swiper>
									<div class="swiper-button-next"></div>
									<div class="swiper-button-prev"></div>

									<div className="absolute py-[5px] px-[15px] top-[368px] rounded-[40px] bg-white flex justify-start items-center gap-[5px] shadow_main -left-[120px] z-50">
										<img className="w-[32px] h-[38px] object-contain" src={product} />
										<div className="max-w-[125px] leading-5">
											<span class="text-black/80 text-sm font-normal">Nuriddin </span>
											<span class="text-black/40 text-sm font-extralight">hozrgina harid qildi</span>
										</div>
										<div className="absolute -top-[4px] shadow -right-[4px] w-[23px] h-[23px] rounded-full bg-white flex justify-center items-center">
											<svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
												<path d="M9 5.04167V3.66667C9 2.40101 7.88071 1.375 6.5 1.375C5.11929 1.375 4 2.40101 4 3.66667V5.04167M9 5.04167H4M9 5.04167C9.82843 5.04167 10.5 5.65728 10.5 6.41667V8.25C10.5 9.00939 9.82843 9.625 9 9.625H4C3.17157 9.625 2.5 9.00939 2.5 8.25V6.41667C2.5 5.65728 3.17157 5.04167 4 5.04167" stroke="#69B39A" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										</div>
									</div>

									<div className="absolute py-[5px] px-[15px] -top-[10px] rounded-[40px] bg-white flex justify-start items-center gap-[5px] shadow_main -right-[20px] z-50">
										<img className="w-[32px] h-[38px] object-contain" src={product} />
										<div className="max-w-[125px] leading-5">
											<span class="text-black/80 text-sm font-normal">Nuriddin </span>
											<span class="text-black/40 text-sm font-extralight">
												hozrgina mahsulotni
												<svg className="inline-block ml-1 -mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
													<path d="M2.07696 5.35067C2.13439 5.00237 2.25196 4.65406 2.40693 4.31636C3.33467 2.29473 5.97218 2.25285 7.77837 3.53084C7.91141 3.62498 8.0885 3.62498 8.22155 3.53084C10.0277 2.25285 12.6652 2.29473 13.593 4.31637C13.7479 4.65406 13.8655 5.00237 13.9229 5.35067C14.6803 9.94385 9.64523 13.3333 7.99996 13.3333C6.35468 13.3333 1.32013 9.94068 2.07696 5.35067Z" fill="#FF0000" stroke="#FF0000" stroke-width="1.5" stroke-linejoin="round" />
												</svg>
											</span>
										</div>
										<div className="absolute -top-[4px] shadow -right-[4px] w-[23px] h-[23px] rounded-full bg-white flex justify-center items-center">
											<svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
												<path d="M9 5.04167V3.66667C9 2.40101 7.88071 1.375 6.5 1.375C5.11929 1.375 4 2.40101 4 3.66667V5.04167M9 5.04167H4M9 5.04167C9.82843 5.04167 10.5 5.65728 10.5 6.41667V8.25C10.5 9.00939 9.82843 9.625 9 9.625H4C3.17157 9.625 2.5 9.00939 2.5 8.25V6.41667C2.5 5.65728 3.17157 5.04167 4 5.04167" stroke="#69B39A" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										</div>
									</div>
								</div>

								<div data-aos="fade-down" data-aos-duration="600" className="w-[290px] h-[448px] flex-col justify-start items-start gap-[15px] inline-flex">
									<div className="self-stretch text-black/80 text-lg font-light font-['REM'] leading-[29.33px]">Mahsulotlar</div>
									<div className="self-stretch h-[404px] flex-col justify-start items-start gap-5 flex">
										<div className="w-[290px] h-[86px] relative">
											<div className="w-[290px] h-[54px] left-0 top-[32px] absolute bg-[#e1eaeb] rounded-tl-[25px] rounded-tr-[25px] rounded-bl-[5px] rounded-br-[5px] border-t border-[#d1dde0]" />
											<div className="w-[260px] h-[81px] left-[15px] top-0 absolute justify-between items-start inline-flex">
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f2} />
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f4} />
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f1} />
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f3} />
											</div>
											<div className="w-[290px] h-9 left-0 top-[50px] absolute bg-[#e1eaec]/95 rounded-bl-[5px] rounded-br-[5px]  border border-[#d1dde0]" />
										</div>

										<div className="w-[290px] h-[86px] relative">
											<div className="w-[290px] h-[54px] left-0 top-[32px] absolute bg-[#e1eaeb] rounded-tl-[25px] rounded-tr-[25px] rounded-bl-[5px] rounded-br-[5px] border-t border-[#d1dde0]" />
											<div className="w-[260px] h-[81px] left-[15px] top-0 absolute justify-between items-start inline-flex">
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f1} />

												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f2} />
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f3} />
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f4} />
											</div>
											<div className="w-[290px] h-9 left-0 top-[50px] absolute bg-[#e1eaec]/95 rounded-bl-[5px] rounded-br-[5px]  border border-[#d1dde0]" />
										</div>

										<div className="w-[290px] h-[86px] relative">
											<div className="w-[290px] h-[54px] left-0 top-[32px] absolute bg-[#e1eaeb] rounded-tl-[25px] rounded-tr-[25px] rounded-bl-[5px] rounded-br-[5px] border-t border-[#d1dde0]" />
											<div className="w-[260px] h-[81px] left-[15px] top-0 absolute justify-between items-start inline-flex">
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f2} />
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f4} />
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f1} />
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f3} />
											</div>
											<div className="w-[290px] h-9 left-0 top-[50px] absolute bg-[#e1eaec]/95 rounded-bl-[5px] rounded-br-[5px]  border border-[#d1dde0]" />
										</div>

										<div className="w-[290px] h-[86px] relative">
											<div className="w-[290px] h-[54px] left-0 top-[32px] absolute bg-[#e1eaeb] rounded-tl-[25px] rounded-tr-[25px] rounded-bl-[5px] rounded-br-[5px] border-t border-[#d1dde0]" />
											<div className="w-[260px] h-[81px] left-[15px] top-0 absolute justify-between items-start inline-flex">
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f1} />
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f2} />
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f3} />
												<img className="w-[53px] hover:z-50 cursor-pointer hover:scale-110 transition-all duration-500 object-contain h-[81px]" src={f4} />
											</div>
											<div className="w-[290px] h-9 left-0 top-[50px] absolute bg-[#e1eaec]/95 rounded-bl-[5px] rounded-br-[5px]  border border-[#d1dde0]" />
										</div>
									</div>
								</div>
							</div>

							<div data-aos="fade-up" data-aos-duration="1200" className="w-full mt-[35px] flex-col justify-start items-start gap-[5px] inline-flex">
								<div className="self-stretch text-black/80 text-lg font-light font-['REM'] leading-[29.33px]">Ma’lumot</div>
								<div className="self-stretch text-black/60 text-base font-extralight font-['REM'] leading-relaxed">Yo‘mg‘irgul (Zveroboy prodyryavlennyy) va botqoq air (Air bolotnyy) hujayra metabolizmini yaxshilaydi va jigar shikastlanishlarini tiklaydi.  Devaysil baland (Devyasil vysokiy) va do‘lana oddiy (Dushitsa odinovennaya) o't miqdorini oshiradi va uning oqishini yaxshilaydi, bu esa yallig‘lanish jarayonlarini oldini olishga yordam beradi.   U o‘t pufagida toshlar paydo bo‘lishini oldini oladi, jigar, o‘t pufagi va o't yo‘llarining umumiy holatini mustahkamlaydi.</div>
							</div>
						</div>
					</div>
				</Wrapper>
			</div>
		</div>
	);
};

export default App;
