(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function l(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(s){if(s.ep)return;s.ep=!0;const a=l(s);fetch(s.href,a)}})();const h=[{title:"Voice-first Linux control",text:"Ask for system health, app launch, media controls, and weather without leaving the desktop."},{title:"Plugin-driven by design",text:"The assistant loads specialized plugins dynamically and keeps risky operations behind confirmation flows."},{title:"Developer-friendly memory",text:"Facts and conversation turns persist in SQLite so the assistant can remember preferences over time."}],f=["Wake word or active voice session starts the loop.","The assistant checks memory, time, and current context.","Tools run only when needed, with timeouts and safety guards.","Plugin updates hot-reload without a full rewrite."],v=[{label:"Arch Wiki",value:"Search Arch Wiki for pipewire latency"},{label:"Memory",value:"Remember that I prefer concise answers"},{label:"System",value:"Check system health"},{label:"Plugins",value:"Search for plugins related to Arch monitoring"}],i=[{label:"GitHub repository",href:"https://github.com/archpulse/JARVIS"},{label:"YouTube channel",href:"https://www.youtube.com/@archpuls"}],x=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=typeof navigator.hardwareConcurrency=="number"&&navigator.hardwareConcurrency>0?navigator.hardwareConcurrency<=4:!1,r=x||g,y=r?6:12,b=document.querySelector("#app");b.innerHTML=`
  <div class="relative isolate overflow-hidden">
    <div class="noise-grid pointer-events-none absolute inset-0 opacity-60"></div>
    <div id="particle-layer" class="pointer-events-none absolute inset-0 overflow-hidden"></div>

    <header class="section-shell relative z-10 pt-6">
      <nav class="glass-panel flex items-center justify-between rounded-full px-5 py-3">
        <div class="flex items-center gap-3">
          <div class="orb-core relative h-3.5 w-3.5"></div>
          <div>
            <p class="text-xs uppercase tracking-[0.32em] text-cyan-200/80">J.A.R.V.I.S.</p>
            <p class="text-sm text-slate-300">Open-source Arch Linux copilot</p>
          </div>
        </div>
        <div class="hidden items-center gap-3 sm:flex">
          <a class="btn-secondary text-sm" href="#features">Features</a>
          <a class="btn-secondary text-sm" href="#demo">Demo</a>
          <a class="btn-primary text-sm" href="${i[0].href}" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </nav>
    </header>

    <main class="relative z-10">
      <section class="section-shell grid min-h-[calc(100vh-96px)] items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="reveal max-w-3xl">
          <div class="animate__animated animate__fadeInDown animate__faster inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
            <span class="h-2 w-2 rounded-full bg-cyan-300"></span>
            Modular assistant for power users and maintainers
          </div>

          <h1 class="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Liquid glass
            <span class="bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300 bg-clip-text text-transparent">
              Arch copilot
            </span>
            with dynamic plugins.
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            J.A.R.V.I.S. is an open-source voice assistant that mixes Arch Linux automation,
            memory, web research, and safe plugin loading. Built to feel sharp, fast, and actually useful.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <a class="btn-primary ${r?"":"btn-pulse"}" href="${i[0].href}" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
            <a class="btn-secondary" href="${i[1].href}" target="_blank" rel="noreferrer">
              Watch on YouTube
            </a>
          </div>

          <div class="mt-10 grid gap-4 sm:grid-cols-3">
            ${h.map((t,e)=>`
                  <article class="glass-card rounded-3xl p-5 animate__animated animate__fadeInUp" style="animation-delay: ${e*.12}s">
                    <h2 class="text-base font-semibold text-white">${t.title}</h2>
                    <p class="mt-2 text-sm leading-6 text-slate-300">${t.text}</p>
                  </article>
                `).join("")}
          </div>
        </div>

        <div class="relative">
          <div class="absolute -left-4 top-4 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"></div>
          <div class="absolute -right-4 bottom-8 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"></div>

          <div class="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8 animate__animated animate__fadeInRight">
            <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
            <div class="relative">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs uppercase tracking-[0.28em] text-cyan-200/80">Live preview</p>
                  <h2 class="mt-2 text-2xl font-semibold text-white">Assistant runtime</h2>
                </div>
                <div class="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                  ready
                </div>
              </div>

              <div class="mt-6 space-y-3 rounded-3xl border border-white/10 bg-slate-950/40 p-4 font-mono text-sm text-slate-200">
                <div><span class="text-cyan-300">user</span>: Check system health</div>
                <div><span class="text-violet-300">jarvis</span>: CPU, RAM, disk, and top processes are on screen.</div>
                <div><span class="text-cyan-300">user</span>: Search Arch Wiki for pipewire latency</div>
                <div><span class="text-violet-300">jarvis</span>: Pulling relevant Arch Wiki results now.</div>
                <div><span class="text-cyan-300">user</span>: Search for plugins related to monitoring</div>
                <div><span class="text-violet-300">jarvis</span>: Found candidates and waiting for confirmation.</div>
              </div>

              <div class="mt-6 grid gap-3 sm:grid-cols-2">
                <div class="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p class="text-xs uppercase tracking-[0.24em] text-slate-400">Memory store</p>
                  <p class="mt-2 text-lg font-semibold text-white">SQLite-backed facts</p>
                  <p class="mt-2 text-sm text-slate-300">Persistent facts and recent conversation turns.</p>
                </div>
                <div class="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p class="text-xs uppercase tracking-[0.24em] text-slate-400">Plugin safety</p>
                  <p class="mt-2 text-lg font-semibold text-white">Confirm before install</p>
                  <p class="mt-2 text-sm text-slate-300">Static checks, AI review, and explicit approval.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="section-shell py-10">
        <div class="reveal">
          <p class="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Why it stands out</p>
          <h2 class="section-title mt-3">Useful enough to star, fast enough to show.</h2>
          <p class="section-copy">
            The site is deliberately framed around one thing: a Linux copilot that developers can
            understand in seconds and try with minimal friction.
          </p>
        </div>

        <div class="mt-10 grid gap-5 lg:grid-cols-3">
          ${[["Fast start","The project has a sample env file, tests, and a clear setup path."],["Obvious value","The demo flow shows system health, search, memory, and plugins immediately."],["OSS credibility","MIT license, contribution guide, and a modular plugin architecture."]].map(([t,e],l)=>`
                <article class="reveal glass-panel rounded-[1.75rem] p-6" style="transition-delay: ${l*120}ms">
                  <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                    0${l+1}
                  </div>
                  <h3 class="mt-5 text-xl font-semibold text-white">${t}</h3>
                  <p class="mt-3 text-sm leading-7 text-slate-300">${e}</p>
                </article>
              `).join("")}
        </div>
      </section>

      <section id="demo" class="section-shell py-14">
        <div class="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article class="reveal glass-panel rounded-[2rem] p-6 sm:p-8">
            <p class="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Demo flow</p>
            <h2 class="section-title mt-3">3-minute live demo</h2>
            <div class="mt-6 space-y-4">
              ${f.map((t,e)=>`
                    <div class="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm text-cyan-200">
                        ${e+1}
                      </div>
                      <p class="text-sm leading-7 text-slate-300">${t}</p>
                    </div>
                  `).join("")}
            </div>
          </article>

          <article class="reveal glass-card rounded-[2rem] p-6 sm:p-8">
            <p class="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Showcase prompts</p>
            <div class="mt-6 grid gap-4 sm:grid-cols-2">
              ${v.map((t,e)=>`
                    <div class="rounded-3xl border border-white/10 bg-slate-950/40 p-5 animate__animated animate__fadeInUp" style="animation-delay: ${e*.08}s">
                      <p class="text-xs uppercase tracking-[0.24em] text-slate-400">${t.label}</p>
                      <p class="mt-3 text-base font-medium text-white">${t.value}</p>
                    </div>
                  `).join("")}
            </div>
          </article>
        </div>
      </section>

      <section class="section-shell py-14">
        <div class="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <article class="reveal glass-panel rounded-[2rem] p-6 sm:p-8">
            <p class="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Open-source fit</p>
            <h2 class="section-title mt-3">Built for maintainers, not just users.</h2>
            <p class="section-copy">
              The current project structure now has a real license, environment sample,
              contribution guide, test suite, and a separate web showcase. That makes it easier
              for a reviewer to trust the repo, try it quickly, and star it for later.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              ${i.map(t=>`
                    <a class="btn-secondary" href="${t.href}" target="_blank" rel="noreferrer">
                      ${t.label}
                    </a>
                  `).join("")}
            </div>
          </article>

          <article class="reveal glass-card rounded-[2rem] p-6 sm:p-8">
            <p class="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Quick links</p>
            <div class="mt-6 space-y-4">
              <a class="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10" href="${i[0].href}" target="_blank" rel="noreferrer">
                <span class="font-medium text-white">GitHub repository</span>
                <span class="text-slate-400">open</span>
              </a>
              <a class="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10" href="${i[1].href}" target="_blank" rel="noreferrer">
                <span class="font-medium text-white">YouTube channel</span>
                <span class="text-slate-400">open</span>
              </a>
            </div>
            <div class="mt-6 rounded-3xl border border-white/10 bg-slate-950/40 p-5">
              <p class="text-xs uppercase tracking-[0.24em] text-slate-400">Message for maintainers</p>
              <p class="mt-3 text-sm leading-7 text-slate-300">
                If you want stars, show a clear pain point, a fast demo, and a repo that looks safe to use.
                This page is shaped around that idea.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer class="section-shell relative z-10 pb-10 pt-8">
      <div class="glass-panel rounded-[2rem] px-6 py-5 sm:px-8">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-sm text-slate-300">J.A.R.V.I.S. web showcase for Arch Linux automation and OSS discovery.</p>
          <div class="flex gap-3">
            <a class="btn-secondary text-sm" href="${i[0].href}" target="_blank" rel="noreferrer">GitHub</a>
            <a class="btn-secondary text-sm" href="${i[1].href}" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
`;const p=document.querySelector("#particle-layer");for(let t=0;t<y;t+=1){const e=document.createElement("div"),l=r?56+Math.random()*90:80+Math.random()*140,c=Math.random()*100,s=Math.random()*100,a=t%3===0?"rgba(34, 211, 238, 0.16)":t%3===1?"rgba(167, 139, 250, 0.14)":"rgba(59, 130, 246, 0.12)";e.className="orb",e.style.width=`${l}px`,e.style.height=`${l}px`,e.style.top=`${c}%`,e.style.left=`${s}%`,e.style.background=`radial-gradient(circle, ${a}, transparent 72%)`,e.style.setProperty("--duration",`${r?24+Math.random()*8:14+Math.random()*10}s`),e.style.animationDelay=`${Math.random()*-14}s`,p.appendChild(e)}const n=document.createElement("div");n.className="orb-ring";n.style.width=r?"360px":"540px";n.style.height=r?"360px":"540px";n.style.top="9%";n.style.right="-12%";n.style.setProperty("--duration",r?"64s":"44s");p.appendChild(n);const o=document.createElement("div");o.className="orb-core";o.style.width=r?"120px":"180px";o.style.height=r?"120px":"180px";o.style.top="36%";o.style.left="50%";o.style.transform="translateX(-50%)";p.appendChild(o);const m=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-visible"),r||e.target.classList.add("animate__animated","animate__fadeInUp"),m.unobserve(e.target))})},{threshold:.18});document.querySelectorAll(".reveal").forEach(t=>m.observe(t));const u=()=>{const t=Math.min(1,window.scrollY/(document.body.scrollHeight-window.innerHeight));document.documentElement.style.setProperty("--scroll-progress",t)};window.addEventListener("scroll",u,{passive:!0});u();r&&document.documentElement.classList.add("low-power");
