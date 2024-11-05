import Image from "next/image"
import Link from "next/link"

export default function CarDetails(){
    return(
        <div className="flex flex-col w-3/4 justify-self-center items-center bg-sky-[80px]">
            <div className="flex p-5">
                <h1 className="font-bold text-3xl"><u>Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs</u></h1>
            </div>
            <div className="flex m-5">
                <Image
                    src="/Civic.jpg"
                    alt=""
                    width={300}
                    height={200}
                />
            </div>
            <div className=" flex flex-row gap-3 p-5">
                <div><button className="p-5 pt-2 pb-2 border-2 border-blue-800 bg-blue-800 rounded-md text-white">Book a test drive</button></div>
                <div><button className="p-5 pt-2 pb-2 border-2 border-blue-800 bg-white rounded-md text-blue-800">Request Bank Finance</button></div>
                <div><button className="p-5 pt-2 pb-2 border-2 border-blue-800 bg-white rounded-md text-blue-800">Visit Place</button></div>
                <div><button className="p-5 pt-2 pb-2 border-2 border-blue-800 bg-white rounded-md text-blue-800">Car Inspection</button></div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center m-5 mb-4 mt-3"><h1 className="text-3xl">Vehicle Description</h1></div>
                <div>
                    <div className="flex flex-row gap-5 p-2 pt-0">
                        <p><b>Number of Doors</b> 4</p>  
                        <p><b>Engine</b> 1800 CC</p>
                        <p><b>Condition</b> 8.5/10</p>  
                        <p><b>Driven</b> 9,500 KM</p>
                        <p><b>Suspension Type:</b> Soft Suspension</p>
                    </div>
                    <div className="flex flex-row gap-5 p-2">
                        <p><b>Avg</b> 13 Km per ltr</p>   
                        <p><b>Transmission</b> Automatic</p>
                        <p><b>Fuel Type</b> High Octane</p>
                    </div>
                </div>
                <div>
                    <p className="text-center mt-2 pt-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint assumenda exercitationem corporis, molestiae at saepe rem magnam officiis officia error dolore quod 
                        odio, dolorem magni iste repellendus vero! Qui, neque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quisquam voluptates consequatur aliquid 
                        aspernatur dolores, eius voluptatem omnis eaque nisi voluptate iure eos laboriosam dolore quia officia? At, omnis rem. Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Eius doloremque accusamus reprehenderit, molestiae sapiente non autem 
                    </p>
                </div>
                <div className="flex flex-row m-12"><h1 className="text-3xl text-green-600">PKR 50,00,000</h1></div>
            </div>
            <div className="m-2 mt-0 mb-20">
                <Link href="/checkout"><button className="p-5 pt-2 pb-2 border-2 border-blue-800 bg-blue-800 rounded-md text-white">Make Payment</button></Link>
            </div>
        </div>
    )
}