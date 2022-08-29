import Image from "next/image"
import hululogo from "../images/hulu.png"
import HeaderItem from "./HeaderItem"
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline"

function Header() {
  return (
    <div className="flex flex-col sm:flex-row m-5 justify-between 
    item-center">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='TRANDING' Icon={LightningBoltIcon} />
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
        <Image
         className="object-contain"
         src={hululogo} alt="hulu logo"
         width={200}
         height={100}/>
    </div>
  )
}

export default Header