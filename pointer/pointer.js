class Pointer {
    static get inputProperties() {
        return [
            '--radius',
            '--thickness',
            '--color',
            '--mouse-x',
            '--mouse-y',
            '--tick'
        ];
    }

    paint(ctx, geometry, properties) {
        const radius = Math.max(0, parseFloat(properties.get('--radius').toString()));
        const thickness = parseInt(properties.get('--thickness').toString());
        const color = properties.get('--color').toString();
        
        let tick = parseFloat(properties.get('--tick').toString());
        
        const fromX = Math.max(0, parseFloat(properties.get('--mouse-x').toString()));
        const fromY = Math.max(0, parseFloat(properties.get('--mouse-y').toString()));

        // Line
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctx.globalAlpha = 1 - tick / 400;

        ctx.beginPath();
        ctx.moveTo(fromX + 2, fromY + 2);
        ctx.lineTo(fromX + radius, fromY + radius);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(fromX - 2, fromY - 2);
        ctx.lineTo(fromX - radius, fromY - radius);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(fromX - 2, fromY + 2);
        ctx.lineTo((fromX - radius), fromY + radius);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(fromX + 2, fromY - 2);
        ctx.lineTo(fromX + radius, fromY - radius);
        ctx.stroke();

        // ctx.beginPath();
        // ctx.moveTo(fromX + 2, fromY - 2);
        // ctx.lineTo(fromX + radius, fromY - radius);
        // ctx.stroke();
    }
}

registerPaint('pointer', Pointer);
