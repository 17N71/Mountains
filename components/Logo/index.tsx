import Link from "next/link"
import Image from "next/image"

const Logo = () => {
	return (
		<Link href={"/"}>
			<Image src={"/logo.svg"} alt={"Logo"} width={101} height={21} priority />
		</Link>
	)
}

export default Logo
