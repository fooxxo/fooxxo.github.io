function changeImage() {
    var img = document.getElementById('image');

    if (img.src.includes('grogupet.gif')) {
        img.src = "images/grogu.jpg";
    } else {
        img.src = "images/grogupet.gif";
        
        var sound = document.getElementById("meow");
        sound.play();

        // Change back to cat1.jpg after 4 seconds (4000 milliseconds)
        setTimeout(function() {
            img.src = "images/grogu.jpg";
        }, 4000);

        var container = document.querySelector(".groguMessage");
        // 2. Create the <p> element
        var paragraph = document.createElement("p");
        // 3. Set the paragraph text
        paragraph.textContent = "He loves the pets!!!";
        // 4. Append the paragraph to the .groguMessage div
        container.appendChild(paragraph);
    }
}

