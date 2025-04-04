interface ModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  content: string;
}

export default function Modal({
  isOpen,
  onConfirm,
  onCancel,
  title,
  content,
}: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-80 rounded-lg bg-white p-6">
        {title && <h3 className="mb-2 text-lg font-medium">{title}</h3>}
        <p className="mb-6 text-gray-600">{content}</p>
        <div className="pt-4 flex space-x-3">
          <button
            className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            onClick={onCancel}
          >
            取消
          </button>
          <button
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={onConfirm}
          >
            确定
          </button>
        </div>
      </div>
    </div>
  );
}
