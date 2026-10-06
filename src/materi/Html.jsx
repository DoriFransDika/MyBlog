import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const HtmlBasicsWithStyles = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <style>{`
        .custom-toast {
          margin: 20px;
          font-size: 1.2em;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .code-container {
          background-color: #f5f5f5;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-top: 20px;
          font-family: monospace;
          overflow-x: auto;
        }
        .note-tip {
          background-color: #f5f5f5;
          padding: 10px;
          border-left: 5px solid #4caf50;
          margin-top: 20px;
        }
        .content-section {
          padding: 1rem;
        }
        .image-with-border {
          border: 2px solid #000;
          border-radius: 8px;
          padding: 4px;
          display: block;
          margin: 20px auto;
          width: 100%;
          height: auto;
        }
        .embed-responsive {
          position: relative;
          display: block;
          width: 100%;
          padding: 0;
          overflow: hidden;
        }

        .embed-responsive::before {
          display: block;
          content: "";
        }

        iframe {
          width:100%;
          height:500px;
          
        }
        @media (min-width: 768px) {
          .content-section {
            padding: 2rem 4rem;
          }
        }
  
        @media (min-width: 1024px) {
          .content-section {
            padding: 2rem 6rem;
          }
        }
      `}</style>
      <HtmlBasics handleShow={handleShow} />
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>HTML Tutorial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/hMDJyb7VkYw?si=ZZ5M9nXEzwa6qqQG"
              allowFullScreen
              title="JavaScript Tutorial"
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const HtmlBasics = ({ handleShow }) => (
  <div className="tutorial-content">
    <Introduction />
    <hr />
    <HtmlHierarchy />
    <hr />
    <HtmlElements />
    <hr />
    <HtmlAttributes />
    <hr />
    <HtmlSyntax />
    <hr />
    <BestWayToLearnHtml handleShow={handleShow} />
    <hr />
  </div>
);

const Introduction = () => (
  <section
    id="introduction"
    style={{
      backgroundImage: `url('https://programacion.net/files/article/article_02155_.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "2rem",
      textAlign: "center",
    }}
  >
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "yellow", marginBottom: "1rem" }}>
        HTML (HyperText Markup Language)
      </h1>
      <p style={{ fontSize: "1.5rem", color: "#fff" }}>
        HTML (HyperText Markup Language) is a markup language used to structure
        and organize the content on a web page. It uses various tags to define
        the different elements on a page, such as headings, paragraphs, and
        links.
      </p>
    </div>
  </section>
);

const HtmlHierarchy = () => (
  <section id="html-hierarchy" className="content-section">
    <h2>HTML Hierarchy</h2>
    <p>
      HTML elements are hierarchical, which means that they can be nested inside
      each other to create a tree-like structure of the content on the web page.
      This hierarchical structure is called the DOM (Document Object Model), and
      it is used by the web browser to render the web page. For example,
    </p>
    <Toast className="custom-toast">
      <Toast.Header
        style={{ backgroundColor: "#003143", color: "white", width: "100%" }}
      >
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">HTML</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body
        style={{ backgroundColor: "black", color: "white", width: "100%" }}
      >
        <pre>
          <code>
            {`<!DOCTYPE html>
<html>
<head>
  <title>My web page</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>This is my first web page.</p>
  <p>It contains a <strong>main heading</strong> and <em>paragraph</em>.</p>
</body>
</html>`}
          </code>
        </pre>
      </Toast.Body>
    </Toast>
    <strong>Browser Output</strong>
    <figure>
      <img
        className="image-with-border"
        src="https://www.programiz.com/sites/tutorial2program/files/html-basics-hierarchy.png"
        title="HTML example"
        alt="A simple HTML example to demonstrate hierarchy"
        style={{ width: "100%", height: "auto" }}
      />
    </figure>

    <p>
      In this example, the <code>html</code> element is the root element of the
      hierarchy and contains two child elements: <code>head</code> and{" "}
      <code>body</code>. The <code>head</code> element, in turn, contains a
      child element called the <code>title</code>, and the <code>body</code>{" "}
      element contains child elements: <code>h1</code> and <code>p</code>.
    </p>
    <p>
      Let's see the meaning of the various elements used in the above example.
    </p>
    <ul>
      <li>
        <code>&lt;html&gt;</code>: the root element of the DOM, and it contains
        all of the other elements in the code
      </li>
      <li>
        <code>&lt;head&gt;</code>: contains metadata about the web page, such as
        the title and any linked CSS or JavaScript files
      </li>
      <li>
        <code>&lt;title&gt;</code>: contains the title of the web page, which
        will be displayed in the web browser's title bar or tab
      </li>
      <li>
        <code>&lt;body&gt;</code>: contains the main content of the web page,
        which will be displayed in the web browser's window
      </li>
      <li>
        <code>&lt;p&gt;</code>: contains the paragraphs of text on the web page
      </li>
      <li>
        <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>: child elements of
        the <code>&lt;p&gt;</code> elements, they are used to mark text as
        important and emphasized respectively
      </li>
    </ul>
    <p className="note-tip">
      <strong>Note</strong>: Only the elements inside the{" "}
      <code>&lt;body&gt;</code> tag renders in the web browser.
    </p>
  </section>
);

const HtmlElements = () => (
  <section id="html-elements" className="content-section">
    <h2>What are HTML elements?</h2>
    <p>
      HTML elements consist of several parts, including the opening and closing
      tags, the content, and the attributes. Here is an explanation of each of
      these parts:
    </p>
    <figure>
      <img
        className="image-with-border"
        src="https://www.programiz.com/sites/tutorial2program/files/basics-elements-in-html.png"
        title="HTML example"
        alt="A simple HTML example to demonstrate hierarchy"
        style={{ width: "100%", height: "auto" }}
      />
    </figure>
    <ul>
      <li>
        <strong>The opening tag</strong>: This consists of the element name,
        wrapped in angle brackets. It indicates the start of the element and the
        point at which the element's effects begin.
      </li>
      <li>
        <strong>The closing tag</strong>: This is the same as the opening tag,
        but with a forward slash before the element name. It signifies the end
        of the element and where its effects cease.
      </li>
      <li>
        <strong>The content</strong>: This is the element's internal text or
        image. It's the part of the element that is directly shown to the
        viewer.
      </li>
      <li>
        <strong>Attributes</strong>: These give additional information about the
        element. They are included within the opening tag and are used to
        customize an element's behavior or appearance.
      </li>
    </ul>
    <Toast className="custom-toast">
      <Toast.Header
        style={{ backgroundColor: "#003143", color: "white", width: "100%" }}
      >
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">HTML</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body
        style={{ backgroundColor: "black", color: "white", width: "100%" }}
      >
        <pre>
          <code>
            {`<!DOCTYPE html>
<html>
<head>
  <title>My web page</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>This is my first web page.</p>
  <p>It contains a <strong>main heading</strong> and <em>paragraph</em>.</p>
</body>
</html>`}
          </code>
        </pre>
      </Toast.Body>
    </Toast>
    <p>
      In the example above, the <code>&lt;html&gt;</code> element is the root
      element of the hierarchy and contains two child elements:{" "}
      <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>. The{" "}
      <code>&lt;head&gt;</code> element, in turn, contains a child element
      called the <code>&lt;title&gt;</code>, and the <code>&lt;body&gt;</code>{" "}
      element contains child elements: <code>&lt;h1&gt;</code> and{" "}
      <code>&lt;p&gt;</code>.
    </p>
  </section>
);

const HtmlAttributes = () => (
  <section id="html-attributes" className="content-section">
    <h2>What are HTML attributes?</h2>
    <p>
      HTML attributes provide additional information about an element or control
      its behavior in some way. Attributes are always included in the opening
      tag and are written as name/value pairs, like this:
    </p>
    <figure>
      <img
        className="image-with-border"
        src="https://www.petanikode.com/img/html/tag/element.png"
        title="HTML example"
        alt="A simple HTML example to demonstrate hierarchy"
        style={{ width: "100%", height: "auto" }}
      />
    </figure>
    <ul>
      <li>
        <code>&lt;attribute_name&gt;="attribute_value"</code>: This is how
        attributes are typically structured. The value can be either
        alphanumeric or numeric, depending on the attribute in question.
      </li>
      <li>
        Attributes provide information to browsers and describe the
        characteristics of elements. We use many types of <strong>HTML</strong>{" "}
        within the text. <strong>Browser</strong> and us in this example.
      </li>
    </ul>
    <Toast className="custom-toast">
      <Toast.Header
        style={{ backgroundColor: "#003143", color: "white", width: "100%" }}
      >
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">HTML</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body
        style={{ backgroundColor: "black", color: "white", width: "100%" }}
      >
        <pre>
          <code>
            {`<!DOCTYPE html>
<html>
<head>
  <title>My web page</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>This is my first web page.</p>
  <p>It contains a <strong>main heading</strong> and <em>paragraph</em>.</p>
</body>
</html>`}
          </code>
        </pre>
      </Toast.Body>
    </Toast>
    <p>
      In the example above, the <code>&lt;html&gt;</code> element is the root
      element of the hierarchy and contains two child elements:{" "}
      <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>. The{" "}
      <code>&lt;head&gt;</code> element, in turn, contains a child element
      called the <code>&lt;title&gt;</code>, and the <code>&lt;body&gt;</code>{" "}
      element contains child elements: <code>&lt;h1&gt;</code> and{" "}
      <code>&lt;p&gt;</code>.
    </p>
  </section>
);

const HtmlSyntax = () => (
  <section id="html-syntax" className="content-section">
    <h2>HTML Syntax</h2>
    <p>
      HTML syntax refers to the set of rules that define the combinations of
      symbols that are considered to be correctly structured for a document or
      fragment to be considered HTML. It's important to understand these rules
      as they dictate how HTML code should be written and formatted.
    </p>
    <ul>
      <li>
        HTML is not case-sensitive, meaning that the tags can be written in
        uppercase, lowercase, or a mixture of both. However, it's considered
        best practice to write them in lowercase to maintain consistency and
        readability.
      </li>
      <li>
        HTML documents must begin with a document type declaration,{" "}
        <code>&lt;!DOCTYPE html&gt;</code>, which tells the web browser which
        version of HTML the document is written in. This declaration is not an
        HTML tag, and it does not have a closing tag.
      </li>
      <li>
        HTML tags are enclosed in angle brackets, <code>&lt;</code> and{" "}
        <code>&gt;</code>, to form elements. Most elements have both opening and
        closing tags, although some elements are self-closing and only have an
        opening tag.
      </li>
      <li>
        HTML comments begin with <code>&lt;!--</code> and end with{" "}
        <code>--&gt;</code>. They can be used to leave notes or explanations
        within the code, and they are not displayed in the web browser.
      </li>
    </ul>
    <Toast className="custom-toast">
      <Toast.Header
        style={{ backgroundColor: "#003143", color: "white", width: "100%" }}
      >
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">HTML</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body
        style={{
          backgroundColor: "black",
          color: "white",
          width: "100%",
          height: "100%",
        }}
      >
        <pre>
          <code>
            {`<!DOCTYPE html>
<html>
<head>
  <title>My web page</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>This is my first web page.</p>
  <p>It contains a <strong>main heading</strong> and <em>paragraph</em>.</p>
</body>
</html>`}
          </code>
        </pre>
      </Toast.Body>
    </Toast>
    <p>
      In the example above, the <code>&lt;html&gt;</code> element is the root
      element of the hierarchy and contains two child elements:{" "}
      <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>. The{" "}
      <code>&lt;head&gt;</code> element, in turn, contains a child element
      called the <code>&lt;title&gt;</code>, and the <code>&lt;body&gt;</code>{" "}
      element contains child elements: <code>&lt;h1&gt;</code> and{" "}
      <code>&lt;p&gt;</code>.
    </p>
  </section>
);

const BestWayToLearnHtml = ({ handleShow }) => (
  <section id="best-way-to-learn-html" className="content-section">
    <h2>Best Way to Learn HTML</h2>
    <p>
      The best way to learn HTML is to practice by creating your own web pages.
      Start with simple projects and gradually increase the complexity as you
      become more comfortable with the language. There are also many online
      resources and tutorials available that can help you learn HTML and improve
      your skills.
    </p>
    <button className="btn btn-primary" onClick={handleShow}>
      Watch HTML Tutorial Video
    </button>
  </section>
);
export default HtmlBasicsWithStyles;
