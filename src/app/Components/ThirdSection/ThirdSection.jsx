// components/Navbar.jsx
"use client";

import React from "react";
import { 
  CircleDot
} from 'lucide-react';


export default function ThirdSection() {

      return (
     
               <section className=" border-2 shadow-2xl border-purple-200  bg-purple-200/50">
                   
               <div className="md:flex justify-around items-start ">
                   

                    <div className="  flex-col justify-start md:text-left  text-black sm:text-lg md:text-md text-center">
                         <h1 className="md:text-4xl md:p-10 pb-2 md:pb-2 font-black "> Yemi's Platform</h1>
                          <h3 className="md:text-3xl md:p-10 pb-2 md:pb-2 font-black ">His Vision</h3>
                         <p className="md:text-md md:p-10  pb-2 md:pb-2 md:max-w-[850px]">A town where residents can live, work, play, and learn within the same community; where equality, respect, and belonging are upheld; where differences are valued without judgment based on beliefs or background; and where every voice has the right to be heard. </p>
                         <div className="rounded-2xl shadow-2xl md:p-10 ">
  <img src="/man.jpg" alt="Description of the image" className="rounded-lg" />
</div>
                    </div>

                    <div className=" text-left flex-col justify-star sm:mt-5">
                           <h3 className="md:text-3xl md:p-10 pb-2 md:pb-5 font-black ">His Vision</h3>
                           <p className="md:text-2xl md:p-10 text-black pb-2 md:pb-5 text-left ">Yemi’s values are:</p>
                           <ul className=" md:pl-5  pb-2 md:pb-5 text-black ">
                            <li className="flex  pb-2 md:pb-10"><CircleDot className="w-8 h-8 text-purple-600 flex justify-start items-center " /><span className="font-black">Equity and Inclusion:</span>Everyone deserves to belong in a community where barriers are removed and differences are respected.</li>
                             <li  className="flex  pb-2 md:pb-10 md:max-w-[450px]"><CircleDot className="w-8 h-8 text-purple-600 flex justify-start items-center" /><span className="font-black">Transparency and Accountability:</span>Trust comes from openness, fairness, and clear decision-making.</li>
                             <li  className="flex  pb-2 md:pb-10 "><CircleDot className="w-8 h-8 text-purple-600 flex justify-start items-center" /><span className="font-black">Community and Participation:</span>A strong community is built when people feel connected, safe, and empowered to shape the future together.</li>
                           </ul>

                           <p className="md:text-md md:p-10 text-black pb-2 md:pb-5 md:max-w-[660px]">These values emphasize building a fair and welcoming community where everyone belongs, ensuring openness and accountability in all decisions, and empowering residents to actively participate in shaping the future together.</p>

                    </div>
               </div>


                   
                  </section>
   
      )
}
