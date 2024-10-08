import { c as createComponent, r as renderTemplate, d as renderHead, e as createAstro, f as renderComponent } from '../astro_CB_W15DW.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
/* empty css                        */

const $$Astro$1 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavBar;
  return renderTemplate`<head>${renderHead()}</head> <!--rest of your document here--> <nav data-astro-cid-ymhdp2rl> <div class="nav-container" data-astro-cid-ymhdp2rl> <a tabindex="0" href="/" data-astro-cid-ymhdp2rl> <div class="logo-text flex-center" data-astro-cid-ymhdp2rl>H.</div> </a> <a tabindex="0" href="/projects" data-astro-cid-ymhdp2rl> <div class="nav-item flex-center" data-astro-cid-ymhdp2rl>Projects</div> </a> <a tabindex="0" href="#" data-astro-cid-ymhdp2rl> <div class="nav-item flex-center" data-astro-cid-ymhdp2rl>About</div> </a> <a tabindex="0" href="tel:+254717712699" data-astro-cid-ymhdp2rl> <div class="nav-item flex-center" data-astro-cid-ymhdp2rl>Contact</div> </a> </div> </nav>`;
}, "C:/Users/Vincent/WebstormProjects/Hunter's Portfolio/src/components/NavBar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-zetdm5md> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Oops Error 404</title><link rel="icon" type="image/svg+xml" href="/assets/icons/hunter-logo.svg"><link rel="manifest" href="/manifest.json">', "</head> <body data-astro-cid-zetdm5md> ", ' <div class="container" data-astro-cid-zetdm5md> <div class="tenor-gif-embed" data-postid="21180997" data-share-method="host" data-aspect-ratio="1" data-width="50%" data-astro-cid-zetdm5md> <a href="https://tenor.com/view/sephoirth-awkward-awkward-stare-golozer-ritchie-golozer-gif-21180997" data-astro-cid-zetdm5md>Sephoirth\n            Awkward GIF</a>from <a href="https://tenor.com/search/sephoirth-gifs" data-astro-cid-zetdm5md>Sephoirth GIFs</a></div> </div> <script type="text/javascript" async src="https://tenor.com/embed.js"><\/script>\nCOMING SOON...\n</body> </html>'])), renderHead(), renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-zetdm5md": true }));
}, "C:/Users/Vincent/WebstormProjects/Hunter's Portfolio/src/pages/404.astro", void 0);

const $$file = "C:/Users/Vincent/WebstormProjects/Hunter's Portfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$NavBar as $, _404 as _ };
