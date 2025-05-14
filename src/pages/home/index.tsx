import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 to-slate-900 flex items-center justify-center p-4">
      {/* Landscape Tutorial Container */}
      <div className="w-full h-full max-h-[95vh] aspect-video max-w-[95vw] bg-white rounded-xl overflow-hidden shadow-2xl relative flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 py-3 px-8">
          <h1 className="text-2xl font-bold text-white">
            Hướng Dẫn Kết Nối Smart Ring
            <span className="text-base font-normal text-cyan-50 ml-4">
              Thiết lập thiết bị chỉ với 4 bước đơn giản
            </span>
          </h1>
        </div>
        
        {/* Content */}
        <div className="flex-grow flex">
          {/* Steps Container */}
          <div className="flex flex-row w-full h-full">
            {/* Step 1 */}
            <div className="w-1/4 h-full p-4 border-r border-cyan-100">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center text-white text-lg font-bold mr-3 shadow-md">1</div>
                <h2 className="text-xl font-bold text-cyan-800">Đăng nhập và mở menu thiết bị</h2>
              </div>
              
              <div className="h-[calc(100%-4rem)] flex flex-col">
                {/* Phone Screenshot */}
                <div className="relative flex-grow bg-gradient-to-b from-cyan-50 to-white rounded-lg overflow-hidden border border-cyan-200 mb-3 shadow-md">
                  <img 
                    src="/screen_tutorial_1/1.png" 
                    alt="Đăng nhập và mở menu thiết bị" 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-1/3 right-14 w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-pulse flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-base text-cyan-700">Đăng nhập vào ứng dụng SNS, ở màn hình chính, nhấn vào biểu tượng nhẫn trên thanh công cụ</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="w-1/4 h-full p-4 border-r border-cyan-100">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center text-white text-lg font-bold mr-3 shadow-md">2</div>
                <h2 className="text-xl font-bold text-cyan-800">Bật Bluetooth và quét thiết bị</h2>
              </div>
              
              <div className="h-[calc(100%-4rem)] flex flex-col">
                {/* Phone Screenshot */}
                <div className="relative flex-grow bg-gradient-to-b from-cyan-50 to-white rounded-lg overflow-hidden border border-cyan-200 mb-3 shadow-md">
                  <img 
                    src="/screen_tutorial_1/2.png" 
                    alt="Bật Bluetooth và quét thiết bị" 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-1/3 right-14 w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-pulse flex items-center justify-center shadow-lg">
                    <div className="text-white font-bold">1</div>
                  </div>
                  <div className="absolute bottom-10 left-14 w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-pulse flex items-center justify-center shadow-lg">
                    <div className="text-white font-bold">2</div>
                  </div>
                </div>
                
                <p className="text-base text-cyan-700">Bật Bluetooth của thiết bị, sau đó ấn vào biểu tượng Bluetooth (1) và nhấn nút quét thiết bị (2). Đặt Smart Ring gần điện thoại</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="w-1/4 h-full p-4 border-r border-cyan-100">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center text-white text-lg font-bold mr-3 shadow-md">3</div>
                <h2 className="text-xl font-bold text-cyan-800">Kết nối thiết bị</h2>
              </div>
              
              <div className="h-[calc(100%-4rem)] flex flex-col">
                {/* Phone Screenshot */}
                <div className="relative flex-grow bg-gradient-to-b from-cyan-50 to-white rounded-lg overflow-hidden border border-cyan-200 mb-3 shadow-md">
                  <img 
                    src="/screen_tutorial_1/3.png" 
                    alt="Kết nối thiết bị" 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-1/2 left-14 w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-pulse flex items-center justify-center shadow-lg">
                    <div className="text-white font-bold">1</div>
                  </div>
                </div>
                
                <p className="text-base text-cyan-700">Sau khi quét xong, thiết bị Smart Ring sẽ xuất hiện trong danh sách. Nhấn vào thiết bị (1) để kết nối</p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="w-1/4 h-full p-4">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center text-white text-lg font-bold mr-3 shadow-md">4</div>
                <h2 className="text-xl font-bold text-cyan-800">Quản lý sức khỏe</h2>
              </div>
              
              <div className="h-[calc(100%-4rem)] flex flex-col">
                {/* Phone Screenshot */}
                <div className="relative flex-grow bg-gradient-to-b from-cyan-50 to-white rounded-lg overflow-hidden border border-cyan-200 mb-3 shadow-md">
                  <img 
                    src="/screen_tutorial_1/4.png" 
                    alt="Quản lý sức khỏe" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <p className="text-base text-cyan-700">Sau khi kết nối thành công, giao diện quản lý sức khỏe sẽ hiển thị, cho phép bạn theo dõi các chỉ số từ Smart Ring</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 py-3 px-8 flex items-center justify-between">
          <div className="text-lg text-white font-medium">SNS Smart Ring — Hướng dẫn kết nối nhanh</div>
          <div className="flex items-center">
            <div className="text-base text-cyan-50 mr-6">Cần hỗ trợ?</div>
            <div className="text-lg text-white font-medium">Hotline: 1900 1234</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 