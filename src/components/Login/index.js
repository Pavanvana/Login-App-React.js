// Write your code here
import './index.css'

const Login = props => {
  const {login} = props

  return (
    <button onClick={login} type="button" className="button">
      Login
    </button>
  )
}
export default Login
