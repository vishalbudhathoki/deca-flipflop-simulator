# Understanding Set and Reset in Flip-Flops

In digital logic, "Set" forces the output (`Q`) to `1` (ON), and "Reset" (or Clear) forces the output to `0` (OFF). 

Both the **D Flip-Flop (IC 7474)** and the **JK Flip-Flop (IC 7476)** used in this trainer kit feature **Asynchronous, Active-Low** Preset (Set) and Clear (Reset) pins.

Here is what that means:
* **Asynchronous**: These pins act *immediately*. They completely ignore the clock and whatever is happening on the other input pins. They are the absolute highest priority overrides.
* **Active-Low**: This means you must feed the pin a `0` (LOW / Switch OFF) to *activate* the override. Sending a `1` (HIGH / Switch ON) leaves the pin inactive, allowing normal clocked operation.

> [!WARNING] 
> Because they are active-low, **you must keep both the PRE and CLR switches turned ON (1) for the flip-flops to operate normally!**

Here is how to use them in the two demo configurations:

---

## 1. D Flip-Flop Demo

In the D Flip-Flop demo, the wiring is set up as follows:
* **PRE** and **CLR** are shorted together with a black wire, and then tied directly to the **+5V** power supply (VCC0). 
* **Input 0** is connected to **D** (Data).
* **CLK** is connected to the hardware **Clock Generator**.

By tying the active-low PRE and CLR pins to +5V (which is constantly HIGH), the asynchronous set and reset overrides are permanently disabled. The D Flip-Flop will only respond to the Clock pulses and the D input.

---

## 2. JK Flip-Flop Demo

In the JK Flip-Flop demo, the wiring is identically configured to disable overrides:
* **PRE** and **CLR** are shorted together with a black wire, and then tied directly to the **+5V** power supply (VCC1).
* **Input 5** and **Input 6** act as your **J** and **K** inputs.
* **CLK** is connected to the hardware **Clock Generator**.

Just like the D Flip-Flop, tying PRE and CLR to +5V permanently disables them. The JK Flip-Flop will only respond to the Clock pulses based on your J and K inputs.

> [!TIP]
> If your flip-flop appears "stuck" and won't respond to the clock or your inputs, always check your PRE and CLR pins. In 99% of cases, one of them is accidentally receiving a `0` (or left floating), forcing the flip-flop into a permanent override state!
