AFRAME.registerComponent('cursor-listener', {
    init: function () {
    var el = this.el;  // <a-box>
    var board = el.getAttribute('id');
    console.log(board);
    el.addEventListener("click", function() {
        ball_in_hoop(board);
    });
    }
});