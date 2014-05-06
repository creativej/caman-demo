$(function() {
    function changeColor(color) {
        Caman('[data-shirt]', function() {
            $shirt = $('[data-shirt]');
            $shirt.hide();

            this.revert();

            // Create the layer
            this.newLayer(function () {
                // Change the blending mode
                this.setBlendingMode("multiply");

                // Now we can *either* fill this layer with a
                // solid color...
                this.fillColor('#' + color);
            });

            this.render();
            $shirt.fadeIn('fast');
        });
    }

    $color = $('[data-color]');

    $color.on('change', function() {
        changeColor($(this).val());
    });

    changeColor($color.val());
});
