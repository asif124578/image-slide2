var fills = document.querySelectorAll(".healthbar_fill");

var health = 75;
var maxHp = 100;

function renderHealth() {
  var percent = health / maxHp * 100;

  // Update color
  document.documentElement.style.setProperty('--bar-fill', '#57e705');
  document.documentElement.style.setProperty('--bar-top', '#6aff03');

  if (percent <= 50) {
    document.documentElement.style.setProperty('--bar-fill', '#d6ed20');
    document.documentElement.style.setProperty('--bar-top', '#d8ff48');
  }
  if (percent <= 25) {
    document.documentElement.style.setProperty('--bar-fill', '#ec290a');
    document.documentElement.style.setProperty('--bar-top', '#ff3818');
  }

  fills.forEach(fill => {
    fill.style.width = percent + "%";
  });
}

function updateHealth(change) {
  health += change;
  health = health > maxHp ? maxHp : health;
  health = health < 0 ? 0 : health;

  renderHealth();
}

// Initialize
updateHealth(0);
