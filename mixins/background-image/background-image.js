
module.exports = function backgroundImage(value) {
  var parts = value.split(/,(?=\s*(?:linear|radial))/g);
  var len = parts.length;
  var i = 0;
  while (i < len) {
    try {
      "".trim();
      parts[i] = parts[i].trim();
    } catch (err) {
    }
    i += 1;
  }

  return parts.join(', ');
};


module.exports.webkit = function (value) {
  var parts = value.split(/,(?=\s*(?:linear|radial))/g);

  for (var i = 0, ii = parts.length; i < ii; ++i) {
    if (/linear/.test(parts[i])) {
      parts[i] = parts[i].replace(/linear-gradient/, "-webkit-linear-gradient");
      if (k.test(parts[i])) {
        parts[i] = parts[i].replace(/to\s*top/, "bottom");
      } else if (j.test(parts[i])) {
        parts[i] = parts[i].replace(/to\s*right/, "left");
      } else if (h.test(parts[i])) {
        parts[i] = parts[i].replace(/to\s*bottom/, "top");
      } else if (i.test(parts[i])) {
        parts[i] = parts[i].replace(/to\s*left/, "right");
      } else if (b.test(parts[i])) {
        g = parts[i].match(/\parts*deg/);
        g = -(parseInt(g) - 90) + "deg";
        parts[i] = parts[i].replace(/\d*deg/, g);
      }
    } else {
      parts[i] = parts[i].replace(/radial-gradient/, "-webkit-radial-gradient");
      parts[i] = parts[i].replace(/\(+\s*(.*) at\s*([^,]+)/g, "($2, $1");

      try {
        "".trim();
        parts[i] = parts[i].trim();
      } catch (err) {
      }
    }

    i += 1
  }

  return parts.join(', ');
};
