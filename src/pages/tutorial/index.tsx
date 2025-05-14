import React from 'react';
import { Smartphone, Bluetooth, Link2, Heart, AlertTriangle } from 'lucide-react';

const TutorialPage: React.FC = () => {
  return (
    <div className="min-h-screen p-4">
      {/* Main Container */}
      <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1f2a5f] to-[#2d3875] p-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white mr-4">Hướng dẫn cài đặt Thiết bị theo dõi sức khoẻ IMT Smart Ring (ISR)</h1>
            <span className="text-base font-normal text-white opacity-90">
              Kết nối và cài đặt thiết bị dễ dàng
            </span>
          </div>
          <img
            src="https://hoclientuc.vn/assets/svg/logo_cme.svg"
            alt="Logo"
            className="h-10 ml-4 filter brightness-0 invert"
          />
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
          {/* Step 1 */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#1c2657] to-[#3a4894] flex items-center justify-center text-white text-lg font-bold mr-3 px-4 shadow-md">1</div>
              <h2 className="text-xl font-semibold text-[#2d3875]">Đăng nhập và mở menu thiết bị</h2>
            </div>

            <div className="bg-white rounded-lg overflow-hidden border border-cyan-100 shadow-md mb-4">
              <img
                src="/screen_tutorial_1/1.png"
                alt="Đăng nhập và mở menu thiết bị"
                className="w-full object-contain"
              />
            </div>
            <div className="flex items-start space-x-2 text-gray-700">
              <Smartphone className="h-5 w-5 text-[#3a4894] flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold">
                Đăng nhập vào tài khoản của bạn và tìm đến menu Thiết bị ở thanh điều hướng chính.
                Nhấn vào biểu tượng chiếc nhẫn để vào chức năng.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#1c2657] to-[#3a4894] flex items-center justify-center text-white text-lg font-bold mr-3 shadow-md px-4">2</div>
              <h2 className="text-xl font-semibold text-[#2d3875]">Bật Bluetooth và quét thiết bị</h2>
            </div>

            <div className="bg-white rounded-lg overflow-hidden border border-cyan-100 shadow-md mb-4">
              <img
                src="/screen_tutorial_1/2.png"
                alt="Bật Bluetooth và quét thiết bị"
                className="w-full object-contain"
              />
            </div>
            <div className="flex items-start space-x-2 text-gray-700">
              <Bluetooth className="h-5 w-5 text-[#3a4894] flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold">
                Đảm bảo Bluetooth đã được bật trên điện thoại của bạn. Sau đó nhấn vào nút "Quét thiết bị"
                để tìm kiếm Smart Ring trong vùng phủ sóng.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#1c2657] to-[#3a4894] flex items-center justify-center text-white text-lg font-bold mr-3 shadow-md">3</div>
              <h2 className="text-xl font-semibold text-[#2d3875]">Kết nối thiết bị</h2>
            </div>

            <div className="bg-white rounded-lg overflow-hidden border border-cyan-100 shadow-md mb-4">
              <img
                src="/screen_tutorial_1/3.png"
                alt="Kết nối thiết bị"
                className="w-full object-contain"
              />
            </div>
            <div className="flex items-start space-x-2 text-gray-700">
              <Link2 className="h-5 w-5 text-[#3a4894] flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold">
                Khi nhìn thấy Smart Ring trong danh sách thiết bị, nhấn vào nó để bắt đầu kết nối.
                Làm theo hướng dẫn trên màn hình để hoàn tất quá trình ghép nối.
              </p>
            </div>
            <div className="mt-3 flex items-start space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-red-500">
                Lưu ý: Nếu không tìm thấy thiết bị, vui lòng tắt bluetooth của máy và mở lại.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#1c2657] to-[#3a4894] flex items-center justify-center text-white text-lg font-bold mr-3 shadow-md">4</div>
              <h2 className="text-xl font-semibold text-[#2d3875]">Quản lý sức khỏe</h2>
            </div>

            <div className="bg-white rounded-lg overflow-hidden border border-cyan-100 shadow-md mb-4">
              <img
                src="/screen_tutorial_1/4.png"
                alt="Quản lý sức khỏe"
                className="w-full object-contain"
              />
            </div>
            <div className="flex items-start space-x-2 text-gray-700">
              <Heart className="h-5 w-5 text-[#3a4894] flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold">
                Sau khi kết nối thành công, bạn có thể bắt đầu theo dõi các chỉ số sức khỏe như nhịp tim,
                chất lượng giấc ngủ và các hoạt động hàng ngày thông qua ứng dụng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage; 