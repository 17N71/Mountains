import Everest from "../components/Everest"
import PopularTours from "../components/PopularTours"
import Russia from "../components/Russia"
import Tours from "../components/Tours"
import Header from "./../components/Header"
import styles from "./../styles/home.module.css"
import Blog from "./../components/Blog"
import Help from "../components/Help"
import Contacts from "../components/Contacts"
import Footer from "../components/Footer"
import { MatchMediaHOC } from "react-match-media"
import Head from "next/head"

const RussiaMedia = MatchMediaHOC(Russia, "(min-width:768px)")
export default function Home() {
	return (
		<div className={styles.wrapper}>
			<Head>
				<meta name="title" content="Mountains" />
				<meta property="og:title" content="Mountains" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://mountains-ruddy.vercel.app/" />
				<meta name="description" content="Туры с восхождениемна вершины мира" />
				<meta name="og:description" content="Туры с восхождениемна вершины мира" />
				<meta
					name="keywords"
					content="Туры,вершины,Эверест,mountains,mountain,альпинистских,альпинист,Белуха,Килиманджаро"
				/>
				<meta name="robots" content="index, follow" />
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="Russian" />
				{/* Twitter */}
				<meta property="twitter:url" content="https://mountains-ruddy.vercel.app/" />
				<meta property="twitter:title" content="Mountains" />
				<meta
					property="twitter:description"
					content="Туры с восхождениемна вершины мира."
				/>
				<title>Mountains</title>
			</Head>
			<Header />
			<Everest />
			<Tours />
			<PopularTours />
			<RussiaMedia />
			<Blog />
			<Help />
			<Contacts />
			<Footer />
		</div>
	)
}
