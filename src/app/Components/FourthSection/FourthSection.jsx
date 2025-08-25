// components/Navbar.jsx
"use client";


import React from "react";
import { 
  CircleDot
} from 'lucide-react';



export default function FourthSection() {

      return (
     
               <section className="md:m-20 bg-black/55 text-amber-50">
                     
               <div className="text-center">
                    <h1>His Priorities</h1> 
               </div>
                   
               <div className=" md:flex justify-around items-center">
                   <div className="rounded-2xl shadow-2xl border border-black text-center">
                    <h1>Security</h1>
                    <p>Peace River is a wonderful community, but we cannot ignore the fact that safety especially in the downtown area is becoming a growing concern. Increasing petty crime, often linked to homelessness and inadequate social supports, is affecting both residents and businesses. I believe we need a balanced approach. In an effort to enhance community safety, I will advocate for supports for people experiencing homelessness and addiction by strategically working with the regional municipalities and the province to provide additional accountability around transition planning for those being discharged from the Peace River Correction Center. As your voice, I will advocate to:</p>
                     <ul className=" md:pl-5  pb-2 md:pb-5 text-black ">
                                                <li className="flex  pb-2 md:pb-10"><CircleDot className="w-8 h-8 text-purple-600 flex justify-start items-center " />Strengthen community policing and ensure visible law enforcement presence.</li>
                                                 <li  className="flex  pb-2 md:pb-10 md:max-w-[450px]"><CircleDot className="w-8 h-8 text-purple-600 flex justify-start items-center" />Partner with local organizations to provide better mental health, addiction, and housing services for vulnerable residents.</li>
                                                 <li  className="flex  pb-2 md:pb-10 "><CircleDot className="w-8 h-8 text-purple-600 flex justify-start items-center" />Improve lighting, public spaces, and safety infrastructure in high-traffic areas.</li>
                                               </ul>
                                               <p>We must protect our businesses, families, and visitors while also addressing the root causes of crime.</p>
                    



</div>

                   <div className="rounded-2xl shadow-2xl border border-black text-center">
                    <h1>Inclusion</h1>
                    <p>The Town of Peace River thrives when everyone feels welcome, respected, and heard. Our diversity - of cultures, backgrounds, and experiences is one of our greatest strengths and we should explore it. As a resident or a stakeholder of the town you should have influence over decisions that directly or indirectly impact you and know how they get made. That’s why one of my biggest focus on Council will be transparency and citizen engagement. As your Councilor, you will always get my attention I will:</p>
                     <ul className=" md:pl-5  pb-2 md:pb-5 text-black ">
                                                <li className="flex  pb-2 md:pb-10"><CircleDot className="w-8 h-8 text-purple-600 flex justify-start items-center " />Advocate for inclusive programs and policies that ensure equal access to services, jobs, and opportunities.</li>
                                                 <li  className="flex  pb-2 md:pb-10 md:max-w-[450px]"><CircleDot className="w-8 h-8 text-purple-600 flex justify-start items-center" />Foster open communication between Council and residents, so all voices are part of the decision-making process.</li>
                                                 <li  className="flex  pb-2 md:pb-10 "><CircleDot className="w-8 h-8 text-purple-600 flex justify-start items-center" />Support cultural events, youth programs, and initiatives that strengthen community bonds.</li>
                                               </ul>
                                               <p>An inclusive Peace River is a stronger Peace River, one where everyone belongs and can contribute to our shared future.</p>
                    



</div>


               </div>

                <div className="rounded-2xl shadow-2xl border border-black text-center">
                    <h1>Economy </h1>
                    <p>Peace River needs a stronger economy that supports families, helps local businesses grow, and gives young people real opportunities to build their future here. That means attracting new investment, creating jobs, and making it easier for small businesses to succeed. Tourism is an area where I believe we can do much more. By promoting Peace River’s natural beauty, outdoor activities, and cultural diversity, we can bring more visitors into town, support local shops and restaurants, and keep our downtown active. As your Councilor, I will:</p>
                     <ul className=" md:pl-5  pb-2 md:pb-5 text-black ">
                                                <li className="flex  pb-2 md:pb-10"><CircleDot className="w-8 h-8 text-purple-600 flex justify-start items-center " />Push for reduced red tape and streamlined permitting to make it easier for local businesses to start and grow.</li>
                                                 <li  className="flex  pb-2 md:pb-10 md:max-w-[450px]"><CircleDot className="w-8 h-8 text-purple-600 flex justify-start items-center" />Work with regional tourism boards to promote our attractions and encourage seasonal festivals and events that draw people to the Peace Region.</li>
                                                 <li  className="flex  pb-2 md:pb-10 "><CircleDot className="w-8 h-8 text-purple-600 flex justify-start items-center" />Partner with Indigenous Nations, chambers of commerce, and community groups to strengthen cultural tourism and community events.</li>
                                               </ul>
                                               <p>Together, we can build a vibrant, thriving Peace River—one that supports our families, celebrates our community, and attracts visitors who want to experience everything our town has to offer.</p>
                    



</div>
                   
                  </section>
   
      )
}
