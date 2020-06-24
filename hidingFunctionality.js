// Array.prototype.isNotEmpty = function () {
//   return this.length > 0;
// };

(() => {
  window.videoContainerSelector = '#container.ytd-player';
  window.videoSkipButtonSelector = '.ytp-ad-skip-button';

  if (!!window.videoContainerSelector) {
    window.videoContainerSelector = document.querySelector(videoContainerSelector);
    window.videoSkipAddButton = videoContainerSelector.querySelector(videoSkipButtonSelector);
  }

  window.videoSkipAddButton && window.videoSkipAddButton.click();

  // !window.modalObserver &&
  //   (() => {
  //     const popupContainer = document.querySelector(popupContainerName);

  //     window.modalObserver = new MutationObserver(mutations => {
  //       const modalExists = [...mutations]
  //         .filter(mutationList =>
  //           [...mutationList.addedNodes]
  //             .filter(
  //               mutation =>
  //                 mutation.nodeName.toLowerCase() === modalContainerName,
  //             )
  //             .isNotEmpty(),
  //         )
  //         .isNotEmpty();

  //       modalExists && clickAcceptButton();
  //     });

  //     window.modalObserver.observe(popupContainer, {
  //       childList: true,
  //       subtree: true,
  //       attributes: false,
  //       characterData: false,
  //     });
  //   })();
})();
