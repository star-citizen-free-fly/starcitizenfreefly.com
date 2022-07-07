import React, { FC } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import sidebarTop from '../../assets/images/sidebar-top.svg'
import contentTop from '../../assets/images/content-top.svg'

export const CoreLayout: FC<{children?: React.ReactNode}> = (props) => {
	return <div className="flex flex-col min-h-screen">
		<Header/>
		<div className="flex flex-grow mb-auto relative">
			<div className="w-[85px] absolute right-0 top-[-20px] lg:hidden"><img className="w-[85px]" src={contentTop.src} alt=""/></div>  {/* eslint-disable-line @next/next/no-img-element */}

			<div className="flex-grow hidden lg:block"></div>
			<div className="container flex mx-auto ">
				<div className="flex-grow px-4 pr-8 py-16 text-lg ">
					{props.children}
				</div>
				<div className="hidden lg:block w-[350px] flex-none py-16 px-4 pl-8 [border-image-source:url(../assets/images/sidebar-left.svg)] [border-image-slice:40_fill] [border-image-width:auto]">
					<h2 className="text-2xl font-bold text-cyan-900 mb-4">Helpful tools</h2>
					<ul className="list-disc pl-4 list-outside">
						<li className="mb-4">
							<a className="text-xl font-bold" href="https://finder.cstone.space/" target="_blank" rel="noreferrer">
								Item Finder
							</a>
							<div className="text-sm">
								<div className="font-bold text-neutral-500">Locate shops to buy specific items</div>
								<div className="text-neutral-600">By finder.cstone.space</div>
							</div>
						</li>
						<li className="mb-4">
							<a className="text-xl font-bold" href="https://uexcorp.space/ships" target="_blank" rel="noreferrer">
								Ship List
							</a>
							<div className="text-sm">
								<div className="font-bold text-neutral-500">See a complete list of ships and their in-game and real money prices</div>
								<div className="text-neutral-600">By uexcorp.space</div>
							</div>
						</li>
						<li className="mb-4">
							<a className="text-xl font-bold" href="https://www.erkul.games/" target="_blank" rel="noreferrer">
								Ship Loadout Calculator
							</a>
							<div className="text-sm">
								<div className="font-bold text-neutral-500">Test out different weapons and components for your ships</div>
								<div className="text-neutral-600">By erkul.games</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="hidden lg:block flex-grow bg-orange-100 relative">
				<div className="w-[85px] absolute right-0 top-[-20px]"><img className="w-[85px]" src={sidebarTop.src} alt=""/></div> {/* eslint-disable-line @next/next/no-img-element */}
			</div>
		</div>
		
		<Footer/>
	</div>
}