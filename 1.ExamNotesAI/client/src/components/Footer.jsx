import React from "react";
import { motion } from "motion/react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";

const Footer = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSignOut = async () => {
        try {
          await axios.post(serverUrl+"/api/auth/logout",{withCredentials:true})
          dispatch(setUserData(null))
           navigate("/auth")
        } catch (error) {
          console.log(error)
        }
  }
  return (
    <motion.footer
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
        transition: { duration: 0.3 },
      }}
      className="
        z-10 mx-6 mt-24 mb-6
        rounded-3xl
        border border-white/10
        bg-black/70
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        px-8 py-8
        text-white
      "
    >
      {/* Main Footer */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="ExamNotes AI"
              className="h-[55px] w-[55px] object-contain"
            />

            <h2 className="text-xl font-semibold">
              ExamNotes AI
            </h2>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
            ExamNotes AI helps students generate exam-focused notes,
            revision material, diagrams, and printable PDFs using AI.
          </p>
        </motion.div>

        {/* Quick Links */}
        <div className="md:ml-auto">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a
               onClick={()=>navigate("/notes")} className="text-gray-400 transition-colors hover:text-white hover:cursor-pointer"
              >
                Notes
              </a>
            </li>

            <li>
              <a
                 onClick={()=>navigate("/History")}
                className="text-gray-400 transition-colors hover:text-white hover:cursor-pointer"
              >
                History
              </a>
            </li>
              <li>
              <a
                 onClick={()=>navigate("/pricing")}
                className="text-gray-400 transition-colors hover:text-white hover:cursor-pointer"
              >
              Add Credits
              </a>
            </li>
          </ul>
        </div>

        {/* Product */}
        <div className="md:ml-auto">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            ExamNotes AI
          </h3>

          <ul className="space-y-3 text-sm">
            <li onClick={()=>navigate("/auth")} className="text-gray-400 transition-colors hover:text-white cursor-pointer">
              SignIn
            </li>

            <li onClick={handleSignOut} className="text-gray-400 transition-colors hover:text-white cursor-pointer">
              SignOut
            </li>

           
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-white/10" />

      {/* Bottom */}
      <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} ExamNotes AI. All rights reserved.
        </p>

        <p>
          Built with <span className="text-gray-300">AI</span> for students.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;