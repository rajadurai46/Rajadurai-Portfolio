import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(formRef.current);

      /* STEP 1: TOKENIZE USER DATA */
      const tokenizeRes = await fetch(
        "https://rajadurai-portfolio.onrender.com/api/contact/tokenize",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.get("user_name"),
            email: formData.get("user_email"),
            phone: formData.get("user_phone"),
            message: formData.get("message"),
          }),
        }
      );

      const tokenizeData = await tokenizeRes.json();

      if (!tokenizeRes.ok || !tokenizeData.token) {
        throw new Error(tokenizeData.message || "Token generation failed");
      }

      /* STEP 2: SAVE USING TOKEN ONLY */
      const saveRes = await fetch(
        "https://rajadurai-portfolio.onrender.com/api/contact/save",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: tokenizeData.token,
          }),
        }
      );

      const saveData = await saveRes.json();

      if (!saveRes.ok) {
        throw new Error(saveData.message || "Failed to save contact");
      }

      /* SUCCESS */
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully. Please check your email.",
        icon: "success",
        confirmButtonColor: "#06b6d4",
      });

      formRef.current.reset();
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <section
      id="contact"
      className="
      py-24 border-b border-neutral-900
      bg-white dark:bg-black dark:text-white
      "
    >
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3">
          Contact <span className="text-cyan-600">Me</span>
        </h2>
        <p className="text-center mb-10 text-neutral-600 dark:text-neutral-300">
          Feel free to reach out for any queries or collaborations
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="
          bg-white dark:bg-neutral-900
          rounded-2xl p-8
          shadow-lg
          border border-neutral-300 dark:border-neutral-700
          "
        >
          {/* Name */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold">Full Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter your name"
              className="
              w-full px-4 py-2 rounded-lg
              border border-neutral-300 dark:border-neutral-700
              focus:outline-none focus:ring-2 focus:ring-cyan-500
              dark:bg-black
              "
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold">Email Address</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="
              w-full px-4 py-2 rounded-lg
              border border-neutral-300 dark:border-neutral-700
              focus:outline-none focus:ring-2 focus:ring-cyan-500
              dark:bg-black
              "
            />
          </div>

          {/* Phone */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold">Phone Number</label>
            <input
              type="tel"
              name="user_phone"
              required
              placeholder="Enter your number"
              className="
              w-full px-4 py-2 rounded-lg
              border border-neutral-300 dark:border-neutral-700
              focus:outline-none focus:ring-2 focus:ring-cyan-500
              dark:bg-black
              "
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Type your message..."
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
              className="
              w-full px-4 py-2 rounded-lg
              border border-neutral-300 dark:border-neutral-700
              focus:outline-none focus:ring-2 focus:ring-cyan-500
              resize-none overflow-hidden
              dark:bg-black
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
            w-full py-3 rounded-full
            bg-cyan-600 text-white font-semibold
            hover:bg-cyan-500 hover:scale-[1.02]
            transition-all
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;




