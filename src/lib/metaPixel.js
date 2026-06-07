export const META_PIXEL_ID = '1336358738461553';

function track(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', eventName, params);
  }
}

export function trackPageView() {
  track('PageView');
}

export function trackLead(params = {}) {
  track('Lead', {
    currency: 'ZAR',
    ...params,
  });
}

export function trackContact(params = {}) {
  track('Contact', {
    currency: 'ZAR',
    ...params,
  });
}

export function trackCompleteRegistration(params = {}) {
  track('CompleteRegistration', {
    currency: 'ZAR',
    ...params,
  });
}
