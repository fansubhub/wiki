// plugins/rehype-custom-links.mjs
import { visit } from 'unist-util-visit';

export function rehypeCustomLinks() {
    return (tree) => {
        visit(tree, 'element', (node) => {
            // Busca etiquetas <a> con href
            if (node.tagName === 'a' && node.properties?.href) {
                const href = String(node.properties.href);

                // Si empieza por !, activamos target blank y limpiamos la URL
                if (href.startsWith('!')) {
                    node.properties.href = href.slice(1); // Quita el signo de exclamación
                    node.properties.target = '_blank';
                    node.properties.rel = 'noopener noreferrer';
                }
            }
        });
    };
}