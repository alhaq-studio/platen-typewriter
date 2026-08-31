<div align="center">

# PLATEN: 3D Typewriter

### *"Write to hold, own and carry."*

**No algorithms, no autocomplete—just ink, steel, and intention.  
Crafted for the weight of genuine writing.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r185-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![100% On-Device](https://img.shields.io/badge/Privacy-100%25_On--Device-00C853?style=for-the-badge&logo=shield&logoColor=white)](#-zero-knowledge-on-device-privacy)
[![Zero-Width Steganography](https://img.shields.io/badge/Steganography-Zero--Width_UTF--8-b08d57?style=for-the-badge)](#-zero-width-cryptographic-steganography)

[**Launch Simulator**](https://alhaq-studio.github.io/platen-typewriter/) • [**Key Features**](#-key-features-at-a-glance) • [**Proof of Human Authorship**](#-proof-of-human-authorship-suite) • [**Universal Export Suite**](#-universal-sovereign-export-suite) • [**Getting Started**](#-getting-started-locally) • [**Contributing**](CONTRIBUTING.md)

</div>

---

## The Vision & The Sanctuary

In an era dominated by relentless digital distractions, predictive algorithms, and ephemeral cloud storage, **Platen** is designed as a focused writing sanctuary. It marries the physical soul and tactile weight of early 20th-century mechanical typewriting with state-of-the-art 3D WebGL graphics, spatial audio synthesis, and cryptographic authorship verification.

Every letter typed in Platen arrives the deliberate way: a key descends, a lever pivots, a steel typebar arcs out of the basket, the ribbon vibrator lifts, and the character strikes the vulcanized rubber platen with a crisp mechanical report.

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
   |                            - Orbiting desk planets (Earth & ringed celestial body)|
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

## Zero-Knowledge On-Device Privacy

* **100% Local Execution**: No keystrokes, typed text, telemetry, or documents ever leave your device or browser.
* **Zero Analytics & Zero Telemetry**: No third-party tracking scripts, cookies, or remote database logging.
* **Offline Sovereignty**: Once loaded, Platen operates completely offline without internet connectivity.

> *"Your writing never leaves this device. Held, owned, and carried by you."*

---

## Roadmap to Photorealism & Future Horizons

- [ ] **WebGPU Real-Time Path Tracing**: Raytraced reflections, ambient occlusion, and optical glass keycap refractions.
- [ ] **Progressive Web App (PWA)**: Standalone 1-click desktop installation for Windows, macOS, and Linux.
- [ ] **Spatial Computing / WebXR**: Full VR/AR mode for Apple Vision Pro, Meta Quest, and spatial web browsers.
- [ ] **Historical Typewriter Models**:
  - *Underwood No. 5 (1900)*
  - *Royal Quiet De Luxe (1940)*
  - *Hermes 3000 (1958)*
  - *Olympia SM9 (1964)*
- [ ] **Dynamic Paper Physics**: Physical cloth and parchment tear, crease, and wrinkle simulation.
- [ ] **Multilingual Mechanical Sets**: Alternate typebar segments for international layouts (QWERTZ, AZERTY, Cyrillic, Arabic ligature wheels).

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
