module.exports = function SkipCutscenes(dispatch) {
  dispatch.hook('sPlayMovie', (event) => {
    dispatch.toServer('cEndMovie', Object.assign({ unk: true }, event));
    return false;
  });
};
