import UserNav from "@/components/UserNav";
import StartButton from "@/components/StartButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <UserNav />

      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <main className="text-center">
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
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              了解更多 <span aria-hidden="true">→</span>
            </a>
          </div>
        </main>

        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              个性化设置
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              设置您喜欢的邮件发送时间和每日单词数量
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              科学记忆
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              基于艾宾浩斯遗忘曲线，帮助您更好地记忆单词
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              持续学习
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              每天3-10个单词，循序渐进，轻松坚持
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
