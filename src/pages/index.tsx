import type { NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { CoreLayout } from '../components/CoreLayout'


const Home: NextPage = () => {
	const audioRef = useRef<HTMLAudioElement>(null)

	useEffect(() => {
		document.addEventListener('scroll', () => {
			audioRef.current?.play()
		})
		document.addEventListener('click', () => {
			audioRef.current?.play()
		})
	}, [])

	return (
		<CoreLayout>
			<h1 className="text-5xl font-bold mb-10 text-cyan-800">Play Star Citizen for free in July 2022</h1>
			
			<p className="mb-6">The new Free Fly event in Star Citizen is now available. From July 7th until July 15th, everyone can download and play the game for free.</p>

			<p className="mb-6">You can <a href="https://robertsspaceindustries.com/promotions/Foundation-Festival-Free-Fly-2022?referral=STAR-Q2FZ-XVRQ" target="_blank" rel="noreferrer">create an account</a> and play now; just follow the instructions!</p>
		
			<div className="mb-16"></div>

			<h2 className="text-4xl font-bold mb-6 text-cyan-700">What is a Free Fly event in Star Citizen?</h2>

			<p className="mb-6">A Free Fly event is a limited time period where anyone can download and play Star Citizen as if they had purchased the game.</p>

			<p className="mb-6">Your account will be give a loaner <Link href="/starter-ships"><a>starter ship</a></Link> for the duration of the Free Fly event, so you don&apos;t have to worry about buying one with real or in-game money. However, Free Fly events are usually accompanied by sales for starter game packages and other standalone ships, so if you&apos;re thinking of pulling the trigger on buying the game you might find a good deal during the event.</p>
		
			<h2 className="text-4xl font-bold mb-6 text-cyan-700">What to know before making an account</h2>

			<p className="mb-6"><strong>1.</strong> Somewhat confusingly, the official website for Star Citizen is actually <a href="https://robertsspaceindustries.com/?referral=STAR-Q2FZ-XVRQ" target="_blank" rel="noreferrer">https://robertsspaceindustries.com/</a>. This is the full name of the real and fictional - it exists inside the game! - company, RSI. Make sure you use that official site whenever interacting with your account!</p>

			<p className="mb-6"><strong>2.</strong> Make sure you use a <strong>referral code</strong> when you first sign up. Doing so will give you a little extra starting cash in-game and may provide additional rewards if there are any special promotions going on. <em>For the July 2022 Free Fly event there&apos;s a special referral bonus: a hover bike with room for two called the Drake Dragonfly.</em></p>

			<p className="mb-6"><a href="https://robertsspaceindustries.com/enlist?referral=STAR-Q2FZ-XVRQ" target="_blank" rel="noreferrer">Click here</a> for the sign up form with my referral code filled in, or you can enter it yourself: <strong className="whitespace-nowrap">STAR-Q2FZ-XVRQ</strong>. You don&apos;t have to use my referral code though; you can use anyone&apos;s and still get the same rewards. If you have any friends who play, you should use theirs!</p>

			<p className="mb-6"><strong>3.</strong> Star Citizen currently has a 30 day no-questions-asked refund policy. I&apos;ve personally gone through the refund process and it&apos;s fairly painless: you file a support ticket and wait for your refund. You <em>do</em> have to wait though; their support system is usually slammed with inquiries during Free Fly events. But, the 30 days is based on when you first file the ticket, so there&apos;s no concern of running out the clock. You can read more about their refund policy <a href="https://support.robertsspaceindustries.com/hc/en-us/articles/360002466313-Refunds-FAQ" target="_blank" rel="noreferrer">here</a>.</p>

			<h2 className="text-4xl font-bold mb-6 text-cyan-700">Happy flying</h2>

			<p className="mb-6">If you do happen to check out Star Citizen during a Free Fly event, I hope you have a good time!</p>

			<p className="mb-6">- Scrungy</p>
		</CoreLayout>
	)
}

export default Home
