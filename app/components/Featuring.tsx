import Image from "next/image"
import Link from "next/link"

export default function Featuring(){
    return(
        <div className="bg-gray-100">
            <div className="flex flex-col justify-self-center items-center w-3/5">
                <div className="flex flex-row w-full mt-6 justify-center items-center">
                    <div className="flex w-2/4"><h1 className="text-2xl font-bold text-gray-700">Featured New Cars</h1></div>
                    <div className="flex w-3/4 justify-end"><h1 className="text-sm text-blue-500">View All New Cars</h1></div>
                </div>
                <div className="flex flex-row gap-16 border-b w-full pt-5">
                    <div className="border-b-[3px] border-sky-600"><h1 className="p-3 pr-0 pl-0">Popular</h1></div>
                    <div><h1 className="p-3 pr-0 pl-2">Upcoming</h1></div>
                    <div><h1 className="p-3 pr-0 pl-2">Newly Launched</h1></div>
                </div>
                <div className="flex flex-row w-full gap-4 m-4 mb-24">
                    <Link href="../car-details-corolla" className="flex flex-col w-1/4 border justify-center items-center bg-white">
                        <div>
                            <Image
                                src="/Corolla.jpg"
                                alt=""
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center pt-2">
                            <div><h1 className="text-blue-800 font-semibold">Toyota Corolla</h1></div>
                            <div className="text-green-500 text-sm">PKR 59.7 - 75.5 lacs</div>
                            <div className="flex flex-row gap-2 m-3 pb-1 justify-center items-center">
                                <div className="flex -mt-[2px]">
                                    <Image
                                        src="/rating.png"
                                        alt=""
                                        width={70}
                                        height={1000}
                                    />                           
                                </div>
                                <div className="text-sm text-gray-500">621 Reviews</div>
                            </div>
                        </div>
                    </Link>

                    <Link href="../car-details-alto" className="flex flex-col w-1/4 border justify-center items-center bg-white">
                        <div>
                            <Image
                                src="/Alto.png"
                                alt=""
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center pt-2">
                            <div><h1 className="text-blue-800 font-semibold">Suzuki Alto</h1></div>
                            <div className="text-green-500 text-sm">PKR 23.3 - 30.5 lacs</div>
                            <div className="flex flex-row gap-2 m-3 pb-1 justify-center items-center">
                                <div className="flex -mt-[2px]">
                                    <Image
                                        src="/rating.png"
                                        alt=""
                                        width={70}
                                        height={1000}
                                    />                           
                                </div>
                                <div className="text-sm text-gray-500">199 Reviews</div>
                            </div>
                        </div>
                    </Link>

                    <Link href="../car-details-city" className="flex flex-col w-1/4 border justify-center items-center bg-white">
                        <div>
                            <Image
                                src="/City.jpg"
                                alt=""
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center pt-2">
                            <div><h1 className="text-blue-800 font-semibold">Honda City</h1></div>
                            <div className="text-green-500 text-sm">PKR 46.5 - 58.5 lacs</div>
                            <div className="flex flex-row gap-2 m-3 pb-1 justify-center items-center">
                                <div className="flex -mt-[2px]">
                                    <Image
                                        src="/rating.png"
                                        alt=""
                                        width={70}
                                        height={1000}
                                    />                           
                                </div>
                                <div className="text-sm text-gray-500">458 Reviews</div>
                            </div>
                        </div>
                    </Link>

                    <Link href="../car-details-civic" className="flex flex-col w-1/4 border justify-center items-center bg-white">
                        <div>
                            <Image
                                src="/Civic.jpg"
                                alt=""
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center pt-2">
                            <div><h1 className="text-blue-800 font-semibold">Honda Civic</h1></div>
                            <div className="text-green-500 text-sm">PKR 86.6 - 99.0 lacs</div>
                            <div className="flex flex-row gap-2 m-3 pb-1 justify-center items-center">
                                <div className="flex -mt-[2px]">
                                    <Image
                                        src="/rating.png"
                                        alt=""
                                        width={70}
                                        height={1000}
                                    />                           
                                </div>
                                <div className="text-sm text-gray-500">357 Reviews</div>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}