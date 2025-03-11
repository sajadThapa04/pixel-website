import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Icon for success
import { motion } from "framer-motion"; // For animations

export default function ThankYouPage() {
  const navigate = useNavigate();
  const [secondsRemaining, setSecondsRemaining] = useState(7); // Start with 7 seconds

  useEffect(() => {
    // Start the countdown timer
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev === 1) {
          clearInterval(timer); // Stop the timer when it reaches 0
          navigate("/"); // Redirect to the home page
        }
        return prev - 1; // Decrease the seconds by 1
      });
    }, 1000); // Update every second

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animate to this state
      transition={{ duration: 0.5 }} // Animation duration
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100"
    >
      {/* Icon with animation */}
      <motion.div
        initial={{ scale: 0 }} // Start small
        animate={{ scale: 1 }} // Scale up
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }} // Spring animation
        className="mb-6"
      >
        <CheckCircleIcon className="h-24 w-24 text-green-500" />
      </motion.div>

      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">
        Thank You!
      </h1>

      {/* Message */}
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        We have received your details and will get back to you shortly.
      </p>

      {/* Dynamic Countdown Message */}
      <motion.p
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Fade in
        transition={{ delay: 0.5 }} // Delay the animation
        className="text-sm text-gray-500"
      >
        You will be redirected to the home page in {secondsRemaining} seconds...
      </motion.p>

      {/* Optional: Button to go back immediately */}
      <motion.button
        whileHover={{ scale: 1.05 }} // Scale up on hover
        whileTap={{ scale: 0.95 }} // Scale down on click
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-200"
      >
        Go Back Home
      </motion.button>
    </motion.div>
  );
}