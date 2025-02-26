import { useState } from "react";
// import Button from "../components/Button";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error when user starts typing
    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "",
      email: !/\S+@\S+\.\S+/.test(formData.email), // Basic email validation
      phone: formData.phone.trim() === "",
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      alert("Form submitted successfully!");
      // Handle form submission logic
    }
  };

  return (
    <section className="main-container mb-5">
      <div className="content-container text-primary  mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-5 gap-2 ">
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
            {/* <Button btnName="submit" /> */}
            <button
              type="submit"
              className="uppercase w-full py-3 px-6 rounded-2xl border-2 border-text-hover text-secondary bg-text-hover font-bold transition-all duration-300 hover:bg-secondary hover:text-text-hover"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
