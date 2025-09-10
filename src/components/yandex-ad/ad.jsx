'use client';
import React, { useEffect } from 'react';

const YandexAd = ({ blockId, type, platform, renderTo }) => {
  useEffect(() => {
    // agar massiv yo‘q bo‘lsa, yaratib qo‘yiladi
    window.yaContextCb = window.yaContextCb || [];

    window.yaContextCb.push(() => {
      const config = { blockId };

      if (type) config.type = type;
      if (platform) config.platform = platform;
      config.renderTo = renderTo || `yandex_rtb_${blockId}`;

      window.Ya.Context.AdvManager.render(config);
    });
  }, [blockId, type, platform, renderTo]);

  return <div id={renderTo || `yandex_rtb_${blockId}`} />;
};

export default YandexAd;
