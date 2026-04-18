# Configuration Guide: Call of Duty Black Ops II (Plutonium) with Nucleus Co-op

### Installation Steps

1. **Install Nucleus Co-op:** Download it from [nucleus-coop.github.io](https://nucleus-coop.github.io/) and install it directly to the **root of your drive** (e.g., `C:\NucleusApp`).
2.  **Install Handlers:** Extract the [downloaded file](https://github.com/Fraaagaaa/BO2-Split-Screen/releases/latest/download/Call.of.Duty.Black.Ops.II.Handlers.rar) directly into `C:\NucleusApp\handlers`.
3.  **Verification:** Ensure that [Plutonium](https://plutonium.pw/) launches normally and without errors.
4. **Install the Handler:** Extract the downloaded handler into the folder:
   `C:\NucleusApp\handlers`
### Game Configuration (Plutonium)

5.  **Video Settings:** Set the game to **Windowed Mode**. You can use any resolution, but **800x600** is recommended as it will rescale automatically.
6.  **Controls:** Configure Plutonium to recognize both keyboard/mouse and your controllers.
7.  **Saving:** It is essential to close the game by clicking `Exit` or `Quit` to ensure the configuration is saved correctly.

### File and Path Management

8.  **Sync Storage:** Copy the folder `%localappdata%\Plutonium\storage\t6` and paste it into:
    `C:\NucleusApp\handlers\Call of Duty Black Ops II\Plutonium\storage`
9.  **Sync Profiles:** Copy the folder `%localappdata%\Plutonium\storage\t6\players` and paste it into your game installation folder (e.g., `C:\Program Files (x86)\Steam\steamapps\common\Call of Duty Black Ops II`).

### Running in Nucleus Co-op

19.  **Link the Game:** Open `C:\NucleusApp\NucleusCoop.exe`, click the **magnifying glass icon**, and select the `t6zm.exe` file in your game folder.
11. **Match Setup:** Select the game on the left, assign the controllers, choose the number of players, and limit the **FPS**. Click **PLAY**.
12. **First Launch (Setup):** The first time, the game will stay on a black screen. Wait for the notification *"Handler setup finished"*, press `Ctrl + Q` to close it, and repeat from **Step 9**.
13. **Start Match:** Select the map. 
    > **IMPORTANT:** Do not click "Start Match" or "Begin Game" in the menu. Press `F2` or `Select + Start` to initiate.

---

### Additional Notes
* **Sensitivity:** You will need to adjust the controller sensitivity manually, but only the first time.
* **Restart:** To quickly restart the match, press `F3` or `Select + Y (Triangle)`.

### Using Patches (Scripts)
Once the game loads correctly, you can add patches to the following path:
`C:\NucleusApp\content\Call of Duty Black Ops II\Instance0\Plutonium\storage\t6\scripts`
*(If the `scripts` folder does not exist, create it manually).*