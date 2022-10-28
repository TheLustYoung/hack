import "./SingUp.scss";
import { useNavigate } from "react-router-dom";

export default function SingUp(props) {

  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="input__log">
          {props.inputLog}
          <input id="userLogin" type="text" />
        </div>
        <div className="input__pass">
          {props.inputPass}
          <input id="userPassword" type="password"/>
        </div>
        <div className="sin">
          <div className="sin__check">
            <input type="checkbox" />
            {props.check}
          </div>
          <div className="sin__remPass">
            <a href="#">{props.remPass}</a>
          </div>
        </div>
        <button className="buttonLog" onClick={() => navigate("/Task")}>
          {props.buttonLog}
        </button>
        <button className="buttonSing">{props.buttonSing}</button>
      </div>
    </>
  );
}

