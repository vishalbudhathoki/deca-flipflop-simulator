# ⚡ DECA Practical Apparatus Simulators

Hey there! Welcome to the **DECA Practical Apparatus Simulators**! 

If you've ever spent hours in an electronics lab, you know how tricky it can be to wire things up, especially when components are missing or you're just trying to figure out how a circuit behaves. That's exactly why we built this!

This is a **fully interactive, web-based simulator suite** that lets you experiment with digital and analog electronics circuits right from your browser. We wanted to make something that feels as close to real physical lab equipment as possible—complete with pluggable patch cords, clicking switches, live dials, and actual multimeter test probes.

---

## 🔗 Live Demo
Try it out live right now! No downloads, no installs required:
👉 **[https://deca-practical-simulator.vercel.app/](https://deca-practical-simulator.vercel.app/)**

If you prefer to run it locally, you don't need any complex build tools. Just download the files and double-click **`index.html`** to launch the central hub!

---

## 🛠️ What's Inside the Lab?

We've brought three complete electronics training kits to life:

### 1. 🎛️ Digital Electronics Trainer Kit (Model: DTK 451)
An exact interactive replica of the classic DTK 451 trainer. This is your playground for logic gates and sequential circuits.
* **Pluggable Patch Wires:** Drag and drop banana plug wires between sockets to make connections on the fly!
* **Logic Gates:** Play around with AND (7408), OR (7432), NOT (7404), NAND (7400), NOR (7402), and XOR (7486) gate modules.
* **Flip-Flops & Sequential Logic:** Emulates 7474 (D Flip-Flop) and 7476 (JK Flip-Flop) chips, including preset (PRE) and clear (CLR) inputs.
* **ZIF Sockets & Adder:** Lock down ICs with the interactive ZIF lever and run 4-bit binary addition on the 7483 module.
* **Clock Generator:** From a single manual pulse up to a 10kHz clock wave to drive your counter circuits.
* **Audible Continuity Tester:** Use the test probe to trace connections—it literally beeps (powered by the Web Audio API) when there's continuity!
* **Quick-Start Demos:** Click a button to instantly wire up a working D or JK Flip-Flop circuit to see how they behave.

### 2. 🔌 Rectifier Training Apparatus
Explore how AC power gets converted into stable DC power.
* **Custom Topologies:** Wire up Half-Wave, Full-Wave (2-diode), or Bridge rectifiers using four independent diode terminals and a center-tapped transformer (9V-0V-9V).
* **Live Meters:** High-precision virtual LCD panels show you live DC Voltage, DC Current, and even AC Ripple voltage.
* **Filtering & Smoothing:** Toggle dual 1000µF filter capacitors to see exactly how they smooth out the ripple waveform.
* **Variable Load:** Click the rotary dial to change the load resistance from $50\Omega$ to $5\text{k}\Omega$ and observe current draw and voltage sag.
* **Wiring Helpers:** Made a wiring mistake? Use the "Undo Wire" or "Clear Wires" buttons, or click a preset to instantly set up standard configurations.

### 3. 🧪 Zener Diode Simulator
Dive deep into PN junction behavior and voltage regulation characteristics.
* **Dual Bias Modes:** Explore both forward bias (standard diode behavior) and reverse bias (Zener breakdown mode).
* **Variable DC Supply:** Spin the voltage control dial to change the input voltage in real-time.
* **Digital Multimeter (DMM):** Connect and use a virtual digital multimeter to measure voltage drops and currents.
* **Dynamic V-I Curve Plotter:** Watch the voltage and current values plot automatically to map out the diode's exact characteristic curve!

---

## 💻 Under the Hood
We wanted to keep this project lightweight, fast, and accessible, so we built it using:
* **Vanilla JavaScript:** Fast, responsive, and completely client-side logic. No framework overhead.
* **Custom SVG Graphics:** The patch wires, dials, and LED indicators are drawn dynamically using vector mathematics.
* **Web Audio API:** Generates real synthesizer tones for the digital trainer continuity tester.
* **Tailwind CSS:** Keeping our layouts clean, modern, and beautiful.

---

## 💡 Developer Setup
If you want to modify the code or compile the styles, we've set up simple developer scripts:

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Compile styles:**
   ```bash
   npm run build:css
   ```
3. **Watch for style changes while editing:**
   ```bash
   npm run watch:css
   ```
4. **Run automated checks:**
   ```bash
   npm test
   ```

We hope you have fun experimenting in the virtual lab! 🚀
