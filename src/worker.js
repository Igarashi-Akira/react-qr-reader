// jsQR is concatenated by gulp

self.addEventListener('message', function(e) {
  var decoded = null
  try {
    decoded = jsQR(
      e.data.data,
      e.data.width,
      e.data.height
    )
  } catch (e) {
    if (!(e instanceof RangeError))
    throw error;
  }

  if (decoded) {
    postMessage(decoded.data)
  } else {
    postMessage(null)
  }
})
