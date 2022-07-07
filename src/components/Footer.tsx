import { FC } from "react"

export const Footer: FC = () => {
	return (
		<div className="mt-16 text-white [border-image-source:url(../assets/images/footer-bg.svg)] [border-width:33px_0_0] [border-image-slice:33_fill] [border-image-width:auto]">
			<div className="container mx-auto px-4 pt-10 pb-4 text-center">
				This is a fan-made site; it is not affiliated with Cloud Imperium Games, Roberts Space Industries, or related companies.
				<div className="mt-2"/>
				Official Star Citizen website: <a href="https://robertsspaceindustries.com/" target="_blank" rel="noreferrer">https://robertsspaceindustries.com/</a>
			</div>
		</div>
	)
}