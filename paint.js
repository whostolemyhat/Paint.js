$(function() {
        var canvas = $('#background');
        var ctx;
        var colourList = ["#287227", "#529e00", "#58665b", "#e76b57", "#ec462a", "#ec760b", "#4da6c6", "#4da6c6", "#3a78a0", "#f6ecd8"];
        // green light green med green orange dark orange light orange light blue, dark blue cream
        var SCREENHEIGHT = $(document).height();
        var SCREENWIDTH = $(document).width();
        var balls = [];
        var NUMBERBALLS = 500;
        var MAXSIZE = 12;

        function Ball() {
            var x = randomX();
            var y = randomY();
            var size = randomSize();
            var colour = randomColour();

            this.x = randomX();
            this.y = randomY();
            this.size = randomSize();
            this.colour = randomColour();

            this.draw = function() {
                ctx.fillStyle = this.colour;
                circle(this.x, this.y, this.size);
            }
        }

        function updateCanvasDimensions() {
            canvas.attr({height: SCREENHEIGHT, width: SCREENWIDTH});
        }

        function circle(x,y,r) {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.fill();
        }

        function randomColour() {
            var colour = colourList[(Math.floor(Math.random()*colourList.length))];
            return colour;
        }
        
        function randomSize() {
            var size = (Math.floor(Math.random() * MAXSIZE)+6);
            return size; 
        }

        function randomX() {
            var x = Math.floor(Math.random()* (SCREENWIDTH - MAXSIZE));
            return x;
        }

        function randomY() {
            var y = Math.floor(Math.random() * (SCREENHEIGHT - MAXSIZE));
            return y;
        }

        function init() {
            updateCanvasDimensions();
            ctx = $('#background')[0].getContext("2d");
            populateBalls();
            draw();
        }
        
        function draw() {
            for(var i = 0; i < balls.length; i++) {
                balls[i].draw();
            }
        }

        function populateBalls() {
            for(var i = 0; i < NUMBERBALLS+1; i++) {
                balls.push(new Ball());
            }
        }

        init();
            
});

