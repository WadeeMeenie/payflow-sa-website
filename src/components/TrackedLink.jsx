import { trackContact, trackLead } from '../lib/metaPixel.js';

function TrackedLink({ metaEvent = 'Contact', metaParams, onClick, ...props }) {
  function handleClick(event) {
    if (metaEvent === 'Lead') {
      trackLead(metaParams);
    } else {
      trackContact(metaParams);
    }

    onClick?.(event);
  }

  return <a {...props} onClick={handleClick} />;
}

export default TrackedLink;
