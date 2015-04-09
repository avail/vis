var events = new Events();
var Visualiser = function ()
{
    function init()
    {
        document.onselectstart = function ()
        {
            return false;
        };
        document.addEventListener("drop", onDocumentDrop, false);
        document.addEventListener("dragover", onDocumentDragOver, false);
        AudioHandler.init();
        ControlsHandler.init();
        update();
    }

    function update()
    {
        requestAnimationFrame(update);
        events.emit("update");
    }

    function onDocumentDragOver(evt)
    {
        evt.stopPropagation();
        evt.preventDefault();
        return false;
    }

    function onDocumentDrop(evt)
    {
        evt.stopPropagation();
        evt.preventDefault();
        AudioHandler.onMP3Drop(evt);
    }
    return {
        init: init
    };
}();

Stars.initStars();
Visualiser.init();
var gui = new dat.GUI();
gui.closed = true;
gui.add(Config, 'limitFPS').name("Limit FPS");
gui.add(Config, 'FPS', 1, 144).name("Maximum FPS");
gui.add(Config, 'debug').name("Show Debug UI");