import React from "react";
import "./Input.css";

export default function Input() {
  return (
    <>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        className="name-input"
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="email-input"
      />

      <label htmlFor="password">Message:</label>
      <textarea
        rows="4"
        cols="30"
        type="textarea"
        name="textarea"
        id="textarea"
        placeholder="Type your message"
        className="message-input"
      />
    </>
  );
}
