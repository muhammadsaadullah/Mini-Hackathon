import Link from "next/link"
import Image from "next/image"


export default function Navbar(){
    return(
        <div className="flex justify-center bg-gray-800">
            <nav className="flex flex-col w-[79%]">
                <div className="flex flex-row justify-center gap-4 h-7 mt-1 pb-2 border-b ">
                    <div className="flex flex-row gap-1">
                        <div>
                            <Image
                                src="/phone.png"
                                alt=""
                                width={20}
                                height={20}
                            />
                        </div>
                        <div className="text-sm pt-1 text-white"><h6>Download via Playstore</h6></div>
                    </div>
                    
                    <ul className="flex ml-auto gap-2 items-center">
                        <li><h6 className="text-red-500">اردو</h6></li>
                        <li className="border-l-2 h-5 pl-2 text-white"><Link href="/signup">Sign-up</Link></li>
                        <li className="border-l-2 h-5 pl-2 text-white"><Link href="/signin">Sign-in</Link></li>
                    </ul>
                </div>

                <div className="flex flex-row  items-center gap-8 pt-4 mb-3">
                    <div className="flex flex-row justify-self-start justify-center items-center gap-24 h-5"> 
                        <div className="flex mr-3 pl-0 p-5 justify-start ">
                            <Image
                                src="/logo.svg"
                                alt="Pakwheels Logo"
                                width={200}
                                height={50}
                             />
                        </div>

                        <div className="flex flex-row justify-self-start justify-center items-center gap-11 h-5 pr-9">
                            <div className="text-white"><h6>Used</h6></div>
                            <div className="text-white"><h6>New</h6></div>
                            <div className="text-white"><h6>Bike </h6></div>
                            <div className="text-white w-24 flex justify-center"><h6>Auto Store</h6></div>
                            <div className="text-white"><h6>Videos</h6></div>
                            <div className="text-white"><h6>Forums</h6></div>
                            <div className="text-white"><h6>Blogs</h6></div>
                            <div className="text-white"><h6>More</h6></div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-self-end justify-end"><button className="border border-red-600 bg-red-600 font-sans font-bold text-white w-32 h-10 pl-4 pr-4 rounded-md ">Post an Ad</button></div>
                </div>
            </nav>
        </div>
    )
}