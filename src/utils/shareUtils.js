/**
 * Trigger Native Web Share API
 */
export const shareContent = async (title, text, url = window.location.href) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url
      });
      return true;
    } catch (error) {
      console.warn('Error sharing:', error);
      return false;
    }
  } else {
    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(`${title}\n${text}\n${url}`);
      return 'copied';
    } catch (err) {
      return false;
    }
  }
};
