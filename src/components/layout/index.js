import lStyle from './layout.module.css';

const Layout = (props) => {
    return (
        <section className={lStyle.root} id={props.id}>
            <div className={lStyle.wrapper}>
                <article>
                    <div class={lStyle.title}>
                        <h3>{props.title}</h3>
                        <span className={lStyle.separator}></span>
                    </div>
                    <div className={lStyle.desc}>
                        <p>{props.descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;