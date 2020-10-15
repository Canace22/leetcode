function DrawBresenhamline(x0, y0, x1, y1) {
  const dx = x1 - x0; //x偏移量
  const dy = y1 - y0; //y偏移量
  const ux = dx > 0 ? 1 : -1; //x伸展方向
  const uy = dx > 0 ? 1 : -1; //y伸展方向
  const dx2 = dx << 1; //x偏移量乘2
  const dy2 = dy << 1; //y偏移量乘2
  if (Math.abs(dx) > Math.abs(dy)) {
    // 以 x 为增量方向计算
    let e = -dx; //e = -0.5 * 2 * dx,把e 用2 * dx* e替换
    let x = x0; //起点x坐标
    const y = y0; //起点y坐标
    for (x = x0; x < x1; x += ux) {
      e = e + dy2; //来自 2*e*dx= 2*e*dx + 2dy  （原来是 e = e + k）
      if (e > 0) {
        //e是整数且大于0时表示要取右上的点（否则是右下的点）
        y += uy;
        e = e - dx2; //2*e*dx = 2*e*dx - 2*dx  (原来是 e = e -1)
      }
    }
  } else {
    // 以 y 为增量方向计算
    let e = -dy; //e = -0.5 * 2 * dy,把e 用2 * dy* e替换
    const x = x0; //起点x坐标
    let y = y0; //起点y坐标
    for (y = y0; y < y1; y += uy) {
      e = e + dx2; //来自 2*e*dy= 2*e*dy + 2dy  （原来是 e = e + k）
      if (e > 0) {
        //e是整数且大于0时表示要取右上的点（否则是右下的点）
        x += ux;
        e = e - dy2; //2*e*dy = 2*e*dy - 2*dy  (原来是 e = e -1)
      }
    }
  }
}
