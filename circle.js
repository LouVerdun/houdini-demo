class Circle {
    static get inputProperties() { 
        return ['--color', '--mouse-x', '--mouse-y'];
    }

    paint(ctx, geometry, properties) {
        const color = properties.get('--color');
        
        // Full circle
        ctx.fillStyle = color;
        
        ctx.arc(
            geometry.width / 2, geometry.height / 2, // center
            Math.min(geometry.width, geometry.height) / 3, // radius
            0, 2 * Math.PI // Full circle
        );

        ctx.fill();

        // Line
        // ctx.beginPath();
        // ctx.moveTo(0,0);
        // ctx.lineTo(50, 50);
        // ctx.stroke();

        // Outline circle
        // ctx.strokeStyle = 'black';
        // ctx.lineWidth = 2;
        // ctx.beginPath();
        // ctx.arc( 50, 50, 20, 0, 2*Math.PI);
        // ctx.stroke();
        // ctx.closePath();
    }
}

registerPaint('circle', Circle);
