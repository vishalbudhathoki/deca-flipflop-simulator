# DTK 451 Digital Trainer Simulator

This is a web-based simulator I built to replicate the physical DTK 451 digital electronics trainer kit. We needed something to accurately test our logic circuits for a DECA project, especially the flip-flops, because debugging the physical wiring on the breadboard was getting really annoying. 

The main reason I made this was to accurately simulate how the 7474 (D flip-flop) and 7476 (JK flip-flop) ICs behave when you tie their asynchronous inputs to VCC. Tying PRE and CLR high permanently forces them into a synchronous mode so they only care about the clock edge, which was a huge pain to debug in real life until I mapped it out here.

### Features
* **Interactive Patch Cables:** Click a source jack and then a destination jack to wire them up. 
* **Flip-Flop Logic:** Fully simulates D and JK flip flops, including daisy-chaining nodes.
* **Auto-Demos:** Two buttons at the bottom that automatically wire up the optimal test circuits for the D and JK flip flops.
* **Clock Generator:** Simulates the built-in clock pulse with adjustable frequencies (or manual stepping).
* **Basic Logic Gates:** AND, OR, NOT, NAND, NOR, XOR.

### How to use
You don't need a backend for this. Just open `index.html` in any browser.

If you want to test the flip-flops:
1. Click the "D FF DEMO" or "JK FF DEMO" button to auto-wire the board.
2. Turn the clock selector to 10 or 100 to start the pulse.
3. Mess with the input switches and watch the indicators. The JK flip-flop changes on the falling edge (when the red light turns off) and the D flip-flop changes on the rising edge.

