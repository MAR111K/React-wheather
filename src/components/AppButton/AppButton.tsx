interface Props {
  title: string;
  handlerClick?: React.MouseEventHandler;
}
import "./AppButton.scss";

const AppButton = (props: Props) => {
  return (
    <div>
      <button className="app-button" onClick={props.handlerClick}>
        {props.title}
      </button>
    </div>
  );
};

AppButton.defaultProps = {
  title: "",
};

export default AppButton;
