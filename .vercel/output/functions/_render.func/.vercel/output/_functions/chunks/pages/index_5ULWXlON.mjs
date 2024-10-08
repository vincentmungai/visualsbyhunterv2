import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as createAstro, f as renderComponent, j as addAttribute, d as renderHead } from '../astro_CB_W15DW.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import 'clsx';
/* empty css                          */
import { $ as $$NavBar } from './404_Det5Q1Oy.mjs';
import { $ as $$Image } from './generic_v04Qau5-.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$ThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div class="toggle-container" data-astro-cid-64uwkzkh> <div class="logo-text-full" onclick="window.location.href='/'" style="cursor:pointer;" data-astro-cid-64uwkzkh> <h1 data-astro-cid-64uwkzkh>HUNTER.</h1> </div> <div class="spacer-block" data-astro-cid-64uwkzkh></div> <div class="toggle-wrapper" data-astro-cid-64uwkzkh> <div id="theme-toggle" class="theme-toggle" data-astro-cid-64uwkzkh>Light</div> </div> </div> <script>let toggleButton = document.getElementById('theme-toggle');
let systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

// Check for the saved preference in local storage
let userPreference = localStorage.getItem('theme') || systemTheme;

// Change theme on user preference
changeTheme(userPreference);

// Update theme on system preference change
window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener('change', (event) => {
        if (!localStorage.getItem('theme')) {
            changeTheme(event.matches ? "dark" : "light");
        }
    });

// Listen for theme-toggle button click
toggleButton.addEventListener('click', function () {
    this.classList.toggle('is-dark');
    let theme = this.classList.contains('is-dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    changeTheme(theme);
});

// Function to change theme
function changeTheme(theme) {
    if (theme === 'dark') {
        toggleButton.classList.add('is-dark');
        toggleButton.innerHTML = 'Dark';   // Dark mode button text
    } else {
        toggleButton.classList.remove('is-dark');
        toggleButton.innerHTML = 'Light';  // Light mode button text
    }
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
}
<\/script>`])), maybeRenderHead());
}, "C:/Users/Vincent/WebstormProjects/Hunter's Portfolio/src/layouts/ThemeToggle.astro", void 0);

const $$Astro$2 = createAstro();
const $$FooterComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FooterComponent;
  return renderTemplate`<!--suppress ALL -->${maybeRenderHead()}<div class="footer-container" data-astro-cid-chongeu2> <footer data-astro-cid-chongeu2> <div class="footer-card-transparent no-bg" data-astro-cid-chongeu2> <div class="brand-name-large" data-astro-cid-chongeu2>Hunter.</div> <div class="content" data-astro-cid-chongeu2>
Made by Vincent Mungai
</div> <div class="content icons" data-astro-cid-chongeu2> <div class="icon-container" data-astro-cid-chongeu2> <!--?xml version="1.0" encoding="utf-8"?--> <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-chongeu2> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#f3f3f2" data-astro-cid-chongeu2></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#f3f3f2" data-astro-cid-chongeu2></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#f3f3f2" data-astro-cid-chongeu2></path> </svg> </div> <div class="icon-container" data-astro-cid-chongeu2> <!--?xml version="1.0" encoding="utf-8"?--> <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-chongeu2> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7828 3.91825C20.1313 3.83565 20.3743 3.75444 20.5734 3.66915C20.8524 3.54961 21.0837 3.40641 21.4492 3.16524C21.7563 2.96255 22.1499 2.9449 22.4739 3.11928C22.7979 3.29366 23 3.6319 23 3.99986C23 5.08079 22.8653 5.96673 22.5535 6.7464C22.2911 7.40221 21.9225 7.93487 21.4816 8.41968C21.2954 11.7828 20.3219 14.4239 18.8336 16.4248C17.291 18.4987 15.2386 19.8268 13.0751 20.5706C10.9179 21.3121 8.63863 21.4778 6.5967 21.2267C4.56816 20.9773 2.69304 20.3057 1.38605 19.2892C1.02813 19.0108 0.902313 18.5264 1.07951 18.109C1.25671 17.6916 1.69256 17.4457 2.14144 17.5099C3.42741 17.6936 4.6653 17.4012 5.6832 16.9832C5.48282 16.8742 5.29389 16.7562 5.11828 16.6346C4.19075 15.9925 3.4424 15.1208 3.10557 14.4471C2.96618 14.1684 2.96474 13.8405 3.10168 13.5606C3.17232 13.4161 3.27562 13.293 3.40104 13.1991C2.04677 12.0814 1.49999 10.5355 1.49999 9.49986C1.49999 9.19192 1.64187 8.90115 1.88459 8.71165C1.98665 8.63197 2.10175 8.57392 2.22308 8.53896C2.12174 8.24222 2.0431 7.94241 1.98316 7.65216C1.71739 6.3653 1.74098 4.91284 2.02985 3.75733C2.1287 3.36191 2.45764 3.06606 2.86129 3.00952C3.26493 2.95299 3.6625 3.14709 3.86618 3.50014C4.94369 5.36782 6.93116 6.50943 8.78086 7.18568C9.6505 7.50362 10.4559 7.70622 11.0596 7.83078C11.1899 6.61019 11.5307 5.6036 12.0538 4.80411C12.7439 3.74932 13.7064 3.12525 14.74 2.84698C16.5227 2.36708 18.5008 2.91382 19.7828 3.91825ZM10.7484 9.80845C10.0633 9.67087 9.12171 9.43976 8.09412 9.06408C6.7369 8.56789 5.16088 7.79418 3.84072 6.59571C3.86435 6.81625 3.89789 7.03492 3.94183 7.24766C4.16308 8.31899 4.5742 8.91899 4.94721 9.10549C5.40342 9.3336 5.61484 9.8685 5.43787 10.3469C5.19827 10.9946 4.56809 11.0477 3.99551 10.9046C4.45603 11.595 5.28377 12.2834 6.66439 12.5135C7.14057 12.5929 7.49208 13.0011 7.49986 13.4838C7.50765 13.9665 7.16949 14.3858 6.69611 14.4805L5.82565 14.6546C5.95881 14.7703 6.103 14.8838 6.2567 14.9902C6.95362 15.4727 7.65336 15.6808 8.25746 15.5298C8.70991 15.4167 9.18047 15.6313 9.39163 16.0472C9.60278 16.463 9.49846 16.9696 9.14018 17.2681C8.49626 17.8041 7.74425 18.2342 6.99057 18.5911C6.63675 18.7587 6.24134 18.9241 5.8119 19.0697C6.14218 19.1402 6.48586 19.198 6.84078 19.2417C8.61136 19.4594 10.5821 19.3126 12.4249 18.6792C14.2614 18.0479 15.9589 16.9385 17.2289 15.2312C18.497 13.5262 19.382 11.1667 19.5007 7.96291C19.51 7.71067 19.6144 7.47129 19.7929 7.29281C20.2425 6.84316 20.6141 6.32777 20.7969 5.7143C20.477 5.81403 20.1168 5.90035 19.6878 5.98237C19.3623 6.04459 19.0272 5.94156 18.7929 5.70727C18.0284 4.94274 16.5164 4.43998 15.2599 4.77822C14.6686 4.93741 14.1311 5.28203 13.7274 5.89906C13.3153 6.52904 13 7.51045 13 8.9999C13 9.28288 12.8801 9.5526 12.6701 9.74221C12.1721 10.1917 11.334 9.92603 10.7484 9.80845Z" fill="hsl(56, 5.9%, 88.4%)" data-astro-cid-chongeu2></path> </svg> </div> <div class="icon-container" data-astro-cid-chongeu2> <svg viewBox="7.086 -169.483 1277.149 1277.149" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" xmlns="http://www.w3.org/2000/svg" fill="#000" data-astro-cid-chongeu2><g id="SVGRepo_bgCarrier" stroke-width="0" data-astro-cid-chongeu2></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-chongeu2></g><g id="SVGRepo_iconCarrier" data-astro-cid-chongeu2><path fill="none" d="M1138.734 931.095h.283M1139.017 931.095h-.283" data-astro-cid-chongeu2></path><path d="M1179.439 7.087c57.543 0 104.627 47.083 104.627 104.626v30.331l-145.36 103.833-494.873 340.894L148.96 242.419v688.676h-37.247c-57.543 0-104.627-47.082-104.627-104.625V111.742C7.086 54.198 54.17 7.115 111.713 7.115l532.12 394.525L1179.41 7.115l.029-.028z" fill="#f5f5f5" data-astro-cid-chongeu2></path><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" data-astro-cid-chongeu2><stop offset="0" stop-color="#cac6ba" data-astro-cid-chongeu2></stop><stop offset="1" stop-color="#b7b4a4" data-astro-cid-chongeu2></stop></linearGradient><path fill="url(#a)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" data-astro-cid-chongeu2></path><path fill="#e7e4d7" d="M148.96 242.419v688.676h989.774V245.877L643.833 586.771z" data-astro-cid-chongeu2></path><path fill="#b8b7ae" d="M148.96 931.095l494.873-344.324-2.24-1.586L148.96 923.527z" data-astro-cid-chongeu2></path><path fill="#b7b6ad" d="M1138.734 245.877l.283 685.218-495.184-344.324z" data-astro-cid-chongeu2></path><path d="M1284.066 142.044l.17 684.51c-2.494 76.082-35.461 103.238-145.219 104.514l-.283-685.219 145.36-103.833-.028.028z" fill="#f5f5f5" data-astro-cid-chongeu2></path><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" data-astro-cid-chongeu2><stop offset="0" stop-color="#cac6ba" data-astro-cid-chongeu2></stop><stop offset="1" stop-color="#b7b4a4" data-astro-cid-chongeu2></stop></linearGradient><path fill="url(#b)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" data-astro-cid-chongeu2></path><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" data-astro-cid-chongeu2><stop offset="0" stop-color="#cac6ba" data-astro-cid-chongeu2></stop><stop offset="1" stop-color="#b7b4a4" data-astro-cid-chongeu2></stop></linearGradient><path fill="url(#c)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" data-astro-cid-chongeu2></path><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" data-astro-cid-chongeu2><stop offset="0" stop-color="#cac6ba" data-astro-cid-chongeu2></stop><stop offset="1" stop-color="#b7b4a4" data-astro-cid-chongeu2></stop></linearGradient><path fill="url(#d)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" data-astro-cid-chongeu2></path><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" data-astro-cid-chongeu2><stop offset="0" stop-color="#cac6ba" data-astro-cid-chongeu2></stop><stop offset="1" stop-color="#b7b4a4" data-astro-cid-chongeu2></stop></linearGradient><path fill="url(#e)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" data-astro-cid-chongeu2></path><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" data-astro-cid-chongeu2><stop offset="0" stop-color="#cac6ba" data-astro-cid-chongeu2></stop><stop offset="1" stop-color="#b7b4a4" data-astro-cid-chongeu2></stop></linearGradient><path fill="url(#f)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" data-astro-cid-chongeu2></path><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" data-astro-cid-chongeu2><stop offset="0" stop-color="#cac6ba" data-astro-cid-chongeu2></stop><stop offset="1" stop-color="#b7b4a4" data-astro-cid-chongeu2></stop></linearGradient><path fill="url(#g)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" data-astro-cid-chongeu2></path><linearGradient id="h" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" data-astro-cid-chongeu2><stop offset="0" stop-color="#cac6ba" data-astro-cid-chongeu2></stop><stop offset="1" stop-color="#b7b4a4" data-astro-cid-chongeu2></stop></linearGradient><path fill="url(#h)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" data-astro-cid-chongeu2></path><path fill="#f7f5ed" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" data-astro-cid-chongeu2></path></g></svg> </div> </div> <div class="content" data-astro-cid-chongeu2>
2024 &copy; All Rights Reserved
</div> </div> <div class="footer-card" data-astro-cid-chongeu2> <div class="nav-item" onclick="window.location.href= '/Visualsbyhunter_Privacy_Policy.txt'" data-astro-cid-chongeu2>
About
</div> <div class="nav-item" data-astro-cid-chongeu2>
My mission
</div> <div class="nav-item" onclick="window.location.href= '/Visualsbyhunter_Privacy_Policy.txt'" data-astro-cid-chongeu2>
Privacy Policy
</div> <div class="nav-item" data-astro-cid-chongeu2>
Terms of service
</div> </div> <div class="footer-card" data-astro-cid-chongeu2> <div class="nav-item" data-astro-cid-chongeu2>
Services
</div> <div class="nav-item" data-astro-cid-chongeu2>
Products
</div> <div class="nav-item" data-astro-cid-chongeu2>
Join My team
</div> <div class="nav-item" data-astro-cid-chongeu2>
Partner with Me
</div> </div> </footer> </div>`;
}, "C:/Users/Vincent/WebstormProjects/Hunter's Portfolio/src/components/FooterComponent.astro", void 0);

const $$Astro$1 = createAstro();
const $$BrandTag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BrandTag;
  return renderTemplate`${maybeRenderHead()}<div class="tag-wrapper" onclick="window.location.href='mailto:mungaivincentwachira@gmail.com'" data-astro-cid-way7q7dj>
Get your website.
</div>`;
}, "C:/Users/Vincent/WebstormProjects/Hunter's Portfolio/src/components/BrandTag.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allWorkCards = await Astro2.glob(/* #__PURE__ */ Object.assign({"../content/WorkGrid/wedding.md": () => import('../wedding_N60I7mle.mjs')}), () => "../content/WorkGrid/*.md");
  return renderTemplate(_a || (_a = __template([`<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="description" content="Explore Hunter's stunning world of photography, showcasing the beauty of Nairobi, Kenya, and beyond. Through his lens, experience the vibrant landscapes, unforgettable wildlife, and compelling moments captured meticulously by this acclaimed local photographer."><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Hunter | Home</title><link rel="manifest" href="/manifest.json"><link rel="icon" type="image/svg+xml" href="/assets/icons/hunter-logo.svg">`, "</head> <body data-astro-cid-j7pv25f6> <!-- <PageLoader/> --> ", " ", " ", ` <div class="ImageGrid_wrapper" data-astro-cid-j7pv25f6> <div class="page-styles w-embed" data-astro-cid-j7pv25f6>  </div> <div class="container" data-astro-cid-j7pv25f6> <div class="page-cta-wrapper" style="position: relative; opacity: 0;" data-astro-cid-j7pv25f6> <img src="https://dyvkdbmmzvclydrmokpq.supabase.co/storage/v1/object/public/isles-and-wedding-vows/wedding-cover.jpg?t=2024-10-02T13%3A55%3A58.194Z" alt="Cover image" style="height: 100%; width: 100%; object-fit: cover;" class="cover-image" data-astro-cid-j7pv25f6> <!-- Overlay content --> <div class="page-cta" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; z-index: 1;" data-astro-cid-j7pv25f6> <div class="project-name" style="color: white; font-size: 3rem; text-align: center;" data-astro-cid-j7pv25f6>
Life's Stories Told Effortlessly
</div> <div class="cta-button-wrapper" style="margin-top: 20px; text-align: center;" data-astro-cid-j7pv25f6> <button onclick="window.location.href='#gallery'" class="cta-button-primary" data-astro-cid-j7pv25f6>
Contact Me
</button> <button onclick="window.location.href='#projects'" class="cta-button" data-astro-cid-j7pv25f6>
View Projects
</button> </div> </div> </div> </div> <div class="hero_button-wrapper" style="display: none;" data-astro-cid-j7pv25f6> <a href="tel:+25417712699" class="hero_button-cta" data-astro-cid-j7pv25f6>Contact Me&nbsp
<svg class="u_icon-arrow-2" xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 10.344 10.767" data-astro-cid-j7pv25f6> <g "Group_3" data-name="Group 3" transform="translate(-282.783 -1330.75)" data-astro-cid-j7pv25f6> <path id="Path_1" data-name="Path 1" d="M24.93.5h9.315V9.815" transform="translate(258.133 1331)" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="3" data-astro-cid-j7pv25f6></path> <line id="Line_1" data-name="Line 1" x1="9.051" y2="9.5" transform="translate(283.326 1331.5)" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="3" data-astro-cid-j7pv25f6></line> </g> </svg> </a> </div> <!-- Work-wrapper starts here --> <div class="container" data-astro-cid-j7pv25f6> <h1 id="projects" data-astro-cid-j7pv25f6>Featured Projects</h1> <div class="spacer-block" style="height: 2em;" data-astro-cid-j7pv25f6></div> <div class="description-text" data-astro-cid-j7pv25f6>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ea nam ratione vel velit! Aut consequatur dicta
            earum explicabo, facilis illum iusto nemo quae, qui quis sint tempora. Incidunt, libero.
</div> <div class="spacer-block" style="height: 2em;" data-astro-cid-j7pv25f6></div> <div class="work_wrapper w-dyn-list" data-astro-cid-j7pv25f6> <div role="list" class="work_list w-dyn-items" data-astro-cid-j7pv25f6> <!-- Hero card --> `, ' <!-- Hero card --> </div> </div> </div> <!-- Work-wrapper ends here --> </div>  </body> <div class="container" id="#about" data-astro-cid-j7pv25f6> <h1 id="projects" data-astro-cid-j7pv25f6>About</h1> <div class="spacer-block" style="height: 2em;" data-astro-cid-j7pv25f6></div> <div class="description-text" data-astro-cid-j7pv25f6>\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ea nam ratione vel velit! Aut consequatur dicta\n        earum explicabo, facilis illum iusto nemo quae, qui quis sint tempora.\n</div> </div> ', ' <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" defer><\/script>  <script src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js" defer><\/script> <script src="/src/script/lenisScroll.js" defer><\/script> <script src="/src/script/cta-Animation.js" defer><\/script> </html> '])), renderHead(), renderComponent($$result, "BrandTag", $$BrandTag, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-j7pv25f6": true }), allWorkCards.map((content) => renderTemplate`<div item-style="tall" role="listitem" class="work_item w-dyn-item "${addAttribute(`window.location.href='${content.frontmatter.route}'`, "onclick")} data-astro-cid-j7pv25f6> ${renderComponent($$result, "Image", $$Image, { "src": content.frontmatter.image, "alt": "Photos by Hunter", "width": 300, "height": 600, "class": "work_image hero-fade", "widths": [240, 540, 720, content.frontmatter.image.width], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px, ${content.frontmatter.image.width}px`, "data-astro-cid-j7pv25f6": true })} <a${addAttribute(content.frontmatter.route, "href")} data-astro-cid-j7pv25f6> <div class="work_content-wrap" data-astro-cid-j7pv25f6> <div class="work_date-wrap" data-astro-cid-j7pv25f6></div> <div class="work_title-wrap" data-astro-cid-j7pv25f6> <div class="work_title" data-astro-cid-j7pv25f6> ${content.frontmatter.title} </div> <div class="work_description" data-astro-cid-j7pv25f6> ${content.frontmatter.description} </div> </div> </div> </a> </div>`), renderComponent($$result, "FooterLayout", $$FooterComponent, { "data-astro-cid-j7pv25f6": true }));
}, "C:/Users/Vincent/WebstormProjects/Hunter's Portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Vincent/WebstormProjects/Hunter's Portfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FooterComponent as $, $$ThemeToggle as a, index as i };
