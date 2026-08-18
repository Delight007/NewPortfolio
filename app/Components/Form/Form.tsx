import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  
  return (
    <div className="bg-white dark:bg-gray-900/40 p-8 rounded-2xl border border-slate-200 dark:border-gray-800 shadow-xl transition-colors duration-300">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <input
            className="flex-1 bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg py-3 px-4 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#a993fe] dark:focus:border-[#a993fe] focus:ring-1 focus:ring-[#a993fe] transition-all"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            name="firstname"
            placeholder="First Name"
          />
          <input
            className="flex-1 bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg py-3 px-4 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#a993fe] dark:focus:border-[#a993fe] focus:ring-1 focus:ring-[#a993fe] transition-all"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <input
          className="w-full bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg py-3 px-4 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#a993fe] dark:focus:border-[#a993fe] focus:ring-1 focus:ring-[#a993fe] transition-all"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          placeholder="Email Address"
        />

        <textarea
          className="w-full bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg py-3 px-4 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#a993fe] dark:focus:border-[#a993fe] focus:ring-1 focus:ring-[#a993fe] transition-all min-h-[150px] resize-y"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          name="message"
          placeholder="Your Message"
        ></textarea>

        <button className="w-full py-4 bg-gradient-to-r from-[#a993fe] to-[#7e61e7] hover:from-[#9c84fd] hover:to-[#6a4fd1] text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
}
