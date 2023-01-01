import styles from "./blog.module.css"
import NewsList from "./../NewsList"
import BlogArticle from "./../BlogArticle"
const Blog = () => {
	return (
		<section className={styles.blog} id={"blogs"}>
			<h2 className={styles.title}>Блог</h2>
			<div className={styles.news}>
				<NewsList />
				<BlogArticle />
			</div>
		</section>
	)
}

export default Blog
