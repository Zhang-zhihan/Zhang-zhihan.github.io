document.addEventListener('DOMContentLoaded', function() {
  // 检查是否已有保存的主题偏好
  const currentTheme = localStorage.getItem('theme') || 'red';
  if (currentTheme === 'green') {
    document.documentElement.classList.add('theme-green');
  }

  // 创建切换按钮
  const header = document.querySelector('.md-header');
  if (header) {
    const switchBtn = document.createElement('div');
    switchBtn.style.cssText = `
      display: flex;
      align-items: center;
      margin-left: 16px;
      cursor: pointer;
      font-size: 0.9rem;
      color: rgba(255,255,255,0.8);
      background: rgba(255,255,255,0.1);
      padding: 4px 12px;
      border-radius: 20px;
      backdrop-filter: blur(4px);
      transition: background 0.3s;
    `;
    switchBtn.innerHTML = `
      <span style="margin-right: 6px;">🎨</span>
      <span id="theme-label">${currentTheme === 'green' ? '绿' : '红'}</span>
    `;
    switchBtn.onmouseover = function() {
      this.style.background = 'rgba(255,255,255,0.2)';
    };
    switchBtn.onmouseout = function() {
      this.style.background = 'rgba(255,255,255,0.1)';
    };
    switchBtn.onclick = function() {
      const isGreen = document.documentElement.classList.toggle('theme-green');
      const label = document.getElementById('theme-label');
      if (isGreen) {
        label.textContent = '绿';
        localStorage.setItem('theme', 'green');
      } else {
        label.textContent = '红';
        localStorage.setItem('theme', 'red');
      }
    };
    // 插入到导航栏右侧（在搜索框旁边）
    const search = document.querySelector('.md-search');
    if (search) {
      search.parentNode.insertBefore(switchBtn, search);
    } else {
      // 如果没有搜索框，放在 header 的末尾
      header.appendChild(switchBtn);
    }
  }
});