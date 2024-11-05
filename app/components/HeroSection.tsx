import Image from "next/image"

export default function HeroSection(){
    return(
        <div className="h-[50%]">
            <div className="flex flex-col m-32 h-3/4 w-screen place-self-center justify-center items-center ">
                <div className="grid grid-cols-3 border p-5 pt-8">
                    <div>
                        <div><h3 className="font-bold text-blue-900 mb-2 ">Post your Ad on PakWheels</h3></div>
                        <ul>
                            <div className="flex flex-row">
                                <Image 
                                    src="/tick.ico"
                                    alt=""
                                    width={15}
                                    height={15}
                                />
                                <li>Post your ad for Free in 3 Easy Steps</li>
                            </div>
                            <div className="flex flex-row">
                                <Image 
                                    src="/tick.ico"
                                    alt=""
                                    width={15}
                                    height={15}
                                />
                                <li>Get Genuine offers from Verified Buyers</li>
                            </div>
                            <div className="flex flex-row">
                                <Image 
                                    src="/tick.ico"
                                    alt=""
                                    width={15}
                                    height={15}
                                />
                                <li>Sell your car fast at the Best Price</li>
                            </div>                     
                            
                        </ul>
                        <button className="bg-red-600 p-3 rounded-md text-white">Post Your Ad</button>

                    </div>
                    <div>
                        <div className="flex border w-0 h-full justify-self-center items-center"></div>
                        <div className="flex items-center justify-center -mt-[26%] bg-white">OR</div>
                    </div>    
                    <div>
                        <div><h3 className="font-bold text-blue-900 mb-2">Try PakWheels Sell It For Me</h3></div>
                        <ul>
                            <div className="flex flex-row">
                                <Image 
                                    src="/tick.ico"
                                    alt=""
                                    width={15}
                                    height={15}
                                />
                                <li>Dedicated Sales Expert to Sell your Car</li>
                            </div>
                            <div className="flex flex-row">
                                <Image 
                                    src="/tick.ico"
                                    alt=""
                                    width={15}
                                    height={15}
                                />
                                <li>We Bargain for you and share the Best Offer</li>
                            </div>
                            <div className="flex flex-row">
                                <Image 
                                    src="/tick.ico"
                                    alt=""
                                    width={15}
                                    height={15}
                                />
                                <li>We ensure Safe & Secure Transaction</li>
                            </div>                     
                            
                        </ul>
                        <button className="bg-blue-600 p-3 w-3/5 rounded-md text-white">Register Your Car</button>

                    </div>
                </div>
                <div><h1 className="font-medium text-2xl bg-white -mt-[233px] p-3">Sell Your Car on PakWheels and Get the Best Price</h1></div>
            </div>
        </div>
    )
}