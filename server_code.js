
function favoriteSite(params, context) {
  Kii.initializeWithSite(context.getAppID(), 
                         context.getAppKey(), 
                         KiiSite.US);
  var sites = ['http://www.google.com', "http://www.stackoverflow.com", "http://www.apple.com"]
  var site = sites[Math.round(Math.random()*(sites.length-1))]
  return { "message": "My favorite site is " + site, "site": site }
}