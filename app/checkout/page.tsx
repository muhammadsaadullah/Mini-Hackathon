import Link from "next/link"

export default function CarDetails(){
    return(
        <div className="bg-sky-50 w-screen h-screen"> 
            <div><h1 className="flex justify-self-center justify-center text-4xl w-[98%] font-bold text-center pt-8 border-b ">Enter your Details</h1></div>
            <div>
                <form className="mt-52 flex gap-5  justify-center items-center flex-col">
                    <input type="name"          className=" rounded-md w-1/4 h-10 border border-gray-200 bg-white py-1 px-3" placeholder="Enter Your Name"/>
                    <input type="email"         className=" rounded-md w-1/4 h-10 border border-gray-200 bg-white py-1 px-3" placeholder="Enter Your Email"/>
                    <input type="card number"   className=" rounded-md w-1/4 h-10 border border-gray-200 bg-white py-1 px-3" placeholder="Card Number"/>
                    <input type="address"       className=" rounded-md w-1/4 h-10 border border-gray-200 bg-white py-1 px-3" placeholder="Address"/>
                    <Link href="/thankyou"><button className=" py-3 px-8 mt-6 rounded-md border bg-blue-800 text-white">Place Your Order</button></Link>
                </form>
            </div>
        </div>
    )
}