import React from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../components/Cards';
import { ChevronForwardOutline } from 'react-ionicons'
function SubCategoryPage() {
    const { category, subcategory } = useParams();
    return (
        <div>
            <div className="flex pl-[48px] mb-[-48px] h-[75px] items-center gap-[5px]">
                <p
                    className="flex text-[#546371] text-center text-[18px] font-[500]">
                    Нүүр Хуудас
                    <span className='mt-[3px]'>
                        <ChevronForwardOutline
                            height="24px"
                            width="24px"
                        />
                    </span>
                </p>

                <p
                    className="flex text-[#546371] text-center text-[18px] font-[500] capitalize">
                    {category}
                    <span className='mt-[3px]'>
                        <ChevronForwardOutline
                            height="24px"
                            width="24px"
                        />
                    </span>
                </p>

                <p
                    className="flex text-[#546371] text-center text-[18px] font-[500]">
                    {subcategory}
                </p>
            </div>
            <Cards />
        </div>
    )
}

export default SubCategoryPage
