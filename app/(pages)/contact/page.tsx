import React from 'react';
import Image from 'next/image';
import phone from '@/public/phone.png';

import CardsSection from '@/components/contact/cards';


export default function About() {
  return (
    <main className="flex flex-col gap-10">

      <div className="relative flex flex-col justify-center items-center w-full bg-aboutus-frame bg-cover bg-center bg-no-repeat h-[230px]">
        <div className="absolute inset-0 bg-[#020101] opacity-50"></div>
        <div className="z-10 font-semibold text-[25px] text-[#f3f30b] md:text-2xl">Contact</div>
        <div className="z-10 font-semibold text-[15px] text-center text-white px-4 md:text-3xl md:px-0">
          Customer Support at Your Fingertips - We’re Here to Help!
        </div>
      </div>

      <div className="flex flex-col gap-10 px-4  md:max-w-7xl md:mx-auto ">
        <div className="flex flex-col gap-8 justify-center items-center md:flex-row md:gap-4 ">

          <div className="w-1/2 flex items-center justify-center">
            <Image src={phone} height={1000} alt="Phone" width={1000} className='w-[250px]' />
          </div>

          <div className="w-full rounded-2xl bg-white p-8 md:w-1/2 box-shadow">

            <div className='text-center text-[#071c43] text-[32px] font-bold'>
              Feedback
            </div>

            <form action="#" className="space-y-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=""></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#071c43]">Send message</button>
            </form>

          </div>

        </div>

        <CardsSection/>

      </div>

    </main>
  );
}
