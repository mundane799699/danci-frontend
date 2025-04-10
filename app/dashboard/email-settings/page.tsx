import EmailSettingsForm from "../../../components/EmailSettingsForm";

const EmailSettingsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        每日单词邮件设置
      </h1>
      <EmailSettingsForm />
    </div>
  );
};

export default EmailSettingsPage;
