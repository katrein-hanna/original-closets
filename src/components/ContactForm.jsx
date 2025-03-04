import { useEffect, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Use effect to clear the status message after 2 seconds
  useEffect(() => {
    let timeoutId;

    if (submitStatus) {
      timeoutId = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }

    // Clean up the timeout if component unmounts or status changes
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error when user starts typing
    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: false });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      email: !/\S+@\S+\.\S+/.test(formData.email), // Basic email validation
      phone: formData.phone.trim() === "",
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Web3Forms submission
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "2b8e8d4f-5a5f-4ba4-9aac-b14fb81057f2", // Get from web3forms.com
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `Original Closets Client: ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Reset the form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setSubmitStatus("success");
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="main-container mb-5">
      <div className="content-container text-primary mx-auto">
        {submitStatus === "success" && (
          <div className="bg-green-100 border border-text-hover text-primary px-4 py-3 rounded mb-4">
            <p>{`Thank you for your message! We'll contact you soon.`}</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p>
              Sorry, there was a problem sending your message. Please try again
              later.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-5 gap-2">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`peer w-full p-4 text-primary bg-secondary rounded-lg border ${
                  errors.name ? "border-red-500" : "border-link-hover"
                } focus:border-underLine focus:outline focus:outline-underLine`}
                required
              />
              <label
                htmlFor="name"
                className={`absolute left-3 text-sm text-primary/80 transition-all ${
                  formData.name ? "top-1 text-xs" : "top-3"
                } peer-focus:top-1 peer-focus:text-xs`}
              >
                Your Name
              </label>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">Name is required.</p>
              )}
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`peer w-full p-4 text-primary bg-secondary rounded-lg border ${
                  errors.email ? "border-red-500" : "border-link-hover"
                } focus:border-underLine focus:outline focus:outline-underLine`}
                required
              />
              <label
                htmlFor="email"
                className={`absolute left-3 text-sm text-primary/90 transition-all ${
                  formData.email ? "top-1 text-xs" : "top-3"
                } peer-focus:top-1 peer-focus:text-xs`}
              >
                Your Email
              </label>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  Enter a valid email.
                </p>
              )}
            </div>

            {/* Phone Input */}
            <div className="relative">
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`peer w-full p-4 text-primary bg-secondary rounded-lg border ${
                  errors.phone ? "border-red-500" : "border-link-hover"
                } focus:border-underLine focus:outline focus:outline-underLine`}
                required
              />
              <label
                htmlFor="phone"
                className={`absolute left-3 text-sm text-primary/80 transition-all ${
                  formData.phone ? "top-1 text-xs" : "top-3"
                } peer-focus:top-1 peer-focus:text-xs`}
              >
                Your Phone
              </label>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  Phone number is required.
                </p>
              )}
            </div>
          </div>

          {/* Message Input */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`peer w-full p-4 text-primary bg-secondary rounded-lg border ${
                errors.message ? "border-red-500" : "border-link-hover"
              } focus:border-underLine focus:outline focus:outline-underLine`}
              required
            ></textarea>
            <label
              htmlFor="message"
              className={`absolute left-3 text-sm text-primary/80 transition-all ${
                formData.message ? "top-1 text-xs" : "top-3"
              } peer-focus:top-1 peer-focus:text-xs`}
            >
              Your Message
            </label>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">Message is required.</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`uppercase w-full py-3 px-6 rounded-2xl border-2 border-text-hover text-secondary bg-text-hover font-bold transition-all duration-300 hover:bg-secondary hover:text-text-hover ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
