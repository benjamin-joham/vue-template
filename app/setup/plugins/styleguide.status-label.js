const availableStatus = {
  0: { text: 'Not ready', modifier: '' },
  1: { text: 'Ready', modifier: 'ready' }
};
const statusTimeouts = {};

/**
 * Appends a status label for the given component name.
 *
 * @param {String} name - The component name
 * @param {Number} statusId - The id of the current status.
 */
function appendStatusLabel(name, statusId) {
  const container = document.getElementById(`${name}-container`);
  const label = document.createElement('label');
  const content = document.createElement('span');
  const existingLabel = container.querySelector('.s-status');
  const statusClassBlock = 's-status';
  const status = availableStatus[statusId] || availableStatus[0];

  if (container) {
    content.innerText = status.text;
    content.classList.add(`${statusClassBlock}__inner`);

    content.setAttribute(
      'title',
      'This label shows component’s current working status. For a full list see “Getting Started” view.'
    );

    label.classList.add(statusClassBlock);

    if (statusId) {
      label.classList.add(`${statusClassBlock}--${status.modifier}`);
    }

    label.appendChild(content);

    if (existingLabel) {
      existingLabel.replaceWith(label);
    } else {
      container.insertBefore(label, container.childNodes[1]);
    }
  }
}

export default {
  install(vueInstance) {
    vueInstance.mixin({
      mounted() {
        const { name, status } = this.$options;

        if (name) {
          clearTimeout(statusTimeouts[name]);

          statusTimeouts[name] = setTimeout(() => {
            appendStatusLabel(name, status);
          }, 100);
        }
      }
    });
  }
}
