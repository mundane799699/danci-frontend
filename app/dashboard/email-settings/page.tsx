import EmailSettingsForm from "../../../components/EmailSettingsForm";

const EmailSettingsPage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">每日单词邮件设置</h1>
      <EmailSettingsForm />
    </div>
  );
};

export default EmailSettingsPage;
