import "./mainButton.css";

interface MainButtonProps {
  button_text: string;
}
export default function MainButton(props: MainButtonProps) {
  return (
    <button type="submit" className="main-btn-component">
      {props.button_text}
    </button>
  );
}
