class Circle {
    static get inputProperties() { 
        return ['--color'];
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
    }
}

registerPaint('circle', Circle);
