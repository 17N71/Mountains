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

const RussiaMedia = MatchMediaHOC(Russia, "(min-width:768px)")
export default function Home() {
	return (
		<div className={styles.wrapper}>
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
