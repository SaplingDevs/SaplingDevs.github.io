import markdownit from 'markdown-it';
import markdownItContainer from 'markdown-it-container';
import "highlight.js/styles/atom-one-dark.css"

const md = markdownit({
  breaks: true,
  xhtmlOut: false,
  html: true,
});

// Contenedores personalizados para diferentes tipos de notas
type Token = { info: string; nesting: number };
type RenderFunction = (tokens: Token[], idx: number) => string;

['tip', 'note', 'error', 'warn', 'info'].forEach((type) => {
  const render: RenderFunction = (tokens, idx) => {
    const token = tokens[idx];
    const rawTitle = token.info.trim().slice(type.length).trim();
    const titleText = rawTitle.startsWith("![]") ? (type.toUpperCase() + ": " + rawTitle.replace("![]", "")) : rawTitle;
    const title = rawTitle ? `<div class="not-title">${titleText}</div>` : `<div class="not-title">${type.toUpperCase()}</div>`;

    return token.nesting === 1
      ? `<div class="${type}">${title}\n`
      : `</div>\n`;
  };

  md.use(markdownItContainer, type, { render });
});

export default md;