import Wrapper from "../wrapper/RegisterLoginPage";
import { Logo, FormRow } from "../components/UI/index";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper className="full-page">
      <form className="form">
        <Logo />
        <h3>Login</h3>
        <FormRow name="email" type="email" />
        <FormRow name="password" type="password" />
        <button className="btn btn-block">Submit</button>
        <p>
          Already a member? &nbsp;
          <Link className="member-btn" to="/register">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
