import Image from "next/image";
import { Button } from "./ui/button";






export default function Hero(){
    return(
        <>
        <section className="text-gray-600 body-font">
  <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
    <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
      <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
        Doctor Appoiment System
        <br className="hidden lg:inline-block" />
        By Muhammad Hasnain
      </h1>
      <p className="mb-8 leading-relaxed">
      
      </p>
      <div className="flex justify-center gap-4">
        <Button className="p-5 text-2xl">
          
       Button
        </Button>
       <Button className="p-5 text-2xl">
       Button
       </Button>
      </div>
    </div>
    <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
      <Image
      width={500}
      height={500}
        className="object-cover object-center rounded"
        alt="hero"
        src="https://media.istockphoto.com/id/1635982957/photo/happy-asian-man-doctor-and-arms-crossed-in-confidence-of-healthcare-consultant-at-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=BXLzLNNKCCUOmovWshibu18rM_Slchltdt2zhxDWssA="
      />
    </div>
  </div>
</section>

        
        </>
    )
}