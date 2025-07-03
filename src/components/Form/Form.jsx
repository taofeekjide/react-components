import "./Form.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Form() {
  return (
    <div className="form-component">
      <h2>Contact Form</h2>

      <form action="">
        <Input />
        <Button />
      </form>
    </div>
  );
}
