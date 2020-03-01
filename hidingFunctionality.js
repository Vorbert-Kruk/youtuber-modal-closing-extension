Array.prototype.isNotEmpty = function() {
  return this.length > 0;
};

(() => {
  const popupContainerName = 'ytd-popup-container';
  const modalContainerName = 'paper-dialog';
  const confirmButtonId = 'confirm-button';

  const clickAcceptButton = () => {
    const confirmButton = document.querySelector(
      `${modalContainerName} #${confirmButtonId}`,
    );
    confirmButton && confirmButton.click();
  };

  !window.modalObserver &&
    (() => {
      const popupContainer = document.querySelector(popupContainerName);

      window.modalObserver = new MutationObserver(mutations => {
        const modalExists = [...mutations]
          .filter(mutationList =>
            [...mutationList.addedNodes]
              .filter(
                mutation =>
                  mutation.nodeName.toLowerCase() === modalContainerName,
              )
              .isNotEmpty(),
          )
          .isNotEmpty();

        modalExists && clickAcceptButton();
      });

      window.modalObserver.observe(popupContainer, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
      });
    })();
})();
