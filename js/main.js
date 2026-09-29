(() => {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* =========================================================
     RENDER: HEADER / NAV / FOOTER (a partir do CONFIG)
  ========================================================= */
  function renderBrand() {
    $$(".js-brand-full").forEach((el) => (el.textContent = CONFIG.brand.name));
    document.title = `${CONFIG.brand.name} — Portfólio & Currículo`;

    // logo real nos dois lugares (header e footer), com fallback para
    // as iniciais caso o arquivo configurado não seja encontrado
    $$("#brand-logo-header, #brand-logo-footer").forEach((img) => {
      img.src = CONFIG.brand.logo;
      img.alt = `Logo de ${CONFIG.brand.name}`;
      img.addEventListener(
        "error",
        () => {
          const fallback = document.createElement("span");
          fallback.textContent = CONFIG.brand.shortName;
          img.replaceWith(fallback);
        },
        { once: true }
      );
    });

    // favicon dinâmico (svg, png ou ico — o tipo é inferido pela extensão)
    const favicon = $("#favicon-link");
    if (favicon && CONFIG.brand.favicon) {
      const ext = CONFIG.brand.favicon.split(".").pop().toLowerCase();
      const mime = ext === "svg" ? "image/svg+xml" : ext === "ico" ? "image/x-icon" : `image/${ext}`;
      favicon.type = mime;
      favicon.href = CONFIG.brand.favicon;
    }
  }

  function renderNav() {
    const buildLinks = (items) =>
      items.map((n) => `<li><a href="${n.href}" data-nav-link>${n.label}</a></li>`).join("");
    $("#nav-list").innerHTML = buildLinks(CONFIG.nav);
    $("#mobile-nav-list").innerHTML = buildLinks(CONFIG.nav);
  }

  function renderFooter() {
    $("#footer-links").innerHTML = CONFIG.footer.links
      .map((l) => `<a href="${l.href}">${l.label}</a>`)
      .join("");
    $("#footer-year").textContent = new Date().getFullYear();
    $("#footer-github").href = CONFIG.contact.github;
    $("#footer-linkedin").href = CONFIG.contact.linkedin;
  }

  /* =========================================================
     RENDER: HERO
  ========================================================= */
  function renderHero() {
    $("#hero-eyebrow").textContent = CONFIG.hero.eyebrow;
    $("#hero-title").textContent = CONFIG.hero.headline;
    $("#hero-text").textContent = CONFIG.hero.subtext;
    const p = $("#hero-cta-primary");
    p.textContent = CONFIG.hero.ctaPrimary.label;
    p.href = CONFIG.hero.ctaPrimary.href;
    const s = $("#hero-cta-secondary");
    s.textContent = CONFIG.hero.ctaSecondary.label;
    s.href = CONFIG.hero.ctaSecondary.href;
    $("#hero-photo").src = CONFIG.profile.photo;
    $("#hero-photo").alt = CONFIG.profile.photoAlt;
  }

  /* =========================================================
     RENDER: SOBRE
  ========================================================= */
  function renderAbout() {
    $("#about-paragraphs").innerHTML = CONFIG.about.paragraphs.map((p) => `<p>${p}</p>`).join("");
    $("#about-stats").innerHTML = CONFIG.about.stats
      .map(
        (s) => `
        <div class="stat-card reveal">
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>`
      )
      .join("");
  }

  /* =========================================================
     RENDER: EXPERIÊNCIA / FORMAÇÃO — resumo compacto
     (o histórico completo já está no currículo e no LinkedIn,
     então aqui fica só um resumo enxuto, sem descrições longas)
  ========================================================= */
  function renderTimeline() {
    const t = CONFIG.timeline;

    $("#experience-list").innerHTML = t.experience
      .map(
        (e) => `
        <li class="compact-item">
          <span>
            <span class="compact-item-main">${e.title}</span><br>
            <span class="compact-item-place">${e.place}</span>
          </span>
          <span class="compact-item-period">${e.period}</span>
        </li>`
      )
      .join("");

    $("#education-list").innerHTML = t.education
      .map(
        (e) => `
        <li class="compact-item">
          <span>
            <span class="compact-item-main">${e.title}</span>
            ${e.place ? `<br><span class="compact-item-place">${e.place}</span>` : ""}
          </span>
          <span class="compact-item-period">${e.period}</span>
        </li>`
      )
      .join("");
  }

  /* =========================================================
     RENDER: CERTIFICAÇÕES — seção própria em destaque
  ========================================================= */
  function renderCertifications() {
    $("#cert-grid").innerHTML = CONFIG.timeline.certifications
      .map((c) => {
        const inProgress = !c.hours;
        const metaTags = [
          c.hours ? `<span class="cert-tag">${c.hours}</span>` : `<span class="cert-tag cert-tag--progress">Em andamento</span>`,
          c.year ? `<span class="cert-tag">${c.year}</span>` : "",
        ]
          .filter(Boolean)
          .join("");
        return `
        <div class="cert-card reveal">
          <span class="cert-badge" aria-hidden="true">${initials(c.title)}</span>
          <h3 class="cert-title">${c.title}</h3>
          <p class="cert-place">${c.place}</p>
          <div class="cert-meta">${metaTags}</div>
        </div>`;
      })
      .join("");
  }

  /* =========================================================
     RENDER: HABILIDADES
  ========================================================= */
  function initials(name) {
    return name
      .replace(/[^a-zA-Z0-9À-ÿ ]/g, "")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }

  function renderSkills() {
    $("#skills-grid").innerHTML = CONFIG.skills.categories
      .map(
        (cat) => `
        <div class="skill-category reveal">
          <h3 class="skill-category-title">${cat.name}</h3>
          <div class="skill-list">
            ${cat.items
              .map(
                (item) => `
              <div class="skill-item">
                <span class="skill-icon" aria-hidden="true">${initials(item.name)}</span>
                <span>
                  <span class="skill-name">${item.name}</span><br>
                  <span class="skill-level">${item.level}</span>
                </span>
              </div>`
              )
              .join("")}
          </div>
        </div>`
      )
      .join("");
  }

  /* =========================================================
     RENDER: CONTATO
  ========================================================= */
  function renderContact() {
    const c = CONFIG.contact;
    $("#contact-title").textContent = c.title;
    $("#contact-subtitle").textContent = c.subtitle;
    $("#contact-email").textContent = c.email;
    $("#contact-email").href = `mailto:${c.email}`;
    $("#contact-phone").textContent = c.phoneDisplay;
    $("#contact-phone").href = `https://wa.me/${c.whatsappNumber}`;
    $("#contact-location").textContent = c.location;
    $("#contact-github").href = c.github;
    $("#contact-linkedin").href = c.linkedin;
    $("#contact-whatsapp-btn").href = `https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(
      "Olá Vinicios, vi seu portfólio e gostaria de conversar."
    )}`;
  }

  /* =========================================================
     HEADER: estado de scroll + link ativo
  ========================================================= */
  function initHeaderScroll() {
    const header = $("#site-header");
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initScrollSpy() {
    const links = $$("[data-nav-link]");
    const sections = CONFIG.nav
      .map((n) => document.querySelector(n.href))
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || !sections.length) return;

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === id));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* =========================================================
     MENU MOBILE
  ========================================================= */
  function initMobileMenu() {
    const toggle = $("#menu-toggle");
    const nav = $("#mobile-nav");
    const close = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    const open = () => {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("is-open");
      isOpen ? close() : open();
    });
    $$("a", nav).forEach((a) => a.addEventListener("click", close));
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  /* =========================================================
     REVEAL ON SCROLL
  ========================================================= */
  function initReveal() {
    const targets = $$(".reveal");
    if (!("IntersectionObserver" in window) || !targets.length) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((t) => obs.observe(t));
  }

  function markReveal() {
    // marca elementos estáticos com a classe reveal para entrada suave
    $$(".section-head, .about-text, .timeline-sub, .contact-panel, .compact-panel-head").forEach((el) =>
      el.classList.add("reveal")
    );
  }

  /* =========================================================
     PROJETOS — CARROSSEL EM ANEL (manual, sem autoplay)
  ========================================================= */
  const RingCarousel = {
    activeIndex: 0,

    // Monta o conteúdo de mídia da capa do card: imagem normal (string)
    // ou vídeo em loop (objeto { type: "video", src, fallback, poster }).
    renderCoverMedia(p) {
      const cover = p.cover;

      if (cover && typeof cover === "object" && cover.type === "video") {
        const poster = cover.poster ? ` poster="${cover.poster}"` : "";
        // MP4 (H.264) primeiro: é o formato que o Safari/iOS reproduz de forma
        // mais confiável. O WebM fica como alternativa para os demais navegadores.
        return `
          <video class="media-shot media-cover-video" autoplay loop muted playsinline
            preload="auto" disablepictureinpicture${poster}
            aria-label="Prévia animada do projeto ${p.title}">
            ${cover.fallback ? `<source src="${cover.fallback}" type="video/mp4">` : ""}
            ${cover.src ? `<source src="${cover.src}" type="video/webm">` : ""}
          </video>
          <button type="button" class="cover-play" aria-label="Reproduzir prévia animada" hidden>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
          </button>`;
      }

      const coverSrc = cover || (p.images && p.images[0] && p.images[0].src);
      return coverSrc
        ? `<img class="media-bg" src="${coverSrc}" alt="" aria-hidden="true" loading="lazy">
           <img class="media-shot" src="${coverSrc}" alt="Tela do projeto ${p.title}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=&quot;media-placeholder&quot;>Imagem do projeto<br>(placeholder)</span>'">`
        : `<span class="media-placeholder">Imagem do projeto<br>(placeholder)</span>`;
    },

    render() {
      const track = $("#ring-track");
      track.innerHTML = PROJECTS.map(
        (p, i) => `
        <article class="ring-card" data-index="${i}" tabindex="0" role="button"
          aria-label="Ver detalhes do projeto ${p.title}">
          <div class="ring-card-media">
            ${this.renderCoverMedia(p)}
          </div>
          <div class="ring-card-body">
            <div class="ring-card-category">${p.category}</div>
            <h3 class="ring-card-title">${p.title}</h3>
            <p class="ring-card-desc">${p.shortDescription}</p>
            <div class="ring-card-tech">
              ${p.technologies.map((t) => `<span class="tech-pill">${t}</span>`).join("")}
              ${p.status === "em-desenvolvimento" ? `<span class="status-badge status-badge--inline">Em desenvolvimento</span>` : ""}
            </div>
          </div>
        </article>`
      ).join("");

      $("#ring-dots").innerHTML = PROJECTS.map(
        (_, i) => `<button class="ring-dot" data-dot="${i}" aria-label="Ir para projeto ${i + 1}"></button>`
      ).join("");

      $$(".ring-card", track).forEach((card) => {
        card.addEventListener("click", () => {
          const idx = Number(card.dataset.index);
          if (idx === this.activeIndex) {
            ProjectModal.open(PROJECTS[idx]);
          } else {
            this.goTo(idx);
          }
        });
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const idx = Number(card.dataset.index);
            idx === this.activeIndex ? ProjectModal.open(PROJECTS[idx]) : this.goTo(idx);
          }
        });
      });

      $$(".ring-dot").forEach((dot) => {
        dot.addEventListener("click", () => this.goTo(Number(dot.dataset.dot)));
      });

      this.update();
    },

    // Capa em vídeo (projetos em desenvolvimento).
    // - Toca só quando o card está visível na tela.
    // - Se o navegador bloquear o autoplay (Modo de Pouca Energia do iPhone,
    //   "Reduzir Movimento" etc.), mostra um botão ▶ para o usuário iniciar.
    initCoverVideos() {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
      const videos = $$(".media-cover-video");
      if (!videos.length) return;

      const setup = (video) => {
        const btn = video.parentElement.querySelector(".cover-play");
        video.muted = true;               // o iOS exige muted via propriedade também
        video.defaultMuted = true;
        video.playsInline = true;
        video.setAttribute("webkit-playsinline", "");

        const showBtn = (show) => { if (btn) btn.hidden = !show; };
        const tryPlay = () => {
          const pr = video.play();
          if (pr && pr.catch) pr.then(() => showBtn(false)).catch(() => showBtn(true));
        };

        if (btn) {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();          // não abre o modal do projeto
            video.loop = true;
            video.play().then(() => showBtn(false)).catch(() => {});
          });
        }
        video.addEventListener("playing", () => showBtn(false));

        if (reduce.matches) {             // respeita a preferência: não inicia sozinho
          video.pause();
          video.removeAttribute("autoplay");
          showBtn(true);
          return;
        }

        this._coverVisible.set(video, false);
        const io = new IntersectionObserver(([entry]) => {
          this._coverVisible.set(video, entry.isIntersecting);
          if (entry.isIntersecting) tryPlay();
          else video.pause();
        }, { threshold: 0.25 });
        io.observe(video);

        // primeira interação do usuário libera o autoplay bloqueado
        const unlock = () => { if (this._coverVisible.get(video)) tryPlay(); };
        ["touchstart", "pointerdown", "keydown"].forEach((ev) =>
          window.addEventListener(ev, unlock, { once: true, passive: true })
        );
      };

      this._coverVisible = new WeakMap();
      videos.forEach(setup);
    },

    // A altura do carrossel acompanha o card mais alto (textos longos não
    // estouram mais o card nem cobrem setas/pontos, no celular ou no desktop).
    fitHeight() {
      const viewport = $("#ring-viewport");
      const cards = $$(".ring-card");
      if (!viewport || !cards.length) return;
      const tallest = Math.max(...cards.map((c) => c.offsetHeight));
      // folga vertical para o efeito de escala/perspectiva
      viewport.style.setProperty("--ring-h", `${Math.ceil(tallest + 48)}px`);
    },

    initFitHeight() {
      this.fitHeight();
      let raf = 0;
      const schedule = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => this.fitHeight()); };
      window.addEventListener("resize", schedule);
      window.addEventListener("orientationchange", schedule);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);
      if ("ResizeObserver" in window) {
        const ro = new ResizeObserver(schedule);
        $$(".ring-card").forEach((c) => ro.observe(c));
      }
      // imagens com lazy loading mudam a altura quando carregam
      $$(".ring-card img").forEach((img) => img.addEventListener("load", schedule));
    },

    goTo(index) {
      const len = PROJECTS.length;
      this.activeIndex = ((index % len) + len) % len;
      this.update();
    },

    next() { this.goTo(this.activeIndex + 1); },
    prev() { this.goTo(this.activeIndex - 1); },

    update() {
      const len = PROJECTS.length;
      $$(".ring-card").forEach((card) => {
        const idx = Number(card.dataset.index);
        let diff = idx - this.activeIndex;
        // normaliza a diferença para o caminho mais curto no "anel"
        if (diff > len / 2) diff -= len;
        if (diff < -len / 2) diff += len;

        let pos = "hidden";
        if (diff === 0) pos = "center";
        else if (diff === 1) pos = "right1";
        else if (diff === -1) pos = "left1";
        else if (diff === 2) pos = "right2";
        else if (diff === -2) pos = "left2";

        card.dataset.pos = pos;

        const offsets = {
          center: "translate(-50%, -50%) scale(1) rotateY(0deg)",
          left1: "translate(calc(-50% - 230px), -50%) scale(0.82) rotateY(18deg)",
          right1: "translate(calc(-50% + 230px), -50%) scale(0.82) rotateY(-18deg)",
          left2: "translate(calc(-50% - 400px), -50%) scale(0.68) rotateY(24deg)",
          right2: "translate(calc(-50% + 400px), -50%) scale(0.68) rotateY(-24deg)",
          hidden: "translate(-50%, -50%) scale(0.6)",
        };
        card.style.transform = offsets[pos];
      });

      $$(".ring-dot").forEach((dot, i) => dot.classList.toggle("is-active", i === this.activeIndex));
    },

    initArrows() {
      $("#ring-prev").addEventListener("click", () => this.prev());
      $("#ring-next").addEventListener("click", () => this.next());
    },

    initSwipe() {
      const viewport = $("#ring-viewport");
      let startX = 0;
      let tracking = false;
      viewport.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        tracking = true;
      }, { passive: true });
      viewport.addEventListener("touchend", (e) => {
        if (!tracking) return;
        const delta = e.changedTouches[0].clientX - startX;
        if (Math.abs(delta) > 40) delta < 0 ? this.next() : this.prev();
        tracking = false;
      });
    },

    initKeyboard() {
      const viewport = $("#ring-viewport");
      viewport.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") this.next();
        if (e.key === "ArrowLeft") this.prev();
      });
    },

    init() {
      this.render();
      this.initCoverVideos();
      this.initFitHeight();
      this.initArrows();
      this.initSwipe();
      this.initKeyboard();
    },
  };

  /* =========================================================
     MODAL DE DETALHES DO PROJETO + GALERIA
  ========================================================= */
  const ProjectModal = {
    galleryIndex: 0,
    currentProject: null,
    lastFocused: null,

    open(project) {
      this.currentProject = project;
      this.galleryIndex = 0;
      this.lastFocused = document.activeElement;

      $("#modal-category").innerHTML = `${project.category}${
        project.status === "em-desenvolvimento" ? ` <span class="status-badge status-badge--inline">Em desenvolvimento</span>` : ""
      }`;
      $("#modal-title").textContent = project.title;
      $("#modal-challenge").textContent = project.challenge;
      $("#modal-solution").textContent = project.solution;
      $("#modal-features").innerHTML = project.features.map((f) => `<li>${f}</li>`).join("");
      $("#modal-tech").innerHTML = project.technologies
        .map((t) => `<span class="tech-pill">${t}</span>`)
        .join("");
      $("#modal-info-grid").innerHTML = Object.entries(project.info || {})
        .map(([k, v]) => `<div class="modal-info-item"><span>${k}</span><strong>${v}</strong></div>`)
        .join("");

      const hasImages = Array.isArray(project.images) && project.images.length > 0;
      const galleryControls = $(".gallery-controls");
      if (galleryControls) galleryControls.style.display = hasImages ? "flex" : "none";

      $("#gallery-thumbs").innerHTML = hasImages
        ? project.images
            .map(
              (img, i) => `
              <button class="gallery-thumb" data-thumb="${i}" aria-label="Imagem ${i + 1} de ${project.images.length}">
                <img src="${img.src}" alt="" loading="lazy" onerror="this.closest('.gallery-thumb').style.display='none'">
              </button>`
            )
            .join("")
        : "";

      $$(".gallery-thumb").forEach((btn) => {
        btn.addEventListener("click", () => {
          const targetIndex = Number(btn.dataset.thumb);
          const direction = targetIndex > this.galleryIndex ? "next" : targetIndex < this.galleryIndex ? "prev" : null;
          this.galleryIndex = targetIndex;
          this.renderGallery(direction);
        });
      });

      this.renderGallery();

      const modal = $("#project-modal");
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      $(".modal-close", modal).focus();
    },

    ensureCaptionEl() {
      let caption = $("#gallery-caption");
      if (!caption) {
        caption = document.createElement("div");
        caption.id = "gallery-caption";
        caption.className = "gallery-caption";
        caption.innerHTML = `
          <p class="gallery-caption-title" id="gallery-caption-title"></p>
          <p class="gallery-caption-desc" id="gallery-caption-desc"></p>`;

        const controls = $(".gallery-controls");
        if (controls) {
          // Agrupa as duas setas para não perder o alinhamento ao inserir a legenda na mesma linha
          const prev = $("#gallery-prev", controls);
          const next = $("#gallery-next", controls);
          const arrowsWrap = document.createElement("div");
          arrowsWrap.className = "gallery-arrows-wrap";
          if (prev) arrowsWrap.appendChild(prev);
          if (next) arrowsWrap.appendChild(next);
          controls.innerHTML = "";
          controls.appendChild(caption);
          controls.appendChild(arrowsWrap);
          controls.style.justifyContent = "space-between";
          controls.style.alignItems = "flex-start";
          controls.style.flexWrap = "wrap";
          controls.style.rowGap = "0.6rem";
        } else {
          $("#gallery-main").insertAdjacentElement("afterend", caption);
        }
      }
      return caption;
    },

    renderGallery(direction = null) {
      const project = this.currentProject;
      const main = $("#gallery-main");

      if (!project.images || project.images.length === 0) {
        main.innerHTML = `<span class="media-placeholder">Telas do sistema em breve<br>(projeto ainda em desenvolvimento)</span>`;
        const captionEl = this.ensureCaptionEl();
        captionEl.classList.add("is-empty");
        return;
      }

      const image = project.images[this.galleryIndex];
      const src = image.src;
      const title = (image.title || "").trim();
      const description = (image.description || "").trim();
      const altText = title || description || `Tela ${this.galleryIndex + 1} do projeto ${project.title}`;
      // "next" -> a nova imagem entra vindo da direita (avançando)
      // "prev" -> a nova imagem entra vindo da esquerda (voltando)
      // null   -> sem direção definida (abertura do modal ou clique no mesmo thumb): usa fade simples
      const slideClass = direction === "next" ? "is-sliding-next" : direction === "prev" ? "is-sliding-prev" : "";
      main.innerHTML = `
        <img class="media-bg ${slideClass}" src="${src}" alt="" aria-hidden="true">
        <img class="media-shot ${slideClass}" src="${src}" alt="${altText}"
          onerror="this.parentElement.innerHTML='<span class=&quot;media-placeholder&quot;>Imagem ainda não adicionada<br>Substitua em assets/images/projects/${project.id}/</span>'">`;
      $$(".gallery-thumb").forEach((t, i) => t.classList.toggle("is-active", i === this.galleryIndex));

      const captionEl = this.ensureCaptionEl();
      $("#gallery-caption-title", captionEl).textContent = title;
      $("#gallery-caption-desc", captionEl).textContent = description;
      captionEl.classList.toggle("is-empty", !title && !description);
    },

    nextImage() {
      const len = this.currentProject.images.length;
      if (!len) return;
      this.galleryIndex = (this.galleryIndex + 1) % len;
      this.renderGallery("next");
    },
    prevImage() {
      const len = this.currentProject.images.length;
      if (!len) return;
      this.galleryIndex = (this.galleryIndex - 1 + len) % len;
      this.renderGallery("prev");
    },

    close() {
      const modal = $("#project-modal");
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (this.lastFocused) this.lastFocused.focus();
    },

    initEvents() {
      const modal = $("#project-modal");
      $(".modal-close", modal).addEventListener("click", () => this.close());
      $(".project-modal-backdrop", modal).addEventListener("click", () => this.close());
      $("#gallery-prev").addEventListener("click", () => this.prevImage());
      $("#gallery-next").addEventListener("click", () => this.nextImage());

      window.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("is-open")) return;
        if (e.key === "Escape") this.close();
        if (e.key === "ArrowRight") this.nextImage();
        if (e.key === "ArrowLeft") this.prevImage();
        if (e.key === "Tab") this.trapFocus(e, modal);
      });
    },

    trapFocus(e, modal) {
      const focusable = $$(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        modal
      ).filter((el) => el.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
  };

  /* =========================================================
     INIT
  ========================================================= */
  document.addEventListener("DOMContentLoaded", () => {
    renderBrand();
    renderNav();
    renderHero();
    renderAbout();
    renderTimeline();
    renderCertifications();
    renderSkills();
    renderContact();
    renderFooter();

    markReveal();
    initHeaderScroll();
    initScrollSpy();
    initMobileMenu();

    RingCarousel.init();
    ProjectModal.initEvents();

    initReveal();
  });
})();