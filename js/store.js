/* Progress, scores, and reflections — persisted per browser in localStorage. */

const KEY = "meridian-course-v1";

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
}

function save(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export const store = {
  /** Mark a step of a module complete, e.g. markStep(1, "coach"). */
  markStep(moduleId, stepId) {
    const s = load();
    s.steps = s.steps || {};
    s.steps[`${moduleId}:${stepId}`] = true;
    save(s);
  },

  stepDone(moduleId, stepId) {
    return !!(load().steps || {})[`${moduleId}:${stepId}`];
  },

  /** Count of completed core steps for a module (Switch Chairs excluded — it's optional). */
  moduleProgress(moduleId, stepIds) {
    const steps = load().steps || {};
    return stepIds.filter((id) => steps[`${moduleId}:${id}`]).length;
  },

  /** Persist a simulation scorecard, e.g. saveScore(5, "meeting", {closedLoop: 4, total: 5}). */
  saveScore(moduleId, simId, scorecard) {
    const s = load();
    s.scores = s.scores || {};
    s.scores[`${moduleId}:${simId}`] = scorecard;
    save(s);
  },

  getScore(moduleId, simId) {
    return (load().scores || {})[`${moduleId}:${simId}`] || null;
  },

  /** Persist a debrief reflection / commitment-to-practice. */
  saveReflection(moduleId, promptId, text) {
    const s = load();
    s.reflections = s.reflections || {};
    s.reflections[`${moduleId}:${promptId}`] = { text, savedAt: new Date().toISOString() };
    save(s);
  },

  getReflection(moduleId, promptId) {
    const r = (load().reflections || {})[`${moduleId}:${promptId}`];
    return r ? r.text : "";
  },

  /** MCQ mastery: record an answer for competency tagging / later spaced retrieval. */
  recordAnswer(moduleId, questionId, correct, tags) {
    const s = load();
    s.answers = s.answers || [];
    s.answers.push({ moduleId, questionId, correct, tags, at: new Date().toISOString() });
    save(s);
  },

  resetAll() {
    localStorage.removeItem(KEY);
  },
};
