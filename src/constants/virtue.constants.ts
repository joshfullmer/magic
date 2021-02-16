import type { TailwindColor } from '@/types'

export enum VIRTUES {
  Focus = 'Focus',
  Insight = 'Insight',
  Might = 'Might',
  Intellect = 'Intellect',
  Willpower = 'Willpower',
  Connection = 'Connection',
  Agility = 'Agility',
  Foresight = 'Foresight',
  Resilience = 'Resilience'
}

type VirtueColors = {
  [key in VIRTUES]: TailwindColor
}

export const VIRTUE_COLORS: VirtueColors = {
  Focus: 'lime',
  Insight: 'fuchsia',
  Might: 'red',
  Intellect: 'blue',
  Willpower: 'violet',
  Connection: 'yellow',
  Agility: 'emerald',
  Foresight: 'orange',
  Resilience: 'warmGray'
}

export enum VIRTUE_ATTRIBUTES {
  Center = 'Center',
  Axiom = 'Axiom',
  Color = 'Color',
  Land = 'Land',
  Stone = 'Stone',
  Totem = 'Totem',
}

type VirtueDescriptions = {
  [key in VIRTUES]: {
    [key in VIRTUE_ATTRIBUTES]: string
  }
}

export const VIRTUE_DESCRIPTIONS: VirtueDescriptions = {
  Focus: {
    Center: 'The head',
    Axiom: '',
    Color: VIRTUE_COLORS.Focus,
    Land: 'Summit',
    Stone: 'Peridot',
    Totem: ''
  },
  Insight: {
    Center: 'The eye',
    Axiom: '',
    Color: VIRTUE_COLORS.Insight,
    Land: 'Island',
    Stone: 'Amethyst',
    Totem: ''
  },
  Might: {
    Center: 'The arm',
    Axiom: 'Practice, discipline, and mastery prepares one for the unknown.',
    Color: VIRTUE_COLORS.Might,
    Land: 'Volcano',
    Stone: 'Garnet',
    Totem: ''
  },
  Intellect: {
    Center: 'The mind',
    Axiom: '',
    Color: VIRTUE_COLORS.Intellect,
    Land: 'Thicket',
    Stone: 'Sapphire',
    Totem: ''
  },
  Willpower: {
    Center: 'The self',
    Axiom: '',
    Color: VIRTUE_COLORS.Willpower,
    Land: 'Oasis',
    Stone: 'Moonstone',
    Totem: ''
  },
  Connection: {
    Center: 'The heart',
    Axiom: '',
    Color: VIRTUE_COLORS.Connection,
    Land: 'River',
    Stone: 'Citrine',
    Totem: ''
  },
  Agility: {
    Center: 'The hand',
    Axiom: '',
    Color: VIRTUE_COLORS.Agility,
    Land: 'Plateau',
    Stone: 'Emerald',
    Totem: ''
  },
  Foresight: {
    Center: 'The gut',
    Axiom: '',
    Color: VIRTUE_COLORS.Foresight,
    Land: 'Cave',
    Stone: 'Topaz',
    Totem: ''
  },
  Resilience: {
    Center: 'The base',
    Axiom: '',
    Color: VIRTUE_COLORS.Resilience,
    Land: 'Valley',
    Stone: 'Jet',
    Totem: ''
  }
}
