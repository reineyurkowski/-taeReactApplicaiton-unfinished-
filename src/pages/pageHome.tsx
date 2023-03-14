import Modules from "..";

function Home() {
    function MakeTestimonialCards(inputArray:string[] = [
        'lastName, middleInitial, firstName',
        '/src/assets/taeLogo.svg', 
        'this is the Alt text',        
        'companyName',
        'YYYY/MM/DD',
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.`
    ]) {
        //array should be sorted like:
        //0name, 1face, 2altText, 3company, 4date, 5statement
        return (
            <div className="testimonialCard">
                <div className="testimonialCardTop">
                    <div className="testimonialCardImage">
                            <img src={inputArray[1]} alt={inputArray[2]}/>
                    </div>
                    <div className="testimonialCardInfo">
                        <h3 className="testimonialCardName">{inputArray[0]}</h3>
                        <h4 className="testimonialCardCompany">{inputArray[3]}</h4>
                        <h5 className="testimonialCardDate">{inputArray[4]}</h5>
                    </div>
                </div>
                <div className="testimonialCardStatement">
                    <p>{inputArray[5]}</p>
                </div>
            </div>
        )
    }

    function MakeListFromArray(inputArray:string[] = ["a", "b", "c"]){
        let inputArrayMapped = inputArray.map((item, index) =>
            <span key={index}>{item}</span>
        )
        return(
                <li>{inputArrayMapped}</li>
        )
    }

    

    return (
        <div>  
            <div className="logo">
                {/* <img 
                    src="./src/assets/taeLogo.svg" 
                    alt="T.A.E logo"
                /> */}
                <Modules.WebGlLogo />
            </div>
            <br />
            <h1 id="subscript"> DO YOUR WORK FASTER </h1>
            <br/>
            <p>
                TAE has many uses, from basic to-do lists to multi-person project management. No matter your 
                use case, TAE can become a part of your workflow.
            </p>
            <br/>
            <br/>
            <a href="/plans"><div className="callToAction">interested? <br /> discover out plans here! </div></a>
            <br/>
            <br/>
            <div>
                <h2> USE CASES </h2>
                <p>
                    TAE has many uses, some are but not limited too:       
                </p>
                <ul>
                    {MakeListFromArray([
                        'todo lists',
                        'product management',
                        'task management'
                    ])}
                </ul>  
                <h3>DEMO</h3>
                <div>
                <img
                    id="homePageDemo"
                    src="/src/assets/demonstration.gif" 
                    alt="a mini tutorial of how to get to the page to use the application, 
                    and on how to use it such as rename an item or change what column it's in"
                />
                </div>
            </div>
            <div>
                <h2> TESTIMONIALS </h2>
                <div className="testimonialCardContainer">
                    {MakeTestimonialCards()}
                    {MakeTestimonialCards([
                        "Ubayy Bashara", 
                        "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                        "photo of a fictional character Ubayy Bashara with a photo from unsplash.com",
                        "United Arab Emirates Coffee Co",
                        "2023/03/08",
                        `i made this software becausei found others to be either too expensive or just not worth using.
                        because of that i decided to make this software which i hope all will enjoy using!
                        i can't state enough how much i love this software!`
                        ]
                    )}
                    {MakeTestimonialCards([
                        "Yurkowski Reine", 
                        "/src/assets/reineYurkowskiIcon.jpg",
                        "photo of someone by the game of Yurkowski Reine i found online",
                        "independant",
                        "2023/03/08",
                        `i made this software becausei found others to be either too expensive or just not worth using.
                        because of that i decided to make this software which i hope all will enjoy using!`
                        ]
                    )}
                    {MakeTestimonialCards([
                        "Bubbshalub", 
                        "https://images.unsplash.com/photo-1677979900587-b7657cfd50f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
                        "photo of the elustrious bubbshalub",
                        "doesn't work cause lazy mf",
                        "2023/03/09",
                        `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum."`
                        ]
                    )}
                </div>
            </div>
            <div>
                <h2> TERMS </h2>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <div>
                <h2> OTHER STUFF (coming soon)</h2>
                <ul> 
                    <li>roadmap</li>
                </ul>
            </div>
        </div>
    )
}

export default Home