import { Gamepad2, Download, MessageCircle } from 'lucide-react';

function App() {
  const openTawkChat = () => {
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    }
  };
  const games = [
    {
      id: 1 ,
      name: '开云体育',
      description: '',
      image: 'https://pic1.imgdb.cn/item/699c51217aea005f38310225.jpg',
      color:'from-yellow-500 to-yellow-500',
      downloadLink: 'https://www.vwqv2s.vip:9663/entry/register79049/?i_code=94491262'
    },
    {
      id: 2,
      name: '米兰体育',
      description: '',
      image: 'https://pic1.imgdb.cn/item/699c510a7aea005f38310220.jpg',
      color: 'from-yellow-500 to-yellow-500',
      downloadLink: 'https://www.pr9oj0.vip:9037/entry/register27248/?i_code=321944933'
    },
    {
      id: 3,
      name: '星空体育',
      description: '',
      image: 'https://pic1.imgdb.cn/item/69a40ac1ac80c84bfd15ae58.png',
      color: 'from-yellow-500 to-yellow-500',
      downloadLink: 'https://www.8ahmna.vip:9003/register/?agent_code=55699651'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* 头部区域 */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
              2026美加墨世界杯
            </h1>
          </div>
        </div>
      </header>

      {/* 内容区域 */}
      <main className="py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
          <p className="text-base sm:text-lg text-gray-600 text-center">
            精选热门平台，带给你极致娱乐体验
          </p>
        </div>

        {/* 游戏卡片 - 双列布局 */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl touch-manipulation"
              >
                {/* 游戏图标区域 */}
                <div className={`bg-gradient-to-br ${game.color} p-4 sm:p-8 flex items-center justify-center`}>
                  <div className="w-20 h-20 sm:w-32 sm:h-32 bg-white rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* 游戏信息区域 */}
                <div className="p-3 sm:p-6 flex flex-col">
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 text-center">
                    {game.name}
                  </h2>
                  {game.description && (
                    <p className="text-xs sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-6 text-center line-clamp-2 sm:line-clamp-none">
                      {game.description}
                    </p>
                  )}

                  {/* 跳转按钮 */}
                  <div className="flex justify-center mt-auto">
                    <a
                      href={game.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gray-900 text-white py-3 sm:py-4 px-4 sm:px-8 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-gray-800 active:bg-gray-700 transition-all duration-200 touch-manipulation active:scale-95 transform shadow-lg hover:shadow-xl w-full"
                    >
                      立即体验
                      <Download className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 特色功能展示 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-5 sm:p-8 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              为什么选择我们？
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-3 sm:p-0">
                <div className="text-3xl sm:text-4xl mb-2">🎮</div>
                <h4 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">精选平台</h4>
                <p className="text-xs sm:text-sm text-gray-600">严格筛选优质娱乐平台</p>
              </div>
              <div className="text-center p-3 sm:p-0">
                <div className="text-3xl sm:text-4xl mb-2">🔒</div>
                <h4 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">安全可靠</h4>
                <p className="text-xs sm:text-sm text-gray-600">官方正版安全保障</p>
              </div>
              <div className="text-center p-3 sm:p-0">
                <div className="text-3xl sm:text-4xl mb-2">⚡</div>
                <h4 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">极速下载</h4>
                <p className="text-xs sm:text-sm text-gray-600">高速服务器快速体验</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 底部区域 */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-5 sm:py-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
              © 2026 玖玖娱乐版权所有
            </p>
            <p className="text-xs text-gray-400">

            </p>
          </div>
        </div>
      </footer>

      {/* 自定义在线客服按钮 */}
      <button
        onClick={openTawkChat}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-5 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation"
        style={{ backgroundColor: '#03a84e' }}
        aria-label="在线客服"
      >
        <MessageCircle className="w-[30px] h-[30px] text-white flex-shrink-0" />
        <span className="text-white font-medium text-base sm:text-lg whitespace-nowrap">在线客服</span>
      </button>
    </div>
  );
}

export default App;
