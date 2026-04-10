# Guía de Configuración: Call of Duty Black Ops II (Plutonium) con Nucleus Co-op

### Pasos de Instalación

1.  **Instalar Nucleus Co-op:** Instala el programa en la ruta `C:\NucleusApp`.
2.  **Instalar Handlers:** Descomprime el archivo de la [descarga](https://github.com/Fraaagaaa/BO2-Split-Screen/releases/latest/download/Call.of.Duty.Black.Ops.II.Handlers.rar) directamente en `C:\NucleusApp\handlers`.
3.  **Verificación:** Asegúrate de que [Plutonium](https://plutonium.pw/) arranque de forma normal y sin errores.

### Configuración del Juego (Plutonium)

4.  **Ajustes de Vídeo:** Pon el juego en **modo ventana**. Puedes usar cualquier resolución, pero se recomienda **800x600**, ya que se reescalará automáticamente.
5.  **Controles:** Configura Plutonium para que reconozca tanto el teclado y ratón como tus mandos.
6.  **Guardado:** Es fundamental cerrar el juego pulsando en `Salir` o `Quit` para que la configuración se guarde correctamente.

### Gestión de Archivos y Rutas

7.  **Sincronizar Almacenamiento:** Copia la carpeta `%localappdata%\Plutonium\storage\t6` y pégala en:
    `C:\NucleusApp\handlers\Call of Duty Black Ops II\Plutonium\storage`
8.  **Sincronizar Perfiles:** Copia la carpeta `%localappdata%\Plutonium\storage\t6\players` y pégala en tu carpeta de instalación del juego (ej. `C:\Program Files (x86)\Steam\steamapps\common\Call of Duty Black Ops II`).

### Ejecución en Nucleus Co-op

9.  **Vincular Juego:** Abre `C:\NucleusApp\NucleusCoop.exe`, haz clic en el icono de la **lupa** y selecciona el archivo `t6zm.exe` en la carpeta de tu juego.
10. **Configuración de Partida:** Selecciona el juego a la izquierda, asigna los mandos, elige el número de jugadores y limita los **FPS**. Dale a **PLAY**.
11. **Primer Inicio (Setup):** La primera vez el juego se quedará en negro. Espera a que aparezca la notificación *"Handler setup finished"*, pulsa `Ctrl + Q` para cerrar y repite desde el **paso 9**.
12. **Iniciar Partida:** Selecciona el mapa. 
    > **IMPORTANTE:** No le des a "Comenzar partida" ni "Start Match". Pulsa `F2` o `Select + Start` para iniciar.

---

### Notas Adicionales
* **Sensibilidad:** Deberás ajustar la sensibilidad del mando manualmente, pero solo la primera vez.
* **Reiniciar:** Para reiniciar la partida rápidamente, pulsa `F3` o `Select + Y`.

### Uso de Parches (Scripts)
Una vez que el juego cargue correctamente, puedes añadir parches en la siguiente ruta:
`C:\NucleusApp\content\Call of Duty Black Ops II\Instance0\Plutonium\storage\t6\scripts`
*(Si la carpeta `scripts` no existe, créala manualmente).*
