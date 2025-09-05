var newPixelLimit = 500000; 

if (typeof pixelLimit !== "undefined") {
    pixelLimit = newPixelLimit;
    console.log("Pixel limit set to " + pixelLimit);

    document.addEventListener("keydown", function(event) {
        if (event.key === "w" || event.key === "W") {
            newPixelLimit += 100;
            pixelLimit = newPixelLimit;
            console.log("Pixel limit increased to " + pixelLimit);
        }
        if (event.key === "s" || event.key === "S") {
            newPixelLimit = Math.max(0, newPixelLimit - 100);
            pixelLimit = newPixelLimit;
            console.log("Pixel limit decreased to " + pixelLimit);
        }
    });
} else {
    console.log("pixelLimit not found. Check your Sandboxels version.");
}