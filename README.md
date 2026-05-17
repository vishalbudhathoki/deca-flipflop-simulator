# DECA Practical Apparatus Simulators

A web-based interactive laboratory simulator suite developed for testing and verifying logic circuits and power supply topologies. This project combines two highly detailed physical hardware simulations into a single accessible web interface.

## 🚀 Live Demo & Access

The project is hosted live at: **[https://deca-practical-simulator.vercel.app/](https://deca-practical-simulator.vercel.app/)**

No backend server or build tools are required. Simply open the link or run **`index.html`** locally in any modern web browser to access the central simulator selection hub.

From the hub, you can choose between:
1. **Digital Electronics Trainer Kit (DTK 451)** — `trainer.html`
2. **Rectifier Training Apparatus** — `rectifier.html`

---

## 🛠️ 1. Digital Trainer Kit (Model: DTK 451)

An exact interactive digital replica of the physical DTK 451 digital electronics trainer kit. Designed to test logic circuits, verify truth tables, and debug complex sequential logic prior to physical breadboard prototyping.

### Key Features
* **Interactive Patch Cables:** Click a source socket and then a destination socket to connect patch wires instantly.
* **Sequential Logic (Flip-Flops):** Full emulation of the 7474 (D Flip-Flop) and 7476 (JK Flip-Flop) ICs, accurately modeling asynchronous preset (PRE) and clear (CLR) inputs tied high or low.
* **Combinational Logic:** Integrated AND (7408), OR (7432), NOT (7404), NAND (7400), NOR (7402), and XOR (7486) gate modules.
* **4-Bit Binary Adder & ZIF Sockets:** 7483 binary adder with real-time numeric readouts and two 28-pin ZIF sockets with locking lever emulation.
* **BCD to 7-Segment Decoder:** Real-time decoding of binary inputs to standard 7-segment LED display.
* **Clock Generator & Continuity Tester:** Adjustable frequency clock generator (10Hz to 10kHz + manual single stepping) and an active audible/visual continuity test probe.
* **Preset Demos:** Single-click buttons to instantly wire up fully functioning D Flip-Flop or JK Flip-Flop demonstration circuits.

---

## ⚡ 2. Rectifier Training Apparatus

An interactive analog power electronics trainer designed for exploring half-wave, full-wave, and bridge rectification topologies alongside capacitor filtering and load regulation.

### Key Features
* **Topological Freedom:** Connect leads freely between the center-tapped step-down transformer (9V-0V-9V) and four independent diode modules (D1–D4) to assemble Half-Wave, Full-Wave (2-diode), or Bridge configurations.
* **Real-time Instrumentation:** High-precision digital LCD panel meters simulating DC Voltmeter, DC Ammeter, and AC Ripple Voltmeter measurements across the circuit.
* **Dual-Stage Filtering:** Switchable filter capacitors ($C_1 = C_2 = 1000\mu\text{F}$) via toggles S1 and S2 to visually analyze ripple reduction and voltage boost effects.
* **Load Regulation:** Interactive multi-position rotary switch setting load resistance ($R_L$) from $50\Omega$ up to $5\text{k}\Omega$ to observe current draw and voltage sag.
* **Bypass Section:** Dedicated bypass capacitor section ($C_B = 100\mu\text{F}$) for output ripple smoothing.
* **Wiring Controls & Presets:** Includes "Undo Wire" and "Clear Wires" utilities, plus one-click preset buttons to instantly construct standard Half-Wave and Full-Wave circuits.

---

## 💻 Technical Implementation
* **Technologies:** Pure HTML5, Vanilla JavaScript, Tailwind CSS (via CDN), and inline SVGs.
* **Vector Graphics:** Custom SVG rendering engines for dynamic bezier patch wires, color-coded banana jacks, and interactive rotary dials.
* **Audio:** Web Audio API oscillator synthesis for smooth continuity tester audio feedback.
