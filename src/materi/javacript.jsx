import React, { useState } from "react";
import { Modal, Button, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const JavaScrip = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="tutorial-content">
      <Introduction />
      <hr />
      <JavaScriptForYou />
      <hr />
      <BestWayToLearnJavaScript handleShow={handleShow} />

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>JavaScript Tutorial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/mD6uSGSjgr4"
              allowFullScreen
              title="JavaScript Tutorial"
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>

      <style>{`
        .content-section {
          padding: 1rem;
        }

        /* Specific exclusion for Introduction */
        #introduction {
          padding-right: 0;
          padding-left: 0;
        }

        .code-segments {
          display: flex;
          flex-direction: column;
        }

        .code-segments__item {
          margin-bottom: 1rem;
        }

        .custom-toast {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .custom-toast-header {
          background-color: #003143;
          color: white;
        }

        .custom-toast-body {
          background-color: black;
          color: white;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .note-tip {
          background-color: #f5f5f5;
          padding: 10px;
          border-left: 5px solid #4caf50;
          margin-top: 20px;
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

        .embed-responsive-16by9::before {
          padding-top: 56.25%;
        }

        @media (min-width: 768px) {
          .content-section {
            padding: 2rem 4rem;
          }

          .code-segments {
            flex-direction: row;
          }

          .code-segments__item {
            flex: 1;
            margin-right: 1rem;
          }

          .code-segments__item:last-child {
            margin-right: 0;
          }
        }
  
        @media (min-width: 1024px) {
          .content-section {
            padding: 2rem 6rem;
          }
        }

        .embed-responsive-item {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>
    </div>
  );
};

const Introduction = () => (
  <section
    id="introduction"
    style={{
      backgroundImage: `url('https://assets-global.website-files.com/606a802fcaa89bc357508cad/61143444834cd54b9b0a88b3_2-p-2600.png')`,
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
        JavaScript Overview
      </h1>
      <p style={{ fontSize: "1.5rem", color: "#fff" }}>
        JavaScript is the most popular programming language used in website
        development. It offers various career opportunities in front-end,
        backend, and mobile development.
      </p>
    </div>
  </section>
);

const JavaScriptForYou = () => (
  <section id="js-javascript-for-you" className="content-section">
    <h2>Is JavaScript for You?</h2>
    <p>
      Choosing whether to learn JavaScript depends on your interests and career
      goals.
    </p>
    <h3>JavaScript from Learning Perspective</h3>
    <p>
      When compared to other languages like C or Java, the syntax of JavaScript
      is quite simple and straightforward.
    </p>
    <p>Here's a code snippet of adding two numbers in JavaScript and C.</p>
    <div className="code-segments mb-4x">
      <div className="code-segments__item">
        <Toast className="custom-toast">
          <Toast.Header className="custom-toast-header">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">JS</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className="custom-toast-body">
            <pre>
              <code>
                {`let x = 10;
let y = 5;
console.log(x + y);`}
              </code>
            </pre>
          </Toast.Body>
        </Toast>
      </div>
      <div className="code-segments__item">
        <Toast className="custom-toast">
          <Toast.Header className="custom-toast-header">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">C</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className="custom-toast-body">
            <pre>
              <code>
                {`#include <stdio.h>

int main() {
    int x = 5, y = 10;
    printf("%d", x + y);
    return 0;
}`}
              </code>
            </pre>
          </Toast.Body>
        </Toast>
      </div>
    </div>
    <p>As you can see, JavaScript code is readable and easier to understand.</p>
    <p>
      Learning JavaScript is particularly important because it serves as the
      foundation for mastering various web development frameworks like React,
      Next, and Node.
    </p>
    <h3>JavaScript as Career Choice</h3>
    <p>
      JavaScript offers numerous career opportunities in web development, mobile
      applications, game development, and IoT.
    </p>
    <p>
      However, there are areas where choosing JavaScript might not be your best
      option. For example, if you are interested in data science, machine
      learning, AI, or game development, then JavaScript is not the right
      answer.
    </p>
    <p>
      In these cases, alternatives such as Python for data science, machine
      learning, AI and C++ for game development will be more suitable.
    </p>
    <p>
      Therefore, your career choices can guide you in selecting which
      programming language to learn.
    </p>
  </section>
);

const BestWayToLearnJavaScript = ({ handleShow }) => (
  <section id="best-way" className="content-section">
    <h2>Best Way to Learn JavaScript</h2>
    <p>
      There is no right or wrong way to learn JavaScript. It all depends on your
      learning style and pace.
    </p>
    <p>
      In this section, we have included the best JavaScript learning resources
      according to your learning preferences, whether you prefer text-based,
      video-based, or interactive courses.
    </p>
    <h3>Online Video</h3>
    <p className="note-tip">
      <strong>Best:</strong> if you want hands-on learning, get your progress
      tracked, and maintain a learning streak
    </p>
    <p>
      If you're more of a visual learner, we have created a JavaScript video
      course to help kickstart your JavaScript journey.
    </p>
    <p>
      Additionally, there's a popular video course by freeCodeCamp available on
      YouTube to further guide you on your JavaScript journey.
    </p>{" "}
    <Button variant="primary" onClick={handleShow}>
      Watch JavaScript Tutorial Video
    </Button>
  </section>
);

export default JavaScrip;
