import s from './Views.module.css'

const HomeView = () => (
    <div className={s.homePage}>
        <section className={s.homeSection}>
            <h1 className={s.lumos}>'Lumos Maxima' </h1>
            <p className={s.homeDesc}>
            <h2>💫Welcome to wizard world! <span role="img" aria-label="magic">💫</span></h2>
            <h3>✨There is a magic's home <span role="img" aria-label="tada">✨</span></h3>
            </p>
        </section>
    </div>
)

export default HomeView;