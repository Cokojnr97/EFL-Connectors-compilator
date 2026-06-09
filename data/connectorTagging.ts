export type SupplementalAxis = 'opinion' | 'sequence' | 'comparison' | 'summary' | 'place';

export type SupplementalCategorySelection = Record<SupplementalAxis, string[]>;

function createEmptySupplementalCategories(): SupplementalCategorySelection {
  return {
    opinion: [],
    sequence: [],
    comparison: [],
    summary: [],
    place: [],
  };
}

function normalizeKey(value: string): string {
  return value
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const TAGS: Record<string, Partial<SupplementalCategorySelection>> = {
  'i think': { opinion: ['i_think'] },
  'i believe': { opinion: ['i_believe'] },
  'i feel': { opinion: ['i_feel'] },
  'in my opinion': { opinion: ['in_my_opinion'] },
  'in my view': { opinion: ['in_my_view'] },
  'as far as i know': { opinion: ['as_far_as_i_know'] },
  'it seems likely': { opinion: ['it_seems_likely'] },
  'it seems to me': { opinion: ['it_seems_to_me'] },
  'in my experience': { opinion: ['in_my_experience'] },
  'as far as i am concerned': { opinion: ['as_far_as_im_concerned'] },
  'as far as im concerned': { opinion: ['as_far_as_im_concerned'] },
  'i tend to think that': { opinion: ['i_tend_to_think_that'] },
  'as far as i understand': { opinion: ['as_far_as_i_understand'] },

  'first': { sequence: ['first'] },
  'second': { sequence: ['second'] },
  'third': { sequence: ['third'] },
  'then': { sequence: ['then'] },
  'next': { sequence: ['next'] },
  'afterwards': { sequence: ['afterwards'] },
  'after that': { sequence: ['after_that'] },
  'meanwhile': { sequence: ['meanwhile'] },
  'subsequently': { sequence: ['subsequently'] },
  'finally': { sequence: ['finally'] },
  'lastly': { sequence: ['lastly'] },
  'last but not least': { sequence: ['last_but_not_least'] },
  'eventually': { sequence: ['eventually'] },
  'previously': { sequence: ['previously'] },

  'likewise': { comparison: ['likewise'] },
  'in the same way': { comparison: ['in_the_same_way'] },
  'similarly': { comparison: ['similarly'] },
  'like': { comparison: ['like'] },
  'as well as': { comparison: ['as_well_as'] },
  'by comparison': { comparison: ['by_comparison'] },
  'compared to': { comparison: ['compared_to'] },
  'unlike': { comparison: ['unlike'] },
  'as ... as': { comparison: ['as_as'] },

  'in short': { summary: ['in_short'] },
  'in brief': { summary: ['in_brief'] },
  'in other words': { summary: ['in_other_words'] },
  'to be sure': { summary: ['to_be_sure'] },
  'clearly': { summary: ['clearly'] },
  'anyway': { summary: ['anyway'] },
  'in conclusion': { summary: ['in_conclusion'] },
  'to sum up': { summary: ['to_sum_up'] },
  'all in all': { summary: ['all_in_all'] },
  'to conclude': { summary: ['to_conclude'] },
  'on the whole': { summary: ['on_the_whole'] },

  'there': { place: ['there'] },
  'here': { place: ['here'] },
  'beyond': { place: ['beyond'] },
  'nearby': { place: ['nearby'] },
  'next to': { place: ['next_to'] },
  'opposite to': { place: ['opposite_to'] },
  'adjacent to': { place: ['adjacent_to'] },
  'on the other side': { place: ['on_the_other_side'] },
  'in the front': { place: ['in_the_front'] },
  'in the back': { place: ['in_the_back'] },
};

export function deriveSupplementalCategories(connector: string): SupplementalCategorySelection {
  const supplemental = createEmptySupplementalCategories();
  const match = TAGS[normalizeKey(connector)];

  if (!match) {
    return supplemental;
  }

  return {
    opinion: match.opinion ?? supplemental.opinion,
    sequence: match.sequence ?? supplemental.sequence,
    comparison: match.comparison ?? supplemental.comparison,
    summary: match.summary ?? supplemental.summary,
    place: match.place ?? supplemental.place,
  };
}
