import React from 'react';
// Import icons từ React Icons
import { FaBed, FaHeartbeat, FaLungs, FaChartLine } from 'react-icons/fa';

const TutorialPage2: React.FC = () => {
  return (
    <div className="min-h-screen p-4">
      {/* Main Container */}
      <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1f2a5f] to-[#2d3875] p-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white mr-4">Hướng Dẫn Chức Năng Quản Lý Sức Khoẻ</h1>
            <span className="text-base font-normal text-white opacity-90">
              Theo dõi sức khoẻ của bạn với 4 tính năng chính
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
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#1c2657] to-[#3a4894] flex items-center justify-center text-white text-lg font-bold mr-3 shadow-md px-4">1</div>
              <h2 className="text-xl font-semibold text-[#2d3875] flex items-center">
                <FaBed className="mr-2 text-blue-600" /> Giấc Ngủ
              </h2>
            </div>

            <div className="bg-white rounded-lg overflow-hidden border border-cyan-100 shadow-md mb-4">
              <img
                src="/tuto2/1.png"
                alt="Chức năng giấc ngủ"
                className="w-full object-contain"
              />
            </div>
            <div className="flex items-start space-x-2 text-gray-700">
              <FaBed className="h-5 w-5 text-[#3a4894] flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold">
                Bấm vào giấc ngủ trên màn hình chính để xem thống kê giấc ngủ chi tiết của bạn.
                Theo dõi chất lượng giấc ngủ để cải thiện sức khoẻ tổng thể.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#1c2657] to-[#3a4894] flex items-center justify-center text-white text-lg font-bold mr-3 shadow-md px-4">2</div>
              <h2 className="text-xl font-semibold text-[#2d3875] flex items-center">
                <FaHeartbeat className="mr-2 text-red-500 animate-pulse" /> Nhịp Tim
              </h2>
            </div>

            <div className="bg-white rounded-lg overflow-hidden border border-cyan-100 shadow-md mb-4">
              <img
                src="/tuto2/2.png"
                alt="Chức năng nhịp tim"
                className="w-full object-contain"
              />
            </div>
            <div className="flex items-start space-x-2 text-gray-700">
              <FaHeartbeat className="h-5 w-5 text-[#3a4894] flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold">
                Bấm vào nhịp tim trên màn hình chính để vào chức năng nhịp tim. Tại đây bạn có thể đo nhịp tim
                và xem lịch sử đo.
              </p>
            </div>
            <div className="mt-3 flex items-start space-x-2">
              <FaHeartbeat className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-red-500">
                Lưu ý: Trong quá trình đo, không được tháo nhẫn.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#1c2657] to-[#3a4894] flex items-center justify-center text-white text-lg font-bold mr-3 shadow-md px-4">3</div>
              <h2 className="text-xl font-semibold text-[#2d3875] flex items-center">
                <FaLungs className="mr-2 text-cyan-500" /> SpO2
              </h2>
            </div>

            <div className="bg-white rounded-lg overflow-hidden border border-cyan-100 shadow-md mb-4">
              <img
                src="/tuto2/3.png"
                alt="Chức năng SpO2"
                className="w-full object-contain"
              />
            </div>
            <div className="flex items-start space-x-2 text-gray-700">
              <FaLungs className="h-5 w-5 text-[#3a4894] flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold">
                Bấm vào SpO2 trên màn hình chính để vào chức năng. Tại đây bạn có thể đo nồng độ oxy trong máu
                và xem lịch sử đo.
              </p>
            </div>
            <div className="mt-3 flex items-start space-x-2">
              <FaLungs className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-red-500">
                Lưu ý: Trong quá trình đo, bạn cần giữ nguyên vị trí và đảm bảo nhẫn tiếp xúc tốt với da.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#1c2657] to-[#3a4894] flex items-center justify-center text-white text-lg font-bold mr-3 shadow-md px-4">4</div>
              <h2 className="text-xl font-semibold text-[#2d3875] flex items-center">
                <FaChartLine className="mr-2 text-green-500" /> Tổng Quan Sức Khoẻ
              </h2>
            </div>

            <div className="bg-white rounded-lg overflow-hidden border border-cyan-100 shadow-md mb-4">
              <img
                src="/tuto2/4.png"
                alt="Tổng quan sức khoẻ"
                className="w-full object-contain"
              />
            </div>
            <div className="flex items-start space-x-2 text-gray-700">
              <FaChartLine className="h-5 w-5 text-[#3a4894] flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold">
                Bấm vào chức năng này để xem chi tiết tổng quan sức khoẻ của bạn. Bạn có thể theo dõi xu hướng sức khoẻ
                dài hạn và nhận các khuyến nghị cá nhân hóa để cải thiện sức khoẻ tổng thể.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage2; 