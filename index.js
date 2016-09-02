const min = require('jsonminify');

module.exports = () => {
	return (tree) => {
		tree.match({tag: 'script'}, node => {
			if (/json/.test(node.attrs.type)) {
				node.content = node.content.map(c => min(c));
			}

			return node;
		});
	}
}
