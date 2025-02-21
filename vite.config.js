import {
	defineConfig
} from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
//import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
	plugins: [
		uni()
	],
	server: {
		// 配置开发服务器
		host: '0.0.0.0', // 监听所有可用的网络接口
		port: 8080, // 使用的端口号
		open: true, // 启动时自动在浏览器中打开应用
		proxy: {
			'/baseurl': {
				target: 'http://43.139.217.147/api', // 代理目标的基础路径
				changeOrigin: true, // 改变源
				rewrite: (path) => path.replace(/^\/baseurl/, ''), // 重写路径
			}
		}
	}
});