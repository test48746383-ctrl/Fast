import en from './en';
import hi from './hi';
import es from './es';
import fr from './fr';
import it from './it';
import ko from './ko';

/**
 * 🌍 Localization Registry
 * 
 * Exports all available languages and their metadata.
 */

export const RESOURCES = {
  en: { translation: en, label: 'English', nativeName: 'English' },
  hi: { translation: hi, label: 'Hindi', nativeName: 'हिन्दी' },
  es: { translation: es, label: 'Spanish', nativeName: 'Español' },
  fr: { translation: fr, label: 'French', nativeName: 'Français' },
  it: { translation: it, label: 'Italian', nativeName: 'Italiano' },
  ko: { translation: ko, label: 'Korean', nativeName: '한국어' },
};

export const DEFAULT_LANGUAGE = 'en';

export const LANGUAGES = Object.keys(RESOURCES).map(code => ({
  code,
  label: RESOURCES[code].label,
  nativeName: RESOURCES[code].nativeName
}));
