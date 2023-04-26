import { NavLink } from "react-router-dom";
import Navbar from "./Appbar";
import HomeDown from "./Home-down";

function About() {
    return (
        <>
            <Navbar />



            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="lg:w-2/3 mx-auto">
                        <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://i.pinimg.com/originals/b5/1d/48/b51d4866a0c9a3260ca35cab1d2a7471.jpg" />
                            <div class="text-center relative z-10 w-full">
                                <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Finest Food</h2>
                                <NavLink class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-2">
                            <div class="px-2 w-1/2">
                                <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://i.pinimg.com/originals/cb/d7/e5/cbd7e5793f25da583019da47913d6b77.jpg" />
                                    <div class="text-center relative z-10 w-full">
                                        <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Takeaway</h2>

                                        <NavLink class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div class="px-2 w-1/2">
                                <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://i.pinimg.com/originals/0e/2c/21/0e2c21c095071f688b20c1f83cd961a3.jpg" />
                                    <div class="text-center relative z-10 w-full">
                                        <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Dine-in</h2>

                                        <NavLink class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <HomeDown />
        </>
    );
}

export default About;