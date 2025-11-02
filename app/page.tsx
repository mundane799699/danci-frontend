import UserNav from "@/components/UserNav";
import StartButton from "@/components/StartButton";
import Navbar from "./_components/Navbar";
export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />

      <div className="w-full pt-16">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <main className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full px-4 py-1.5 mb-8 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              ✨ 每日精选，温暖到达
            </div>

            {/* Main Title */}
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              人生提示词
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              每天一封提示词邮件，唤醒你内心的力量
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex items-center justify-center gap-x-6">
              <StartButton />
              <a
                href="/about"
                target="_blank"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                了解更多 <span aria-hidden="true">→</span>
              </a>
            </div>
          </main>

          {/* Feature Card */}
          <div className="mt-28 max-w-3xl mx-auto">
            <div className="relative rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-10 shadow-xl dark:shadow-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
              {/* Decorative gradient */}
              <div className="absolute -top-1 -left-1 -right-1 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-3xl"></div>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  💌 如何开始
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  设定你的邮箱和时间，
                  <br />
                  每天从数百条励志与智慧短句中，
                  <br />
                  随机挑选一条「人生提示词」用邮件发给你。
                  <br />
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                    这不是鸡汤，而是一则指导你人生方向的提示词。
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                定时推送
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                每天固定时间，准时送达你的邮箱
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                精选内容
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                数百条优质句子，每日为你甄选
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                启发思考
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                不止于励志，更在于深度共鸣
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Icon */}
      <a
        href="https://github.com/mundane799699/danci-backend"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-200 hover:scale-110 border border-gray-200 dark:border-gray-700"
      >
        <svg
          className="w-6 h-6"
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
