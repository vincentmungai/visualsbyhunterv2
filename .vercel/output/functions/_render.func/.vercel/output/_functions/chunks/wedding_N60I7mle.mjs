import { c as createComponent, r as renderTemplate, m as maybeRenderHead, Y as unescapeHTML } from './astro_CB_W15DW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Isles and Wedding Vows","description":"The Joy in each moment is a cherished memory ❤️","image":"https://dyvkdbmmzvclydrmokpq.supabase.co/storage/v1/object/public/portraits/15.jpg?v=1","route":"/projects/isles-and-wedding-vows","slug":"isles-and-wedding-vows"};
				const file = "C:/Users/Vincent/WebstormProjects/Hunter's Portfolio/src/content/WorkGrid/wedding.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
