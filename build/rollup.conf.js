import buble from 'rollup-plugin-buble'
import json from 'rollup-plugin-json'
import { standard as banner } from './rollup.conf.banner'

export default {
	banner,
	input: 'src/index.js',
	plugins: [json(), buble()],
	output: [
		{ format: 'umd', file: 'dist/is-dom-node-list.js', name: 'isDomNodeList' },
		{ format: 'es', file: 'dist/is-dom-node-list.es.js' }
	]
}
