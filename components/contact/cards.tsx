import * as React from "react"
import Image from 'next/image';

const stats = ['Best prices & Offers', 'Free delivery', 'A vast range of choices', 'Easy returns'];

const statsPic = ['https://snappers.lk/wp-content/uploads/2023/04/Layer_1-2.svg',
  'https://snappers.lk/wp-content/uploads/2023/04/Layer_1-1.svg',
  'https://snappers.lk/wp-content/uploads/2023/04/Group-320-1.svg',
  'https://snappers.lk/wp-content/uploads/2023/08/Layer_1.svg'];

const statsDescription = ['Order value should be more than Rs.3500',
  'Colombo and suburbs only',
  'Incredible bargain',
  'Within 24 hours'];

const statColor = [
  '#FFEFB1',
  '#D8E4FF',
  '#FFE8D2',
  '#D2EEFF'
]

export default function CardsSection() {
    return (
        <>

            <div className="flex flex-col gap-2 md:flex-row">
                {stats.map((stat, index) => (
                    <div key={index} className="w-full rounded-2xl p-4 text-center md:w-1/4" style={{ backgroundColor: statColor[index] }}>
                        <div className="flex flex-col justify-center items-center">
                            <Image src={statsPic[index]} alt={`Image ${index}`} width={50} height={50} />
                            <div className="text-[#ffac1e] text-[20px] text-center">{stat}</div>
                            <div className="text-[#071c43] text-[13px] pb-[25px] text-center">{statsDescription[index]}</div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}