import React from 'react';

const TutorialPage3: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4">
      {/* Main Container */}
      <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1f2a5f] to-[#2d3875] p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Hướng dẫn cài đặt Thiết bị theo dõi sức khoẻ IMT Smart Ring (ISR)
            </h1>
            <img
              src="https://hoclientuc.vn/assets/svg/logo_cme.svg"
              alt="Logo"
              className="h-10 filter brightness-0 invert"
            />
          </div>
          <p className="text-blue-100 mt-2 text-sm">Thiết bị công nghệ cao dành cho sức khỏe của bạn</p>
        </div>

        {/* Enhanced App Description */}
        <div className="p-6 text-center border-b border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 text-left">
              <h3 className="text-gray-800 font-bold mb-4 text-lg">IMT Smart Ring - Đồng hành cùng sức khỏe của bạn</h3>
              <ul className="list-none space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><span className="font-semibold">Công nghệ tiên tiến</span>, tương thích hoàn hảo với cả iOS và Android</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><span className="font-semibold">Tích hợp liền mạch</span> với ứng dụng Safe & Sound đa nền tảng</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><span className="font-semibold">Giám sát sức khỏe 24/7</span> với độ chính xác cao cùng cảm biến thế hệ mới</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><span className="font-semibold">Phân tích chuyên sâu</span> chu kỳ giấc ngủ, nâng cao chất lượng nghỉ ngơi</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><span className="font-semibold">Theo dõi nhịp tim, nồng độ oxy (SpO2)</span> và các chỉ số sinh học quan trọng</span>
                </li>
              </ul>

            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://buyswear.com/wp-content/uploads/2024/06/13-1320x1320.jpg"
                alt="IMT Smart Ring"
                className="rounded-lg shadow-md max-h-48 object-contain mb-2"
              />
              <div className="bg-gray-50 rounded-full px-4 py-1 text-xs font-medium text-gray-600">
                IMT Smart Ring
              </div>
            </div>
          </div>
        </div>

        {/* Platforms Container - All on one row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-6 bg-gray-50">
          {/* YouTube Tutorial Section */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-[#2d3875] to-[#3a4894] p-3 rounded-t-lg">
              <h2 className="text-lg font-bold text-white flex items-center">
                <svg className="h-5 w-5 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                Video Hướng Dẫn
              </h2>
            </div>
            <div className="p-4">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-sm">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://youtube.com/playlist?list=example-playlist-id"
                    alt="QR Code YouTube"
                    className="w-28 h-28 md:w-32 md:h-32"
                  />
                  <p className="text-center text-xs text-gray-500 mt-1 font-semibold">Quét để xem video</p>
                </div>

                <div className="text-xs text-gray-700 font-medium w-full">
                  <div className="flex items-center mb-1">
                    <svg className="w-4 h-4 text-red-600 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
                    </svg>
                    <p className="font-semibold">Nội dung chính:</p>
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Kích hoạt và ghép nối thiết bị</li>
                    <li>Theo dõi dữ liệu sức khỏe</li>
                    <li>Thiết lập thông báo thông minh</li>
                    <li>Cài đặt cảnh báo sức khỏe</li>
                    <li>Cách đồng bộ dữ liệu</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Android Platform */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-[#2d3875] to-[#3a4894] p-3 rounded-t-lg">
              <h2 className="text-lg font-bold text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
                </svg>
                Android
              </h2>
            </div>
            <div className="p-4">
              <div className="flex flex-col items-center">
                <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-sm mb-3">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/download/isr-android"
                    alt="QR Code Android"
                    className="w-28 h-28 md:w-32 md:h-32"
                  />
                  <p className="text-center text-xs text-gray-500 mt-1 font-semibold">Quét để tải APK</p>
                </div>

                <div className="w-full">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs font-semibold">Hướng dẫn cài đặt:</p>
                  </div>
                  <div className="h-24">
                    <ol className="list-decimal pl-5 text-xs text-gray-700 space-y-1.5 font-medium">
                      <li>Quét mã QR để tải APK</li>
                      <li>Vào <span className="font-semibold">Cài đặt &gt; Bảo mật</span></li>
                      <li>Cho phép cài đặt ứng dụng không rõ nguồn gốc</li>
                      <li>Mở APK và hoàn tất cài đặt</li>
                    </ol>
                  </div>

                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <p className="text-xs font-semibold text-green-600 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Yêu cầu Android 7.0 trở lên
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* iOS Platform */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-[#2d3875] to-[#3a4894] p-3 rounded-t-lg">
              <h2 className="text-lg font-bold text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 50 50" fill="currentColor">
                  <path d="M37,4H13c-4.962,0-9,4.037-9,9v24c0,4.963,4.038,9,9,9h24c4.963,0,9-4.037,9-9V13C46,8.037,41.963,4,37,4z M29.5,8h3 C33.327,8,34,8.673,34,9.5v0c0,0.827-0.673,1.5-1.5,1.5h-3C28.673,11,28,10.327,28,9.5v0C28,8.673,28.673,8,29.5,8z M25,40 c-6.617,0-12-5.383-12-12s5.383-12,12-12s12,5.383,12,12S31.617,40,25,40z" />
                </svg>
                iOS
              </h2>
            </div>
            <div className="p-4">
              <div className="flex flex-col items-center">
                <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-sm mb-3">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/download/isr-ios"
                    alt="QR Code iOS"
                    className="w-28 h-28 md:w-32 md:h-32"
                  />
                  <p className="text-center text-xs text-gray-500 mt-1 font-semibold">Quét để tham gia</p>
                </div>

                <div className="w-full">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs font-semibold">Hướng dẫn cài đặt:</p>
                  </div>
                  <div className="h-24">
                    <ol className="list-decimal pl-5 text-xs text-gray-700 space-y-1.5 font-medium">
                      <li>Tải TestFlight từ App Store</li>
                      <li>Quét mã QR hoặc mở link trong email</li>
                      <li>Tham gia chương trình thử nghiệm</li>
                      <li>Cài đặt ứng dụng SafeAndSound</li>
                    </ol>
                  </div>

                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <p className="text-xs font-semibold text-blue-600 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Yêu cầu iOS 14.0 trở lên
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="p-6 border-t border-gray-200">
          <h3 className="text-gray-800 font-bold mb-4 text-lg text-center">Tính năng nổi bật</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
              <div className="flex items-center mb-2">
                <svg className="h-5 w-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z" clipRule="evenodd" />
                </svg>
                <h4 className="font-bold text-blue-900">Phân tích giấc ngủ</h4>
              </div>
              <p className="text-sm text-blue-800">Phân tích sâu các giai đoạn giấc ngủ nhẹ, sâu và REM, đánh giá chất lượng nghỉ ngơi.</p>
            </div>

            <div className="bg-green-50 p-3 rounded-lg border border-green-100">
              <div className="flex items-center mb-2">
                <svg className="h-5 w-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <h4 className="font-bold text-green-900">Theo dõi nhịp tim</h4>
              </div>
              <p className="text-sm text-green-800">Giám sát nhịp tim 24/7, cảnh báo khi nhịp tim bất thường và đánh giá khả năng hồi phục.</p>
            </div>

            <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
              <div className="flex items-center mb-2">
                <svg className="h-5 w-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <h4 className="font-bold text-purple-900">Đo nồng độ oxy</h4>
              </div>
              <p className="text-sm text-purple-800">Theo dõi lượng oxy trong máu (SpO2), phát hiện sớm các vấn đề hô hấp trong khi ngủ.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 border-t border-gray-200 text-center">
          <div className="mb-2">
            <span className="text-sm font-semibold text-gray-700">Hỗ trợ kỹ thuật:</span>
            <span className="text-blue-600 font-semibold ml-1">support@imt.org.vn</span>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <span className="font-medium text-gray-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">088 900 1505</span>
            </span>
            <span className="font-medium text-gray-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">8:00 - 17:30</span>
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-2">© 2025 IMT Health Technologies.</p>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage3; 