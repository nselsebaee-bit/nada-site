(function () {
  "use strict";

  var language = localStorage.getItem("site_lang") || "ar";
  if (language !== "ar" && language !== "en") language = "ar";

  var page = document.body.getAttribute("data-page") || "home";
  if (page === "articles" || page === "article") {
    window.location.replace("index.html");
    return;
  }
  var copy = SITE.copy[language];
  var aboutContent = SITE.aboutPage[language];
  var serviceContent = SITE.services[language];
  var isArabic = language === "ar";
  var articleSlug = document.body.getAttribute("data-article-slug");
  var articleContent = page === "article" ? SITE.blogPosts[language].find(function (item) {
    return item.slug === articleSlug;
  }) : null;
  var englishProjectMeta = {
    "gaia-global": ["June 2025 – June 2026", "GAIA Global"],
    "sawa-sawa": ["2024 – 2025", "Alwan wa Awtar · UNESCO International Fund for Cultural Diversity (IFCD)"],
    "nassajat-alnil": ["September 2024", "Makanuna Initiative · Aliaa Gallery · Nubian Women Initiative for Handcrafts · EU-funded with EUNIC Egypt"],
    "wuf12": ["November 2024", "Habitat for Humanity · World Urban Forum 12"],
    "dar-al-mabra": ["2025 – 2026", "Dar Al-Mabara Orphanage · Makanuna Foundation"],
    "makanuna-visual": ["July 2024 – 2025", "Makanuna Foundation and project partners"],
    "alasmarat": ["2024", "Meen Byraby Meen Initiative · Aliaa Gallery · Star Metal Workshop · Organized by Habitat for Humanity with Makanuna and BENAA Foundation; in collaboration with AASMT under the patronage of UDF"],
    "darb-al-ahmar-tour": ["", "Makanuna · Soura & Hekaya"],
    "mastery-academy": ["Setup: 2018–2019 · Role: Jan 2021 – Jun 2022", "Mastery Academy"],
    "on-time-pioneers": ["2019 – 2020", "On Time Group · Pioneers Academy"],
    "hakim-archive": ["2018 – 2019", "Private office of singer Hakim"],
    "care-lecaire": ["2019", "CARE International · Le Caire"],
    "sky-events": ["2015 – 2023 · Part-time", "Sky Event Management"],
    "yomeddine": ["2015", "Yomeddine"],
    "lawha": ["2019", "Independent film · Visions Cairo Short Film Festival"],
    "independent-films": ["Since 2017", "Independent film and theatre projects"],
    "gelsa-orfeya": ["2018", "Independent film"],
    "bara-geiby": ["2018", "Independent theatre"],
    "screenplays": ["", "Screenwriting projects"],
    "music-video-documentation": ["", "Music video production"],
    "sinai-community": ["January – May 2020", "Independent arts team · South Sinai"],
    "palestinian-training": ["2022", "Community training events"],
    "actor-showreels": ["2018 – 2019", "Actor showreel project"],
    "ten-tv": ["2014 – 2015", "TEN TV"],
    "delta-festival": ["2018", "Delta Little Queen Festival · Mansoura"]
  };

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function createNavArrow(direction) {
    var icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("width", "18");
    icon.setAttribute("height", "18");
    icon.setAttribute("aria-hidden", "true");
    icon.setAttribute("focusable", "false");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", direction === "left" ? "M15 18 9 12l6-6" : "m9 18 6-6-6-6");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    icon.appendChild(path);
    return icon;
  }

  function setCopy() {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.style.setProperty("--content-direction", isArabic ? "rtl" : "ltr");
    var pageTitles = {
      home: SITE.brand[language],
      archive: isArabic ? "أرشيف الخبرات والمشاريع | " + SITE.brand[language] : "Experience Archive | " + SITE.brand[language],
      project: isArabic ? "تفاصيل المشروع | " + SITE.brand[language] : "Project Details | " + SITE.brand[language],
      articles: isArabic ? "المدونة | " + SITE.brand[language] : "Blog | " + SITE.brand[language],
      article: articleContent ? articleContent.title + " | " + SITE.brand[language] : copy.notFoundTitle + " | " + SITE.brand[language],
      studio: copy.studioTitle + " | " + SITE.brand[language],
      services: serviceContent.pageTitle,
      about: aboutContent.metaTitle,
      contact: isArabic ? "التعاون | " + SITE.brand[language] : "Collaborate | " + SITE.brand[language]
    };
    document.title = pageTitles[page] || SITE.brand[language];
    if (page === "about" || page === "services" || page === "articles" || page === "article" || page === "studio") {
      var description = document.querySelector('meta[name="description"]');
      if (description) {
        if (page === "about") description.content = aboutContent.metaDescription;
        else if (page === "services") description.content = serviceContent.pageDescription;
        else if (page === "articles") description.content = copy.articlesDescription;
        else if (page === "article") description.content = articleContent ? articleContent.seoDescription : copy.notFoundText;
        else description.content = copy.studioIntro;
      }
    }
    document.querySelectorAll("[data-copy]").forEach(function (node) {
      var value = copy[node.getAttribute("data-copy")];
      if (value !== undefined) node.textContent = value;
    });
    document.querySelectorAll("[data-copy-aria]").forEach(function (node) {
      var value = copy[node.getAttribute("data-copy-aria")];
      if (value !== undefined) node.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-home]").forEach(function (node) {
      var value = copy.hero[node.getAttribute("data-home")];
      if (value === undefined) value = copy[node.getAttribute("data-home")];
      if (value !== undefined) node.textContent = value;
    });
    document.querySelectorAll("[data-home-aria]").forEach(function (node) {
      node.setAttribute("aria-label", copy.hero[node.getAttribute("data-home-aria")]);
    });
    document.querySelectorAll("[data-about]").forEach(function (node) {
      var value = aboutContent[node.getAttribute("data-about")];
      if (value !== undefined) node.textContent = value;
    });
    document.querySelectorAll("[data-service]").forEach(function (node) {
      var value = serviceContent[node.getAttribute("data-service")];
      if (value !== undefined) node.textContent = value;
    });
  }

  function renderChrome() {
    var headerHost = document.getElementById("site-header");
    var header = element("header", "site-header");
    var inner = element("div", "wrap header-inner");
    var brand = element("a", "brand", SITE.brand[language]);
    brand.href = "index.html";
    brand.setAttribute("aria-label", SITE.brand[language] + " — " + copy.home);
    inner.appendChild(brand);

    var navShell = element("div", "nav-shell");
    var nav = element("nav", "main-nav");
    nav.setAttribute("aria-label", isArabic ? "القائمة الرئيسية" : "Main navigation");
    SITE.nav[language].forEach(function (item) {
      var link = element("a", "nav-link", item[0]);
      link.href = item[1];
      if ((page === "archive" || page === "project") && item[1] === "archive.html") link.classList.add("is-active");
      if (page === "services" && item[1] === "services.html") link.classList.add("is-active");
      if (page === "studio" && item[1] === "studio.html") link.classList.add("is-active");
      if (page === "about" && item[1] === "about.html") link.classList.add("is-active");
      if (page === "contact" && item[1] === "contact.html") link.classList.add("is-active");
      nav.appendChild(link);
    });
    var scrollLeft = element("button", "nav-scroll nav-scroll-left");
    scrollLeft.type = "button";
    scrollLeft.setAttribute("aria-label", isArabic ? "تحريك القائمة إلى اليسار" : "Scroll navigation left");
    scrollLeft.title = isArabic ? "تحريك القائمة إلى اليسار" : "Scroll navigation left";
    scrollLeft.appendChild(createNavArrow("left"));
    var scrollRight = element("button", "nav-scroll nav-scroll-right");
    scrollRight.type = "button";
    scrollRight.setAttribute("aria-label", isArabic ? "تحريك القائمة إلى اليمين" : "Scroll navigation right");
    scrollRight.title = isArabic ? "تحريك القائمة إلى اليمين" : "Scroll navigation right";
    scrollRight.appendChild(createNavArrow("right"));
    navShell.appendChild(scrollLeft);
    navShell.appendChild(nav);
    navShell.appendChild(scrollRight);

    var controls = element("div", "header-controls");
    var languageButton = element("button", "language-toggle", copy.language);
    languageButton.type = "button";
    languageButton.addEventListener("click", function () {
      localStorage.setItem("site_lang", language === "ar" ? "en" : "ar");
      window.location.reload();
    });
    controls.appendChild(languageButton);
    inner.appendChild(navShell);
    inner.appendChild(controls);
    header.appendChild(inner);
    headerHost.appendChild(header);

    function updateHeaderOffset() {
      var headerHeight = Math.ceil(header.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--site-header-height", headerHeight + "px");
    }
    function updateNavControls() {
      var hasOverflow = nav.scrollWidth > nav.clientWidth + 1;
      navShell.classList.toggle("has-overflow", hasOverflow);
      var maxScroll = nav.scrollWidth - nav.clientWidth;
      var currentScroll = Math.abs(nav.scrollLeft);
      scrollLeft.disabled = !hasOverflow || currentScroll >= maxScroll - 1;
      scrollRight.disabled = !hasOverflow || currentScroll <= 1;
    }
    function scrollNavigation(direction) {
      nav.scrollBy({ left: direction * Math.max(140, nav.clientWidth * 0.7), behavior: "smooth" });
      window.setTimeout(updateNavControls, 350);
    }
    scrollLeft.addEventListener("click", function () { scrollNavigation(-1); });
    scrollRight.addEventListener("click", function () { scrollNavigation(1); });
    nav.addEventListener("scroll", updateNavControls, { passive: true });
    window.addEventListener("resize", function () {
      updateNavControls();
      updateHeaderOffset();
    });
    if (window.ResizeObserver) {
      new ResizeObserver(updateNavControls).observe(nav);
      new ResizeObserver(updateHeaderOffset).observe(header);
    }
    updateHeaderOffset();
    requestAnimationFrame(updateNavControls);

    var footerHost = document.getElementById("site-footer");
    var footer = element("footer", "site-footer");
    var footerInner = element("div", "wrap footer-inner");
    var footerIdentity = element("div", "footer-identity");
    var footerBrand = element("a", "footer-brand", SITE.brand[language]);
    footerBrand.href = "index.html";
    var footerNote = element("p", "footer-note", copy.footerNote);
    footerIdentity.appendChild(footerBrand);
    footerIdentity.appendChild(footerNote);
    var footerLinks = element("div", "footer-links");
    [
      ["LinkedIn", SITE.linkedin],
      [copy.emailLabel, "mailto:" + SITE.email],
      [copy.phoneLabel, "https://wa.me/" + SITE.phone.replace(/\D/g, "")]
    ].forEach(function (item) {
      var link = element("a", "", item[0]);
      link.href = item[1];
      if (item[1].indexOf("http") === 0) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      footerLinks.appendChild(link);
    });
    var rights = element("small", "footer-rights", "© " + new Date().getFullYear() + " " + copy.footerRights);
    footerInner.appendChild(footerIdentity);
    footerInner.appendChild(footerLinks);
    footerInner.appendChild(rights);
    footer.appendChild(footerInner);
    footerHost.appendChild(footer);

    var returnButton = element("button", "page-return-button", "↶");
    returnButton.type = "button";
    returnButton.addEventListener("click", function () {
      if (window.scrollY > 8) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "index.html";
      }
    });
    function updateReturnButton() {
      var atTop = window.scrollY <= 8;
      returnButton.textContent = atTop ? "↶" : "↑";
      returnButton.setAttribute("aria-label", atTop ? copy.previousPage : copy.backToTop);
      returnButton.title = atTop ? copy.previousPage : copy.backToTop;
    }
    window.addEventListener("scroll", updateReturnButton, { passive: true });
    updateReturnButton();
    document.body.appendChild(returnButton);
  }

  function localizedProject(project) {
    if (language === "ar") return project;
    var translated = project.en || {};
    var translatedMeta = englishProjectMeta[project.id] || [];
    return {
      id: project.id,
      category: project.category,
      years: translated.years || translatedMeta[0] || project.years,
      organization: translated.organization || translatedMeta[1] || project.organization,
      role: translated.role || project.role,
      title: translated.title || project.title,
      summary: translated.summary || project.summary,
      scope: translated.scope || project.scope,
      outcomes: translated.outcomes || project.outcomes,
      links: project.links
    };
  }

  function categoryName(categoryId) {
    var category = SITE.categories.find(function (item) { return item.id === categoryId; });
    return category ? category[language] : "";
  }

  function createProjectCard(project) {
    var item = localizedProject(project);
    var card = element("article", "project-card");
    var link = element("a", "project-card-link");
    link.href = "project.html?id=" + encodeURIComponent(project.id);
    var image = element("div", "card-image media-placeholder");
    image.setAttribute("aria-hidden", "true");
    image.setAttribute("data-reveal", "image");
    if (project.image) {
      var photo = element("img", "card-photo");
      photo.src = project.image;
      photo.alt = item.title;
      photo.loading = "lazy";
      image.appendChild(photo);
    } else {
      image.appendChild(element("span", "placeholder-caption", copy.imageLater));
    }
    var meta = element("div", "card-meta");
    meta.appendChild(element("span", "category-tag", categoryName(project.category)));
    if (item.years) meta.appendChild(element("span", "card-years", item.years));
    var title = element("h3", "card-title", item.title);
    var summary = element("p", "card-summary", item.summary);
    var cta = element("span", "text-link card-cta", copy.openProject);
    link.appendChild(image);
    link.appendChild(meta);
    link.appendChild(title);
    link.appendChild(summary);
    link.appendChild(cta);
    card.appendChild(link);
    return card;
  }

  function renderProjectList(container, projects) {
    container.replaceChildren();
    projects.forEach(function (project) {
      container.appendChild(createProjectCard(project));
    });
  }

  function createServiceCard(service, index, compact) {
    var card = element(compact ? "a" : "article", compact ? "service-card service-card-home" : "service-card");
    var serviceId = "service-" + String(index + 1).padStart(2, "0");
    if (compact) {
      card.href = "services.html#" + serviceId;
      card.setAttribute("aria-label", service.title + " — " + copy.serviceDetails);
    } else {
      card.id = serviceId;
    }
    var art = element("div", "service-card-art service-card-art-" + (index + 1));
    art.setAttribute("aria-hidden", "true");
    art.appendChild(element("span", "service-card-art-shape service-card-art-shape-one"));
    art.appendChild(element("span", "service-card-art-shape service-card-art-shape-two"));
    art.appendChild(element("span", "service-card-art-shape service-card-art-shape-three"));
    if (service.image) {
      var serviceImage = element("img", "service-card-image");
      serviceImage.src = service.image;
      serviceImage.alt = "";
      serviceImage.loading = "lazy";
      serviceImage.decoding = "async";
      art.replaceChildren(serviceImage);
      art.removeAttribute("aria-hidden");
      art.setAttribute("role", "img");
      art.setAttribute("aria-label", service.title);
    }
    card.appendChild(art);
    var content = element("div", "service-card-content");
    content.appendChild(element("h3", "service-card-title", service.title));
    if (!compact) content.appendChild(element("p", "service-card-description", service.description));

    if (!compact && service.examples && service.examples.length) {
      var examples = element("ul", "service-example-list");
      service.examples.forEach(function (example) {
        var item = element("li");
        var link = element("a", "service-example-link", example.label);
        link.href = "project.html?id=" + encodeURIComponent(example.projectId);
        item.appendChild(link);
        examples.appendChild(item);
      });
      content.appendChild(examples);
    }

    if (compact) content.appendChild(element("span", "service-card-link", copy.serviceDetails));
    card.appendChild(content);
    return card;
  }

  function renderHome() {
    var featured = SITE.projects.map(function (project, index) {
      var projectYears = new Set();
      var rangePattern = /((?:19|20)\d{2})\s*[–—-]\s*((?:19|20)\d{2})/g;
      var range;
      while ((range = rangePattern.exec(project.years || "")) !== null) {
        var startYear = Number(range[1]);
        var endYear = Number(range[2]);
        for (var year = Math.min(startYear, endYear); year <= Math.max(startYear, endYear); year += 1) {
          projectYears.add(String(year));
        }
      }
      ((project.years || "").match(/(?:19|20)\d{2}/g) || []).forEach(function (year) {
        projectYears.add(year);
      });
      var years = Array.from(projectYears).sort(function (a, b) { return Number(b) - Number(a); });
      return { project: project, index: index, years: years, year: years[0] || "" };
    }).sort(function (a, b) {
      if (!a.year) return b.year ? 1 : a.index - b.index;
      if (!b.year) return -1;
      return Number(b.year) - Number(a.year) || a.index - b.index;
    });
    var yearHost = document.getElementById("experience-timeline");
    var carousel = document.getElementById("experience-carousel");
    var track = document.getElementById("featured-projects");
    var previous = document.getElementById("experience-previous");
    var next = document.getElementById("experience-next");
    var orderedProjects = featured.map(function (item) { return item.project; });
    renderProjectList(track, orderedProjects);

    var years = Array.from(new Set(featured.reduce(function (allYears, item) {
      return allYears.concat(item.years);
    }, [])))
      .sort(function (a, b) { return Number(b) - Number(a); });
    var yearTargetIndex = {};
    featured.forEach(function (item, index) {
      item.years.forEach(function (year) {
        if (yearTargetIndex[year] === undefined) yearTargetIndex[year] = index;
      });
    });
    var selectedYear = "";
    var selectedYearIndex = -1;
    var scrollEndTimer;
    years.forEach(function (year) {
      var button = element("button", "experience-year", year);
      button.type = "button";
      button.setAttribute("data-year", year);
      button.setAttribute("aria-label", (isArabic ? "عرض خبرات سنة " : "Show experience from ") + year);
      button.addEventListener("click", function () {
        var index = yearTargetIndex[year];
        if (index !== undefined) {
          selectedYear = year;
          selectedYearIndex = index;
          track.children[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
          updateExperienceTimeline();
        }
      });
      yearHost.appendChild(button);
    });

    function currentCardIndex() {
      var viewportRect = carousel.getBoundingClientRect();
      var isRtl = getComputedStyle(carousel).direction === "rtl";
      var nearestIndex = 0;
      var nearestDistance = Infinity;
      Array.from(track.children).forEach(function (card, index) {
        var rect = card.getBoundingClientRect();
        var distance = Math.abs(isRtl ? viewportRect.right - rect.right : rect.left - viewportRect.left);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });
      return nearestIndex;
    }
    function updateExperienceTimeline() {
      var index = currentCardIndex();
      var activeYear = selectedYearIndex === index && selectedYear
        ? selectedYear
        : (featured[index] ? featured[index].year : "");
      yearHost.querySelectorAll(".experience-year").forEach(function (button) {
        var active = button.getAttribute("data-year") === activeYear;
        button.classList.toggle("is-active", active);
        if (active) button.setAttribute("aria-current", "date");
        else button.removeAttribute("aria-current");
      });
      previous.disabled = index === 0;
      next.disabled = index === track.children.length - 1;
    }
    function handleExperienceScroll() {
      updateExperienceTimeline();
      window.clearTimeout(scrollEndTimer);
      scrollEndTimer = window.setTimeout(function () {
        if (selectedYearIndex !== currentCardIndex()) {
          selectedYear = "";
          selectedYearIndex = -1;
        }
        updateExperienceTimeline();
      }, 180);
    }
    function moveExperience(direction) {
      var targetIndex = Math.max(0, Math.min(track.children.length - 1, currentCardIndex() + direction));
      track.children[targetIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
    previous.addEventListener("click", function () { moveExperience(-1); });
    next.addEventListener("click", function () { moveExperience(1); });
    carousel.addEventListener("scroll", handleExperienceScroll, { passive: true });
    window.addEventListener("resize", updateExperienceTimeline);
    updateExperienceTimeline();

    var services = document.getElementById("home-services");
    serviceContent.services.forEach(function (service, index) {
      services.appendChild(createServiceCard(service, index, true));
    });
  }

  function renderServices() {
    var host = document.getElementById("services-list");
    serviceContent.services.forEach(function (service, index) {
      host.appendChild(createServiceCard(service, index, false));
    });

    document.getElementById("services-whatsapp").href =
      "https://wa.me/" + SITE.phone.replace(/\D/g, "");
    document.getElementById("services-email").href = "mailto:" + SITE.email;
  }

  function renderStudio() {
    var host = document.getElementById("studio-videos");
    SITE.studioVideos.forEach(function (item, index) {
      var card = element("article", "studio-video-card");
      var media = element("div", "studio-video-media");
      var thumbnail = element("img", "studio-video-thumbnail");
      thumbnail.src = "https://i.ytimg.com/vi/" + encodeURIComponent(item.videoId) + "/hqdefault.jpg";
      thumbnail.alt = "";
      thumbnail.loading = "lazy";
      thumbnail.decoding = "async";
      thumbnail.addEventListener("error", function () {
        thumbnail.classList.add("is-unavailable");
      });
      var playButton = element("button", "studio-video-play", "▶");
      playButton.type = "button";
      playButton.setAttribute("aria-label", copy.playVideo + item[language + "Title"]);
      media.appendChild(thumbnail);
      media.appendChild(playButton);
      playButton.addEventListener("click", function () {
        var frame = document.createElement("iframe");
        frame.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(item.videoId) + "?autoplay=1&rel=0";
        frame.title = item[language + "Title"];
        frame.loading = "lazy";
        frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        frame.allowFullscreen = true;
        frame.referrerPolicy = "strict-origin-when-cross-origin";
        media.replaceChildren(frame);
      });
      card.appendChild(media);

      var details = element("div", "studio-video-details");
      details.appendChild(element("span", "studio-video-index", String(index + 1).padStart(2, "0")));
      details.appendChild(element("h2", "studio-video-title", item[language + "Title"]));
      var projectLink = element("a", "studio-project-link", copy.projectTransition + " ↗");
      projectLink.href = "project.html?id=" + encodeURIComponent(item.projectId);
      details.appendChild(projectLink);
      card.appendChild(details);
      host.appendChild(card);
    });
  }

  function renderArchive() {
    var filterHost = document.getElementById("archive-filters");
    var yearHost = document.getElementById("year-timeline");
    var resultsHost = document.getElementById("archive-results");
    var count = document.getElementById("results-count");
    var activeFilter = "all";
    var query = new URLSearchParams(window.location.search);
    var requestedYear = query.get("year");
    var activeYear = requestedYear && /^\d{4}$/.test(requestedYear) ? requestedYear : "all";
    yearHost.setAttribute("aria-label", copy.timelineLabel);
    var projectYears = {};
    var years = new Set();

    SITE.projects.forEach(function (project) {
      var found = new Set();
      var yearRanges = /((?:19|20)\d{2})\s*[–—-]\s*((?:19|20)\d{2})/g;
      var match;
      while ((match = yearRanges.exec(project.years || "")) !== null) {
        var start = Number(match[1]);
        var end = Number(match[2]);
        if (end < start) {
          var swap = start;
          start = end;
          end = swap;
        }
        for (var year = start; year <= end; year += 1) found.add(String(year));
      }
      var listedYears = (project.years || "").match(/(?:19|20)\d{2}/g) || [];
      listedYears.forEach(function (yearText) { found.add(yearText); });
      projectYears[project.id] = Array.from(found);
      projectYears[project.id].forEach(function (yearText) { years.add(yearText); });
    });
    var sortedYears = Array.from(years).sort(function (a, b) { return Number(b) - Number(a); });
    if (activeYear !== "all" && sortedYears.indexOf(activeYear) === -1) activeYear = "all";

    var filters = [{ id: "all", label: copy.filterAll }].concat(
      SITE.categories.map(function (category) {
        return { id: category.id, label: category[language] };
      })
    );

    function update() {
      var matches = SITE.projects.filter(function (project) {
        var categoryMatches = activeFilter === "all" || project.category === activeFilter;
        var yearMatches = activeYear === "all" || projectYears[project.id].indexOf(activeYear) !== -1;
        return categoryMatches && yearMatches;
      });
      resultsHost.replaceChildren();
      if (activeYear === "all") {
        var yearsToShow = sortedYears;
        yearsToShow.forEach(function (year) {
          var yearProjects = matches.filter(function (project) {
            var projectTimelineYears = projectYears[project.id];
            return projectTimelineYears.length > 0 && projectTimelineYears[projectTimelineYears.length - 1] === year;
          });
          if (!yearProjects.length) return;
          var section = element("section", "timeline-year-section");
          section.id = "year-" + year;
          section.appendChild(element("h2", "timeline-year-heading", year));
          renderProjectList(appendElement(section, "div", "project-grid"), yearProjects);
          resultsHost.appendChild(section);
        });
        var undated = matches.filter(function (project) { return projectYears[project.id].length === 0; });
        if (undated.length) {
          var undatedSection = element("section", "timeline-year-section");
          undatedSection.id = "year-undated";
          undatedSection.appendChild(element("h2", "timeline-year-heading", isArabic ? "دون تاريخ محدد" : "Date not specified"));
          renderProjectList(appendElement(undatedSection, "div", "project-grid"), undated);
          resultsHost.appendChild(undatedSection);
        }
      } else {
        var selectedSection = element("section", "timeline-year-section");
        selectedSection.id = "year-" + activeYear;
        selectedSection.appendChild(element("h2", "timeline-year-heading", activeYear));
        if (matches.length) {
          renderProjectList(appendElement(selectedSection, "div", "project-grid"), matches);
        } else {
          selectedSection.appendChild(element("p", "empty-year", isArabic ? "لا توجد خبرات في هذا المجال خلال هذه السنة." : "No experience in this field is listed for this year."));
        }
        resultsHost.appendChild(selectedSection);
      }
      count.textContent = matches.length + " " + (matches.length === 1 ? copy.resultSingular : copy.resultPlural);
      filterHost.querySelectorAll("button").forEach(function (button) {
        var selected = button.getAttribute("data-filter") === activeFilter;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", String(selected));
      });
      yearHost.querySelectorAll("[data-year]").forEach(function (button) {
        var selected = button.getAttribute("data-year") === activeYear;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", String(selected));
      });
    }

    filters.forEach(function (filter) {
      var button = element("button", "filter-button", filter.label);
      button.type = "button";
      button.setAttribute("data-filter", filter.id);
      button.addEventListener("click", function () {
        activeFilter = filter.id;
        update();
      });
      filterHost.appendChild(button);
    });

    var timelineLabel = element("p", "timeline-label", copy.timelineLabel);
    yearHost.appendChild(timelineLabel);
    var allYearsButton = element("button", "year-button year-button-all", copy.allYears);
    allYearsButton.type = "button";
    allYearsButton.setAttribute("data-year", "all");
    allYearsButton.addEventListener("click", function () {
      activeYear = "all";
      query.delete("year");
      window.history.replaceState({}, "", window.location.pathname + (query.toString() ? "?" + query.toString() : ""));
      update();
      resultsHost.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    yearHost.appendChild(allYearsButton);

    var track = element("div", "year-track");
    sortedYears.forEach(function (year) {
      var button = element("button", "year-button");
      button.type = "button";
      button.setAttribute("data-year", year);
      button.setAttribute("aria-label", copy.yearLabel + " " + year);
      button.appendChild(element("span", "year-dot", ""));
      button.appendChild(element("span", "year-number", year));
      button.addEventListener("click", function () {
        activeYear = year;
        query.set("year", year);
        window.history.replaceState({}, "", window.location.pathname + "?" + query.toString());
        update();
        var target = document.getElementById("year-" + year);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      track.appendChild(button);
    });
    yearHost.appendChild(track);
    function setHoveredYearButton(target) {
      var button = target && target.closest ? target.closest(".year-button") : null;
      if (!button || !yearHost.contains(button)) return;
      yearHost.classList.add("is-hovering-year");
      yearHost.querySelectorAll(".year-button.is-hovered").forEach(function (hovered) {
        hovered.classList.remove("is-hovered");
      });
      button.classList.add("is-hovered");
    }
    function clearHoveredYearButton() {
      yearHost.classList.remove("is-hovering-year");
      yearHost.querySelectorAll(".year-button.is-hovered").forEach(function (hovered) {
        hovered.classList.remove("is-hovered");
      });
    }
    yearHost.addEventListener("pointerover", function (event) {
      if (event.pointerType === "touch") return;
      setHoveredYearButton(event.target);
    });
    yearHost.addEventListener("pointermove", function (event) {
      if (event.pointerType !== "touch") return;
      setHoveredYearButton(document.elementFromPoint(event.clientX, event.clientY));
    }, { passive: true });
    yearHost.addEventListener("pointerup", function (event) {
      if (event.pointerType !== "touch") return;
      window.setTimeout(clearHoveredYearButton, 120);
    }, { passive: true });
    yearHost.addEventListener("pointerleave", function () {
      clearHoveredYearButton();
    });
    update();
  }

  function renderProject() {
    var host = document.getElementById("project-detail");
    var id = new URLSearchParams(window.location.search).get("id");
    var project = SITE.projects.find(function (item) { return item.id === id; });
    if (!project) {
      host.appendChild(element("h1", "", copy.notFoundTitle));
      host.appendChild(element("p", "lead", copy.notFoundText));
      var back = element("a", "button button-primary", copy.backArchive);
      back.href = "archive.html";
      host.appendChild(back);
      return;
    }

    var item = localizedProject(project);
    var crumb = element("a", "back-link", "← " + copy.backArchive);
    crumb.href = "archive.html";
    host.appendChild(crumb);

    var heading = element("header", "project-heading");
    heading.appendChild(element("p", "eyebrow", categoryName(project.category)));
    heading.appendChild(element("h1", "", item.title));
    heading.appendChild(element("p", "lead", item.summary));
    host.appendChild(heading);

    var heroImage = element("div", "project-cover media-placeholder");
    heroImage.setAttribute("role", "img");
    heroImage.setAttribute("aria-label", copy.imageLater);
    heroImage.appendChild(element("span", "placeholder-mark", "N"));
    heroImage.appendChild(element("span", "placeholder-caption", copy.imageLater));
    host.appendChild(heroImage);

    var facts = element("dl", "project-facts");
    [
      [copy.roleLabel, item.role],
      [copy.periodLabel, item.years],
      [copy.organizationLabel, item.organization]
    ].filter(function (fact) { return Boolean(fact[1]); }).forEach(function (fact) {
      var pair = element("div", "fact-item");
      pair.appendChild(element("dt", "", fact[0]));
      pair.appendChild(element("dd", "", fact[1]));
      facts.appendChild(pair);
    });
    host.appendChild(facts);

    var details = element("div", "project-content");
    var scopeSection = element("section", "project-section");
    scopeSection.appendChild(element("p", "eyebrow", copy.workLabel));
    scopeSection.appendChild(element("h2", "", item.title));
    var scopeList = element("ul", "detail-list");
    (item.scope || []).forEach(function (text) { scopeList.appendChild(element("li", "", text)); });
    scopeSection.appendChild(scopeList);
    details.appendChild(scopeSection);

    if (item.outcomes && item.outcomes.length) {
      var outcomeSection = element("section", "project-section outcome-section");
      outcomeSection.appendChild(element("p", "eyebrow", copy.outcomeLabel));
      var outcomes = element("ul", "detail-list");
      item.outcomes.forEach(function (text) { outcomes.appendChild(element("li", "", text)); });
      outcomeSection.appendChild(outcomes);
      details.appendChild(outcomeSection);
    }
    host.appendChild(details);

    var gallery = element("section", "project-gallery");
    gallery.appendChild(element("p", "eyebrow", copy.relatedLabel));
    var mediaGrid = element("div", "media-grid");
    for (var i = 0; i < 3; i += 1) {
      var placeholder = element("div", "gallery-placeholder media-placeholder");
      placeholder.setAttribute("aria-hidden", "true");
      placeholder.appendChild(element("span", "placeholder-mark", "N"));
      placeholder.appendChild(element("span", "placeholder-caption", copy.imageLater));
      mediaGrid.appendChild(placeholder);
    }
    gallery.appendChild(mediaGrid);

    if (project.links && project.links.length) {
      var links = element("ul", "media-links");
      project.links.forEach(function (linkData) {
        var linkItem = element("li");
        var link = element("a", "text-link", linkData[0]);
        link.href = linkData[1];
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        linkItem.appendChild(link);
        links.appendChild(linkItem);
      });
      gallery.appendChild(links);
    }
    host.appendChild(gallery);

    var more = element("section", "section more-projects");
    more.appendChild(element("h2", "", copy.moreProjects));
    var related = SITE.projects.filter(function (candidate) {
      return candidate.id !== project.id && candidate.category === project.category;
    }).slice(0, 3);
    renderProjectList(appendElement(more, "div", "project-grid"), related);
    host.appendChild(more);
  }

  function appendElement(parent, tag, className) {
    var node = element(tag, className);
    parent.appendChild(node);
    return node;
  }

  function renderArticles() {
    var substackLink = document.getElementById("substack-link");
    if (SITE.substack && substackLink) {
      substackLink.href = SITE.substack;
      substackLink.classList.remove("is-hidden");
      substackLink.target = "_blank";
      substackLink.rel = "noopener noreferrer";
    }
    var blogHost = document.getElementById("blog-posts");
    var filterHost = document.getElementById("blog-filters");
    filterHost.setAttribute("aria-label", isArabic ? "تصنيف المقالات" : "Filter articles by topic");
    var blogCards = [];
    var categories = [];
    SITE.blogPosts[language].forEach(function (item) {
      if (!categories.some(function (category) { return category.id === item.categoryId; })) {
        categories.push({
          id: item.categoryId,
          label: item.category
        });
      }
    });
    function createFilterButton(id, label, selected) {
      var button = element("button", "blog-filter", label);
      button.type = "button";
      button.setAttribute("aria-pressed", selected ? "true" : "false");
      button.addEventListener("click", function () {
        filterHost.querySelectorAll(".blog-filter").forEach(function (filter) {
          filter.setAttribute("aria-pressed", filter === button ? "true" : "false");
        });
        blogCards.forEach(function (card) {
          card.classList.toggle("is-filtered-out", id !== "all" && card.getAttribute("data-category") !== id);
        });
      });
      filterHost.appendChild(button);
    }
    createFilterButton("all", copy.blogAll, true);
    categories.forEach(function (category) {
      createFilterButton(category.id, category.label, false);
    });
    SITE.blogPosts[language].forEach(function (item) {
      var article = element("article", "blog-post-card");
      article.setAttribute("data-category", item.categoryId);
      var link = element("a", "blog-post-link");
      link.href = encodeURIComponent(item.slug) + ".html";
      var visual = element("div", "blog-post-visual blog-post-visual-" + item.categoryId);
      visual.setAttribute("aria-hidden", "true");
      if (item.coverImage) {
        var coverImage = element("img", "blog-post-cover");
        coverImage.src = item.coverImage;
        coverImage.alt = "";
        coverImage.loading = "lazy";
        coverImage.decoding = "async";
        visual.appendChild(coverImage);
      } else {
        visual.appendChild(element("span", "blog-post-visual-shape blog-post-visual-shape-one"));
        visual.appendChild(element("span", "blog-post-visual-shape blog-post-visual-shape-two"));
        visual.appendChild(element("span", "blog-post-visual-label", item.category));
      }
      link.appendChild(visual);
      var body = element("div", "blog-post-card-content");
      var metadata = element("div", "blog-post-meta");
      metadata.appendChild(element("span", "blog-post-category", item.category));
      metadata.appendChild(element("span", "blog-post-read-time", item.readTime + " " + copy.readTime));
      body.appendChild(metadata);
      body.appendChild(element("h3", "blog-post-title", item.title));
      body.appendChild(element("p", "blog-post-excerpt", item.excerpt));
      body.appendChild(element("span", "blog-post-card-cta", copy.readArticle));
      link.appendChild(body);
      article.appendChild(link);
      blogHost.appendChild(article);
      blogCards.push(article);
    });

    var publishedHost = document.getElementById("published-list");
    SITE.publishedWorks[language].forEach(function (item, index) {
      var article = element("article", "published-work-card");
      article.appendChild(element("span", "published-work-index", String(index + 1).padStart(2, "0")));
      article.appendChild(element("span", "published-work-type", item.type));
      article.appendChild(element("h3", "", item.title));
      article.appendChild(element("p", "published-work-description", item.description));
      article.appendChild(element("p", "published-work-source", item.source));
      var projectLink = element("a", "published-work-link", copy.publishedDetails);
      projectLink.href = "project.html?id=" + encodeURIComponent(item.projectId);
      article.appendChild(projectLink);
      publishedHost.appendChild(article);
    });
  }

  function renderAbout() {
    var competencies = document.getElementById("about-competencies");
    aboutContent.competencies.forEach(function (item, index) {
      var card = element("article", "about-competency-card about-competency-card-" + (index + 1));
      card.setAttribute("aria-labelledby", "about-competency-title-" + index);
      card.appendChild(element("span", "about-competency-index", "0" + (index + 1)));
      card.appendChild(element("h3", "", item.title)).id = "about-competency-title-" + index;
      var list = element("ul", "about-competency-items");
      item.items.forEach(function (skill) {
        list.appendChild(element("li", "", skill));
      });
      card.appendChild(list);
      competencies.appendChild(card);
    });

    var education = document.getElementById("about-education");
    aboutContent.education.forEach(function (item, index) {
      var record = element("li", "about-education-record");
      record.appendChild(element("span", "about-education-index", "0" + (index + 1)));
      var detail = element("div", "about-education-detail");
      detail.appendChild(element("h3", "", item.title));
      detail.appendChild(element("p", "about-education-institution", item.institution));
      record.appendChild(detail);
      var year = element("time", "about-education-year", item.year);
      year.setAttribute("dir", "ltr");
      record.appendChild(year);
      education.appendChild(record);
    });

    var trainings = document.getElementById("about-trainings");
    aboutContent.trainings.forEach(function (item) {
      var record = element("li", "about-training-record");
      var detail = element("div", "");
      detail.appendChild(element("h3", "", item.title));
      detail.appendChild(element("p", "", item.issuer));
      record.appendChild(detail);
      var year = element("time", "about-training-year", item.year);
      year.setAttribute("dir", "ltr");
      record.appendChild(year);
      trainings.appendChild(record);
    });

    var approach = document.getElementById("about-approach");
    SITE.capabilities[language].forEach(function (item, index) {
      var card = element("article", "about-approach-card about-approach-card-" + (index + 1));
      card.appendChild(element("span", "about-approach-mark", String(index + 1).padStart(2, "0")));
      card.appendChild(element("h3", "", item.title));
      card.appendChild(element("p", "", item.text));
      approach.appendChild(card);
    });
  }

  function renderArticlePage() {
    var host = document.getElementById("article-detail");
    if (!articleContent) {
      host.replaceChildren();
      host.appendChild(element("h1", "", copy.notFoundTitle));
      host.appendChild(element("p", "lead", copy.notFoundText));
      var backToBlog = element("a", "button button-primary", copy.articlesPage);
      backToBlog.href = "articles.html";
      host.appendChild(backToBlog);
      return;
    }

    host.querySelector(".article-breadcrumb").setAttribute("aria-label", isArabic ? "مسار الصفحة" : "Breadcrumb");
    host.querySelector(".article-breadcrumb a").textContent = copy.articlesPage;
    host.querySelectorAll(".article-category").forEach(function (category) {
      category.textContent = articleContent.category;
    });
    host.querySelector(".article-read-time").textContent = articleContent.readTime + " " + copy.readTime;
    host.querySelector(".article-title").textContent = articleContent.title;
    host.querySelector(".article-page-excerpt").textContent = articleContent.excerpt;
    var coverCaptionParts = [
      articleContent.coverDate ? copy.photoDateLabel + ": " + articleContent.coverDate : "",
      articleContent.coverLocation ? copy.photoLocationLabel + ": " + articleContent.coverLocation : "",
      articleContent.visualCaption || articleContent.title
    ].filter(Boolean);
    host.querySelector(".article-cover-caption").textContent = coverCaptionParts.join(" · ");
    host.querySelector(".article-page-introduction").textContent = articleContent.introduction;

    var artwork = host.querySelector(".article-cover-art");
    if (articleContent.coverImage) {
      var cover = element("img", "article-cover-image");
      cover.src = articleContent.coverImage;
      cover.alt = articleContent.coverAlt || articleContent.title;
      cover.loading = "eager";
      if (artwork) artwork.replaceWith(cover);
    } else {
      if (!artwork) {
        artwork = element("div", "article-cover-art");
        host.querySelector(".article-cover").prepend(artwork);
      }
      artwork.className = "article-cover-art article-cover-art-" + articleContent.categoryId;
      artwork.setAttribute("role", "img");
      artwork.setAttribute("aria-label", articleContent.visualAlt || articleContent.title);
      artwork.replaceChildren();
      artwork.appendChild(element("span", "article-cover-art-shape article-cover-art-shape-one"));
      artwork.appendChild(element("span", "article-cover-art-shape article-cover-art-shape-two"));
      artwork.appendChild(element("span", "article-cover-art-title", articleContent.category));
    }
    var body = host.querySelector(".article-page-body");
    body.replaceChildren();
    var introduction = element("p", "article-page-introduction", articleContent.introduction);
    body.appendChild(introduction);
    if (articleContent.methodology) {
      var methodology = element("aside", "article-methodology");
      methodology.appendChild(element("h2", "", isArabic ? "المنهجية وحدود المقال" : "Approach and scope"));
      methodology.appendChild(element("p", "", articleContent.methodology));
      body.appendChild(methodology);
    }
    if (!isArabic && articleContent.englishEditionNote) {
      body.appendChild(element("p", "article-edition-note", articleContent.englishEditionNote));
    }
    if (articleContent.sourceNote) {
      var sourceNote = element("aside", "article-source-note");
      sourceNote.appendChild(element("strong", "", copy.articleSourceLabel));
      sourceNote.appendChild(element("p", "", articleContent.sourceNote));
      body.appendChild(sourceNote);
    }
    function appendDocumentaryImage(parent, image) {
      var imageFigure = element("figure", "article-gallery-item");
      var imageElement = element("img", "");
      imageElement.src = image.src;
      imageElement.alt = image.alt || "";
      imageElement.loading = "lazy";
      imageFigure.appendChild(imageElement);
      if (image.caption) imageFigure.appendChild(element("figcaption", "", image.caption));
      var imageMetadata = [
        image.date ? copy.photoDateLabel + ": " + image.date : "",
        image.location ? copy.photoLocationLabel + ": " + image.location : ""
      ].filter(Boolean);
      if (imageMetadata.length) imageFigure.appendChild(element("p", "article-image-metadata", imageMetadata.join(" · ")));
      parent.appendChild(imageFigure);
    }
    if (articleContent.sections && articleContent.sections.length) {
      articleContent.sections.forEach(function (section) {
        var sectionNode = element("section", "article-prose-section");
        sectionNode.appendChild(element("h2", "", section.heading));
        section.paragraphs.forEach(function (paragraph) {
          sectionNode.appendChild(element("p", "", paragraph));
        });
        if (section.image) appendDocumentaryImage(sectionNode, section.image);
        body.appendChild(sectionNode);
      });
    } else {
      var steps = element("ol", "blog-post-steps article-page-steps");
      articleContent.steps.forEach(function (step) {
        var stepItem = element("li", "blog-post-step");
        stepItem.appendChild(element("h2", "", step.title));
        stepItem.appendChild(element("p", "", step.text));
        steps.appendChild(stepItem);
      });
      body.appendChild(steps);
    }
    if (articleContent.tryIt) {
      var application = element("aside", "blog-post-try");
      application.appendChild(element("strong", "", copy.tryItLabel));
      application.appendChild(element("p", "", articleContent.tryIt));
      body.appendChild(application);
    }
    var galleryNode = element("div", "article-image-gallery");
    (articleContent.images || []).forEach(function (image) { appendDocumentaryImage(galleryNode, image); });
    if (articleContent.images && articleContent.images.length) body.appendChild(galleryNode);

    var structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": articleContent.title,
      "description": articleContent.seoDescription,
      "inLanguage": language,
      "author": { "@type": "Person", "name": "Nada Elsebaee" },
      "mainEntityOfPage": window.location.href
    };
    var articleTextParts = [
      articleContent.title,
      articleContent.excerpt,
      articleContent.introduction,
      articleContent.methodology,
      articleContent.sourceNote,
      articleContent.tryIt
    ];
    if (articleContent.sections) {
      articleContent.sections.forEach(function (section) {
        articleTextParts.push(section.heading);
        articleTextParts.push(section.paragraphs.join(" "));
      });
    }
    structuredData.wordCount = articleTextParts.filter(Boolean).join(" ").trim().split(/\s+/).length;
    structuredData.articleSection = articleContent.category;
    if (articleContent.coverImage) {
      structuredData.image = new URL(articleContent.coverImage, window.location.href).href;
    }
    var jsonLd = element("script");
    jsonLd.className = "article-json-ld";
    jsonLd.type = "application/ld+json";
    jsonLd.textContent = JSON.stringify(structuredData);
    var previousJsonLd = document.querySelector(".article-json-ld");
    if (previousJsonLd) previousJsonLd.remove();
    document.head.appendChild(jsonLd);
    var openGraphTitle = document.querySelector('meta[property="og:title"]');
    var openGraphDescription = document.querySelector('meta[property="og:description"]');
    if (openGraphTitle) openGraphTitle.content = articleContent.title;
    if (openGraphDescription) openGraphDescription.content = articleContent.seoDescription;
  }

  function renderContact() {
    var host = document.getElementById("contact-cards");
    var contacts = [
      { label: copy.emailLabel, value: SITE.email, href: "mailto:" + SITE.email, icon: "email", action: isArabic ? "فتح تطبيق البريد" : "Open email app", description: isArabic ? "للمشاريع والاستفسارات" : "For projects and inquiries" },
      { label: copy.phoneLabel, value: "+20 100 204 4330", href: "https://wa.me/" + SITE.phone.replace(/\D/g, ""), icon: "whatsapp", action: isArabic ? "فتح واتساب" : "Open WhatsApp", description: isArabic ? "رسالة مباشرة وسريعة" : "A quick direct message" },
      { label: copy.linkedinLabel, value: "linkedin.com/in/nada-elsebaee-25632b138", href: SITE.linkedin, icon: "linkedin", action: isArabic ? "زيارة الملف الشخصي" : "Visit profile", description: isArabic ? "للتواصل المهني ومتابعة الأعمال" : "For professional connections and updates" }
    ];
    var iconMarkup = {
      email: '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path>',
      whatsapp: '<path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20l.9-4.7A8.5 8.5 0 1 1 20.5 11.8Z"></path><path d="M8.5 8.2c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .7.5.8 1.2 1.5 2.1 1.9.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.2-.7 1.6-.5.5-1.2.7-1.9.6-.7-.1-1.6-.4-2.7-1-1.5-.9-2.7-2.3-3.1-2.9-.4-.7-.9-1.7-.9-2.6 0-.8.4-1.3.7-1.5Z"></path>',
      linkedin: '<path d="M5.5 9.2h2.7V19H5.5z"></path><circle cx="6.85" cy="6.3" r="1.4"></circle><path d="M11 9.2h2.6v1.4c.5-.9 1.5-1.7 3-1.7 2.5 0 3.7 1.6 3.7 4.4V19h-2.8v-5.4c0-1.6-.4-2.7-1.9-2.7-1.6 0-2 1.2-2 2.7V19H11z"></path>'
    };
    contacts.forEach(function (item) {
      var card = element("a", "contact-card");
      card.href = item.href;
      card.setAttribute("aria-label", item.label + ": " + item.value);
      if (item.href.indexOf("http") === 0) {
        card.target = "_blank";
        card.rel = "noopener noreferrer";
      }
      var icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("class", "contact-icon");
      icon.setAttribute("viewBox", "0 0 24 24");
      icon.setAttribute("fill", "none");
      icon.setAttribute("stroke", "currentColor");
      icon.setAttribute("stroke-width", "1.8");
      icon.setAttribute("stroke-linecap", "round");
      icon.setAttribute("stroke-linejoin", "round");
      icon.setAttribute("aria-hidden", "true");
      icon.innerHTML = iconMarkup[item.icon];
      card.appendChild(icon);
      card.appendChild(element("span", "contact-label", item.label));
      card.appendChild(element("strong", "contact-value", item.value));
      card.appendChild(element("span", "contact-description", item.description));
      card.appendChild(element("span", "contact-action", item.action + " ↗"));
      host.appendChild(card);
    });

    var form = document.getElementById("contact-form");
    if (!form) return;
    var submitButton = document.getElementById("contact-submit");
    var status = document.getElementById("form-status");
    var endpoint = SITE.formEndpoint.trim();
    var endpointConfigured = /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/.test(endpoint);
    var setupNote = document.querySelector(".contact-form-note");
    if (endpointConfigured && setupNote) setupNote.hidden = true;
    if (!endpointConfigured) {
      submitButton.disabled = true;
      status.textContent = "";
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!endpointConfigured) {
        status.textContent = copy.formUnavailable;
        status.classList.add("is-error");
        return;
      }

      submitButton.disabled = true;
      status.textContent = copy.formSending;
      status.classList.remove("is-error", "is-success");
      fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      }).then(function (response) {
        if (!response.ok) {
          throw new Error("Formspree returned HTTP " + response.status);
        }
        form.reset();
        status.textContent = copy.formSuccess;
        status.classList.add("is-success");
      }).catch(function (error) {
        console.error("Contact form submission failed:", error);
        status.textContent = copy.formError;
        status.classList.add("is-error");
      }).finally(function () {
        submitButton.disabled = false;
      });
    });
  }

  setCopy();
  renderChrome();
  if (page === "home") renderHome();
  if (page === "archive") renderArchive();
  if (page === "project") renderProject();
  if (page === "articles") renderArticles();
  if (page === "article") renderArticlePage();
  if (page === "services") renderServices();
  if (page === "studio") renderStudio();
  if (page === "about") renderAbout();
  if (page === "contact") renderContact();
})();
