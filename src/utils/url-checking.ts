function getHostFromUrl(url: string) {
  return new URL(url).hostname.replace("www.", "");
}

function isAbsoluteUrl(url: string) {
  const formattedUrl = url.toLowerCase();
  return formattedUrl.startsWith("http:")  || formattedUrl.startsWith("https:");
}

function isUrlExternal(url: string, host = window.location.hostname) {
  if (isAbsoluteUrl(url)) {
    const providedHost = getHostFromUrl(url);
    return providedHost !== host;
  }
  return false;
}

