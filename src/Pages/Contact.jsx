import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import '../Component/Style/contact.scss';
import { Email , GitHub, WhatsApp, Facebook, LinkedIn, Twitter, Check} from '@mui/icons-material'

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_l67ojjf",
        "template_a0zv5l7",
        formRef.current,
        "user_tI7lQBNFktfz9o3TVazc2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="c-left">
        <div className="contact-wrapper">
          <h1>Let's discuss your project with me!</h1>
          <div className="c-items">
            <div className="c-item">
              <Email className="c-icon" />
              <span className="c-text">maulanarizkiali@gmail.com</span>
            </div>
            <div className="c-item">
              <WhatsApp className="c-icon" />
              <span className="c-text">+62-812-1484-0237</span>
            </div>
            <div className="c-item">
              <Facebook className="c-icon" />
              <span className="c-text">Rizki Ali Maulana</span>
            </div>
            <div className="c-item">
              <LinkedIn className="c-icon" />
              <span className="c-text">linkedin.com/in/rizkialimaulana</span>
            </div>
            <div className="c-item">
              <GitHub className="c-icon" />
              <span className="c-text">github.com/rizkialimaulana</span>
            </div>
            <div className="c-item">
              <Twitter className="c-icon" />
              <span className="c-text">@Rizkialim1807</span>
            </div>
          </div>
        </div>
      </div>
      <div className="c-right">
        <h1 className="email-title">Send me a message!</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            className="input-message"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            className="input-message"
            placeholder="youremail@email.com"
          />
          <input
            type="text"
            name="subject"
            className="input-message"
            placeholder="Subject"
          />
          <textarea name="message" id="" cols="30" rows="10" className="message">
            Write down your message!
          </textarea>
          <button className="submit">Submit</button>
          {done && (
            <span className="sent">
              <Check className='check' />
              Hello! your message has been sent to rizki
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact