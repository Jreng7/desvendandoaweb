import { BackgroundImage, ContainerLogin, Reset } from "../styles/loginScreen.styles"

const LoginScreen = () => {
  return (
      <Reset>
        <BackgroundImage src="./login.jpg" />
        <ContainerLogin />
      </Reset>
       
  )
    
}

export default LoginScreen