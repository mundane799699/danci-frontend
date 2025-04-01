import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="absolute top-6 left-6 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      邮件单词
    </Link>
  );
}
