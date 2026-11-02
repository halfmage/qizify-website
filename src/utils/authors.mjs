// Single source of truth for the team byline. BlogLayout (byline + JSON-LD
// Organization branch) and scripts/generate-llms-full.mjs (corpus author line)
// both compare against this, so a rename only happens here.
export const TEAM_AUTHOR = 'LearnSlice Team';
export const TEAM_AUTHOR_CORPUS_LABEL = 'LearnSlice Team (LearnSlice UG, Düsseldorf)';

export const isTeamAuthor = (author) => author === TEAM_AUTHOR;
