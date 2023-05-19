import "./AppInput.scss";

interface Props {
  value: string;
  title: string;
  updateValue: (e: string) => void;
  handlerEnter?: () => void;
}

const AppInput = (props: Props) => {
  const updateValue = (e: string) => {
    props.updateValue(e);
  };

  const handleUpKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.handlerEnter === undefined) return;
    if (e.key === "Enter") {
      props.handlerEnter();
    }
  };

  return (
    <div className="app-input__wrapper">
      <span className="app-input__title">{props.title && props.title}</span>
      <input
        className="app-input"
        type="text"
        value={props.value}
        onChange={(e) => updateValue(e.target.value)}
        onKeyUp={(e) => handleUpKey(e)}
      />
    </div>
  );
};

AppInput.defaultProps = {
  value: "",
};
export default AppInput;
