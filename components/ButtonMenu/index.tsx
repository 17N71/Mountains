import styles from "./btn.module.css"
const ButtonMenu = ({
	...props
}: React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) => {
	return (
		<button type="button" {...props} className={styles.btn}>
			<svg
				stroke="#ffffff"
				fill="#ffffff"
				strokeWidth="0"
				viewBox="0 0 512 512"
				height="2rem"
				width="2rem"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
			</svg>
		</button>
	)
}

export default ButtonMenu
