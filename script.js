// Hide loading indicator when game loads
document.getElementById('gameFrame').addEventListener('load', function() {
    document.getElementById('loadingIndicator').style.display = 'none';
});

// Refresh the game
function refreshGame() {
    document.getElementById('loadingIndicator').style.display = 'block';
    document.getElementById('gameFrame').src = document.getElementById('gameFrame').src;
}

// Open the original site in a new tab
function openOriginal() {
    window.open('https://pokeheroes.com', '_blank');
}

// Attempt to bypass common ad-block detection
window.addEventListener('load', function() {
    // Override common ad-block detection variables
    window.adsbygoogle = window.adsbygoogle || [];
});
