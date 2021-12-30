export const Component = ({
  $target,
  state = {},
  props,
  init = () => {},
  template = () => "",
}) => {
  const $target = $target;
  let _state = state;
  const _props = props;

  init();
  bindEvent();
  render();

  // 화면을 그려준다.
  const render = () => {
    $target.innerHTML = this.htmlTemplate();
    $target.append(this.domTemplate());
    this.mounted();
  };

  const setState = (newState) => {
    _state = { ...this._state, ...newState };
    this.render();
  };

  return {};
};
