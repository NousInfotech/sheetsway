import { useOpenBookADemo } from "../BookADemoModal";
import Button from "./Button";

function TryButton({ type = "secondary", className }) {
  const call = useOpenBookADemo();

  return (
    <Button type={type} onClick={call} className={className}>
      Try for Free
    </Button>
  );
}

export default TryButton;
