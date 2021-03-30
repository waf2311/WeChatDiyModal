function getContext() {
  let pages = getCurrentPages();
  return pages[pages.length - 1];
}
let DiyModal = function (options) {
  let context = getContext();
  let diymodal = context.selectComponent('#diy-modal');
  diymodal.showModal(options);
};
export default DiyModal;
