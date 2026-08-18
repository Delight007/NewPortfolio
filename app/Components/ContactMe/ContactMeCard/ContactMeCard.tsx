export default function ContactMeCard({ urlLink, text }) {
  return (
    <div className="bg-slate-50 dark:bg-gray-900/50 border border-slate-200 dark:border-gray-800 rounded-xl p-6 mb-6 flex items-center gap-6 transition-all duration-300 hover:shadow-lg dark:hover:border-purple-500/50 hover:border-purple-300 group">
      <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center p-3 shadow-sm group-hover:scale-110 transition-transform">
        <img className="max-w-full max-h-full object-contain filter dark:invert-0" src={urlLink} alt={text} />
      </div>
      <div className="text-slate-700 dark:text-gray-300 font-medium text-lg truncate flex-1">
        {text}
      </div>
    </div>
  );
}
