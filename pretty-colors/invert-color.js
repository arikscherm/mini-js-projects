let colorpicker = document.getElementById('colorpicker');
    setInterval(()=>{
        let background_color = colorpicker.value;
        document.body.style.backgroundColor = background_color;
        var text_color = document.getElementById("text");
        opposite_color = invertColor(background_color);
        text_color.style.color=opposite_color;
    }, 200);


function invertColor(hex) {
    hex.indexOf('#') === 0 
    hex = hex.slice(1);
    
    // invert color components 
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);

    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str) {
    if (str.length == 1){
        return "0" + str
    }
    return str
}