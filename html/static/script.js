window.onload = function() {
    const seiten = [
        "wobble-flyer/wobble-flyer.html",
        "pdl-flyer/pdl-flyer.html",
    ];

    const index = Math.floor(Math.random() * seiten.length);
    const zielSeite = seiten[index];

    window.location.href = zielSeite;
}