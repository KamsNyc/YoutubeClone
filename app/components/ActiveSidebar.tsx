import Image from 'next/image'
import React from 'react'

function ActiveSidebar() {
  return (
    <div className="sidebar h-screen bg-[#212121] text-white flex mt-2 flex-col px-0.5 min-w-[235px]">
           

           {/*TOP SECTION CONTAINER */}
           <section className='py-4 border-b border-[#4F4F4F]'>
            {/* ITEM CONTAINER */}
           <div className="w-[95%] rounded-xl h-[40px] px-4 flex items-center gap-6 text-[14px] font-medium cursor-pointer hover:bg-[#303030]">
               {/* HOME ICON */}
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                  className="pointer-events: none; display: block; width: 100%; height: 100%;"
                >
                  <g>
                    <path
                      d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"
                      fill="white"
                    ></path>
                  </g>
                </svg>

                {/* HEADING */}
                <span>Home</span>
            </div>

            {/* ITEM CONTAINER */}
            <div className="w-[95%] rounded-xl h-[40px] pl-4 flex items-center gap-6 text-[14px] font-medium cursor-pointer hover:bg-[#303030]">
               {/* SHORTS ICON */}
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                  className="pointer-events: none; display: block; width: 100%; height: 100%;"
                >
                  <path
                    d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                    fill="white"
                  ></path>
                </svg>

                {/* HEADING */}
                <span>Shorts</span>
            </div>
          
            {/* ITEM CONTAINER */}
           <div className="w-[95%] rounded-xl h-[40px] pl-4 flex items-center gap-6 text-[14px] font-medium cursor-pointer hover:bg-[#303030]">
               {/* Subscription ICON */}
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                  className="pointer-events: none; display: block; width: 100%; height: 100%;"
                >
                  <path
                    d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"
                    fill="white"
                  ></path>
                </svg>

                {/* HEADING */}
                <span>Subscription</span>
            </div>

           </section>

            {/* 2nd SECTION CONTAINER */}
            <section className='py-4 border-b border-[#4F4F4F]'>
               {/* Heading CONTAINER */}
           <div className="w-[95%] rounded-xl h-[40px] px-4 flex items-center gap-2 text-[16px] font-medium cursor-pointer hover:bg-[#303030]">
                {/* HEADING */}
                <span>You</span>
                {/* RIGHT ARROW ICON */}
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" focusable="false" className="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z" fill='white'></path></svg>
            </div>
            {/* ITEM CONTAINER */}
           <div className="w-[95%] rounded-xl h-[40px] px-4 flex items-center gap-6 text-[14px] font-medium cursor-pointer hover:bg-[#303030]">
               {/* Libraty ICON */}
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                  className="pointer-events: none; display: block; width: 100%; height: 100%;"
                >
                  <path
                    d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"
                    fill="white"
                  ></path>
                </svg>
                {/* HEADING */}
                <span>Library</span>
            </div>

            {/* ITEM CONTAINER */}
            <div className="w-[95%] rounded-xl h-[40px] pl-4 flex items-center gap-6 text-[14px] font-medium cursor-pointer hover:bg-[#303030]">
               {/* History ICON */}
               <svg xmlns="http://www.w3.org/2000/svg" height="24" className="pointer-events: none; display: block; width: 100%; height: 100%;" viewBox="0 0 24 24" width="24" focusable="false"><g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z" fill='white'></path></g></svg>

                {/* HEADING */}
                <span>History</span>
            </div>
          
            {/* ITEM CONTAINER */}
           <div className="w-[95%] rounded-xl h-[40px] pl-4 flex items-center gap-6 text-[14px] font-medium cursor-pointer hover:bg-[#303030]">
               {/* Your Videos ICON */}
               <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" className="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z" fill='white'></path></svg>

                {/* HEADING */}
                <span>Your Videos</span>
            </div>

             {/* ITEM CONTAINER */}
           <div className="w-[95%] rounded-xl h-[40px] pl-4 flex items-center gap-6 text-[14px] font-medium cursor-pointer hover:bg-[#303030]">
               {/* Watch Later ICON */}
               <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" className="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" fill='white'></path></svg>

                {/* HEADING */}
                <span>Watch Later</span>
            </div>

            {/* ITEM CONTAINER */}
           <div className="w-[95%] rounded-xl h-[40px] pl-4 flex items-center gap-6 text-[14px] font-medium cursor-pointer hover:bg-[#303030]">
               {/* Liked Videos ICON */}
               <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" className="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" fill='white'></path></svg>

                {/* HEADING */}
                <span>Liked Videos</span>
            </div>
            {/* ITEM CONTAINER */}
           <div className="w-[95%] rounded-xl h-[40px] pl-4 flex items-center gap-6 text-[14px] font-medium cursor-pointer hover:bg-[#303030]">
               {/* Show More ICON */}
               <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" className="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z" fill='white'></path></svg>

                {/* HEADING */}
                <span>Show More</span>
            </div>



           </section>


          </div>
  )
}

export default ActiveSidebar
