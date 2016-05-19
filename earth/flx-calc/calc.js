// Generated by LiveScript 1.4.0
(function(){
  window.calc = function(it){
    var EARTHRADIUS, G, KGPERGRAM, METRESPERMM, MMPERMETRE, PI, r, a, v_s, rho_l, l, dlRatio, dd, r_T, a_T, v_sT, rho_lT, youngMod, v1, b1, w1, f1, sag, sagMm, x_C, dh, dhMm, uy, uDY, sigma_o, sigma_u, sigma_uPerc;
    EARTHRADIUS = 6371 * 1000;
    G = 9.81;
    KGPERGRAM = 0.001;
    METRESPERMM = 0.001;
    MMPERMETRE = 1000;
    PI = 3.14159265;
    r = METRESPERMM * it.d / 2;
    a = PI * Math.pow(r, 2);
    v_s = a * it.l_s;
    rho_l = KGPERGRAM * it.m_s / v_s;
    l = it.x + it.l_o;
    dlRatio = it.dl / l;
    dd = -it.nu * it.d * dlRatio;
    r_T = METRESPERMM * (it.d + dd) / 2;
    a_T = PI * Math.pow(r_T, 2);
    v_sT = a_T * it.l_s * (1 + dlRatio);
    rho_lT = KGPERGRAM * it.m_s / v_sT;
    youngMod = it.T_max / (a * dlRatio);
    if (it.nb) {
      it.rho_w = rho_l;
    }
    v1 = a_T * 1;
    b1 = it.rho_w * v1 * G;
    w1 = rho_lT * v1 * G;
    f1 = w1 - b1;
    sag = f1 * Math.pow(it.x, 2) / (8 * it.T_max);
    sagMm = sag * MMPERMETRE;
    x_C = it.x / 2;
    dh = Math.sqrt(Math.pow(x_C, 2) + Math.pow(EARTHRADIUS, 2)) - EARTHRADIUS;
    dhMm = dh * MMPERMETRE;
    uy = it.uy;
    uDY = uy + uy + (uy + uy + uy + uy) / 2;
    sigma_o = dhMm * 0.5 / 3;
    sigma_u = uDY / 3;
    sigma_uPerc = 100 * sigma_u / sigma_o;
    return {
      dd: dd,
      dl_percent: dlRatio * 100,
      dh: dhMm,
      dY_concave: -dhMm + sagMm,
      dY_convex: +dhMm + sagMm,
      dY_flat: 0 + sagMm,
      E: youngMod / Math.pow(10, 9),
      r: r * MMPERMETRE,
      rho_l: rho_l,
      rho_lT: rho_lT,
      rho_w: it.rho_w,
      sag: sagMm,
      sigma_o: sigma_o,
      sigma_u: sigma_u,
      'sigma_u-perc': Math.round(sigma_uPerc)
    };
  };
}).call(this);
