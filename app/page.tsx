import UserNav from "@/components/UserNav";
import StartButton from "@/components/StartButton";
import Navbar from "./_components/Navbar";
export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      <div className="pt-16 max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <main className="text-center p-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            邮件单词
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            每天一封邮件，轻松记忆单词
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <StartButton />
            <a
              href="/about"
              target="_blank"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2"
            >
              了解更多 <span aria-hidden="true">→</span>
            </a>
          </div>
        </main>

        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              个性化设置
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              设置您喜欢的邮件发送时间和每日单词数量
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              科学记忆
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              基于艾宾浩斯遗忘曲线，帮助您更好地记忆单词
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              持续学习
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              每天3-10个单词，循序渐进，轻松坚持
            </p>
          </div>
        </div>
      </div>

      {/* GitHub Icon */}
      <a
        href="https://github.com/mundane799699/danci-backend"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
}
