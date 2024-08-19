import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosClient from '../../axios.js';
import { useStateContext } from "../../Contexts/ContextProvider.jsx";
import SignUpimg from '../../assets/Sign-up cream.jpeg';
import newLogo from "../../assets/2r.png";
import { useNavigate } from "react-router-dom";
import { account } from '../appwriteConfig.js';

export default function Signup() {
  const { setCurrentUser, setUserToken, showToast } = useStateContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameHasContent, setFirstNameHasContent] = useState(false);
  const [lastNameHasContent, setLastNameHasContent] = useState(false);
  const [emailHasContent, setEmailHasContent] = useState(false);
  const [passwordHasContent, setPasswordHasContent] = useState(false);
  const [confirmPasswordHasContent, setConfirmPasswordHasContent] = useState(false);
  const [error, setError] = useState({ __html: "" });
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const redirectUri = 'https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/google/66bd2457000ad86294a1';
    const endpoint = 'https://cloud.appwrite.io/v1';
    window.location.href = `${endpoint}?redirect_uri=${encodeURIComponent(redirectUri)}`;

    const successUrl = 'https://vanilla2-gray.vercel.app/';
    const failureUrl = 'https://vanilla2-gray.vercel.app/login';

    account.createOAuth2Session('google', successUrl, failureUrl);
  };

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("Password must contain at least one special character.");
    }
    return errors;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setError({ __html: passwordErrors.join("<br>") });
      return;
    }

    if (password !== confirmPassword) {
      setError({ __html: "Passwords do not match." });
      return;
    }

    try {
      const { data } = await axiosClient.post("/api/signup", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      });

      setCurrentUser(data.user);
      setUserToken(data.token);
      setSuccess("Account created successfully!");
      showToast("Account created successfully!", "success");

      setTimeout(() => {
        window.location.href = '/';
      }, 1500);

    } catch (err) {
      if (err.response && err.response.data && err.response.data.errors) {
        const serverErrors = Object.values(err.response.data.errors).flat().join("<br>");
        setError({ __html: serverErrors });
      } else {
        setError({ __html: err.response?.data?.message || "An error occurred during registration." });
      }
    }
  };

  useEffect(() => {
    setFirstNameHasContent(firstName.trim() !== '');
    setLastNameHasContent(lastName.trim() !== '');
    setEmailHasContent(email.trim() !== '');
    setPasswordHasContent(password.trim() !== '');
    setConfirmPasswordHasContent(confirmPassword.trim() !== '');
  }, [firstName, lastName, email, password, confirmPassword]);

  const handleInputChange = (setter, contentSetter) => (e) => {
    setter(e.target.value);
    contentSetter(e.target.value.trim() !== '');
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-1/2 p-12 flex flex-col justify-center">
        <img src={newLogo} className="h-16 w-16 mb-4" alt="" />
        <h2 className="text-3xl font-bold mb-2 font-Inter">Create your account</h2>
        <p className="text-gray-600 mb-8 font-Inter">Let's get started with your 30 days free trial</p>

        <button className="flex items-center justify-center border border-gray-300 rounded-full py-2 px-4 mb-4 font-Inter" onClick={handleGoogleLogin}>
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-3" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"/><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"/><path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"/><path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"/><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"/></svg>
          Login with Google
        </button>

        <div className="text-center my-4">or</div>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Form fields */}
          <div className="flex space-x-4">
            <div className="w-1/2 relative">
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={handleInputChange(setFirstName, setFirstNameHasContent)}
                className={`peer mt-1 block w-full border-b font-Inter border-gray-300 py-2 px-3 focus:outline-none cursor-text focus:border-blue-300 ${
                  firstNameHasContent ? 'has-content' : ''
                }`}
                required
              />
              <label
                htmlFor="firstName"
                className={`absolute left-3 top-2 text-gray-500 transition-all duration-300 ${
                  firstNameHasContent ? 'transform -translate-y-5 text-indigo-600' : ''
                } peer-focus:-translate-y-4 peer-focus:text-indigo-600 cursor-text peer-focus:text-[14px]`}
              >
                First Name
              </label>
            </div>

            <div className="w-1/2 relative">
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={handleInputChange(setLastName, setLastNameHasContent)}
                className={`peer mt-1 block w-full border-b border-gray-300 py-2 px-3 focus:outline-none cursor-text focus:border-blue-300 ${
                  lastNameHasContent ? 'has-content' : ''
                }`}
                required
              />
              <label
                htmlFor="lastName"
                className={`absolute left-3 top-2 text-gray-500 transition-all duration-300 ${
                  lastNameHasContent ? 'transform -translate-y-5 text-indigo-600' : ''
                } peer-focus:-translate-y-4 peer-focus:text-indigo-600 cursor-text peer-focus:text-[14px]`}
              >
                Last Name
              </label>
            </div>
          </div>

          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleInputChange(setEmail, setEmailHasContent)}
              className={`peer mt-1 block w-full border-b border-gray-300 py-2 px-3 focus:outline-none cursor-text focus:border-blue-300 ${
                emailHasContent ? 'has-content' : ''
              }`}
              required
            />
            <label
              htmlFor="email"
              className={`absolute left-3 top-2 text-gray-500 transition-transform duration-300 ${
                emailHasContent ? 'transform -translate-y-5 text-indigo-600' : ''
              } peer-focus:-translate-y-5 peer-focus:text-indigo-600 cursor-text`}
            >
              Email
            </label>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2 relative">
              <input
                id="password"
                type="password"
                value={password}
                onChange={handleInputChange(setPassword, setPasswordHasContent)}
                className={`peer mt-1 block w-full border-b border-gray-300 py-2 px-3 focus:outline-none cursor-text focus:border-blue-300 ${
                  passwordHasContent ? 'has-content' : ''
                }`}
                required
              />
              <label
                htmlFor="password"
                className={`absolute left-3 top-2 text-gray-500 duration-300 transition-all ${
                  passwordHasContent ? 'transform -translate-y-5 text-indigo-600' : ''
                } peer-focus:-translate-y-4 peer-focus:text-indigo-600 cursor-text peer-focus:text-[14px]`}
              >
                Password
              </label>
            </div>
            {/* transition-transform */}
            <div className="w-1/2 relative">
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={handleInputChange(setConfirmPassword, setConfirmPasswordHasContent)}
                className={`peer mt-1 block w-full border-b border-gray-300 py-2 px-3 focus:outline-none cursor-text focus:border-blue-300 ${
                  confirmPasswordHasContent ? 'has-content' : ''
                }`}
                required
              />
              <label
                htmlFor="confirmPassword"
                className={`absolute left-3 top-2 text-gray-500 transition-transform duration-300 ${
                  confirmPasswordHasContent ? 'transform -translate-y-5 text-indigo-600' : ''
                } peer-focus:-translate-y-5 peer-focus:text-indigo-600 cursor-text`}
              >
                Confirm Password
              </label>
            </div>
          </div>

          {error.__html && <div className="text-red-500" dangerouslySetInnerHTML={error} />}

          <button type="submit" className="w-full py-3 bg-black text-white rounded-full">Create Account</button>

          {success && <div className="text-green-500">{success}</div>}
        </form>

        <p className="mt-4 text-gray-600">
          Already have an account? <Link to="/login" className="text-indigo-600 cursor-pointer">Login</Link>
        </p>
      </div>

      <div className="w-1/2">
        <img src={SignUpimg} alt="Sign up" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
