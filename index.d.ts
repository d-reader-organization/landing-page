type StaticImageData = {
	src: string
	height: number
	width: number
	placeholder?: string
}

declare module '*.png' {
	const content: StaticImageData
	export default content
}

declare module '*.svg' {
	const content: React.FC<React.SVGProps<SVGSVGElement>>
	export default content
}

declare module '*.jpg' {
	const content: StaticImageData
	export default content
}

declare module '*.jpeg' {
	const content: StaticImageData
	export default content
}

declare module '*.gif' {
	const content: StaticImageData
	export default content
}

declare module '*.webp' {
	const content: StaticImageData
	export default content
}

declare module '*.ico' {
	const content: StaticImageData
	export default content
}

declare module '*.bmp' {
	const content: StaticImageData
	export default content
}

declare module '*.avif' {
	const content: StaticImageData
	export default content
}

declare module '*.md'

declare global {
	interface Window {
		solana?: { publicKey: PublicKey }
	}
}

interface ReactFlashlightProps {
	enabled?: bool
	children: node
	showCursor?: bool
	size?: number
	initialPosition?: {
		x: number
		y: number
	}
	moveTo?: object
	speed?: number
	contain?: bool
	enableMouse?: bool
	darkness?: number
}

declare module 'react-flashlight' {
	const ReactFlashlight: React.FC<ReactFlashlightProps>
}
