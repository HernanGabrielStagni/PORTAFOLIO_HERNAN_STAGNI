import React from "react";

const Contact = () => {
  return (
    <div>
      <section>
        <h2>Contactame</h2>
        <div>
          <form
            // action="https://formsubmit.co/hernangabrielst@gmail.com"
           //https://formsubmit.co/
           
            action="https://formsubmit.co/64c6be63e0134c75fd8e82621ae8562e"
            method="POST"
          >
            <input name='first Name' placeholder="name1" type="text" required/>
            <input name='Last Name' placeholder="last name2" type="text" required/>
            <input name='Email'  placeholder="your email" type="email" required/>
            <textarea  name='Message'   placeholder="message" type="text" required></textarea>

            <button type="submit">send</button>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:5177/"
            />
            <input type="hidden" name="_captcha" value="false" />
          </form>

        </div>
      </section>
    </div>
  );
};

export default Contact;
