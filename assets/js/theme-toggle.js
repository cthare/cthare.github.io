(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  var root = document.documentElement;
  var icon = btn.querySelector('[data-theme-icon]');
  var label = btn.querySelector('[data-theme-label]');

  function render() {
    var t = root.getAttribute('data-theme');
    btn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
    if (icon) icon.textContent = t === 'dark' ? '●' : '○';
    if (label) label.textContent = t === 'dark' ? 'dark mode' : 'light mode';
  }

  render();

  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    render();
  });
})();
