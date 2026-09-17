var utils = {

    captureMouse: function (element) {
        var mouse = {
            x: 0,
            y: 0
        };

        element.addEventListener('mousemove', function (event) {

            var rect = element.getBoundingClientRect();

            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;

        }, false);

        return mouse;
    }

};