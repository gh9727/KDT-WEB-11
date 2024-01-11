let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
function changeColor() {
    for (let i = 0; i < colors.length; i++) {
        $('#red').switchClass(colors[i], colors[i + 1], 1000);
    }
    $('#red').switchClass(colors[6], colors[0], 1000);
}
