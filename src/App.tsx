import { Gamepad2, Download } from 'lucide-react';

function App() {
  const games = [
    {
      id: 1,
      name: '开云体育',
      description: '充100送100',
      image: 'https://pic1.imgdb.cn/item/699c51217aea005f38310225.jpg',
      color:'from-yellow-500 to-yellow-500',
      downloadLink: 'https://example.com/game1'
    },
    {
      id: 2,
      name: '米兰体育',
      description: '体验最刺激球赛',
      image: 'https://pic1.imgdb.cn/item/699c510a7aea005f38310220.jpg',
      color: 'from-yellow-500 to-yellow-500',
      downloadLink: 'https://example.com/game2'
    },
    {
      id: 3,
      name: '悠然农场',
      description: '打造梦想田园，经营特色农庄，享受宁静休闲时光',
      image: 'https://www.google.com/imgres?q=%E5%BC%80%E4%BA%91&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D61550710975233&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fkaiyun168%2F&docid=Yko-OZT2zEQFwM&tbnid=wb_MO48UHhydjM&vet=12ahUKEwij6Zif0--SAxXVnq8BHcbHAbkQnPAOegQIHhAB..i&w=512&h=512&hcb=2&ved=2ahUKEwij6Zif0--SAxXVnq8BHcbHAbkQnPAOegQIHhAB',
      color: 'from-yellow-500 to-yellow-500',
      downloadLink: 'https://example.com/game3'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* 头部区域 */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <Gamepad2 className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
              2026美加墨世界杯
            </h1>
          </div>
        </div>
      </header>

      {/* 内容区域 */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-lg text-gray-600">
            精选热门平台，带给你极致娱乐体验
          </p>
        </div>

        {/* 游戏卡片网格 - 手机端横向小卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-12">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg"
            >
              {/* 游戏图标区域 */}
              <div className={`bg-gradient-to-br ${game.color} p-4 sm:p-8 flex items-center justify-center`}>
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 游戏信息区域 */}
              <div className="p-3 sm:p-6">
                <h2 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {game.name}
                </h2>
                <p className="text-xs sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-6 line-clamp-2 sm:min-h-[3rem]">
                  {game.description}
                </p>

                {/* 跳转按钮 */}
                <a
                  href={game.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-900 text-white py-2 sm:py-4 px-3 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 active:scale-95 transform"
                >
                  立即体验
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 特色功能展示 */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            为什么选择我们？
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🎮</div>
              <h4 className="font-semibold text-gray-900 mb-1">精选平台</h4>
              <p className="text-sm text-gray-600">严格筛选优质娱乐平台</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-semibold text-gray-900 mb-1">安全可靠</h4>
              <p className="text-sm text-gray-600">官方正版安全保障</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold text-gray-900 mb-1">极速下载</h4>
              <p className="text-sm text-gray-600">高速服务器快速体验</p>
            </div>
          </div>
        </div>
      </main>

      {/* 底部区域 */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">
              © 2026 玖玖娱乐 版权所有
            </p>
            <p className="text-xs text-gray-400">
             
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
