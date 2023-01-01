import styles from "./blogArticle.module.css"
import Image from "next/image"
const BlogArticle = () => {
	return (
		<div className={styles.blog}>
			<Image
				src={"/blog.jpg"}
				alt={"Blogs part, mountains with skydivers"}
				title={"Blogs part, mountains with skydivers"}
				width={700}
				height={287}
				priority
				className={styles.image}
			/>
			<span className={styles.date}>15 января, 2020</span>
			<article className={styles.article}>
				<h3 className={`${styles.title} robotoText`}>
					Как подготовиться к первому восхождению на вершину
				</h3>
				<p>
					Перед тем, как отправиться на покорение вершины горы, нужно не только привести в
					порядок свою физическую форму, но и тренировать выносливость, дыхательную и
					сердечно-сосудистую системы. Именно на них приходится максимальная нагрузка на
					высоте. Поэтому из-за недостаточной подготовки вы можете сойти на полпути. Чтобы
					этого не случилось, занимайтесь плаванием, бегом, велосипедом и
					кардиотренировками. Как должны проходить тренировки? В первую очередь,
					тренировки должны проходить постоянно, эффективно и интенсивно. Кроме того,
					нагрузка постепенно должна увеличиваться. В случае с бегом обязательно делать
					это с учетом пульса. Грамотно спланированный бег позволит не только сбросить
					вес, но и укрепит сердечную мышцу. При беге с высоким пульсом вы позволите
					организму привыкнуть к недостатку кислорода — то, с чем обязательно встретитесь
					в горах. Для укрепления физической подготовки и повышения выносливости также
					бегайте в горку или в быстром темпе поднимайтесь по лестницам. И не забудьте
					отдохнуть за неделю до путешествия!
				</p>
			</article>
		</div>
	)
}

export default BlogArticle