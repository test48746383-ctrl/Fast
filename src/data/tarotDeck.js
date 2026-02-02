/**
 * 🃏 Tarot Deck Data
 * 
 * Contains a subset of Major Arcana for the MVP.
 * Can be expanded to full 78 card deck later.
 */

export const MAJOR_ARCANA = [
  {
    id: 0,
    name: "The Fool",
    image: "/assets/tarot/0_fool.webp", // Placeholder path
    keywords: ["New Beginnings", "Innocence", "Spontaneity", "Free Spirit"],
    description: "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe."
  },
  {
    id: 1,
    name: "The Magician",
    image: "/assets/tarot/1_magician.webp",
    keywords: ["Manifestation", "Resourcefulness", "Power", "Inspired Action"],
    description: "The Magician represents manifestation, resourcefulness, power, inspired action."
  },
  {
    id: 2,
    name: "The High Priestess",
    image: "/assets/tarot/2_high_priestess.webp",
    keywords: ["Intuition", "Sacred Knowledge", "Divine Feminine", "The Subconscious"],
    description: "The High Priestess sits in front of the thin veil of awareness, which is all that separates us from our inner selves. She knows the secret of how to access these realms."
  },
  {
    id: 3,
    name: "The Empress",
    image: "/assets/tarot/3_empress.webp",
    keywords: ["Femininity", "Beauty", "Nature", "Nurturing", "Abundance"],
    description: "The Empress is deeply connected to femininity. She calls on you to connect with your feminine energy, create beauty in your life, get in touch with your sensuality."
  },
  {
    id: 4,
    name: "The Emperor",
    image: "/assets/tarot/4_emperor.webp",
    keywords: ["Authority", "Establishment", "Structure", "Father Figure"],
    description: "The Emperor represents the father figure of the Tarot deck. He is the 'provider' and protects and defends his loved ones. He demands respect and authority."
  },
  {
    id: 5,
    name: "The Hierophant",
    image: "/assets/tarot/5_hierophant.webp",
    keywords: ["Spiritual Wisdom", "Religious Beliefs", "Conformity", "Tradition"],
    description: "The Hierophant is the masculine counterpart to the High Priestess. He is also known as the Pope or the Teacher. He represents wisdom, tradition and established beliefs."
  },
  {
    id: 6,
    name: "The Lovers",
    image: "/assets/tarot/6_lovers.webp",
    keywords: ["Love", "Harmony", "Relationships", "Values Alignment", "Choices"],
    description: "The Lovers represent love, harmony, and relationships. It can also indicate a choice that needs to be made."
  },
  {
    id: 7,
    name: "The Chariot",
    image: "/assets/tarot/7_chariot.webp",
    keywords: ["Control", "Willpower", "Success", "Action", "Determination"],
    description: "The Chariot represents overcoming obstacles through determination, focus and willpower. It's a sign of encouragement."
  },
  {
    id: 8,
    name: "Strength",
    image: "/assets/tarot/8_strength.webp",
    keywords: ["Strength", "Courage", "Persuasion", "Influence", "Compassion"],
    description: "Strength predicts the triumphant conclusion to a major life problem, situation or temptation through strength of character. It is a very happy card if you are fighting illness or recovering from injury."
  },
  {
    id: 9,
    name: "The Hermit",
    image: "/assets/tarot/9_hermit.webp",
    keywords: ["Soul Searching", "Introspection", "Being Alone", "Inner Guidance"],
    description: "The Hermit suggests that you are in a phase of introspection where you are drawing your attention inwards and looking for answers within."
  }
];

// Helper to get random cards
export const drawCards = (count = 1) => {
  const shuffled = [...MAJOR_ARCANA].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
