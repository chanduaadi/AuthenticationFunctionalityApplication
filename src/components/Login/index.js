// Write your JS code here
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const onSubmitSucess = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 1})
    history.replace('/')
  }

  const onLogin = async () => {
    const name = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {name, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSucess(data.jwt_token)
      console.log(data)
    }
  }

  return (
    <div className="login-page-container">
      <div>
        <h1>Please Login</h1>
        <button type="button" onClick={onLogin}>
          Login With Sample Creds
        </button>
      </div>
    </div>
  )
}

export default Login
