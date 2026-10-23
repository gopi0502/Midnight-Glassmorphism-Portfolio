/**
 * MIDNIGHT GLASSMORPHISM PORTFOLIO — SCRIPT
 * Handles interactive project filters, modal case studies, mouse spotlight reflection,
 * stats counting, contact dispatch simulation, and responsive navigation.
 */

// Project Case Study Database
const PROJECT_DATABASE = {
  nexuscloud: {
    category: "Backend & Cloud",
    status: "Production Ready",
    title: "NexusCloud Telemetry & Log Fabric",
    tagline: "Distributed zero-copy log ingestion pipeline handling 420,000 events/second",
    overview: "NexusCloud is a high-throughput telemetry collector and stream processor written in Go. It aggregates distributed cluster logs, traces, and system metrics into ClickHouse via Kafka partitioned topics, providing sub-2ms query response times through optimized gRPC streaming.",
    metrics: [
      { label: "Ingestion Rate", value: "420k msg/s" },
      { label: "P99 Latency", value: "1.8 ms" },
      { label: "Memory / Pod", value: "220 MB" }
    ],
    challenges: [
      "Eliminated Go garbage collection pauses under high memory pressure using pooled memory buffers and zero-copy byte slices.",
      "Implemented intelligent backpressure signaling to upstream nodes during sudden network saturation.",
      "Optimized ClickHouse column encodings and partition keys, reducing long-term cold storage utilization by 64%."
    ],
    tech: ["Go (Golang)", "Apache Kafka", "ClickHouse", "Docker", "gRPC", "Protobuf", "Grafana"],
    repo: "https://github.com"
  },
  aetherpay: {
    category: "Full-Stack & Fintech",
    status: "Production Live",
    title: "AetherPay Settlement & Escrow Gateway",
    tagline: "Sub-5ms financial ledger settlement with automated dispute escrow reconciliation",
    overview: "AetherPay is an institutional settlement portal featuring a Rust-powered transactional ledger core, strict ACID PostgreSQL row-level locks, Redis cluster state caching, and a reactive React/TypeScript dashboard with live WebSocket transaction feeds.",
    metrics: [
      { label: "Daily Volume", value: "$2.4M+" },
      { label: "Reconciliation", value: "< 5 ms" },
      { label: "Audit Accuracy", value: "100% ACID" }
    ],
    challenges: [
      "Prevented race conditions across distributed microservices using deterministic double-entry ledgers and optimistic concurrency control.",
      "Architected real-time WebSocket state synchronization with automatic channel resubscription on transient network disconnects.",
      "Complied with PCI-DSS tokenization protocols and automated cryptographic secret rotation."
    ],
    tech: ["React", "Rust", "PostgreSQL", "Redis", "WebSockets", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com"
  },
  prismai: {
    category: "Full-Stack & AI",
    status: "Production Deployment",
    title: "PrismAI Multimodal Creative Studio",
    tagline: "Real-time visual node canvas and generative diffusion pipeline orchestrator",
    overview: "A node-based generative workspace that chains diffusion models, vision transformers, and automated upscalers into interactive creative workflows with fluid hardware-accelerated WebGL rendering and intuitive graph manipulation.",
    metrics: [
      { label: "Render Speed", value: "1.2s / 4K" },
      { label: "Canvas Frame Rate", value: "60 FPS" },
      { label: "Concurrent Nodes", value: "10k+" }
    ],
    challenges: [
      "Implemented custom WebGL shader pipelines to process image tensors smoothly on client GPUs without freezing the UI thread.",
      "Engineered asynchronous Python FastAPI worker queues with automatic GPU worker scaling and job deduplication.",
      "Created an intuitive infinite canvas with fluid pinch-to-zoom, spatial indexing, and multi-touch support."
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "PyTorch", "WebGL", "Tailwind CSS", "Docker"],
    repo: "https://github.com"
  },
  hypermesh: {
    category: "Full-Stack & Systems",
    status: "Production Live",
    title: "HyperMesh Collaborative Engine",
    tagline: "CRDT-powered collaborative architectural canvas with peer-to-peer data distribution",
    overview: "A high-performance collaborative whiteboard engine powered by WebAssembly and TypeScript. Supports hundreds of simultaneous engineers editing complex system blueprints with zero merge conflicts and offline-first state preservation.",
    metrics: [
      { label: "Merge Conflicts", value: "0 Confirmed" },
      { label: "Sync Latency", value: "< 15 ms" },
      { label: "Brotli Compression", value: "85% Saved" }
    ],
    challenges: [
      "Compiled core CRDT state machine routines to WebAssembly for deterministic resolution and ultra-low CPU utilization.",
      "Handled intermittent mobile network drops using localized vector clocks and progressive state synchronization.",
      "Engineered WebRTC mesh routing with automatic fallbacks to low-latency WebSocket relays."
    ],
    tech: ["TypeScript", "WebAssembly", "WebRTC", "Node.js", "Zustand", "Jest"],
    repo: "https://github.com"
  },
  kubepulse: {
    category: "DevOps & Systems",
    status: "Open Source Tool",
    title: "KubePulse Cluster Autopilot",
    tagline: "Predictive horizontal pod auto-scaler and spot-instance cost optimizer",
    overview: "An automated Kubernetes controller daemon written in Go that forecasts traffic spikes using rolling statistical models and dynamically orchestrates node drain and provisioning on AWS EKS spot instances.",
    metrics: [
      { label: "Cloud Cost Saved", value: "-38%" },
      { label: "Pre-warm Window", value: "90s Prior" },
      { label: "Pod Crash Rate", value: "0.00%" }
    ],
    challenges: [
      "Trained lightweight predictive models to anticipate sudden traffic surges 90 seconds before raw CPU/Memory metrics trigger standard HPA.",
      "Engineered automated graceful pod eviction sequences with zero dropped client TCP socket connections.",
      "Integrated Prometheus metric querying directly into the reconciliation loop with configurable fallback strategies."
    ],
    tech: ["Go (Golang)", "Kubernetes (K8s)", "Prometheus", "AWS EKS", "Helm", "Grafana"],
    repo: "https://github.com"
  },
  synthetix: {
    category: "Backend & Cloud",
    status: "Core Infrastructure",
    title: "Synthetix Edge Cache Proxy",
    tagline: "Distributed in-memory cache proxy with consistent ring hashing & TLS termination",
    overview: "A lightweight reverse caching gateway written in Go. Positioned between global edge reverse proxies and database read replicas to provide stale-while-revalidate invalidation and sub-millisecond query responses.",
    metrics: [
      { label: "Hit Ratio", value: "99.4%" },
      { label: "Avg Latency", value: "0.4 ms" },
      { label: "Throughput", value: "120k RPS" }
    ],
    challenges: [
      "Implemented consistent ring hashing with virtual nodes to prevent devastating cache stampedes during node replacements.",
      "Architected custom HTTP pipelining and connection reuse algorithms to minimize Linux epoll overhead.",
      "Enabled automatic TLS certificate renewal and dynamic route table reconfiguration without process restarts."
    ],
    tech: ["Go (Golang)", "Redis Cluster", "Consistent Hashing", "TLS", "Linux Epoll"],
    repo: "https://github.com"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenu();
  initCategoryFilters();
  initProjectModal();
  initMouseSpotlight();
  initStatsCounter();
  initContactForm();
  initCopyEmail();
});

/* ==========================================================================
   1. NAVBAR SCROLL EFFECT & SCROLLSPY
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    // Add background shade when scrolled down
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Scrollspy active anchor highlighter
    let currentSectionId = "";
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   2. MOBILE NAVIGATION MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    toggleBtn.classList.toggle("open", isOpen);
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      toggleBtn.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================================================
   3. CATEGORY FILTERS
   ========================================================================== */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Set active button
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        if (filterValue === "all" || cardCategory === filterValue) {
          card.classList.remove("hidden");
          card.style.animation = "fadeInCard 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards";
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

/* ==========================================================================
   4. INTERACTIVE CASE STUDY MODAL
   ========================================================================== */
function initProjectModal() {
  const modalBackdrop = document.getElementById("projectModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const dismissBtn = document.getElementById("modalDismissBtn");
  const viewBtns = document.querySelectorAll(".view-case-study");

  // Modal elements
  const modalCategory = document.getElementById("modalCategory");
  const modalStatus = document.getElementById("modalStatus");
  const modalTitle = document.getElementById("modalTitle");
  const modalTagline = document.getElementById("modalTagline");
  const modalOverview = document.getElementById("modalOverview");
  const modalMetrics = document.getElementById("modalMetrics");
  const modalChallenges = document.getElementById("modalChallenges");
  const modalTechTags = document.getElementById("modalTechTags");
  const modalRepoBtn = document.getElementById("modalRepoBtn");

  function openModal(projectId) {
    const data = PROJECT_DATABASE[projectId];
    if (!data) return;

    modalCategory.textContent = data.category;
    modalStatus.textContent = data.status;
    modalTitle.textContent = data.title;
    modalTagline.textContent = data.tagline;
    modalOverview.textContent = data.overview;

    // Populate Metrics
    modalMetrics.innerHTML = data.metrics.map(m => `
      <div class="modal-metric-card">
        <span class="modal-metric-value">${m.value}</span>
        <span class="modal-metric-label">${m.label}</span>
      </div>
    `).join("");

    // Populate Challenges
    modalChallenges.innerHTML = data.challenges.map(c => `
      <li>${c}</li>
    `).join("");

    // Populate Tech Tags
    modalTechTags.innerHTML = data.tech.map(t => `
      <span class="tech-tag">${t}</span>
    `).join("");

    modalRepoBtn.setAttribute("href", data.repo || "https://github.com");

    modalBackdrop.classList.add("open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  function closeModal() {
    modalBackdrop.classList.remove("open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  viewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-project");
      openModal(projectId);
    });
  });

  closeBtn.addEventListener("click", closeModal);
  dismissBtn.addEventListener("click", closeModal);

  // Close modal when clicking backdrop directly
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Close on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
      closeModal();
    }
  });
}

/* ==========================================================================
   5. MOUSE SPOTLIGHT / SPECULAR REFLECTION EFFECT
   ========================================================================== */
function initMouseSpotlight() {
  const cards = document.querySelectorAll(".glass-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

/* ==========================================================================
   6. ANIMATED STATS COUNTER
   ========================================================================== */
function initStatsCounter() {
  const metricCards = document.querySelectorAll(".metric-number");
  let hasTriggered = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasTriggered) {
        hasTriggered = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  const metricsGrid = document.querySelector(".metrics-grid");
  if (metricsGrid) {
    observer.observe(metricsGrid);
  }

  function animateCounters() {
    metricCards.forEach(metric => {
      const targetStr = metric.getAttribute("data-target");
      if (!targetStr) return;

      const isFloat = targetStr.includes(".");
      const targetVal = parseFloat(targetStr);
      const duration = 1600;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (easeOutQuad)
        const ease = 1 - (1 - progress) * (1 - progress);
        const currentVal = ease * targetVal;

        if (isFloat) {
          metric.textContent = currentVal.toFixed(2) + "%";
        } else if (targetVal === 6 || targetVal === 35) {
          metric.textContent = Math.floor(currentVal) + "+";
        } else if (targetVal === 15) {
          metric.textContent = Math.floor(currentVal) + "M+";
        } else {
          metric.textContent = Math.floor(currentVal);
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          // Final string formatting
          if (isFloat) {
            metric.textContent = targetVal.toFixed(2) + "%";
          } else if (targetVal === 6 || targetVal === 35) {
            metric.textContent = targetVal + "+";
          } else if (targetVal === 15) {
            metric.textContent = targetVal + "M+";
          }
        }
      }

      requestAnimationFrame(update);
    });
  }
}

/* ==========================================================================
   7. CONTACT FORM SUBMISSION SIMULATION & TOAST
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = submitBtn.querySelector(".btn-text");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const messageInput = document.getElementById("messageInput");

    // Basic Validation
    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      showToast("Please fill out all required fields before dispatching.");
      return;
    }

    if (!isValidEmail(emailInput.value.trim())) {
      showToast("Please provide a valid email address.");
      return;
    }

    // Button loading state
    const originalText = btnText.textContent;
    btnText.textContent = "Transmitting...";
    submitBtn.disabled = true;

    // Simulate network transmission
    setTimeout(() => {
      btnText.textContent = originalText;
      submitBtn.disabled = false;
      form.reset();
      showToast("Transmission received! Alex will respond within 24 hours.");
    }, 1200);
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

/* ==========================================================================
   8. COPY EMAIL TO CLIPBOARD
   ========================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById("copyEmailBtn");
  const emailText = document.getElementById("emailText");

  if (!copyBtn || !emailText) return;

  copyBtn.addEventListener("click", () => {
    const email = emailText.textContent.trim();

    navigator.clipboard.writeText(email).then(() => {
      showToast("Email address copied to clipboard!");
      copyBtn.style.color = "var(--cyan-primary)";
      setTimeout(() => {
        copyBtn.style.color = "";
      }, 2000);
    }).catch(() => {
      // Fallback
      showToast(`Copy failed. Email: ${email}`);
    });
  });
}

/* ==========================================================================
   9. TOAST NOTIFICATION ENGINE
   ========================================================================== */
let toastTimeout = null;

function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const toastMsg = document.getElementById("toastMessage");

  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("show");

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 4200);
}
