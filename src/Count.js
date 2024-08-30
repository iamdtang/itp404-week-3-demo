import "./Count.css";

export default function Count(props) {
  let className;

  if (props.value < 0) {
    className = "negative";
  } else if (props.value > 0) {
    className = "positive";
  } else {
    className = "";
  }

  return <div className={className}>Count: {props.value}</div>;
}
