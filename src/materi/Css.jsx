import React, { useState } from "react";
import {
  Container,
  Toast,
  ToastBody,
  ToastHeader,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

// Modal Component for CSS Tutorial Video
const CSSTutorialModal = ({ show, handleClose }) => (
  <Modal isOpen={show} toggle={handleClose} size="lg" centered>
    <ModalHeader toggle={handleClose} className="d-flex justify-content-end">
      {" "}
      <span>CSS Tutorial</span>
    </ModalHeader>
    <ModalBody>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/tBD8XlgXlus?si=-ytliYfzW8RKLZYf"
          allowFullScreen
          title="CSS Tutorial"
        ></iframe>
      </div>
    </ModalBody>
  </Modal>
);

const CSSBasics = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="mt-4">
      <hr />
      <CSSSyntax />
      <hr />
      <CSSSelectors />
      <hr />
      <CSSProperties />
      <hr />
      <AddingCSS />
      <hr />
      <CommentsInCSS />
      <hr />
      <WhyLearnCSS />
      <hr />
      <BestWayToLearnCSS handleShow={handleShow} />

      <CSSTutorialModal show={show} handleClose={handleClose} />
    </Container>
  );
};

const CSSSyntax = () => (
  <div id="css-syntax" className="content-section">
    <h2>CSS (Cascading Style Sheets)</h2>
    <p style={{ fontSize: "1rem", color: "#000" }}>
      CSS is used to enhance the visual presentation of content provided by HTML
      on web pages.
    </p>
    <figure>
      <img
        className="image-with-border img-fluid"
        src="https://www.programiz.com/sites/tutorial2program/files/css-use-example.png"
        title="CSS example"
        alt="Example usage of CSS to enhance the appearance of web pages"
        height="774"
      />
    </figure>
  </div>
);

const CSSSelectors = () => (
  <div id="css-selectors" className="content-section">
    <h2>CSS Selectors</h2>
    <p>Here are some commonly used CSS selectors:</p>
    <Toast className="custom-toast">
      <ToastHeader
        style={{
          backgroundColor: "#003143",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong>CSS</strong>
        </div>
        <small>11 minutes ago</small>
      </ToastHeader>
      <ToastBody style={{ backgroundColor: "black", color: "white" }}>
        <pre>
          <code>
            {`
selector {
  property1: value;
  property2: value;
}
          `}
          </code>
        </pre>
      </ToastBody>
    </Toast>
    <p>
      Basic CSS syntax consists of <strong>3</strong> main parts:
    </p>
    <ul>
      <li>
        <code>selector</code> - specifies which HTML elements to style
      </li>
      <li>
        <code>property1</code> / <code>property2</code> - specifies which
        attributes of the HTML elements to change (e.g., color, background,
        etc.)
      </li>
      <li>
        <code>value</code> - specifies the new value to apply to the attribute
        (e.g., red text color, gray background, etc.)
      </li>
    </ul>
    <p>
      To learn more, visit the tutorial on <em>CSS Syntax</em>.
    </p>
  </div>
);

const CSSProperties = () => (
  <div id="css-properties" className="content-section">
    <h2>Example: Beautifying Documents with CSS</h2>
    <p>Here is an example of an HTML page without CSS:</p>
    <Toast className="custom-toast">
      <ToastHeader
        style={{
          backgroundColor: "#003143",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong>HTML</strong>
        </div>
        <small>11 minutes ago</small>
      </ToastHeader>
      <ToastBody style={{ backgroundColor: "black", color: "white" }}>
        <pre>
          <code>
            {`
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS Example</title>
</head>
<body>
  <p>This is sample text.</p>
</body>
</html>
          `}
          </code>
        </pre>
      </ToastBody>
    </Toast>
    <p>
      <strong>Browser Output</strong>
    </p>
    <figure>
      <img
        src="https://www.programiz.com/sites/tutorial2program/files/html-css-example.png"
        alt="HTML p element with content 'This is sample text.'"
        className="figure-border img-fluid"
      />
    </figure>
    <p>Next, let's add CSS to the above HTML code:</p>
    <Toast className="custom-toast">
      <ToastHeader
        style={{
          backgroundColor: "#003143",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong>HTML</strong>
        </div>
        <small>11 minutes ago</small>
      </ToastHeader>
      <ToastBody style={{ backgroundColor: "black", color: "white" }}>
        <pre>
          <code>
            {`
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS Example</title>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
<body>
    <p>This is sample text.</p>
</body>
</html>
          `}
          </code>
        </pre>
      </ToastBody>
    </Toast>
    <p>
      <strong>Browser Output</strong>
    </p>
    <figure>
      <img
        src="https://www.programiz.com/sites/tutorial2program/files/css-example.png"
        alt="A simple web page with a paragraph of text"
        className="figure-border img-fluid"
      />
    </figure>
    <p>In the above example, note the following code:</p>
    <Toast className="custom-toast">
      <ToastHeader
        style={{
          backgroundColor: "#003143",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong>HTML</strong>
        </div>
        <small>11 minutes ago</small>
      </ToastHeader>
      <ToastBody style={{ backgroundColor: "black", color: "white" }}>
        <pre>
          <code>
            {`
<style>
    p {
        color: blue;
    }
</style>
          `}
          </code>
        </pre>
      </ToastBody>
    </Toast>
    <p>
      The above code is used to apply CSS styles to a web page. It sets the{" "}
      <code>&lt;p&gt;</code> element's color to blue. Learn more about{" "}
      <em>CSS Basics</em>.
    </p>
  </div>
);

const AddingCSS = () => (
  <div id="adding-css" className="content-section">
    <h2>Adding CSS</h2>
    <p>There are three ways to add CSS to your HTML document:</p>
    <ol>
      <li>
        <strong>Method 1:</strong> Using the <code>&lt;style&gt;</code> element
        in the <code>&lt;head&gt;</code> section of the document:
        <Toast className="custom-toast">
          <ToastHeader
            style={{
              backgroundColor: "#003143",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong>HTML</strong>
            </div>
            <small>11 minutes ago</small>
          </ToastHeader>
          <ToastBody style={{ backgroundColor: "black", color: "white" }}>
            <pre>
              <code>
                {`
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Example</title>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
<body>
  <p>This is sample text.</p>
</body>
</html>
              `}
              </code>
            </pre>
          </ToastBody>
        </Toast>
      </li>
      <li>
        <strong>Method 2:</strong> Using an external CSS file (recommended for
        larger projects):
        <Toast className="custom-toast">
          <ToastHeader
            style={{
              backgroundColor: "#003143",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong>HTML</strong>
            </div>
            <small>11 minutes ago</small>
          </ToastHeader>
          <ToastBody style={{ backgroundColor: "black", color: "white" }}>
            <pre>
              <code>
                {`
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>This is sample text.</p>
</body>
</html>
              `}
              </code>
            </pre>
          </ToastBody>
        </Toast>
      </li>
      <li>
        <strong>Method 3:</strong> Using inline CSS (not recommended for large
        projects):
        <Toast className="custom-toast">
          <ToastHeader
            style={{
              backgroundColor: "#003143",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong>HTML</strong>
            </div>
            <small>11 minutes ago</small>
          </ToastHeader>
          <ToastBody style={{ backgroundColor: "black", color: "white" }}>
            <pre>
              <code>
                {`
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Example</title>
</head>
<body>
  <p style="color: blue;">This is sample text.</p>
</body>
</html>
              `}
              </code>
            </pre>
          </ToastBody>
        </Toast>
      </li>
    </ol>
    <p>
      To learn more about adding CSS to your web page, see the tutorial on{" "}
      <em>Adding CSS</em>.
    </p>
  </div>
);

const CommentsInCSS = () => (
  <div id="comments-in-css" className="content-section">
    <h2>Comments in CSS</h2>
    <p>
      Comments in CSS are useful for making notes to yourself or to others who
      may view your code. Comments are ignored by the browser and are not
      displayed.
    </p>
    <Toast className="custom-toast">
      <ToastHeader
        style={{
          backgroundColor: "#003143",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong>CSS</strong>
        </div>
        <small>11 minutes ago</small>
      </ToastHeader>
      <ToastBody style={{ backgroundColor: "black", color: "white" }}>
        <pre>
          <code>
            {`
/* This is a comment */
p {
    color: blue; /* Another comment */
}
            `}
          </code>
        </pre>
      </ToastBody>
    </Toast>
    <p>
      In the above example, the comments are in green and explain each code
      snippet.
    </p>
  </div>
);

const WhyLearnCSS = () => (
  <div id="why-learn-css" className="content-section">
    <h2>Why Learn CSS?</h2>
    <p>
      CSS is a fundamental skill for web designers and developers. Here are a
      few reasons to learn CSS:
    </p>
    <ul>
      <li>
        <strong>Enhance the look and feel:</strong> CSS allows you to customize
        the appearance of your website, giving it a unique look.
      </li>
      <li>
        <strong>Improve user experience:</strong> Well-designed CSS can make
        your website more intuitive and user-friendly.
      </li>
      <li>
        <strong>Responsive design:</strong> CSS helps you create layouts that
        adapt to different screen sizes and devices.
      </li>
    </ul>
    <p>
      To learn more about the benefits of CSS, read the article on{" "}
      <em>Why Learn CSS?</em>
    </p>
  </div>
);

const BestWayToLearnCSS = ({ handleShow }) => (
  <div id="best-way-to-learn-css" className="content-section">
    <h2>Best Way to Learn CSS</h2>
    <p>There are many ways to learn CSS. Here are a few tips:</p>
    <ul>
      <li>
        <strong>Practice:</strong> Experiment with different CSS properties and
        selectors to see how they affect your web page.
      </li>
      <li>
        <strong>Online tutorials:</strong> There are many free and paid
        tutorials available online that cover everything from basic CSS to
        advanced techniques.
      </li>
      <li>
        <strong>Projects:</strong> Build real-world projects to apply your CSS
        skills and gain hands-on experience.
      </li>
    </ul>
    <Button color="primary" onClick={handleShow}>
      Watch CSS Tutorial Video
    </Button>
    <p>
      For more tips on learning CSS, check out our guide on{" "}
      <em>Best Way to Learn CSS</em>.
    </p>
  </div>
);

export default CSSBasics;
