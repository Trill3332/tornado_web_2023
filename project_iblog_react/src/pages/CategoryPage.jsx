import React from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../components/Cards';
function CategoryPage() {
  const { category } = useParams();
  return (
    <div>
      <div className="pl-[48px] mb-[-48px]">
        <ul className="inline-flex flex-col items-start gap-[16px]">
          <li>
            <div className="flex w-[982px] justify-between items-center">
              <p className=" uppercase px-[18.2px] py-[10.9px] font-Inter font-bold text-[18px] leading-[23.4px] text-{#151411]">{category}</p>
              <div className="flex">
                <p className="text-[#546371] font-Inter text-[16px] font-[500] leading-[180%]">See More</p>
                <button>
                  <img src="u_angle-right-b.svg" alt="" />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Cards />
    </div>
  )
}

export default CategoryPage
