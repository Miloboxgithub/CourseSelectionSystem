import {
	defineConfig
} from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
	plugins: [
		uni(),
		AutoImport({
			imports: [
				'vue',
				'uni-app'
			]
		})
	],
	server: {
		// 配置开发服务器
		host: 'localhost', // 监听所有可用的网络接口
		port: 5137, // 使用的端口号
		open: true, // 启动时自动在浏览器中打开应用
		proxy: {
			'/api': {
				target: 'http://10.108.7.66:8085', // 代理目标的基础路径
				changeOrigin: true, // 改变源
				rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径
			}
		}
	}
});