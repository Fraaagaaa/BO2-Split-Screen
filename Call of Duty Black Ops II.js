var a_lan = ["-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", "180", "181", "182", "183", "184", "185", "186", "187", "188", "189", "190", "191", "192", "193", "194", "195", "196", "197", "198", "199", "200"];
var a_music = ["Yes", "No"];
var a_fps = ["144", "30", "45", "90", "120", "60", "200", "125", "250"];
var a_fov = ["90", "100", "110", "65"];
var a_players = ["2", "3", "4", "5", "6", "7", "8"];

Game.AddOption("Select the number of players (only for Zombies)", "", "Players", a_players);
Game.AddOption("Select the FPS Cap the game will use", "", "FPS", a_fps);
Game.AddOption("Select your preferred FOV", "", "FOV", a_fov);
Game.AddOption("Enable music only in the first instance?", '"Manual/Current Setting" will not change music setting.', "Mus", a_music);
Game.AddOption("For LAN and only for Guest PC, select the last digits of the host IP", "", "lan", a_lan);

Game.FileSymlinkExclusions = ["t6mp.exe", "t6sp.exe", "t6zm.exe", "hardware_mp.chp", "user_common.cgp", "Xinputplus.ini", "xinput1_4.dll", "xinput1_3.dll", "steam_api.dll"];
Game.FileSymlinkCopyInstead = ["steam_api.dll", "steamclient.dll", "plutonium_mp.cfg", "config_mp.cfg", "binkw32.dll", "settings_c.zip.iw5", "settings_m.zip.iw5", "console.log"];

// Configuración ProtoInput básica
Game.BinariesFolder = "";
Game.Description = "Supports both gamepads and mouse/keyboard, up to 8 player splitscreen on both Multiplayer and Zombies.\n\nIf playing with more than 4 players, be sure to lock input by pressing the end key once all the instances have finished positioning and resizing. You will also need to lock input if playing with mouse and keyboard.\n\nFor best compatibility it is advisable to close Steam.\n\nOnce all instances have finished resizing/positioning, have the first player setup a custom match and press F2 or press the SELECT+START buttons simultaneously on your gamepad to start the match, the other instances will connect shortly after automatically.\n\nBased on what you selected in the launch options, the match will be pupulated with bots according to the skill and number of bots selected.\n\nTo quickly restart the match press F3 or press the SELECT+Y buttons simultaneously on your gamepad.\n\nTo swap bumper/trigger buttons (useful for playstation gamepads) press F4 or press the Select + A buttons simultaneously on your gamepad only once you're in the match.\n\nTo play over LAN, ONLY the guest PC will need to select the last 1-3 digits of the Host PC's IP address in the launch options, then once all the instances have finished positionin/resizing, press F2 or press the SELECT+START buttons simultaneously on your gamepad to connect all the guest instances to the host PC.\n\nThe winject32-64.exes may be blocked or flagged by windows defender as potential viruses/threats, but I can guarantee they are nothing but false/positives as I got them from the following link https://www.unknowncheats.me/forum/general-programming-and-reversing/518833-winject-windows-injector.html and have been analyzed and cleared by one of their moderators.\n\nLast but not least, enjoy this amazing FPS with friends and family!";
Game.ExecutableName = "t6zm.exe";
Game.GUID = "Call of Duty Black Ops II"; 
Game.GameName = "Call of Duty Black Ops II"; 
Game.KillProcessesOnClose = ['connect', 'cmd', 'FPS', 'conhost', 'AutoIt3'];
Game.LauncherExe = "Plutonium/launch.bat";
Game.SteamID = "202970"; 

Game.DontRemoveBorders = true;
Game.DontReposition = false;
Game.DontResize = true;
Game.DrawFakeMouseCursor = false;
Game.FakeFocus = false;
Game.FakeFocusSendActivate = false;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HandlerInterval = 100; 
Game.HasDynamicWindowTitle = false;
Game.Hook.CustomDllEnabled = false;
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = true;
Game.Hook.ForceFocus = true;
Game.Hook.UseAlpha8CustomDll = false;
Game.Hook.XInputReroute = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookFilterMouseMessages = false;
Game.HookFilterRawInput = false;
Game.HookFocus = true;
Game.HookGetAsyncKeyState = false;
Game.HookGetCursorPos = false;
Game.HookGetKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookMouseVisibility = false;
Game.HookReRegisterRawInput = false;
Game.HookReRegisterRawInputKeyboard = false;
Game.HookReRegisterRawInputMouse = false;
Game.HookSetCursorPos = false;
Game.HookUseLegacyInput = false;
Game.InjectHookXinput = false;
Game.KeepSymLinkOnExit = true;
Game.KeyboardPlayerSkipPreventWindowDeactivate = false;
Game.LauncherExeIgnoreFileCheck = true;
Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.LockInputToggleKey = 0x23;
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8; 
Game.PauseBetweenContextAndLaunch = 5;
Game.PauseBetweenProcessGrab = 20;
Game.PauseBetweenStarts = 0; 
Game.PreventWindowDeactivation = false;
Game.ProcessChangesAtEnd = false;
Game.PromptBetweenInstances = false;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.XinputHook = true;
Game.ResetWindows = true;
Game.SendNormalKeyboardInput = false;
Game.SendNormalMouseInput = false;
Game.SendScrollWheel = false;
Game.SetForegroundWindowElsewhere = false;
Game.SetTopMostAtEnd = false;
Game.SetWindowHookStart = false;
Game.SupportsKeyboard = false;
Game.SupportsMultipleKeyboardsAndMice = true;
Game.SymlinkExe = false;
Game.SymlinkFolders = false;
Game.SymlinkGame = true;
Game.UseNucleusEnvironment = true;

Game.Play = function() {

    Game.ExecutableName = "plutonium-bootstrapper-win32.exe";

    var instFolder = Context.GetFolder(Nucleus.Folder.InstancedGameFolder);
    var plutPath = System.IO.Path.Combine(instFolder, "Plutonium");

    var copyFile = function(sourceFolder, sourceFile, destRelativePath) {
        var srcPath = System.IO.Path.Combine(Game.Folder, sourceFolder, sourceFile);
        var destPath = System.IO.Path.Combine(instFolder, destRelativePath);
        var destDir = System.IO.Path.GetDirectoryName(destPath);
        if (!System.IO.Directory.Exists(destDir)) System.IO.Directory.CreateDirectory(destDir);
        if (!System.IO.File.Exists(destPath) && System.IO.File.Exists(srcPath)) System.IO.File.Copy(srcPath, destPath, true);
    };

    var binFiles = ["AppCore.dll", "discord_game_sdk.dll", "plutonium-bootstrapper-win32.exe", "plutonium-launcher-win32.exe", "steam_api64.dll", "Ultralight.dll", "UltralightCore.dll", "WebCore.dll"];
    for (var i = 0; i < binFiles.length; i++) copyFile("Plutonium\\bin", binFiles[i], "Plutonium\\bin\\" + binFiles[i]);

    copyFile("Plutonium", "info.json", "Plutonium\\info.json");
    copyFile("Plutonium\\games", "t6mp.exe", "Plutonium\\games\\t6mp.exe");
    copyFile("Plutonium\\games", "t6zm.exe", "Plutonium\\games\\t6zm.exe");
    
    var assetFiles = [
        ["Plutonium\\storage\\demonware\\18301\\pub", "online_tu14_mp_english.wad", "Plutonium\\storage\\demonware\\18301\\pub\\online_tu14_mp_english.wad"],
        ["Plutonium\\storage\\demonware\\18301\\pub", "online_tu14_sp_english.wad", "Plutonium\\storage\\demonware\\18301\\pub\\online_tu14_sp_english.wad"],
        ["Plutonium\\storage\\demonware\\18397\\pub", "ffotd_tu17_mp_147.ff.00", "Plutonium\\storage\\demonware\\18397\\pub\\ffotd_tu17_mp_147.ff.00"],
        ["Plutonium\\storage\\demonware\\18397\\pub", "ffotd_tu17_zm_147.ff.00", "Plutonium\\storage\\demonware\\18397\\pub\\ffotd_tu17_zm_147.ff.00"],
        ["Plutonium\\storage\\demonware\\18397\\pub", "ffotd_tu17_zm_147.ff.01", "Plutonium\\storage\\demonware\\18397\\pub\\ffotd_tu17_zm_147.ff.01"],
        ["Plutonium\\storage\\demonware\\18397\\pub", "largeheatmap.raw", "Plutonium\\storage\\demonware\\18397\\pub\\largeheatmap.raw"],
        ["Plutonium\\storage\\demonware\\18397\\pub", "lsssk0", "Plutonium\\storage\\demonware\\18397\\pub\\lsssk0"],
        ["Plutonium\\storage\\demonware\\18397\\pub", "lsssk1", "Plutonium\\storage\\demonware\\18397\\pub\\lsssk1"],
        ["Plutonium\\storage\\demonware\\18397\\pub", "online_tu17_mp.wad", "Plutonium\\storage\\demonware\\18397\\pub\\online_tu17_mp.wad"],
        ["Plutonium\\storage\\demonware\\18397\\pub", "online_tu17_zm.wad", "Plutonium\\storage\\demonware\\18397\\pub\\online_tu17_zm.wad"],
        ["Plutonium\\storage\\demonware\\18409\\pub", "heatmap.raw", "Plutonium\\storage\\demonware\\18409\\pub\\heatmap.raw"],
        ["Plutonium\\storage\\demonware\\18409\\pub", "iotd-english.jpg", "Plutonium\\storage\\demonware\\18409\\pub\\iotd-english.jpg"],
        ["Plutonium\\storage\\demonware\\18409\\pub", "iotd-english.txt", "Plutonium\\storage\\demonware\\18409\\pub\\iotd-english.txt"],
        ["Plutonium\\storage\\demonware\\18409\\pub", "motd-english.txt", "Plutonium\\storage\\demonware\\18409\\pub\\motd-english.txt"],
        ["Plutonium\\storage\\demonware\\18409\\pub", "online_mp.img", "Plutonium\\storage\\demonware\\18409\\pub\\online_mp.img"],
        ["Plutonium\\storage\\demonware\\18409\\pub", "online_tu14_mp_english.wad", "Plutonium\\storage\\demonware\\18409\\pub\\online_tu14_mp_english.wad"],
        ["Plutonium\\storage\\demonware\\18409\\pub", "playlists_tu21.aggr", "Plutonium\\storage\\demonware\\18409\\pub\\playlists_tu21.aggr"],
        ["Plutonium\\storage\\demonware\\18409\\pub", "social_tu21.cfg", "Plutonium\\storage\\demonware\\18409\\pub\\social_tu21.cfg"],
        ["Plutonium\\storage\\t6\\zone", "ffotd_tu17_mp_147.ff", "Plutonium\\storage\\t6\\zone\\ffotd_tu17_mp_147.ff"],
        ["Plutonium\\storage\\t6\\zone", "ffotd_tu17_zm_147.ff", "Plutonium\\storage\\t6\\zone\\ffotd_tu17_zm_147.ff"],
        ["Plutonium\\storage\\t6\\raw\\scripts\\mp", "ranked.gsc", "Plutonium\\storage\\t6\\raw\\scripts\\mp\\ranked.gsc"],
        ["Plutonium\\storage\\t6\\raw\\scripts\\zm", "ranked.gsc", "Plutonium\\storage\\t6\\raw\\scripts\\zm\\ranked.gsc"],
        ["Plutonium\\storage\\t6\\raw\\ui\\t6\\menus", "optionscontrols.lua", "Plutonium\\storage\\t6\\raw\\ui\\t6\\menus\\optionscontrols.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui\\t6\\menus", "optionssettings.lua", "Plutonium\\storage\\t6\\raw\\ui\\t6\\menus\\optionssettings.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui\\t6\\menus", "partyprivacypopup.lua", "Plutonium\\storage\\t6\\raw\\ui\\t6\\menus\\partyprivacypopup.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui\\t6\\menus", "safeareamenu.lua", "Plutonium\\storage\\t6\\raw\\ui\\t6\\menus\\safeareamenu.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui\\t6", "dvarleftrightselector.lua", "Plutonium\\storage\\t6\\raw\\ui\\t6\\dvarleftrightselector.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui\\t6", "mainlobby.lua", "Plutonium\\storage\\t6\\raw\\ui\\t6\\mainlobby.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui\\t6", "mods.lua", "Plutonium\\storage\\t6\\raw\\ui\\t6\\mods.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui\\t6", "partylobby.lua", "Plutonium\\storage\\t6\\raw\\ui\\t6\\partylobby.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\hud", "class.lua", "Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\hud\\class.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\hud", "loading.lua", "Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\hud\\loading.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\hud", "scoreboard.lua", "Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\hud\\scoreboard.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\hud", "spectateplayercard.lua", "Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\hud\\spectateplayercard.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\hud", "team_marinesopfor.lua", "Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\hud\\team_marinesopfor.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\menus", "editgameoptionspopup.lua", "Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\menus\\editgameoptionspopup.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\menus", "privategamelobby_project.lua", "Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\menus\\privategamelobby_project.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\menus", "theaterlobby.lua", "Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\menus\\theaterlobby.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\zombie", "hudcompetitivescoreboardzombie.lua", "Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\zombie\\hudcompetitivescoreboardzombie.lua"],
        ["Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\zombie", "hudcompetitivescoreboardzombieOG.lua", "Plutonium\\storage\\t6\\raw\\ui_mp\\t6\\zombie\\hudcompetitivescoreboardzombieOG.lua"]
    ];
    for (var i = 0; i < assetFiles.length; i++) copyFile(assetFiles[i][0], assetFiles[i][1], assetFiles[i][2]);

    var configMap = [
        ["bindings_mp.bdg", "Plutonium\\storage\\t6\\players\\bindings_mp.bdg"],
        ["bindings_zm.bdg", "Plutonium\\storage\\t6\\players\\bindings_zm.bdg"],
        ["hardware_mp_Med.chp", "Plutonium\\storage\\t6\\players\\hardware_mp.chp"],
        ["hardware_zm_Med.chp", "Plutonium\\storage\\t6\\players\\hardware_zm.chp"],
        ["mpUnlocks", "Plutonium\\storage\\t6\\players\\mpUnlocks"],
        ["zmUnlocks", "Plutonium\\storage\\t6\\players\\zmUnlocks"],
        ["plutonium_mp.cfg", "Plutonium\\storage\\t6\\players\\plutonium_mp.cfg"],
        ["plutonium_zm.cfg", "Plutonium\\storage\\t6\\players\\plutonium_zm.cfg"],
        ["user_mp.cgp", "Plutonium\\storage\\t6\\players\\user_mp.cgp"],
        ["user_zm.cgp", "Plutonium\\storage\\t6\\players\\user_zm.cgp"]
    ];
    for (var i = 0; i < configMap.length; i++) copyFile("Config files", configMap[i][0], configMap[i][1]);

    copyFile("Bot Warfare\\scripts\\mp", "bots.gsc", "Plutonium\\storage\\t6\\raw\\scripts\\mp\\bots.gsc");
    copyFile("SpecialK", "d3d11.dll", "Plutonium\\d3d11.dll");
    copyFile("SpecialK", "d3d11.ini", "Plutonium\\bin\\d3d11.ini");
    copyFile("", "winject32.exe", "Plutonium\\winject32.exe");

    var docModsPath = System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.Documents), "My Mods\\SpecialK\\Global");
    if (!System.IO.Directory.Exists(docModsPath)) System.IO.Directory.CreateDirectory(docModsPath);
    var osdSrc = System.IO.Path.Combine(Game.Folder, "osd.ini");
    var osdDest = System.IO.Path.Combine(docModsPath, "osd.ini");
    if (System.IO.File.Exists(osdSrc)) System.IO.File.Copy(osdSrc, osdDest, true);

    var iniPath = System.IO.Path.Combine(instFolder, "Plutonium\\bin\\d3d11.ini");
    if (System.IO.File.Exists(iniPath)) {
        var dict = [Context.FindLineNumberInTextFile(iniPath, "SlotReassignment=", Nucleus.SearchType.StartsWith) + "|SlotReassignment=" + (Context.GamepadId)];
        Context.ReplaceLinesInTextFile(iniPath, dict);
    }

    var batFiles = ["start.bat", "F4Swap.bat", "F3RestartMP.bat", "F2HostMP.bat", "F2Guest.bat", "F3Restart.bat", "F2Host.bat"];
    for(var i=0; i<batFiles.length; i++) {
        var bPath = System.IO.Path.Combine(Context.ScriptFolder, batFiles[i]);
        if(System.IO.File.Exists(bPath)) Context.RunAdditionalFiles([bPath], false, 10);
    }

    var FOV = Context.Options["FOV"];
    var FPS = Context.Options["FPS"];
    var Players = Context.Options["Players"];
    Game.Hook.ForceFocusWindowName = "Plutonium T6 Zombies (r4839)"; 
    Game.LauncherTitle = "Plutonium T6 Zombies (r4839)"; 

    if (System.IO.File.Exists(iniPath)) {
        var inputEnabled = "true";
        if (Context.NumberOfPlayers < 5 && Context.HasKeyboardPlayer) inputEnabled = "false";
        var dict = [
            Context.FindLineNumberInTextFile(iniPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=" + inputEnabled,
            Context.FindLineNumberInTextFile(iniPath, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=" + inputEnabled,
            Context.FindLineNumberInTextFile(iniPath, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=" + (inputEnabled == "true" ? "false" : "true"),
            Context.FindLineNumberInTextFile(iniPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=" + inputEnabled,
        ];
        Context.ReplaceLinesInTextFile(iniPath, dict);
    }

    var Bat = System.IO.Path.Combine(plutPath, "launcher.bat");

    var winjectCmd = "";
    if (System.IO.File.Exists(System.IO.Path.Combine(plutPath, "winject32.exe")))
    {
        winjectCmd = 'CALL "' + plutPath + '\\winject32.exe" d3d11.dll -s "bin\\plutonium-bootstrapper-win32.exe"';
    }
    else
    {
        winjectCmd = 'START "" "bin\\plutonium-bootstrapper-win32.exe"';
    }

    var lines = [winjectCmd + ' t6zm "%~dp0.." -name "' + Context.Nickname + '" -lan +set cg_vsync 0 +set zombies_minplayers "' + Players + '" +set com_maxfps ' + FPS + ''];
    Context.WriteTextFile(Bat, lines); 
    Context.RunAdditionalFiles(["all|" + Bat], false, 0);

    if (FOV >= "0")
    {
        var zm_cfg = System.IO.Path.Combine(instFolder, "Plutonium\\storage\\t6\\players\\plutonium_zm.cfg");
        if(System.IO.File.Exists(zm_cfg)) Context.ReplaceLinesInTextFile(zm_cfg, [Context.FindLineNumberInTextFile(zm_cfg, "seta cg_fov", Nucleus.SearchType.StartsWith) + '|seta cg_fov "' + FOV + '"'], 'utf-8');
    }

    if (Context.AspectRatioDecimal < 1.2 && Context.NumberOfPlayers < 3)
    {
        Context.HideDesktop(); Game.HideTaskbar = true;
        var resW = Context.Width; var resH = (Context.Width / 1.25); var winY = ((Context.Height - resH) / 2.5);
        if (Context.PlayerID == 0) { Context.Hook.ResWidth = resW; Context.Hook.ResHeight = resH; Context.Hook.WindowX = 1; Context.Hook.WindowY = winY; }
        else if (Context.PlayerID == 1) { Context.Hook.ResWidth = resW; Context.Hook.ResHeight = resH; Context.Hook.WindowX = resW; Context.Hook.WindowY = winY; }

        var zm_cfg = System.IO.Path.Combine(instFolder, "Plutonium\\storage\\t6\\players\\plutonium_zm.cfg");
        if(System.IO.File.Exists(zm_cfg))
        {
            var dict = [
                Context.FindLineNumberInTextFile(zm_cfg, "seta r_mode", Nucleus.SearchType.StartsWith) + '|seta r_mode "' + resW + "x" + resH + '"',
                Context.FindLineNumberInTextFile(zm_cfg, "seta r_customMode", Nucleus.SearchType.StartsWith) + '|seta r_customMode "' + resW + "x" + resH + '"',
                Context.FindLineNumberInTextFile(zm_cfg, 'seta r_defaultMode', Nucleus.SearchType.StartsWith) + '|seta r_defaultMode "' + resW + "x" + resH + '"',
                Context.FindLineNumberInTextFile(zm_cfg, 'seta r_fullscreen', Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
                Context.FindLineNumberInTextFile(zm_cfg, 'seta r_aspectRatio', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "custom"',
                Context.FindLineNumberInTextFile(zm_cfg, 'seta vid_ypos', Nucleus.SearchType.StartsWith) + '|seta vid_ypos "' + winY + '"',
            ];
            Context.ReplaceLinesInTextFile(zm_cfg, dict, 'utf-8');
        }
        if (System.IO.File.Exists(iniPath)) Context.ReplaceLinesInTextFile(iniPath, [Context.FindLineNumberInTextFile(iniPath, "OverrideRes=", Nucleus.SearchType.StartsWith) + "|OverrideRes=0x0"]);

    }
    else if (Context.AspectRatioDecimal > 1.3 || Context.NumberOfPlayers > 2)
    {
        var zm_cfg = System.IO.Path.Combine(instFolder, "Plutonium\\storage\\t6\\players\\plutonium_zm.cfg");
        if(System.IO.File.Exists(zm_cfg))
        {
            var dict = [
                Context.FindLineNumberInTextFile(zm_cfg, 'seta r_mode', Nucleus.SearchType.StartsWith) + '|seta r_mode "' + Context.Width + "x" + Context.Height + '"',
                Context.FindLineNumberInTextFile(zm_cfg, 'seta r_customMode', Nucleus.SearchType.StartsWith) + '|seta r_customMode "' + Context.Width + "x" + Context.Height + '"',
                Context.FindLineNumberInTextFile(zm_cfg, 'seta r_defaultMode', Nucleus.SearchType.StartsWith) + '|seta r_defaultMode "' + Context.Width + "x" + Context.Height + '"',
                Context.FindLineNumberInTextFile(zm_cfg, 'seta r_vsync', Nucleus.SearchType.StartsWith) + '|seta r_vsync "0"',
                Context.FindLineNumberInTextFile(zm_cfg, 'seta r_aspectRatio', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "auto"',
                Context.FindLineNumberInTextFile(zm_cfg, 'seta r_fullscreen', Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
            ];
            Context.ReplaceLinesInTextFile(zm_cfg, dict);
        }
        if (System.IO.File.Exists(iniPath)) Context.ReplaceLinesInTextFile(iniPath, [Context.FindLineNumberInTextFile(iniPath, "OverrideRes=", Nucleus.SearchType.StartsWith) + "|OverrideRes=" + Context.Width + "x" + Context.Height]);
    }

    var lan = Context.Options["lan"];
    if (lan == "-") Context.RunAdditionalFiles([Context.ScriptFolder + "\\F2Host.bat"], false, 10);
    if (lan >= "0")
    {
        Context.RunAdditionalFiles([Context.ScriptFolder + "\\F2Guest.bat"], false, 10);
        var ipTxt = Game.Folder + '\\Local IP.txt';
        Context.WriteTextFile(ipTxt, ['192.168.1.' + lan + '      ']);
    }

    var Mus = Context.Options["Mus"];
    var musicSrc = "";
    if (Mus == "No" || (Mus == "Yes" && Context.PlayerID > 0) || (Mus == "Manual/Current Settings" && Context.PlayerID > 0))
    {
        musicSrc = "Config files\\user_common.cgp.nomusic";
    }
    else if (Mus == "Yes" && Context.PlayerID == 0)
    {
        musicSrc = "Config files\\user_common.cgp.music";
    }
    if (musicSrc != "") copyFile(System.IO.Path.GetDirectoryName(musicSrc), System.IO.Path.GetFileName(musicSrc), "Plutonium\\storage\\t6\\players\\user_common.cgp");

    Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Layers", "" + instFolder + "\\Plutonium\\bin\\plutonium-bootstrapper-win32.exe", "HIGHDPIAWARE", Nucleus.RegType.String);

    if (Player.IsRawKeyboard)
    {
        var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
        var dict = [
            Context.FindLineNumberInTextFile(txtPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=false",
            Context.FindLineNumberInTextFile(txtPath, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=false",
            Context.FindLineNumberInTextFile(txtPath, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=true",
            Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=false",
        ];
        Context.ReplaceLinesInTextFile(txtPath, dict);

    }
    else
    {
        var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
        var dict = [
            Context.FindLineNumberInTextFile(txtPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=false",
            Context.FindLineNumberInTextFile(txtPath, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=true",
            Context.FindLineNumberInTextFile(txtPath, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=false",
            Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=true",
        ];
        Context.ReplaceLinesInTextFile(txtPath, dict);

    }

    if (Player.IsRawKeyboard)
    {
        Game.ProtoInput.InjectStartup = false;
        Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
        Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
        Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;
        Game.ProtoInput.FindWindowHook = true;
        Game.ProtoInput.RegisterRawInputHook = true;
        Game.ProtoInput.GetRawInputDataHook = false;
        Game.ProtoInput.MessageFilterHook = true;
        Game.ProtoInput.GetCursorPosHook = false;
        Game.ProtoInput.SetCursorPosHook = false;
        Game.ProtoInput.GetKeyStateHook = false;
        Game.ProtoInput.GetAsyncKeyStateHook = false;
        Game.ProtoInput.GetKeyboardStateHook = false;
        Game.ProtoInput.CursorVisibilityHook = true;
        Game.ProtoInput.ClipCursorHook = true;
        Game.ProtoInput.FocusHooks = false;
        Game.ProtoInput.DrawFakeCursor = false;
        Game.ProtoInput.RawInputFilter = false;
        Game.ProtoInput.MouseMoveFilter = false;
        Game.ProtoInput.MouseActivateFilter = false;
        Game.ProtoInput.WindowActivateFilter = false;
        Game.ProtoInput.WindowActvateAppFilter = false;
        Game.ProtoInput.MouseWheelFilter = false;
        Game.ProtoInput.MouseButtonFilter = false;
        Game.ProtoInput.KeyboardButtonFilter = true;
        Game.ProtoInput.SendMouseWheelMessages = true;
        Game.ProtoInput.SendMouseButtonMessages = true;
        Game.ProtoInput.SendMouseMovementMessages = true;
        Game.ProtoInput.SendKeyboardButtonMessages = true;

        Game.ProtoInput.EnableFocusMessageLoop = false;
        Game.ProtoInput.FocusLoopIntervalMilliseconds = 0;
        Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
        Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
        Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
        Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
        Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
        Game.ProtoInput.BlockedMessages = [];
        Game.ProtoInput.RenameHandlesHook = false;
        Game.ProtoInput.RenameHandles = [];
        Game.ProtoInput.RenameNamedPipes = [];
    }

    if (Context.NumberOfPlayers > 4)
    {
        Game.ProtoInput.InjectStartup = false;
        Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
        Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
        Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;
        Game.ProtoInput.FindWindowHook = true;
        Game.ProtoInput.RegisterRawInputHook = true;
        Game.ProtoInput.GetRawInputDataHook = false;
        Game.ProtoInput.MessageFilterHook = true;
        Game.ProtoInput.GetCursorPosHook = false;
        Game.ProtoInput.SetCursorPosHook = false;
        Game.ProtoInput.GetKeyStateHook = false;
        Game.ProtoInput.GetAsyncKeyStateHook = false;
        Game.ProtoInput.GetKeyboardStateHook = false;
        Game.ProtoInput.CursorVisibilityHook = true;
        Game.ProtoInput.ClipCursorHook = true;
        Game.ProtoInput.FocusHooks = false;
        Game.ProtoInput.DrawFakeCursor = false;
        Game.ProtoInput.RawInputFilter = false;
        Game.ProtoInput.MouseMoveFilter = false;
        Game.ProtoInput.MouseActivateFilter = false;
        Game.ProtoInput.WindowActivateFilter = false;
        Game.ProtoInput.WindowActvateAppFilter = false;
        Game.ProtoInput.MouseWheelFilter = false;
        Game.ProtoInput.MouseButtonFilter = false;
        Game.ProtoInput.KeyboardButtonFilter = true;
        Game.ProtoInput.SendMouseWheelMessages = true;
        Game.ProtoInput.SendMouseButtonMessages = true;
        Game.ProtoInput.SendMouseMovementMessages = true;
        Game.ProtoInput.SendKeyboardButtonMessages = true;

        Game.ProtoInput.EnableFocusMessageLoop = false;
        Game.ProtoInput.FocusLoopIntervalMilliseconds = 0;
        Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
        Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
        Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
        Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
        Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
        Game.ProtoInput.BlockedMessages = [];
        Game.ProtoInput.RenameHandlesHook = false;
        Game.ProtoInput.RenameHandles = [];
        Game.ProtoInput.RenameNamedPipes = [];

    } 

    if (Context.NumberOfPlayers < 5)
    {
        var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
        var dict = [
            Context.FindLineNumberInTextFile(txtPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=true",
        ];
        Context.ReplaceLinesInTextFile(txtPath, dict);
    }

    Game.ProtoInput.OnInputLocked = function()
    {
        if (Player.IsRawKeyboard)
        {
            for (var i = 0; i < PlayerList.Count; i++)
            {
                var player = PlayerList[i];
                ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
                ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
                ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
                ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

                ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5, true, true, true, true, true);
                System.Threading.Thread.Sleep(1000);
                ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, false);
                ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
                ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);

                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
            }
        }
        if (Context.NumberOfPlayers > 4)
        {
            for (var i = 0; i < PlayerList.Count; i++)
            {
                var player = PlayerList[i];
                ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
                ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
                ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
                ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

                ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5, true, true, true, true, true);
                System.Threading.Thread.Sleep(1000);
                ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, false);
                ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
                ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);

                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
            }
        }
    }
    Game.ProtoInput.OnInputUnlocked = function()
    {
        for (var i = 0; i < PlayerList.Count; i++)
        {
            var player = PlayerList[i];
            ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
            ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
            ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
            ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

            ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
            ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, true);

            ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
            ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
            ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
            ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
            ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
        }
    }
};
