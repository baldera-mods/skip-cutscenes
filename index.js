module.exports = function SkipCutscenes(dispatch) {
  dispatch.hook('sPlayMovie', function(event) {
    dispatch.toClient('cEndMovie', Object.assign({ unk: true }, event));
    return false;
  });
};
