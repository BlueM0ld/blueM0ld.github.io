AFRAME.registerComponent('cursor-listener', {
    init: function () {
    var el = this.el;  // <a-box>
    var board = el.getAttribute('id');
    console.log(board);
    el.addEventListener("click", function() {
        ball_in_hoop(board);
        document.querySelector('#question').setAttribute("text", "value: Q2 Lorem ipsum dolor sit amet")
        document.querySelector('#answer-1').setAttribute("text", "value: Q2 Answer1")
        document.querySelector('#answer-2').setAttribute("text", "value: Q2 Answer2")
        document.querySelector('#naswer-3').setAttribute("text", "value: Q2 Answer3")
    });
    }
});