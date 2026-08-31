<div align="center">

# PLATEN: 3D Typewriter

### *"Write to hold, own and carry."*

**No algorithms, no autocomplete—just ink, steel, and intention.  
Crafted for the weight of genuine writing.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline_Installable-FF5722?style=for-the-badge&logo=pwa&logoColor=white)](#-offline-pwa--desktop-installation)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r185-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![100% On-Device](https://img.shields.io/badge/Privacy-100%25_On--Device-00C853?style=for-the-badge&logo=shield&logoColor=white)](#-zero-knowledge-on-device-privacy)
[![Zero-Width Steganography](https://img.shields.io/badge/Steganography-Zero--Width_UTF--8-b08d57?style=for-the-badge)](#-zero-width-cryptographic-steganography)
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S41HUMXS)

[**Launch Live Simulator**](https://platen-typewriter.al-haq-studio.workers.dev/) • [**Showcase & Philosophy**](https://alhaq-site.web.app/platen) • [**Key Features**](#-key-features-at-a-glance) • [**Proof of Authorship**](#-proof-of-human-authorship-suite) • [**Export Suite**](#-universal-sovereign-export-suite) • [**Offline PWA**](#-offline-pwa--desktop-installation) • [**Getting Started**](#-getting-started-locally)

</div>

---

## The Vision & The Sanctuary

In an era dominated by relentless digital distractions, predictive algorithms, and ephemeral cloud storage, **Platen** is designed as a focused writing sanctuary. It marries the physical soul and tactile weight of early 20th-century mechanical typewriting with state-of-the-art 3D WebGL graphics, spatial audio synthesis, and cryptographic authorship verification.

Every letter typed in Platen arrives the deliberate way: a key descends, a lever pivots, a steel typebar arcs out of the basket, the ribbon vibrator lifts, and the character strikes the vulcanized rubber platen with a crisp mechanical report.

---

## The Philosophy: Defending the Human Author in the Age of AI

As generative AI becomes standard across tools and platforms, a profound crisis of trust has emerged in the modern writing landscape:

1. **The Reader's Dilemma**: When articles, essays, and stories can be hallucinated by statistical algorithms in milliseconds, trust is eroded. Readers are left wondering: *Did a human struggle with these thoughts, or is this an automated prediction of words devoid of genuine lived experience?*
2. **The Writer's Anxiety**: Honest writers, essayists, students, and thinkers pour hours of cognitive struggle and emotional depth into their work, only to face a new anxiety: *Will my readers dismiss my work as AI-generated? How can I prove the sweat, revisions, and humanity behind every sentence?*

**Platen was created to be the definitive answer and sanctuary:**
- **Friction as Value**: In Platen, words are not free or disposable. Every character requires deliberate physical torque and mechanical commitment.
- **Verifiable Neuromuscular Proof**: While AI dumps thousands of tokens instantaneously, human writing possesses a natural flight-time cadence (inter-keystroke intervals / IKI), organic backspace revisions, and cognitive formulation pauses (>1.2s). Platen records this organic telemetry into tamper-proof certificates.
- **Cryptographic Invisible Seals**: Every export (.pdf, .docx, .html, .md, .txt) embeds an invisible zero-width cryptographic seal verifying author identity, SHA-256 integrity, and human cadence entropy.
- **"Write to hold, own, and carry"**: 100% on-device, zero telemetry, and sovereign ownership over your words.

---

## Key Features at a Glance

```text
                                  [ PLATEN 3D SIMULATOR ]
   +-----------------------------------------------------------------------------------+
   |  [Carriage & Platen]       - Spring-loaded escapement advancement (44-tooth rack) |
   |                            - Vulcanized rubber platen & knurled Bakelite knobs    |
   |                            - Relocated resonant brass margin warning bell         |
   |                                                                                   |
   |  [Basket & Kinematics]     - 44 Stamped steel typebars with fan kinematics        |
   |                            - Cast-iron comb segment casting & fulcrum wire        |
   |                            - Sculpted U-cradle cowl & swept deck side panels      |
   |                            - Orbiting celestial desk planets (Earth & Ringed body)|
   |                                                                                   |
   |  [Ribbon & Vibrator]       - Bichrome silk ribbon with kidney lightening spools   |
   |                            - Center bifurcated ribbon vibrator carrier lift       |
   |                                                                                   |
   |  [Sound Synthesis]         - Procedural Web Audio: keyclacks, thuds & bell chime  |
   |  [Paper Engine]            - Draft tilt sheet & continuous loop stream scroll     |
   |  [Human Authorship Proof]  - 60 FPS WebGL+Audio screen recorder & telemetry ledger|
   |  [Cryptographic Seal]      - Invisible zero-width steganographic ownership seal   |
   |  [Universal Export]        - PDF, Word (.docx), HTML, Markdown, TXT & .ZIP bundle |
   +-----------------------------------------------------------------------------------+
```

---

## Technical Architecture & Core Engines

### 1. Procedural 3D Mechanical Kinematics (`src/machine/buildMachine.ts`)
* **44 Stamped Steel Typebars**: Procedurally generated with authentic eyelet fulcrums, tapering shanks, and dual-character slugs striking the platen print point with trigonometric arc paths.
* **90° Keylever Assembly**: Stamped keylevers with horizontal pivot rods, fulcrum combs, vertical stem sockets, and spring recovery.
* **Typebar Basket Segment**: Heavy cast-iron comb casting featuring 44 radial broached slots and a continuous spring-steel fulcrum wire.
* **Escapement & Carriage Rails**: Spring-damped escapement advance, star wheel, escapement gear rack, margin stops, and knurled Bakelite platen hand-wheels.
* **Swept Vintage Chassis**: Continuous swept deck cowls, wrinkle-finish cast iron, satin nickel hardware, and form-fitted under-basket cradle shield.
* **Orbiting Celestial Desk**: Harmonious orbiting Earth and ringed planet models framing the drafting space.

### 2. Procedural Spatial Web Audio Engine (`src/audio/MechanicalAudio.ts`)
Powered by the **Web Audio API** with zero external audio samples:
* **Keylever Depress & Clack**: High-frequency metallic impact and spring recovery.
* **Typebar Strike & Platen Thud**: Low-frequency resonant absorption of vulcanized rubber and cast-iron frame.
* **Escapement Step**: Snappy mechanical escapement click on character advance.
* **Margin Warning Bell**: Resonant brass chime triggered at the end of every line.
* **Carriage Return**: Tactile sliding friction and mechanical ratchet reset.

### 3. Proof of Human Authorship Suite (`src/recorder/`)
* **WebGL Canvas & Web Audio Video Recorder (`CanvasVideoRecorder.ts`)**:
  - Captures 60 FPS video directly from the WebGL canvas using the HTML5 `MediaRecorder` API.
  - Mixes the Web Audio output stream so key clacks, carriage bell, and platen noises are synchronized in the final `.webm` recording.
* **Keystroke Telemetry Ledger (`KeystrokeLedger.ts`)**:
  - Measures millisecond inter-keystroke intervals (flight time / IKI), cadence entropy variance, organic backspace corrections, and cognitive formulation pauses.
  - Generates and downloads a cryptographically signed JSON **Human Authorship Certificate**.

### 4. Zero-Width Cryptographic Steganography (`src/steganography/`)
* Injects an invisible UTF-8 zero-width watermark (`\u200B` bit 0, `\u200C` bit 1, `\uFEFF` header, `\u2060` footer) directly into the character stream.
* Encodes the sovereign manifesto (*"Write to hold, own and carry."*), author metadata, UTC timestamp, SHA-256 integrity hash, and human cadence score.
* The watermark survives raw copy-pasting, word processor saving, and printing.
* Includes a built-in **Ownership & Cadence Verifier** to inspect any text and prove original authorship and document integrity.

### 5. Universal Sovereign Export Suite (`src/export/`)

| Format | Extension | Key Features & Steganographic Protection |
| :--- | :--- | :--- |
| **Printable PDF** | `.pdf` | Authentic typewriter A4 layout with Courier typography, printable margins, PDF metadata properties, and zero-width seal embedded in the text stream. |
| **Microsoft Word** | `.docx` | Formatted Word document with embedded Courier Prime, exact 15.8pt mechanical line pitch, and zero-width seal embedded in document text runs. |
| **Vintage Web Archive** | `.html` | Standalone, self-contained HTML page with embedded Google Fonts, textured vintage paper layout, print stylesheets (`@media print`), and zero-width seal. |
| **Markdown Document** | `.md` | Clean Markdown document with sheet break dividers (`---`), frontmatter metadata, and invisible zero-width seal. |
| **Plain Text** | `.txt` | Raw character grid stream with zero-width invisible cryptographic seal (survives text editors, emails, and clipboard pasting). |
| **Complete Archive** | `.zip` | Single-click export bundling all formats (`.pdf`, `.docx`, `.html`, `.md`, `.txt`), the signed `.json` Authorship Certificate, `.webm` video recording, and a `README_SOVEREIGN_MANIFEST.txt`. |

---

## Offline PWA & Desktop Installation

Platen is engineered as a **Progressive Web App (PWA)** with a dedicated Service Worker and local caching engine:

- **1-Click Desktop & Mobile Install**: Click the **"Install App"** button in the top HUD or Main Menu to install Platen directly onto macOS, Windows, Linux, iOS, or Android.
- **100% Offline Capability**: Once installed, Platen launches instantly without an active internet connection. All 3D models, fonts, and procedural audio synthesis execute locally on your machine.
- **Zero Account & Zero Cloud Dependencies**: Your drafts and library are stored exclusively in your browser's private local vault (`localStorage` / IndexedDB).

---

## Zero-Knowledge On-Device Privacy

* **100% Local Execution**: No keystrokes, typed text, telemetry, or documents ever leave your device or browser.
* **Zero Analytics & Zero Telemetry**: No third-party tracking scripts, cookies, or remote database logging.
* **Offline Sovereignty**: Once loaded, Platen operates completely offline without internet connectivity.

> *"Your writing never leaves this device. Held, owned, and carried by you."*

---

## Deployment (Cloudflare Pages)

Platen is optimized for 1-click zero-cost global deployment on Cloudflare Pages:

| Cloudflare Setting | Value |
| :--- | :--- |
| **Framework Preset** | `Vite` |
| **Build Command** | `npm run build` |
| **Build Output Directory** | `dist` |
| **Root Directory** | `/` *(leave default/blank)* |

---

## Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v20+
- [npm](https://www.npmjs.com/) v10+

### Installation
```bash
# Clone the repository
git clone https://github.com/alhaq-studio/platen-typewriter.git

# Navigate into the project directory
cd platen-typewriter

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to experience Platen!

### Building for Production
```bash
npm run build
```

---

## Support & Sponsorship

If you appreciate this writing sanctuary and support independent, local-first software, consider backing the project:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S41HUMXS)

- **[GitHub Sponsors](https://github.com/sponsors/Afrasyaab-GH)**
- **[Patreon Membership](https://patreon.com/alhaq)**
- **[Ko-fi Support](https://ko-fi.com/S6S41HUMXS)**
- **[Buy Me a Coffee](https://buymeacoffee.com/alhaq)**
- **[Direct Stripe Support](https://buy.stripe.com/28E3cwea897i8vkh2l14400)**

---

## Contributing

We warmly welcome contributions from developers, 3D artists, sound engineers, and typographers:

1. Review our [**Contributing Guidelines**](CONTRIBUTING.md).
2. Adhere to our [**Code of Conduct**](CODE_OF_CONDUCT.md).
3. Fork the repository, create a branch, and submit a Pull Request to [**alhaq-studio/platen-typewriter**](https://github.com/alhaq-studio/platen-typewriter).

---

## License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more details.

---

<div align="center">
  <sub>Crafted with passion by <a href="https://github.com/alhaq-studio">Al-Haq Studio</a> for the weight of genuine writing.</sub>
</div>
