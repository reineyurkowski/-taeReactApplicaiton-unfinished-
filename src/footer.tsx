import Modules from './index';
//this page needs to be an exception as the page cannot
//load on refresh if called from above
import React, {useState, useEffect} from 'react';

function TextInput() {
    const [text, setText] = useState('');
    const [isValid, setIsValid] = useState(true);
  
    const handleInputChange = (event:any) => {
        const inputValue = event.target.value.replace(/[^\w@.-]+/g, '');
        setText(inputValue);
        setIsValid(isValidEmail(inputValue));
      }
      
  
    const isValidEmail = (email:any) => {
      // Regular expression for email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  
    return (
        <div>
            <label htmlFor="text-input">Enter email:</label>
            <input 
            type="text" 
            id="text-input" 
            className='input' 
            value={text} 
            onChange={handleInputChange} 
            placeholder="email@service.com"
            />
            {!isValid && <p style={{ color: "lightcoral" }}>Invalid email address.</p>}
            {isValid && text && <p>You entered: {text}</p>}
        </div>
    );
}
  

function Footer() {

    return (
        <footer>
            <div>
                <div>
                    <div>
                        <p>sign-up here, no credit card required</p>
                        {/* <input inputMode="email"> </input> */}
                        <TextInput />
                    </div>                
                    <div>
                        <div>
                            <img 
                                src="./src/assets/taeLogo.svg"
                                alt="T.A.E logo" 
                            />
                        </div>
                        <p>proving what you need to keep your business moving forward </p>
                    </div>
                </div>
                <div id='resources'>
                    <div>
                        <div>docs</div>
                        <div>jobs</div>
                        <div>area</div>
                        <div>facebook</div>
                        <div>twitter</div>
                        <div>instagram</div>
                        <div>tumblr</div>
                    </div>
                    <div><span></span></div>
                    <div>
                        <div> terms and conditions </div>
                        <div> privacy </div>
                        <div> request data </div>
                        <div> remove your account </div>
                    </div>
                </div>
            <div>
                <p>
                    All copyright belows to their respective owners. 
                    Any use of third-party content is done so under fair use guidelines for the purpose of criticism, commentary, or education. 
                    If you believe any content on this site infringes on your copyright, 
                    please contact us and we will remove it promptly.
                    Please note that this is just a generic script, and it's always a good idea to consult with a legal professional to ensure your website's content complies with any applicable laws and regulations.
                </p>
            </div>
            </div>
        </footer>
    )
}

export default Footer;