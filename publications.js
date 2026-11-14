const bibliography = new URL('publications.bib', window.location.href);

if (bibliography.protocol === 'https:') {
  const bibbase = new URL('https://bibbase.org/show');
  bibbase.search = new URLSearchParams({
    bib: bibliography.href,
    jsonp: '1',
    showSearch: 'true',
    noIndex: 'true'
  });
  document.write('<script src="' + bibbase.href.replaceAll('&', '&amp;') + '"><\/script>');
}
