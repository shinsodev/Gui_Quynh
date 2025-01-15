import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-11/12 sm:w-3/4 lg:w-1/2 relative">
        <div className="absolute top-0 left-0 w-16 h-16 bg-pink-200 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-pink-200 rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div
          className={`border-4 border-dashed border-pink-300 rounded-2xl p-6 bg-pink-100 transition-all duration-700 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-xl font-bold text-pink-700 mb-4">Gửi Quỳnh,</h1>
          <p className="text-pink-700 mb-4">
            Tui xin lỗi vì sự đường đột này, Quỳnh cho tui xin được hỏi là Quỳnh
            có đang thích ai chưa?
          </p>
          <p className="text-pink-700 mb-4">
            Tui đã suy nghĩ về chuyện này nhiều lần rồi. Và cảm thấy sẽ còn day
            dứt mãi trong lòng nếu chưa dám nói ra.
          </p>
          <p className="text-pink-700 mb-4">
            Hôm nay tui muốn lấy hết can đảm để thổ lộ rằng tui thật sự rất
            thích Quỳnh. Không biết Quỳnh có thể cho tui một cơ hội để hẹn hò
            với Quỳnh được không.
          </p>
          <p className="text-pink-700">
            Dù câu trả lời của Quỳnh là gì thì tui vẫn cảm ơn Quỳnh rất nhiều vì
            đã dành thời gian đọc bức thư này. Xin lỗi Quỳnh vì tui đã không dám
            mở lời trực tiếp.
          </p>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={toggleLetter}
            className="px-6 py-3 bg-pink-500 text-white font-bold rounded-full shadow-md hover:bg-pink-600 transition-all duration-300"
          >
            {isOpen ? "Đóng thư" : "Mở thư"}
          </button>
        </div>
        <div className="text-right mt-6">
          <p className="text-pink-500 italic font-serif">Thanh Tuyển</p>
        </div>
      </div>
    </div>
  );
}

export default App;
