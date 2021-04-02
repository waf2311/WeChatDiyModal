function getContext() {
  let pages = getCurrentPages();
  return pages[pages.length - 1];
}
let diyModal = {};

diyModal.show = function (options) {
  let context = getContext();
  let component = context.selectComponent('.diy-modal');
  component.showModal(options);
};

diyModal.hide = function () {
  let context = getContext();
  let component = context.selectComponent('.diy-modal');
  component.hideModal();
};

export default diyModal;
