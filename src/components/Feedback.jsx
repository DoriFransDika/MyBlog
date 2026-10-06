import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactForm = styled.div`
  width: 100%;
  max-width: 620px;
  margin: 0 auto;
  padding: 36px 32px;
  border: 1px solid var(--border-subtle);
  background-color: var(--bg-card);
  color: var(--text-main);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  animation: ${fadeInUp} 0.6s ease-out;

  h2 {
    margin-bottom: 24px;
    color: var(--text-heading);
    font-weight: 800;
    font-size: 2.2rem;
    letter-spacing: -0.5px;
  }

  form {
    display: grid;
    gap: 18px;
  }

  label {
    font-weight: 600;
    color: var(--text-main);
    font-size: 0.95rem;
    margin-bottom: 2px;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 15px;
    background-color: #ffffff !important;
    color: #111827 !important;
    outline: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      border-color: var(--primary-accent);
      box-shadow: 0 0 0 3px var(--primary-accent-glow);
    }
  }

  textarea {
    height: 140px;
    resize: vertical;
  }

  button {
    background-color: var(--primary-accent);
    color: #111827;
    border: none;
    padding: 14px 24px;
    cursor: pointer;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    box-shadow: 0 4px 14px var(--primary-accent-glow);
    transition: all 0.25s ease;
    margin-top: 10px;

    &:hover {
      background-color: var(--primary-accent-hover);
      color: #111827;
      transform: translateY(-2px);
      box-shadow: 0 6px 18px var(--primary-accent-glow);
    }
  }
`;

class Feedback extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Form submitted successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "There was an error submitting the form. Please try again later."
        );
      });
  };

  render() {
    return (
      <ContactForm>
        <h2>Contact Us</h2>
        <form
          action="https://formspree.io/f/meqyvdpj"
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Masukkan nama Anda" required />
          </div>

          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" id="email" name="email" placeholder="contoh@domain.com" required />
          </div>

          <div>
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" placeholder="Topik pesan..." required />
          </div>

          <div>
            <label htmlFor="message">Your message:</label>
            <textarea id="message" name="message" placeholder="Tuliskan pesan Anda di sini..." required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </ContactForm>
    );
  }
}

export default Feedback;
