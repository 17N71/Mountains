import tour from "./tour.module.css"
import { ITours } from "../PopularTours"
import { SplideSlide } from "@splidejs/react-splide"
import Image from "next/image"
const Tour = ({ data }: ITourProps) => {
	return (
		<SplideSlide className={tour.card}>
			<Image
				src={data.src}
				alt={data.name}
				title={data.name}
				fill={true}
				className={tour.image}
				priority
			/>
			<div className={tour.header}>
				<span className={tour.country}>
					<svg
						width="13"
						height="16"
						viewBox="0 0 13 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11.0962 11.3137L6.5 16L1.90378 11.3137C0.994747 10.3868 0.37569 9.20592 0.124893 7.92033C-0.125905 6.63474 0.00282161 5.30219 0.494793 4.0912C0.986765 2.8802 1.81989 1.84514 2.8888 1.11692C3.95772 0.388689 5.21443 0 6.5 0C7.78557 0 9.04228 0.388689 10.1112 1.11692C11.1801 1.84514 12.0132 2.8802 12.5052 4.0912C12.9972 5.30219 13.1259 6.63474 12.8751 7.92033C12.6243 9.20592 12.0053 10.3868 11.0962 11.3137ZM6.5 8.10012C6.88309 8.10012 7.25049 7.94495 7.52138 7.66876C7.79226 7.39256 7.94444 7.01796 7.94444 6.62736C7.94444 6.23676 7.79226 5.86216 7.52138 5.58596C7.25049 5.30977 6.88309 5.1546 6.5 5.1546C6.11691 5.1546 5.74951 5.30977 5.47862 5.58596C5.20774 5.86216 5.05556 6.23676 5.05556 6.62736C5.05556 7.01796 5.20774 7.39256 5.47862 7.66876C5.74951 7.94495 6.11691 8.10012 6.5 8.10012Z"
							fill="#EC5118"
						/>
					</svg>
					{data.country}
				</span>
				<button type="button" className={tour.saveBtn}>
					<svg
						width="35"
						height="35"
						viewBox="0 0 35 35"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="17.5" cy="17.5" r="17.5" fill="#FCFCFC" fillOpacity="0.4" />
						<path
							d="M13.625 11H22.375C22.5408 11 22.6997 11.0663 22.8169 11.1844C22.9342 11.3025 23 11.4627 23 11.6297V23.6847C23.0001 23.741 22.9852 23.7963 22.9568 23.8449C22.9285 23.8934 22.8877 23.9333 22.8388 23.9606C22.79 23.9879 22.7347 24.0014 22.6788 23.9999C22.623 23.9983 22.5686 23.9817 22.5212 23.9517L18 21.0946L13.4787 23.9511C13.4315 23.981 13.3771 23.9977 13.3213 23.9992C13.2655 24.0008 13.2103 23.9873 13.1614 23.9601C13.1126 23.9329 13.0718 23.8931 13.0434 23.8446C13.015 23.7962 13 23.741 13 23.6847V11.6297C13 11.4627 13.0658 11.3025 13.1831 11.1844C13.3003 11.0663 13.4592 11 13.625 11ZM21.75 12.2595H14.25V21.9775L18 19.6091L21.75 21.9775V12.2595Z"
							fill="#EC5118"
						/>
					</svg>
				</button>
			</div>
			<div className={tour.info}>
				<h3 className={tour.name}>{data.name}</h3>
				<div className={tour.moreInfo}>
					<span>{data.info.height}</span>
					<span>{data.info.days}</span>
					<span>
						{data.info.price} {`\u20bd`}
					</span>
				</div>
				<p className={tour.level}>
					{data.level === "Простой уровень" ? (
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="7" cy="7" r="6" stroke="#FCFCFC" strokeWidth="2" />
							<path d="M13 7C13 3.68629 10.3137 1 7 1" stroke="#061B28" strokeWidth="2" />
						</svg>
					) : (
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="7" cy="7" r="6" stroke="#FCFCFC" strokeWidth="2" />
							<path
								d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1"
								stroke="#061B28"
								strokeWidth="2"
							/>
						</svg>
					)}
					{data.level}
				</p>
			</div>
		</SplideSlide>
	)
}

export default Tour
interface ITourProps {
	data: ITours
}
