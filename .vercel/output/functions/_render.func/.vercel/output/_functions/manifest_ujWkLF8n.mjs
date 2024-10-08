import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_CB_W15DW.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Regular.woff2) format(\"woff2\"),url(/fonts/Satoshi-Regular.woff) format(\"woff\"),url(/fonts/Satoshi-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Bold.woff2) format(\"woff2\"),url(/fonts/Satoshi-Bold.woff) format(\"woff\"),url(/fonts/Satoshi-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Italic.woff2) format(\"woff2\"),url(/fonts/Satoshi-Italic.woff) format(\"woff\"),url(/fonts/Satoshi-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-BoldItalic.woff2) format(\"woff2\"),url(/fonts/Satoshi-BoldItalic.woff) format(\"woff\"),url(/fonts/Satoshi-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Light.woff2) format(\"woff2\"),url(/fonts/Satoshi-Light.woff) format(\"woff\"),url(/fonts/Satoshi-Light.ttf) format(\"truetype\");font-weight:300;font-style:normal}[data-astro-cid-ymhdp2rl]{margin:0;padding:0;box-sizing:border-box}body{font-family:Satoshi,sans-serif!important;transition:all .4s ease-in-out;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}nav[data-astro-cid-ymhdp2rl]{border-radius:7px;padding:6px;font-size:14px;background-color:#706f6c80;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);position:fixed;z-index:10;bottom:1.5rem;left:50%;transform:translate(-50%)}a[data-astro-cid-ymhdp2rl]{text-decoration:none}ul[data-astro-cid-ymhdp2rl],li[data-astro-cid-ymhdp2rl],nav[data-astro-cid-ymhdp2rl]{display:inline-block}.nav-container[data-astro-cid-ymhdp2rl]{max-width:fit-content;display:grid;grid-template-columns:repeat(4,1fr);grid-column-gap:10px}.nav-container[data-astro-cid-ymhdp2rl]>[data-astro-cid-ymhdp2rl]{cursor:pointer}.nav-item[data-astro-cid-ymhdp2rl]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;color:#fdfdfc;padding:4px;border-radius:7px;height:48px;background-color:#706f6c;transition:all .4s ease-in-out;box-shadow:0 0 3px #706f6c;border:1px solid transparent;outline:1px solid hsl(50,2%,43.1%);outline-offset:1px;font-size:14px}.flex-center[data-astro-cid-ymhdp2rl]{display:flex;align-items:center;justify-content:center}.logo-text[data-astro-cid-ymhdp2rl]{color:#1b1b18;border-radius:7px;padding:1em;height:48px;background-color:#e9e9e6;font-weight:bolder;outline:1px solid hsl(50,2%,43.1%);outline-offset:2px;transition:all .4s ease-in-out}a[data-astro-cid-ymhdp2rl]{color:#fdfdfc}a[data-astro-cid-ymhdp2rl].enter{transform:translateY(0);transition:transform .4s ease-in-out}@media only screen and (min-width: 980px){.logo-text[data-astro-cid-ymhdp2rl]:hover,.nav-item[data-astro-cid-ymhdp2rl]:hover{background-color:#1b1b18;transform:scale(.9)}.nav-item[data-astro-cid-ymhdp2rl]:hover{border:1px solid hsl(50,20%,99%)}.logo-text[data-astro-cid-ymhdp2rl]:hover{color:#fdfdfc}}@media only screen and (max-width: 480px){.nav-item[data-astro-cid-ymhdp2rl]{padding:1em}}@keyframes navLoader{0%{bottom:-2rem}to{bottom:1.5rem}}img[data-astro-cid-ymhdp2rl]{image-rendering:optimizeQuality;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:crisp-edges}\n.container[data-astro-cid-zetdm5md]{width:90%;font-family:Satoshi,sans-serif}.tenor-gif-embeded[data-astro-cid-zetdm5md]{display:inline-block}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){gsap.set(\".project-name\",{opacity:0,y:100}),gsap.set(\".cta-button-wrapper\",{opacity:0,y:100}),gsap.set(\".page-cta-wrapper\",{opacity:0,scale:.9});const t=gsap.timeline({defaults:{duration:1,ease:\"power1.out\"}});t.to(\".page-cta-wrapper\",{opacity:1,scale:1,duration:1,delay:1}),t.to(\".project-name\",{opacity:1,y:0,duration:1,ease:\"power2.out\"}),t.to(\".cta-button-wrapper\",{opacity:1,y:0,duration:1,ease:\"power2.out\"},\"<55%\"),t.to(\".cover-image\",{scale:1.5,duration:120,yoyo:!0,repeat:-1})});const a=document.querySelectorAll(\".open\");a.forEach((t,i)=>{const e=t.closest(\".img-wrapper\").querySelector(\".modal\"),c=e.querySelector(\".btn-close\");t.addEventListener(\"click\",()=>{e.showModal(),e.classList.add(\"showing\"),document.body.classList.add(\"disable-scroll\"),document.addEventListener(\"keydown\",o=>{o.key===\"Escape\"&&(e.classList.remove(\"showing\"),setTimeout(()=>e.close(),500),document.body.classList.remove(\"disable-scroll\"))}),e.addEventListener(\"click\",o=>{const s=e.getBoundingClientRect();(o.clientX<s.left||o.clientX>s.right||o.clientY<s.top||o.clientY>s.bottom)&&(e.classList.remove(\"showing\"),setTimeout(()=>e.close(),500),document.body.classList.remove(\"disable-scroll\"))}),c.addEventListener(\"click\",()=>{e.classList.remove(\"showing\"),setTimeout(()=>e.close(),500),document.body.classList.remove(\"disable-scroll\")})})});\n"}],"styles":[{"type":"inline","content":"@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Regular.woff2) format(\"woff2\"),url(/fonts/Satoshi-Regular.woff) format(\"woff\"),url(/fonts/Satoshi-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Bold.woff2) format(\"woff2\"),url(/fonts/Satoshi-Bold.woff) format(\"woff\"),url(/fonts/Satoshi-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Italic.woff2) format(\"woff2\"),url(/fonts/Satoshi-Italic.woff) format(\"woff\"),url(/fonts/Satoshi-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-BoldItalic.woff2) format(\"woff2\"),url(/fonts/Satoshi-BoldItalic.woff) format(\"woff\"),url(/fonts/Satoshi-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Light.woff2) format(\"woff2\"),url(/fonts/Satoshi-Light.woff) format(\"woff\"),url(/fonts/Satoshi-Light.ttf) format(\"truetype\");font-weight:300;font-style:normal}[data-astro-cid-ymhdp2rl]{margin:0;padding:0;box-sizing:border-box}body{font-family:Satoshi,sans-serif!important;transition:all .4s ease-in-out;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}nav[data-astro-cid-ymhdp2rl]{border-radius:7px;padding:6px;font-size:14px;background-color:#706f6c80;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);position:fixed;z-index:10;bottom:1.5rem;left:50%;transform:translate(-50%)}a[data-astro-cid-ymhdp2rl]{text-decoration:none}ul[data-astro-cid-ymhdp2rl],li[data-astro-cid-ymhdp2rl],nav[data-astro-cid-ymhdp2rl]{display:inline-block}.nav-container[data-astro-cid-ymhdp2rl]{max-width:fit-content;display:grid;grid-template-columns:repeat(4,1fr);grid-column-gap:10px}.nav-container[data-astro-cid-ymhdp2rl]>[data-astro-cid-ymhdp2rl]{cursor:pointer}.nav-item[data-astro-cid-ymhdp2rl]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;color:#fdfdfc;padding:4px;border-radius:7px;height:48px;background-color:#706f6c;transition:all .4s ease-in-out;box-shadow:0 0 3px #706f6c;border:1px solid transparent;outline:1px solid hsl(50,2%,43.1%);outline-offset:1px;font-size:14px}.flex-center[data-astro-cid-ymhdp2rl]{display:flex;align-items:center;justify-content:center}.logo-text[data-astro-cid-ymhdp2rl]{color:#1b1b18;border-radius:7px;padding:1em;height:48px;background-color:#e9e9e6;font-weight:bolder;outline:1px solid hsl(50,2%,43.1%);outline-offset:2px;transition:all .4s ease-in-out}a[data-astro-cid-ymhdp2rl]{color:#fdfdfc}a[data-astro-cid-ymhdp2rl].enter{transform:translateY(0);transition:transform .4s ease-in-out}@media only screen and (min-width: 980px){.logo-text[data-astro-cid-ymhdp2rl]:hover,.nav-item[data-astro-cid-ymhdp2rl]:hover{background-color:#1b1b18;transform:scale(.9)}.nav-item[data-astro-cid-ymhdp2rl]:hover{border:1px solid hsl(50,20%,99%)}.logo-text[data-astro-cid-ymhdp2rl]:hover{color:#fdfdfc}}@media only screen and (max-width: 480px){.nav-item[data-astro-cid-ymhdp2rl]{padding:1em}}@keyframes navLoader{0%{bottom:-2rem}to{bottom:1.5rem}}img[data-astro-cid-ymhdp2rl]{image-rendering:optimizeQuality;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:crisp-edges}\n*{margin:0;padding:0;box-sizing:border-box}.toggle-container{padding:1em;display:flex;justify-content:space-between;align-items:center}.spacer-block{grid-column:span 10}.toggle-wrapper{width:7em;height:2.5em;background-color:#90908c;padding:2px;border-radius:100vw}.toggle-wrapper-is-dark{background-color:#f3f3f2}.theme-toggle{font-weight:500;display:flex;justify-content:center;align-items:center;cursor:pointer;border-radius:100vw;width:50%;height:100%;background-color:#f3f3f2;color:#1b1b18;position:relative;left:0;transition:left .8s ease-in-out}body.dark .theme-toggle{color:#000}.is-dark{color:#fdfdfc;background-color:#f5433d;left:calc(100% - 54px);animation:backgroundFill .8s forwards}@keyframes backgroundFill{0%{background-color:transparent}to{background-color:#f5433d}}.logo-text-full{cursor:pointer}body.light{background-color:#f3f3f2}body.dark{background-color:#1c1c1a;color:#f3f3f2}body.dark .tag-wrapper,body.dark .hero_button-cta{background-color:#f3f3f2;border-color:#f3f3f2;color:#1b1b18}body.dark .hero_button-cta{border:1px solid hsl(59,6.5%,95.1%)}body.dark .hero_button-cta:hover{background-color:#1b1b18;color:#f3f3f2}body.dark .small{color:#f3f3f2!important}body.dark .work_title-wrap{background-color:#1b1b18cc;color:#f3f3f2!important}body.dark .card{color:#1b1b18}body.dark .footer-card-transparent{color:#e3e3e0}body.dark .footer-card,body.dark .card{background-color:#f3f3f2;color:#1b1b18}body.dark .price-info{color:#000}body.dark h1,body.dark .project-name{color:#f3f3f2}body.dark .blinder{background-color:#f3f3f2}body.dark .brand-logo{color:#1b1b18}::-webkit-scrollbar{display:none}::-webkit-scrollbar-track{display:none}::-webkit-scrollbar-thumb{display:none}::selection{background:#f5433db3;color:#fdfdfc}body{font-family:Satoshi,sans-serif!important;transition:all .4s ease-in-out}h1[data-astro-cid-64uwkzkh]{font-size:1.2em;font-weight:bolder}[data-astro-cid-chongeu2]{margin:0;padding:0;box-sizing:border-box}.footer-container[data-astro-cid-chongeu2]{max-width:100em;margin:0 auto;padding-top:3em;padding-bottom:8em}footer[data-astro-cid-chongeu2]{font-family:Satoshi,sans-serif!important;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:2em}.footer-card[data-astro-cid-chongeu2],.footer-card-transparent[data-astro-cid-chongeu2]{border-radius:7px;min-width:fit-content;display:grid;grid-template-rows:repeat(4,3.2em);grid-row-gap:10px;background-color:#1a1a1a;padding:1em;justify-content:start;align-items:end;color:#e3e3e0;font-weight:500!important}.footer-card[data-astro-cid-chongeu2]:nth-child(1){flex-grow:2}.footer-card[data-astro-cid-chongeu2]:nth-child(2),.footer-card[data-astro-cid-chongeu2]:nth-child(3){flex-grow:3}.nav-item[data-astro-cid-chongeu2]{cursor:pointer}.brand-name-large[data-astro-cid-chongeu2]{grid-row:span 1;font-size:3em;font-weight:bolder;line-height:.9}.content[data-astro-cid-chongeu2]{grid-row:span 1;display:grid}.no-bg[data-astro-cid-chongeu2]{background-color:transparent;color:#000}.icon-container[data-astro-cid-chongeu2]{height:50px;width:50px;background-color:#1a1a1a;padding:5px;border-radius:.4em}.icons[data-astro-cid-chongeu2]{display:flex;justify-content:space-between}@media only screen and (max-width: 480px){.footer-card[data-astro-cid-chongeu2]{justify-content:center}.footer-container[data-astro-cid-chongeu2]{padding-left:1em;padding-right:1em}}\n"},{"type":"external","src":"/_astro/isles-and-wedding-vows.B8ZZRsoy.css"}],"routeData":{"route":"/projects/isles-and-wedding-vows","isIndex":false,"type":"page","pattern":"^\\/projects\\/isles-and-wedding-vows\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"isles-and-wedding-vows","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/isles-and-wedding-vows.astro","pathname":"/projects/isles-and-wedding-vows","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bz4Ef2TA.js"}],"styles":[{"type":"external","src":"/_astro/index.UUMKfTZb.css"},{"type":"inline","content":"*{margin:0;padding:0;box-sizing:border-box}.toggle-container{padding:1em;display:flex;justify-content:space-between;align-items:center}.spacer-block{grid-column:span 10}.toggle-wrapper{width:7em;height:2.5em;background-color:#90908c;padding:2px;border-radius:100vw}.toggle-wrapper-is-dark{background-color:#f3f3f2}.theme-toggle{font-weight:500;display:flex;justify-content:center;align-items:center;cursor:pointer;border-radius:100vw;width:50%;height:100%;background-color:#f3f3f2;color:#1b1b18;position:relative;left:0;transition:left .8s ease-in-out}body.dark .theme-toggle{color:#000}.is-dark{color:#fdfdfc;background-color:#f5433d;left:calc(100% - 54px);animation:backgroundFill .8s forwards}@keyframes backgroundFill{0%{background-color:transparent}to{background-color:#f5433d}}.logo-text-full{cursor:pointer}body.light{background-color:#f3f3f2}body.dark{background-color:#1c1c1a;color:#f3f3f2}body.dark .tag-wrapper,body.dark .hero_button-cta{background-color:#f3f3f2;border-color:#f3f3f2;color:#1b1b18}body.dark .hero_button-cta{border:1px solid hsl(59,6.5%,95.1%)}body.dark .hero_button-cta:hover{background-color:#1b1b18;color:#f3f3f2}body.dark .small{color:#f3f3f2!important}body.dark .work_title-wrap{background-color:#1b1b18cc;color:#f3f3f2!important}body.dark .card{color:#1b1b18}body.dark .footer-card-transparent{color:#e3e3e0}body.dark .footer-card,body.dark .card{background-color:#f3f3f2;color:#1b1b18}body.dark .price-info{color:#000}body.dark h1,body.dark .project-name{color:#f3f3f2}body.dark .blinder{background-color:#f3f3f2}body.dark .brand-logo{color:#1b1b18}::-webkit-scrollbar{display:none}::-webkit-scrollbar-track{display:none}::-webkit-scrollbar-thumb{display:none}::selection{background:#f5433db3;color:#fdfdfc}body{font-family:Satoshi,sans-serif!important;transition:all .4s ease-in-out}h1[data-astro-cid-64uwkzkh]{font-size:1.2em;font-weight:bolder}[data-astro-cid-chongeu2]{margin:0;padding:0;box-sizing:border-box}.footer-container[data-astro-cid-chongeu2]{max-width:100em;margin:0 auto;padding-top:3em;padding-bottom:8em}footer[data-astro-cid-chongeu2]{font-family:Satoshi,sans-serif!important;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:2em}.footer-card[data-astro-cid-chongeu2],.footer-card-transparent[data-astro-cid-chongeu2]{border-radius:7px;min-width:fit-content;display:grid;grid-template-rows:repeat(4,3.2em);grid-row-gap:10px;background-color:#1a1a1a;padding:1em;justify-content:start;align-items:end;color:#e3e3e0;font-weight:500!important}.footer-card[data-astro-cid-chongeu2]:nth-child(1){flex-grow:2}.footer-card[data-astro-cid-chongeu2]:nth-child(2),.footer-card[data-astro-cid-chongeu2]:nth-child(3){flex-grow:3}.nav-item[data-astro-cid-chongeu2]{cursor:pointer}.brand-name-large[data-astro-cid-chongeu2]{grid-row:span 1;font-size:3em;font-weight:bolder;line-height:.9}.content[data-astro-cid-chongeu2]{grid-row:span 1;display:grid}.no-bg[data-astro-cid-chongeu2]{background-color:transparent;color:#000}.icon-container[data-astro-cid-chongeu2]{height:50px;width:50px;background-color:#1a1a1a;padding:5px;border-radius:.4em}.icons[data-astro-cid-chongeu2]{display:flex;justify-content:space-between}@media only screen and (max-width: 480px){.footer-card[data-astro-cid-chongeu2]{justify-content:center}.footer-container[data-astro-cid-chongeu2]{padding-left:1em;padding-right:1em}}\n@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Regular.woff2) format(\"woff2\"),url(/fonts/Satoshi-Regular.woff) format(\"woff\"),url(/fonts/Satoshi-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Bold.woff2) format(\"woff2\"),url(/fonts/Satoshi-Bold.woff) format(\"woff\"),url(/fonts/Satoshi-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Italic.woff2) format(\"woff2\"),url(/fonts/Satoshi-Italic.woff) format(\"woff\"),url(/fonts/Satoshi-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-BoldItalic.woff2) format(\"woff2\"),url(/fonts/Satoshi-BoldItalic.woff) format(\"woff\"),url(/fonts/Satoshi-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Light.woff2) format(\"woff2\"),url(/fonts/Satoshi-Light.woff) format(\"woff\"),url(/fonts/Satoshi-Light.ttf) format(\"truetype\");font-weight:300;font-style:normal}[data-astro-cid-ymhdp2rl]{margin:0;padding:0;box-sizing:border-box}body{font-family:Satoshi,sans-serif!important;transition:all .4s ease-in-out;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}nav[data-astro-cid-ymhdp2rl]{border-radius:7px;padding:6px;font-size:14px;background-color:#706f6c80;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);position:fixed;z-index:10;bottom:1.5rem;left:50%;transform:translate(-50%)}a[data-astro-cid-ymhdp2rl]{text-decoration:none}ul[data-astro-cid-ymhdp2rl],li[data-astro-cid-ymhdp2rl],nav[data-astro-cid-ymhdp2rl]{display:inline-block}.nav-container[data-astro-cid-ymhdp2rl]{max-width:fit-content;display:grid;grid-template-columns:repeat(4,1fr);grid-column-gap:10px}.nav-container[data-astro-cid-ymhdp2rl]>[data-astro-cid-ymhdp2rl]{cursor:pointer}.nav-item[data-astro-cid-ymhdp2rl]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;color:#fdfdfc;padding:4px;border-radius:7px;height:48px;background-color:#706f6c;transition:all .4s ease-in-out;box-shadow:0 0 3px #706f6c;border:1px solid transparent;outline:1px solid hsl(50,2%,43.1%);outline-offset:1px;font-size:14px}.flex-center[data-astro-cid-ymhdp2rl]{display:flex;align-items:center;justify-content:center}.logo-text[data-astro-cid-ymhdp2rl]{color:#1b1b18;border-radius:7px;padding:1em;height:48px;background-color:#e9e9e6;font-weight:bolder;outline:1px solid hsl(50,2%,43.1%);outline-offset:2px;transition:all .4s ease-in-out}a[data-astro-cid-ymhdp2rl]{color:#fdfdfc}a[data-astro-cid-ymhdp2rl].enter{transform:translateY(0);transition:transform .4s ease-in-out}@media only screen and (min-width: 980px){.logo-text[data-astro-cid-ymhdp2rl]:hover,.nav-item[data-astro-cid-ymhdp2rl]:hover{background-color:#1b1b18;transform:scale(.9)}.nav-item[data-astro-cid-ymhdp2rl]:hover{border:1px solid hsl(50,20%,99%)}.logo-text[data-astro-cid-ymhdp2rl]:hover{color:#fdfdfc}}@media only screen and (max-width: 480px){.nav-item[data-astro-cid-ymhdp2rl]{padding:1em}}@keyframes navLoader{0%{bottom:-2rem}to{bottom:1.5rem}}img[data-astro-cid-ymhdp2rl]{image-rendering:optimizeQuality;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:crisp-edges}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"redirect","isIndex":false,"route":"/works/isles-and-wedding-vows","pattern":"^\\/works\\/isles-and-wedding-vows\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}],[{"content":"isles-and-wedding-vows","dynamic":false,"spread":false}]],"params":[],"component":"/works/isles-and-wedding-vows","pathname":"/works/isles-and-wedding-vows","prerender":false,"redirect":"/projects/isles-and-wedding-vows","redirectRoute":{"route":"/projects/isles-and-wedding-vows","isIndex":false,"type":"page","pattern":"^\\/projects\\/isles-and-wedding-vows\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"isles-and-wedding-vows","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/isles-and-wedding-vows.astro","pathname":"/projects/isles-and-wedding-vows","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}},"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Vincent/WebstormProjects/Hunter's Portfolio/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Vincent/WebstormProjects/Hunter's Portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Vincent/WebstormProjects/Hunter's Portfolio/src/pages/projects/isles-and-wedding-vows.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/projects/isles-and-wedding-vows.astro":"chunks/pages/isles-and-wedding-vows_ydR44rMh.mjs","\u0000@astrojs-manifest":"manifest_ujWkLF8n.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_VtMaEiuM.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_CHnwPUVh.mjs","\u0000@astro-page:src/pages/projects/isles-and-wedding-vows@_@astro":"chunks/isles-and-wedding-vows_CVjflcz3.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Cwepdl_N.mjs","C:/Users/Vincent/WebstormProjects/Hunter's Portfolio/src/content/WorkGrid/wedding.md":"chunks/wedding_N60I7mle.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.Bz4Ef2TA.js","/astro/hoisted.js?q=0":"_astro/hoisted.Co7N_46l.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.UUMKfTZb.css","/_astro/isles-and-wedding-vows.B8ZZRsoy.css","/hunter-logo.svg","/manifest.json","/robots.txt","/Visualsbyhunter_Privacy_Policy.txt","/fonts/Satoshi-Black.eot","/fonts/Satoshi-Black.ttf","/fonts/Satoshi-Black.woff","/fonts/Satoshi-Black.woff2","/fonts/Satoshi-BlackItalic.eot","/fonts/Satoshi-BlackItalic.ttf","/fonts/Satoshi-BlackItalic.woff","/fonts/Satoshi-BlackItalic.woff2","/fonts/Satoshi-Bold.eot","/fonts/Satoshi-Bold.ttf","/fonts/Satoshi-Bold.woff","/fonts/Satoshi-Bold.woff2","/fonts/Satoshi-BoldItalic.eot","/fonts/Satoshi-BoldItalic.ttf","/fonts/Satoshi-BoldItalic.woff","/fonts/Satoshi-BoldItalic.woff2","/fonts/Satoshi-Italic.eot","/fonts/Satoshi-Italic.ttf","/fonts/Satoshi-Italic.woff","/fonts/Satoshi-Italic.woff2","/fonts/Satoshi-Light.eot","/fonts/Satoshi-Light.ttf","/fonts/Satoshi-Light.woff","/fonts/Satoshi-Light.woff2","/fonts/Satoshi-LightItalic.eot","/fonts/Satoshi-LightItalic.ttf","/fonts/Satoshi-LightItalic.woff","/fonts/Satoshi-LightItalic.woff2","/fonts/Satoshi-Medium.eot","/fonts/Satoshi-Medium.ttf","/fonts/Satoshi-Medium.woff","/fonts/Satoshi-Medium.woff2","/fonts/Satoshi-MediumItalic.eot","/fonts/Satoshi-MediumItalic.ttf","/fonts/Satoshi-MediumItalic.woff","/fonts/Satoshi-MediumItalic.woff2","/fonts/Satoshi-Regular.eot","/fonts/Satoshi-Regular.ttf","/fonts/Satoshi-Regular.woff","/fonts/Satoshi-Regular.woff2","/fonts/Satoshi-Variable.eot","/fonts/Satoshi-Variable.ttf","/fonts/Satoshi-Variable.woff","/fonts/Satoshi-Variable.woff2","/fonts/Satoshi-VariableItalic.eot","/fonts/Satoshi-VariableItalic.ttf","/fonts/Satoshi-VariableItalic.woff","/fonts/Satoshi-VariableItalic.woff2","/_astro/hoisted.Bz4Ef2TA.js","/assets/icons/cross-svgrepo-com.svg","/assets/icons/dribble-svgrepo-com.svg","/assets/icons/expand-svgrepo-com.svg","/assets/icons/hunter-logo-192.png","/assets/icons/hunter-logo-512.png","/assets/icons/hunter-logo.svg","/assets/icons/img.png","/assets/icons/instagram-svgrepo-com.svg","/assets/icons/twitter-svgrepo-com.svg","/assets/icons/visualsbyhunter-footer.png","/assets/projectImages/food.webp","/assets/projectImages/food2.webp","/assets/projectImages/golfer.webp","/assets/projectImages/golfer2.webp","/assets/projectImages/placeholder.webp","/assets/projectImages/soon.png"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
