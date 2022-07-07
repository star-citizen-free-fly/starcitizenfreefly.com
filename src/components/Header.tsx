import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import chevron from '../../assets/images/chevron-right.svg'

export const Header: FC = () => {
	return <>
		<div className="lg:block hidden">
			<div className="flex text-white relative">
				<div className="flex-grow h-[60px] bg-red-400"></div>
				<div className="container flex">
					<div className="flex-grow pl-4 flex items-center h-[60px] bg-red-400 mr-[-1px]">
						<Link href="/"><a className="text-2xl text-white hover:text-white no-underline font-bold">Star Citizen <em>Free Fly</em></a></Link>
					</div>
					<div className="flex-none w-[375px] flex justify-end items-center p-2 pr-4 h-[90px] [border-image-source:url(../assets/images/header-right.svg)] [border-width:0_0_0_33px] [border-image-slice:33_fill] [border-image-width:auto] text-right">
						<div className="flex-none">
							<img className="w-12 h-12" src={chevron.src} alt=""/> {/* eslint-disable-line @next/next/no-img-element */}
						</div>
						<div className="flex-none">
							Current <em>Free Fly</em> now active
							<div className="text-xl"><strong>July 7</strong> through <strong>July 15</strong>, 2022</div>
						</div>
					</div>
				</div>
				<div className="flex-grow bg-red-700"></div>
			</div>
			<div className="bg-[url(../assets/images/header-bg.webp)] mt-[-33px] flex bg-cover bg-center">
				<div className="flex-grow h-[75px] bg-red-500 opacity-[.36]"></div>
				<div className="container flex">
					<div className="flex-grow">
						<div className="h-[75px] [border-image-source:url(../assets/images/search-bg.svg)] [border-width:0_0_0_33px] [border-image-slice:33_fill] [border-image-width:auto]">

						</div>
					</div>
					<div className="w-[310px] pt-[66px] pb-8 text-right pr-6">
						<a className="no-underline inline-block text-white hover:text-white bg-cyan-500 hover:bg-cyan-400 py-4 px-6 rounded-md font-bold text-lg [letter-spacing:1px]" href="https://robertsspaceindustries.com/enlist?referral=STAR-Q2FZ-XVRQ" target="_blank" rel="noreferrer">PLAY STAR CITIZEN!</a>
					</div>
				</div>
				<div className="flex-grow"></div>
			</div>
		</div>
		<div className="lg:hidden text-white">
			<div className="bg-red-400">
				<div className="container mx-auto px-4 py-2">
					<Link href="/"><a className="text-2xl text-white hover:text-white no-underline font-bold">Star Citizen <em>Free Fly</em></a></Link>
				</div>
			</div>
			<div className="bg-red-700">
				<div className="container mx-auto px-4 py-2 flex items-center">
					<img className="w-8 h-8 inline ml-[-8px]" src={chevron.src} alt=""/> {/* eslint-disable-line @next/next/no-img-element */}
					<div className="flex-grow">
						Current <em>Free Fly</em>: <strong>July 7</strong> through <strong>July 15</strong>, 2022
					</div>
				</div>
			</div>
			<div className="bg-[url(../assets/images/header-bg.webp)] flex bg-cover bg-center">
				<div className="container mx-auto px-4 py-2">
					<a className="no-underline inline-block text-white hover:text-white bg-cyan-500 hover:bg-cyan-400 py-2 px-6 rounded-md font-bold text-lg [letter-spacing:1px]" href="https://robertsspaceindustries.com/enlist?referral=STAR-Q2FZ-XVRQ" target="_blank" rel="noreferrer">PLAY STAR CITIZEN!</a>
				</div>
			</div>
		</div>
	</>
}