export default function ThankYou(){
    return(
        <div className="flex flex-col h-screen w-screen justify-center items-center gap-6 bg-blue-100">
            <div className="flex justify-center">
                <h1 className="font-extrabold text-blue-600 text-[55px]">
                    <i>Thank you for shopping!!!</i>
                </h1>
            </div>
            <div className="flex justify-center">
                <p>Your order will be delivered in 3 Business days</p>
            </div>
        </div>
    )
}