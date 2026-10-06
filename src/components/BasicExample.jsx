import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled, { keyframes } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

// Definisikan animasi dengan @keyframes
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px); /* Geser konten ke bawah saat mulai */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Kembalikan ke posisi normal */
  }
`;

// Komponen styled untuk menerapkan animasi
const AnimatedCard = styled(Card)`
  animation: ${fadeIn} 0.5s ease-out; /* Terapkan animasi fadeIn */
`;

function BasicExample() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to Our Exclusive Collection</h1>
      <p style={{ padding: "1rem", fontSize: "1.2rem", color: "#555" }}>
        Browse through our exquisite selection of cards, each designed to
        capture the essence of style and functionality. We hope you enjoy
        exploring our collection as much as we enjoyed curating it for you!
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatedCard style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.freecodecamp.org/news/content/images/2022/04/pankaj-patel-6JVlSdgMacE-unsplash.jpg"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>CDN starter</Card.Title>
            <Card.Text>
              Instantly include Bootstrap's compiled CSS and JavaScript via the
              jsDelivr CDN.
            </Card.Text>
            <Button
              variant="primary"
              href="https://github.com/twbs/examples/tree/main/starter/"
              target="_blank"
            >
              Go somewhere
            </Button>
          </Card.Body>
        </AnimatedCard>

        <AnimatedCard style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.udacity.com/blog/wp-content/uploads/2020/06/HTML_Blog-scaled.jpeg"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Sass & JS</Card.Title>
            <Card.Text>
              Use npm to import and compile Bootstrap's Sass with Autoprefixer
              and Stylelint, plus our bundled JavaScript.
            </Card.Text>
            <Button
              variant="primary"
              href="https://github.com/twbs/examples/tree/main/sass-js/"
              target="_blank"
            >
              Go somewhere
            </Button>
          </Card.Body>
        </AnimatedCard>

        <AnimatedCard style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.elaborata.com.br/u/treinamentos/163/desenvolvimento-front-end-com-html-css-javascript-e-bootstrap-capa.jpg"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Sass & ESM JS</Card.Title>
            <Card.Text>
              Import and compile Bootstrap's Sass with Autoprefixer and
              Stylelint, and compile our source JavaScript with an ESM shim.
            </Card.Text>
            <Button
              variant="primary"
              href="https://github.com/twbs/examples/tree/main/sass-js-esm/"
              target="_blank"
            >
              Go somewhere
            </Button>
          </Card.Body>
        </AnimatedCard>

        <AnimatedCard style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="http://fossil.2of4.net/html-editor/logo"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Bootstrap color modes</Card.Title>
            <Card.Text>
              Import and compile Bootstrap's Sass with Stylelint, and the
              Bootstrap color modes.
            </Card.Text>
            <Button
              variant="primary"
              href="https://github.com/twbs/examples/tree/main/color-modes/"
              target="_blank"
            >
              Go somewhere
            </Button>
          </Card.Body>
        </AnimatedCard>

        <AnimatedCard style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://modulards.com/wp-content/uploads/2024/06/Como-utilizar-el-anclaje-HTML-para-mejorar-la-experiencia-de-Usuario-820x550.jpg"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Bootstrap Icons</Card.Title>
            <Card.Text>
              Import and compile Bootstrap's Sass with Stylelint, PurgeCSS, and
              the Bootstrap Icons web font.
            </Card.Text>
            <Button
              variant="primary"
              href="https://github.com/twbs/examples/tree/main/icons-font/"
              target="_blank"
            >
              Go somewhere
            </Button>
          </Card.Body>
        </AnimatedCard>

        <AnimatedCard style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://tse1.mm.bing.net/th?id=OIP.J4Lkof6K3jZpKrxVXdy-IwHaEK&pid=Api&P=0&w=300&h=300"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Parcel</Card.Title>
            <Card.Text>
              Import and bundle Bootstrap's source Sass and JavaScript via
              Parcel.
            </Card.Text>
            <Button
              variant="primary"
              href="https://github.com/twbs/examples/tree/main/parcel/"
              target="_blank"
            >
              Go somewhere
            </Button>
          </Card.Body>
        </AnimatedCard>

        <AnimatedCard style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://static.vecteezy.com/system/resources/previews/000/523/378/original/web-development-application-design-coding-and-programming-on-laptop-and-smartphone-concept-with-programming-language-and-program-code-and-layout-on-screen-vector.jpg"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Vite</Card.Title>
            <Card.Text>
              Import and bundle Bootstrap's source Sass and JavaScript with
              Vite.
            </Card.Text>
            <Button
              variant="primary"
              href="https://github.com/twbs/examples/tree/main/vite/"
              target="_blank"
            >
              Go somewhere
            </Button>
          </Card.Body>
        </AnimatedCard>

        <AnimatedCard style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://as2.ftcdn.net/v2/jpg/03/25/01/55/1000_F_325015501_0OREXfdOKXVEkRb3CoULxDDMgGy9gPNW.jpg"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Webpack</Card.Title>
            <Card.Text>
              Import and bundle Bootstrap's source Sass and JavaScript with
              Webpack.
            </Card.Text>
            <Button
              variant="primary"
              href="https://github.com/twbs/examples/tree/main/webpack/"
              target="_blank"
            >
              Go somewhere
            </Button>
          </Card.Body>
        </AnimatedCard>
      </div>
    </div>
  );
}

export default BasicExample;
