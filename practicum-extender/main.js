// Итоговый вариант, умеющий ставить фокус на редактор кода + нажимать последнюю кнопку в панели (проверка или переход к следующему заданию \ занятию)
document.addEventListener('keydown', function (event) {
  if (event.code === 'Backslash' && (event.ctrlKey || event.metaKey)) {
    if (event.shiftKey) {
      let btnPanel = document.querySelector('.trainer-footer__actions');
      if (!btnPanel) return;
      btnPanel.children[btnPanel.childElementCount - 1].click();
    } else {
      let editor = document.querySelector('.code-editor textarea');
      if (!editor) return;
      editor.focus();
    }
  }
});


// Делаем элементы 'code' - с возможностью быстрого копирования
setInterval(() => {
  [...document.querySelectorAll('code.code-inline')].forEach(v => {
    if (v.style.cursor === 'pointer') return;
    v.style.cursor = 'pointer';
    v.addEventListener('click', (e) => navigator.clipboard.writeText(e.target.innerText));
  });
}, 2000);