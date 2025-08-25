// components/Navbar.jsx
"use client";

import React from "react";
import { GraduationCap } from 'lucide-react';
import { Briefcase,Globe  } from 'lucide-react';


export default function Firstsection() {

      return (
     
               <section className="md:my-20">
                   
               <section className=" md:flex justify-end items-end   bg-black/50 text-amber-50 p-5 shadow-2xl rouneded-md">
                   <div class="gallery-container relative mx-auto w-full max-w-lg h-[500px] md:h-[600px] mb-20">
            {/* <!-- First image (back) --> */}
            <div class="stack-item absolute w-4/5 left-0 bottom-0 h-4/5 z-10">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80" 
                     alt="Man with beard" 
                     class="w-full h-full object-cover"/>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                   
                </div>
            </div>
            
            {/* <!-- Second image (middle) --> */}
            <div class="stack-item absolute w-4/5 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 h-4/5 z-20">
                <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80" 
                     alt="Woman smiling" 
                     class="w-full h-full object-cover"/>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    
                </div>
            </div>
            
            {/* <!-- Third image (front) --> */}
            <div class="stack-item absolute w-4/5 right-0 top-0 h-4/5 z-30">
                <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=798&q=80" 
                     alt="Man in casual clothing" 
                     class="w-full h-full object-cover"/>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                   
                </div>
            </div>
        </div>
        
        {/* <!-- Info section --> */}
        <div class="bg-purple-100/50 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">About Yemi</h2>
            <p class="text-gray-600 mb-6">
               A Man of Purpose and Service
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div class="text-center p-6 rounded-xl bg-blue-50">
                    <div class="text-blue-500 text-3xl mb-4">
                        
                    </div>
                    <h3 class="font-semibold text-lg mb-2 text-black flex justify-center items-center"> <GraduationCap className="text-purple-600 w-8 h-8" />Education</h3>
                    <ol className="text-left">
                    <li class="text-gray-600">- B.Sc. in Geology & Mineral Sciences - University of Ilorin (2000)</li>
                    <li class="text-gray-600">- Applied Bachelor’s in GIS – SAIT Polytechnic (2015)</li>
                    <li class="text-gray-600">- Master’s in Transportation & Land Use Planning - Alabama A&M University (2017)</li>
                    <li class="text-gray-600">- Currently completing a Doctorate in Environmental & Land Use Planning - Jackson State University (Graduating 2026)</li>
                    </ol>
                </div>
                
                <div class="text-center p-6 rounded-xl bg-purple-50">
                    <div class="text-purple-500 text-3xl mb-4">
                        <i class="fas fa-expand"></i>
                    </div>
                    <h3 class="font-semibold text-lg mb-2 text-black flex justify-center items-center"><Briefcase className="w-8 h-8 text-purple-600" />Career</h3>
                    <p class="text-gray-600 md:text-left">Yemi began as an Exploration Geologist with ExxonMobil in 2000. He went on to work with Geoservices Nigeria Limited (now SLB) and later Weatherford, serving in multiple roles including Wellsite and Project Geologist. In 2014, he transitioned from the oil field to pursue urban planning, and in 2018 he started his planning career with the Mackenzie Municipal Service Agency (MMSA), helping shape land use and development policies across the Peace Region. Today, he serves as a Project Manager with Mercer in Peace River.</p>
                </div>
                
                <div class="text-center p-6 rounded-xl bg-teal-50">
                    <div class="text-teal-500 text-3xl mb-4">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h3 class="font-semibold text-lg mb-2 text-black flex justify-center items-center"><Globe className="w-8 h-8 text-purple-600" title="Global community" />Community </h3>
                    <p class="text-gray-600 md:text-left">Yemi gives back in practical ways - volunteering for highway and community clean-ups, supporting local initiatives through his church. He currently serves as a committee member of the on the Municipal Planning Commission where his professional expertise in planning and community development positions him to make informed, impactful decisions for Peace River.</p>
                </div>
            </div>
            
           
        </div>

                   
               </section>
                   
                  </section>
   
      )
}
