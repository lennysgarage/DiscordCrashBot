# DiscordCrashBot
Proof of concept bot that can create crashing/freezing mp4s.
<br />
Currently tested using ffmpeg version 4.2.4-1 and WSL2
##### Default command prefix: ==
---
**Functionality** - August 3, 2021
* ``help [command]``:
    * Displays a list of all commands
    * Displays information on a specific command
* ``crasher``:
    * Requires a mp4/video file posted directly before the command
    * Utilizes ffmpeg to create a freezing mp4 that is sent back to the chat
---
**Requirements** 
* ffmpeg
* A linux system
