function Header() {

    return (
        <header>
            <a href="/home">
                <div>
                    <img 
                        src="./src/assets/taeLogo.svg" 
                        alt="T.A.E logo"
                        id="headerLogo"
                    />
                </div>
            </a>
            <a href='/'><div><p>index</p></div></a>
            <a href='/home'><div><p>home</p></div></a>
            <a href='/plans'><div><p>plans</p></div></a>
            <a href='/about'><div><p>about</p></div></a>
            <a href='/everything'><div><p>everything</p></div></a>
            <a href='/0001'><div><p>testDNC</p></div></a>
        </header>
    )
}

export default Header;