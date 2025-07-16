import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
  AiFillEnvironment,
} from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // Check if environment variables are set
  const isEmailJSConfigured =
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!formData.email.includes("@") || !formData.email.includes("."))
      return "Please enter a valid email address";
    if (!formData.subject.trim()) return "Subject is required";
    if (!formData.message.trim()) return "Message is required";
    if (formData.message.length < 10)
      return "Message must be at least 10 characters long";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if EmailJS is configured
    if (!isEmailJSConfigured) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setSubmitStatus("validation_error");
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Debug: Log EmailJS configuration
    console.log("EmailJS Config:", {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      publicKey: EMAILJS_PUBLIC_KEY
        ? "***" + EMAILJS_PUBLIC_KEY.slice(-4)
        : "NOT_SET",
    });

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Saim Raza", // Your name
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS Result:", result);

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <Container fluid className="contact-section" id="contact">
        <Particle />
        <Container className="contact-content">
          <Row>
            <Col md={12} className="contact-header">
              <h1 className="contact-title">
                <span className="purple">Get In Touch</span>
              </h1>
              <p className="contact-subtitle">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology!
              </p>
            </Col>
          </Row>

          <Row className="contact-main">
            {/* Contact Form */}
            <Col lg={12} md={12} className="contact-form-container">
              <div className="contact-form-card">
                <h3 className="contact-form-title">Send Me a Message</h3>

                {!isEmailJSConfigured && (
                  <Alert variant="danger" className="contact-alert">
                    <strong>Contact form is not configured.</strong> Please set
                    up the following environment variables:
                    <br />
                    • REACT_APP_EMAILJS_SERVICE_ID
                    <br />
                    • REACT_APP_EMAILJS_TEMPLATE_ID
                    <br />
                    • REACT_APP_EMAILJS_PUBLIC_KEY
                    <br />
                    <br />
                    For local development, create a <code>.env</code> file. For
                    production, add these as GitHub Secrets.
                  </Alert>
                )}

                {submitStatus === "success" && (
                  <Alert variant="success" className="contact-alert">
                    Thank you for your message! I'll get back to you soon.
                  </Alert>
                )}

                {submitStatus === "error" && (
                  <Alert variant="danger" className="contact-alert">
                    Something went wrong. Please try again or contact me
                    directly via email.
                  </Alert>
                )}

                {submitStatus === "validation_error" && (
                  <Alert variant="warning" className="contact-alert">
                    Please fill in all required fields correctly. Message must
                    be at least 10 characters long.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} className="contact-form">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <div className="form-row">
                          <Form.Label>Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your name"
                            className="form-control-custom"
                          />
                        </div>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <div className="form-row">
                          <Form.Label>Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your.email@example.com"
                            className="form-control-custom"
                          />
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="form-group">
                    <div className="form-row">
                      <Form.Label>Subject *</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What's this about?"
                        className="form-control-custom"
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="form-group">
                    <div className="form-row">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell me about your project, opportunity, or just say hello!"
                        className="form-control-custom"
                      />
                    </div>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={isSubmitting || !isEmailJSConfigured}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : !isEmailJSConfigured
                      ? "Form Not Configured"
                      : "Send Message"}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
