import headStyle from './header.module.css';

const Header = (props) => {
    return (
        <header className={headStyle.root}>
            <div className={headStyle.forest}></div>
            <div className={headStyle.container}>
                <h1>{props.title}</h1>
                <p>{props.descr}</p>
            </div>
        </header>
    )
}

export default Header;