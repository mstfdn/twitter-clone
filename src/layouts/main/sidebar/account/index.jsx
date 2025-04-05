import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { useAccount } from "~/store/auth/hooks"
import AccountMore from "./moreAccount"



export default function Account(){

    const account = useAccount()
    return (
        <div className="mt-auto">
        <Popover className="relative"> 
            <PopoverButton 
                className="my-3 p-3 rounded-full cursor-pointer hover:bg-[#eff3f41a] w-full flex text-left items-center outline-none"
            >
                <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
                <div className="mx-3 text-[15px] ">
                    <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
                    <div className="text-[#71767b]">
                        @{account.username}
                    </div>
                </div>
                <svg
                            viewBox="0 0 24 24"
                            width={18.75}
                            height={18.75}
                            fill="currentColor"
                            className="rounded-full ml-auto text-[e7e9ea]"
                        >
                            <path
                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                            />
                        </svg>
            </PopoverButton>
            <PopoverPanel 
            className="absolute bottom-[80px] py-3 w-[300px] left-1/2 -translate-x-1/2 bg-black shadow-[0_0_15px_rgba(255,255,255,0.2),0_0_3px_1px_rgba(255,255,255,0.3)] rounded-2xl overflow-hidden">
                <AccountMore />
            </PopoverPanel>
        </Popover>
      </div>
    )
}