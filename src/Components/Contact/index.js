import React from "react";
import { ContactStyles } from "./ContactElements";

export default function Contact() {
  return (
    <ContactStyles className="section">
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src="https://i.imgur.com/51pkitt.jpg" />
          </div>
          <div className="content">
            <h2>Card One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nulla ab repellat quas aliquid sequi architecto
              mollitia perspiciatis quaerat libero sapiente
            </p>
          </div>
        </div>
      </div>
    </ContactStyles>
  );
}
