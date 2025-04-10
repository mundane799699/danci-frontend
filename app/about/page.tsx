import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">关于邮件单词</h1>
      <p className="text-gray-600 mb-4">
        该网站主要是给我自己背单词用的。因为我自己是个懒人，懒得连背单词app都不想打开。
      </p>
      <p className="text-gray-600 mb-4">
        所以我就想每天给自己发一封邮件，邮件里包含一些单词。
      </p>
      <p className="text-gray-600 mb-4">
        这样我每天打开看一眼,就算是完成每天的背单词任务了。
      </p>
      <p className="text-gray-600 mb-4">
        单词数据来自于{" "}
        <Link
          href="https://github.com/Ceelog/DictionaryByGPT4"
          className="text-blue-500 hover:text-blue-700 underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          DictionaryByGPT4
        </Link>
      </p>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">意见反馈</h1>
      <p className="text-gray-600 mb-4">
        有任何问题请发邮件至{" "}
        <span className="text-blue-500 hover:text-blue-700 font-medium">
          799699348@qq.com
        </span>
      </p>
      <p className="text-gray-600 mb-4">
        或者扫描二维码添加我的微信,{" "}
        <span className="font-bold">添加时请务必备注“邮件单词”</span>
      </p>
      <img
        src="https://cdn.mundane.ink/202402032206594.png"
        alt="二维码"
        className="mt-4 w-1/2"
      />
    </div>
  );
};

export default AboutPage;
