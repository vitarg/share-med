import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthButton } from "./styles";
import appSelectors from "../../../store/app/selectors";
import { logout } from "../../../store/app/slice";

const AuthBtn = () => {
  const token = useSelector(appSelectors.token);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    document.location.reload();
  };

  if (token) {
    return (
      <AuthButton
        variant={"outlined"}
        color={"secondary"}
        onClick={handleLogout}
      >
        Выйти
      </AuthButton>
    );
  } else {

    return (
      <AuthButton
        // @ts-ignore
        component={Link}
        to={"/sign-in"}
        variant={"outlined"}
        color={"secondary"}
      >
        Войти как админ
      </AuthButton>
    );
  }
};

export default AuthBtn;
