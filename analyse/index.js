// 1.加载页面同时渲染，默认逃生者页面
renderPage()
// 2.绑定切换导航点击事件
document.querySelector('.nav ul').addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    renderPage(e.target.dataset.id)
    // 切换活动状态
    document.querySelector('.nav li.active').classList.remove('active')
    e.target.classList.add('active')
  }
})

// 渲染页面函数
function renderPage(number) {
  number = number || "0"
  number = parseInt(number)
  console.log(`渲染id：${number}`)

  if (number === 0) {
    // 逃生者页面
    renderSurvivorPage()
  } else if (number === 1) {
    // 杀手页面
    renderKillerPage()
  } else if (number === 2) {
    // 逃生者技能页面
    renderSurivorSkillPage()
  } else if (number === 3) {
    // 杀手技能页面
    renderKillerSkillPage()
  }

}

// 渲染逃生者页面
function renderSurvivorPage() {
  // 迭代数组+拼接数组字符串
  const survivorsPage = survivorsList.map(item => {
    // console.log(item)
    return `
    <div class="survivor-avatar">
      <img src="${item.img_url}" alt="">
      <span>${item.name}</span>
    </div>
    `
  }).join('')
  // 插入html
  document.querySelector('.content').innerHTML = `
  <div class="survivor">
    ${survivorsPage}
  </div>
  `
}

// 渲染杀手页面
function renderKillerPage() {
  // 插入html
  document.querySelector('.content').innerHTML = `
  <div class="killer">
    <div class="left">
      <ul>
        <li>T0<span>真神</span></li>
        <li>T0.5<span>幻神</span></li>
        <li>T1<span>很强</span></li>
        <li>T1.5<span>强</span></li>
        <li>T2<span>较强</span></li>
        <li>T2.5<span>一般</span></li>
        <li>T3<span>较弱</span></li>
        <li>T3.5<span>很弱</span></li>
        <li>T4<span>下水道</span></li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li data-rank="T0"></li>
        <li data-rank="T0.5"></li>
        <li data-rank="T1"></li>
        <li data-rank="T1.5"></li>
        <li data-rank="T2"></li>
        <li data-rank="T2.5"></li>
        <li data-rank="T3"></li>
        <li data-rank="T3.5"></li>
        <li data-rank="T4"></li>
      </ul>
    </div>
  </div>
  `

  const lis = Array.from(document.querySelectorAll('.killer .right ul li'))
  lis.forEach(li => {
    // 迭代数组+拼接数组字符串
    killersList.forEach(item => {
      // console.log(item)
      if (li.dataset.rank === item.rank) {
        console.log(item.rank)
        const div = document.createElement('div')
        // 创建div->添加killer-avatar类名->添加自定义属性name->加入图片头像->追加到rank里面
        div.classList.add('killer-avatar')
        div.dataset.name = item.name
        div.innerHTML = `
        <img src="${item.img_url}" alt="">
        `
        li.appendChild(div)
      }
    })
  })


}

// 渲染逃生者技能页面
function renderSurivorSkillPage() {
  // 迭代数组+拼接数组字符串

  // 插入html
  document.querySelector('.content').innerHTML = `
  2
  `
}

// 渲染杀手技能页面
function renderKillerSkillPage() {
  // 迭代数组+拼接数组字符串

  // 插入html
  document.querySelector('.content').innerHTML = `
  3
  `
}
// 随机数函数
function getRandom(N, M) {
  N = N || 0
  M = M || 0
  return Math.floor(Math.random() * (M - N + 1) + N)
}