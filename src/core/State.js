export const State = ({ value }) => {
  let _value = value;
  const _components = [];

  const _notify = () => {
    _components.forEach((ele) => ele.render());
  };

  const setValue = (value) => {
    _value = value;
    _notify();
  };

  return {
    _notify,
    getValue: () => _value,
    setValue,
  };
};
