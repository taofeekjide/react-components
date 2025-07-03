import "./App.css";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="body-content">
        <h1>Welcome to Our Website</h1>
        <p>
          This is a simple React application demonstrating the use of
          components. Feel free to explore and learn more about React!
        </p>
        <p>
          This application is designed to showcase the use of various React
          components, including a header, a form, and a footer. It serves as a
          practice project for understanding component-based architecture in
          React.
        </p>
        <p>
          The application is structured to provide a clean and organized layout,
          making it easy to understand and extend.
        </p>
      </div>
      <div className="contact">
        <h2 className="contact-head">Contact Us</h2>
        <h3 className="contact-details">Feel free to get in touch with Us.</h3>
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default App;
