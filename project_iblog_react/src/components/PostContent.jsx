import CategoryHobby from "./Categories/CategoryHobby"
import { profiles } from "../data/data"
import LikeShareButtons from "./LikeShareButtons"



const PostContent = ({ authorImg, name, initialLikes }) => {
    return (
        <main className="flex w-[898px] flex-col items-start gap-[16px]">
            <div className="flex h-[75px]">
                <CategoryHobby />
                <div className="mt-[25px] flex gap-[21px]">
                    <img src="u_angle-right-b.svg" className="h-[24px] w-[24px] pt-[3px]" />
                    <p className="text-center font-Inter text-[18px] text-[#1A1E23] font-[700]">Theme Installation</p>
                </div>
            </div>
            <div className="flex w-[310px] justify-between items-center pl-[48px]">
                <img src={authorImg} className="w-[60px] h-[60px] rounded-full" />
                <p className="text-[#333] font-Inter font-[600]">{name}</p>
                <p className="text-[#2F80ED] font-Inter text-[18px] font-[600]">Follow</p>
            </div>
            <div className="flex flex-col">
                <img src="/blog-img.jpg" alt="" className="pl-[48px] h-[320px] w-[897px] mb-[10px]" />
                <div className="pl-[48px] mt-[10px] mb-[10px]">
                    <h2 className="w-[341px] text-[#242A31] font-Inter font-[600] text-[29px] leading-[43px] mb-[10px]">Theme Installation</h2>
                    <div className="w-[848px] mt-[10px] mb-[10px]">
                        <LikeShareButtons initialLikes={initialLikes} />
                    </div>
                    <p className="font-Inter text-[20px] font-[400] leading-[30px] text-[#242A31] mt-[10px] mb-[10px]">
                        Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour.
                    </p>
                    <ul className="w-[647px] mt-[10px] mb-[10px]">
                        <li className="text-[#242A31] text-[16px] font-[400] leading-[24px]">
                            • By the end of step 3: You’ll be up and ready to serve customers
                        </li>
                        <li className="text-[#242A31] text-[16px] font-[400] leading-[24px]">
                            • By the end of step 6: Your team will be smiling and at their most productive.
                        </li>
                    </ul>
                    <h3 className="font-Inter text-[23px] font-[600] leading-[35px] text-[#242A31] mt-[10px] mb-[10px]">The 6 Steps to setup success</h3>
                    <ol className="list-decimal ml-[48px] mt-[10px] mb-[10px]">
                        <li className="text-[16px] font-[400] leading-[24px] font-Inter">
                            Get your email into Help Scout
                        </li>
                        <li className="text-[16px] font-[400] leading-[24px] font-Inter">
                            Customize your mailbox
                        </li>
                        <li className="text-[16px] font-[400] leading-[24px] font-Inter">
                            Collaborate with a friend
                        </li>
                        <li className="text-[16px] font-[400] leading-[24px] font-Inter">
                            Get organized and optimized
                        </li>
                        <li className="text-[16px] font-[400] leading-[24px] font-Inter">
                            Integrate your favorite apps
                        </li>
                        <li className="text-[16px] font-[400] leading-[24px] font-Inter">
                            What's up,Docs?
                        </li>
                    </ol>
                    <p className="text-[16px] font-[400] leading-[24px] mt-[10px] mb-[10px]">
                        Take 10-20 minutes on each step per day to get set up in a week, or be an overachiever and knock through all of them in a couple of hours.
                    </p>
                    <h3 className="font-Inter text-[23px] font-[600] leading-[35px] text-[#242A31] mt-[10px] mb-[10px]">Parent Theme Installation</h3>
                    <p className="text-[16px] font-[400] leading-[24px] mt-[10px] mb-[10px]">
                        When you unzip the downloaded file, you will see a bunch of folders. The most important one is the THEME folder which contains the installable theme .ZIP.
                    </p>
                    <h3 className="font-Inter text-[23px] font-[600] leading-[35px] text-[#242A31] mt-[10px] mb-[10px]">Child Theme Installation</h3>
                    <p className="text-[16px] font-[400] leading-[24px] mt-[10px] mb-[10px]">
                        If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.
                    </p>
                    <p className="text-[16px] font-[400] leading-[24px] mt-[10px] mb-[10px]">
                        This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.
                    </p>
                    <p className="text-[16px] font-[400] leading-[24px] mt-[10px] mb-[10px]">
                        Once you have both parent and child themes installed, you need to activate the child one.
                        If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.
                    </p>
                </div>
            </div>
        </main>
    )
}
export default PostContent