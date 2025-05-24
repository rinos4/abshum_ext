// 絶対湿度付与Chromeの拡張
// Copyright (c) 2024 rinos4u, released under the MIT open source license.
// 2024.10.13 rinos4u	new

function CalcVH(t, h) {
  return 13.253926 * Math.pow(10, (7.5 * t) / (237.3 + t)) * h / (t + 273.15);
}
function AddVolumetricHumidity() {
  for (const fp of document.getElementsByClassName('forecast-point-1h')) {
    dcc = fp.getElementsByClassName('temperature')[0];
    rhc = fp.getElementsByClassName('humidity'   )[0];
    if (dcc && rhc) {
      dc = dcc.getElementsByTagName('span')
      rh = rhc.getElementsByTagName('td')
      for (i = 0; i < dc.length; i++) { // dc,rhとも24個のはず
        vh = CalcVH(Number(dc[i].textContent), Number(rh  [i].textContent));
        rh[i].insertAdjacentHTML('beforeend', '<br>' + vh.toFixed(1))
      }
    }
  }
}
AddVolumetricHumidity();
