import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import '../assets/css/Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("Form Reference:", form.current);

        if (!form.current) {
            alert("Form reference is not assigned correctly.");
            return;
        }

        emailjs.sendForm(
            "service_oydhllp",
            "template_524cxvc",
            form.current,
            "8cxyuUMBwdfmWkXeK"
        ).then(
            (result) => {
                console.log("Email sent successfully:", result.text);
                setIsSent(true);
                form.current.reset();
                setTimeout(() => {
                    setIsSent(false);
                }, 5000);
            },
            (error) => {
                console.log("EmailJS Error:", error);
                alert("Failed to send message.");
            }
        );
    };

    return (
        <section className="form" id="Form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="formCon">
                            <div className="heading">
                                <h2>Get in <span>Touch</span></h2>
                            </div>
                            {isSent && (
                                <div className="alert alert-success" style={{ display: "block", marginBottom: "1rem" }}>
                                    Your message has been successfully sent!
                                </div>
                            )}
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" name="user_name" className="form-control" placeholder="Your Name" required />
                                    </div>
                                    <div className="col">
                                        <input type="email" name="user_email" className="form-control" placeholder="Your Email" required />
                                    </div>
                                    <div className="col">
                                        <input type="text" name="user_phone" className="form-control" placeholder="Your Phone no." required />
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col">
                                        <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col">
                                        <textarea name="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <button type="submit" className="myBtn">Let’s connect</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
