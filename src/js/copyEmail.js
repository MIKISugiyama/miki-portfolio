export function copyEmail() {
  // メールアドレスのアカウント名とドメインを分ける（ボット対策）
  const user = 'howdy8355';
  const domain = 'gmail.com';
  const fullEmail = `${user}@${domain}`;

  const copyBtn = document.getElementById('email-text');

  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    try {
      // クリップボードに本物のメールアドレスをコピー
      await navigator.clipboard.writeText(fullEmail);

      window.alert('メールアドレスをコピーしました。');
      copyBtn.disabled = true; // 連打防止

    } catch (err) {
      window.alert('コピーに失敗しました。[at]を\u0040に直してコピー＆ペーストをお願いします。');
    }
  });
}